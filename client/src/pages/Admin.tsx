import { useState, useEffect } from 'react';
import { Camera, UploadCloud, Check, AlertCircle, Copy, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [category, setCategory] = useState('portraits');
  const [lastUploadedFile, setLastUploadedFile] = useState<{
    filename: string;
    path: string;
  } | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add authentication logic here
    setIsAuthenticated(true);
  };

  // Handle the actual file upload to our backend API
  const handleFileUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const fileInput = form.querySelector('input[type="file"]') as HTMLInputElement;
    const file = fileInput.files?.[0];
    
    if (!file) {
      setUploadError('Please select a file first');
      return;
    }
    
    setUploading(true);
    setUploadSuccess(false);
    setUploadError('');
    
    try {
      // Create form data for upload
      const formData = new FormData();
      formData.append('file', file);
      formData.append('category', category);
      
      // Make the API call to our upload endpoint
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
        // Don't set Content-Type header as it's set automatically for FormData
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Upload failed');
      }
      
      console.log('Upload successful:', data);
      setUploadSuccess(true);
      setLastUploadedFile(data.file);
      form.reset();
    } catch (error) {
      console.error('Upload error:', error);
      setUploadError(error instanceof Error ? error.message : 'Failed to upload image. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-black min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-md mx-auto"
          >
            <h1 className="text-4xl font-heading text-white mb-8 tracking-wide text-center">Admin Login</h1>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-zinc-300 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-zinc-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-medium"
              >
                Login
              </Button>
            </form>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-heading text-white mb-8 tracking-wide">Admin Dashboard</h1>
          
          <Tabs defaultValue="upload">
            <TabsList>
              <TabsTrigger value="upload">Upload Photos</TabsTrigger>
              <TabsTrigger value="manage">Manage Content</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upload" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upload New Photo</CardTitle>
                  <CardDescription>
                    Upload photos to use in your portfolio. Photos will be stored in the selected category.
                  </CardDescription>
                </CardHeader>
                
                <form onSubmit={handleFileUpload}>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Category</label>
                      <Select 
                        value={category} 
                        onValueChange={value => setCategory(value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="portraits">Portrait Gallery</SelectItem>
                          <SelectItem value="brands">Brands & Business</SelectItem>
                          <SelectItem value="music">Music</SelectItem>
                          <SelectItem value="dogs">Man's Best Friend</SelectItem>
                          <SelectItem value="sports">Sports</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="mt-4">
                      <label className="block text-sm font-medium mb-1">Photo</label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <UploadCloud className="mx-auto h-12 w-12 text-gray-300" />
                          <div className="flex text-sm text-gray-400">
                            <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/90">
                              <span>Upload a file</span>
                              <Input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                accept="image/*"
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-400">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {uploadSuccess && (
                      <div className="flex items-center text-green-500 mt-2">
                        <Check size={16} className="mr-1" />
                        <span>Photo uploaded successfully!</span>
                      </div>
                    )}
                    
                    {uploadError && (
                      <div className="flex items-center text-red-500 mt-2">
                        <AlertCircle size={16} className="mr-1" />
                        <span>{uploadError}</span>
                      </div>
                    )}
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      type="submit" 
                      className="bg-primary text-black hover:bg-primary/90"
                      disabled={uploading}
                    >
                      {uploading ? 'Uploading...' : 'Upload Photo'}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
              
              {lastUploadedFile && (
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle>Recently Uploaded Image</CardTitle>
                    <CardDescription>
                      Use this code to add the image to your portfolio
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <img 
                        src={lastUploadedFile.path} 
                        alt="Uploaded file preview" 
                        className="max-h-64 mx-auto rounded-md shadow-md"
                      />
                    </div>
                    
                    <div className="bg-zinc-900 p-4 rounded-md relative">
                      <pre className="text-sm text-zinc-300 overflow-x-auto whitespace-pre-wrap">
{`// Add this to client/src/lib/data.ts
{
  id: ${Math.floor(Math.random() * 1000) + 50}, // Choose a unique ID
  title: "Your Title Here",
  subtitle: "Your subtitle here",
  imageUrl: imagePath('${category}', '${lastUploadedFile.filename}'),
  categories: ["${category}"],
  link: "#"
}`}
                      </pre>
                      
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="absolute top-2 right-2 text-zinc-400 hover:text-white"
                              onClick={() => {
                                navigator.clipboard.writeText(`{
  id: ${Math.floor(Math.random() * 1000) + 50},
  title: "Your Title Here",
  subtitle: "Your subtitle here",
  imageUrl: imagePath('${category}', '${lastUploadedFile.filename}'),
  categories: ["${category}"],
  link: "#"
}`);
                                setCopySuccess(true);
                                setTimeout(() => setCopySuccess(false), 2000);
                              }}
                            >
                              {copySuccess ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{copySuccess ? 'Copied!' : 'Copy code'}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    
                    <div className="flex items-center mt-4 gap-2">
                      <p className="text-sm text-zinc-400">
                        After copying this code, add it to the appropriate section in data.ts file.
                      </p>
                      <a 
                        href="https://replit.com/@davidsonm/davidsonmediaco?path=client/src/lib/data.ts" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-primary hover:text-primary/90 text-sm"
                      >
                        Open file <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              <div className="mt-8">
                <h2 className="text-xl font-medium mb-4">Manual Upload Instructions</h2>
                <div className="bg-gray-800 p-4 rounded-md">
                  <p className="mb-2">Alternatively, you can upload files directly:</p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Click on the file navigator in Replit (file icon in left sidebar)</li>
                    <li>Navigate to <code>client/public/images/{category}</code></li>
                    <li>Right-click and select "Upload file" or drag and drop your images</li>
                    <li>Then update the <code>data.ts</code> file to reference your new images</li>
                  </ol>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="manage">
              <Card>
                <CardHeader>
                  <CardTitle>Manage Content</CardTitle>
                  <CardDescription>
                    Edit website content and organization
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This feature is coming soon. For now, edit the data.ts file to manage content.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}