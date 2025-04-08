import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage as dbStorage } from "./storage";
import { z } from "zod";
import multer from 'multer';
import fs from 'fs';
import path from 'path';

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});

// Define the types for multer file requests
interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

// Set up storage for uploaded files
const uploadStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const category = (req.body?.category as string) || 'uploads';
    const dir = path.join(process.cwd(), 'client', 'public', 'images', category);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    // Create unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + extension);
  }
});

// Create the multer instance
const upload = multer({ 
  storage: uploadStorage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB file size limit
  },
  fileFilter: (req, file, cb) => {
    // Accept only images
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only image files are allowed'));
    }
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Here we would typically save to database or send an email
      // For now, we'll just log and send a success response
      console.log("Contact form submission:", validatedData);
      
      // Simulate a small delay for API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      res.status(200).json({ 
        success: true, 
        message: "Form submitted successfully" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Return validation errors
        return res.status(400).json({ 
          success: false, 
          errors: error.errors 
        });
      }
      
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while processing your request" 
      });
    }
  });
  
  // File upload route
  app.post('/api/upload', upload.single('file'), (req: Request, res: Response) => {
    try {
      // Multer adds the file property to the request object
      const multerFile = (req as any).file;
      
      if (!multerFile) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
      
      // Return the file information
      res.json({
        success: true,
        file: {
          filename: multerFile.filename,
          path: `/images/${(req.body.category as string) || 'uploads'}/${multerFile.filename}`
        }
      });
    } catch (error) {
      console.error('Upload error:', error);
      res.status(500).json({ error: 'Failed to upload file' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
