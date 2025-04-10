import { MailService } from '@sendgrid/mail';
import { z } from 'zod';

// Initialize SendGrid with API key
const mailService = new MailService();

if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  console.warn('SENDGRID_API_KEY is not set. Email functionality will not work.');
}

// Define the shape of the email data
export const emailSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});

export type EmailData = z.infer<typeof emailSchema>;

// Send email function
export async function sendContactEmail(data: EmailData): Promise<boolean> {
  try {
    if (!process.env.SENDGRID_API_KEY) {
      throw new Error('SendGrid API key is not set');
    }

    // Format the message
    const emailContent = `
Name: ${data.name}
Email: ${data.email}

Message:
${data.message}
    `;

    // Send email through SendGrid
    const msg = {
      to: 'davidsonmediaco@gmail.com', // Destination email
      from: 'noreply@davidsonmediaco.com', // Verified sender email
      subject: `New Contact Form Submission from ${data.name}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #D4AF37;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <h3 style="margin-top: 20px;">Message:</h3>
          <p style="white-space: pre-line;">${data.message}</p>
        </div>
      `
    };

    await mailService.send(msg);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}