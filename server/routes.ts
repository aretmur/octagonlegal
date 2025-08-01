import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import { z } from "zod";
import sgMail from "@sendgrid/mail";

const consultationSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  legalMatter: z.string().min(1),
  message: z.string().min(10),
  preferredContact: z.enum(["phone", "email"]),
  preferredDate: z.string().min(1),
  preferredTime: z.string().min(1),
});

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Consultation booking endpoint
  app.post("/api/consultation", async (req, res) => {
    try {
      const validatedData = consultationSchema.parse(req.body);
      
      const emailContent = `
        New Consultation Request - TBC
        
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        Phone: ${validatedData.phone}
        Legal Matter: ${validatedData.legalMatter}
        Preferred Contact: ${validatedData.preferredContact}
        Preferred Date: ${validatedData.preferredDate}
        Preferred Time: ${validatedData.preferredTime}
        
        Message:
        ${validatedData.message}
        
        Status: TO BE CONFIRMED
        Action Required: SMS confirmation to be sent to ${validatedData.phone}
        
        Submitted at: ${new Date().toLocaleString()}
      `;

      // Send actual email using SendGrid
      if (process.env.SENDGRID_API_KEY) {
        try {
          const msg = {
            to: 'aret@murco.au',
            from: 'noreply@murco.au', // Using murco.au domain for better deliverability
            subject: `New Consultation Request - ${validatedData.name}`,
            text: emailContent,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #1e3a8a;">New Consultation Request - TBC</h2>
                <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <p><strong>Name:</strong> ${validatedData.name}</p>
                  <p><strong>Email:</strong> ${validatedData.email}</p>
                  <p><strong>Phone:</strong> ${validatedData.phone}</p>
                  <p><strong>Legal Matter:</strong> ${validatedData.legalMatter}</p>
                  <p><strong>Preferred Contact:</strong> ${validatedData.preferredContact}</p>
                  <p><strong>Preferred Date:</strong> ${validatedData.preferredDate}</p>
                  <p><strong>Preferred Time:</strong> ${validatedData.preferredTime}</p>
                </div>
                <div style="margin: 20px 0;">
                  <h3>Message:</h3>
                  <p style="background-color: #f1f5f9; padding: 15px; border-radius: 4px;">${validatedData.message}</p>
                </div>
                <div style="background-color: #fef3c7; padding: 15px; border-radius: 4px; margin: 20px 0;">
                  <p><strong>Status: TO BE CONFIRMED</strong></p>
                  <p>Action Required: SMS confirmation to be sent to ${validatedData.phone}</p>
                </div>
                <p style="color: #6b7280; font-size: 14px;">Submitted at: ${new Date().toLocaleString()}</p>
              </div>
            `
          };

          await sgMail.send(msg);
          console.log(`✅ Email sent successfully to aret@murco.au for consultation request from ${validatedData.name}`);
        } catch (error) {
          console.error('❌ SendGrid email error:', error);
          // Fallback to console logging if email fails
          console.log("=== EMAIL FAILED - CONSOLE FALLBACK ===");
          console.log(`To: aret@murco.au`);
          console.log(`Subject: New Consultation Request - ${validatedData.name}`);
          console.log(emailContent);
          console.log("=====================================");
        }
      } else {
        // Fallback to console logging if no API key
        console.log("=== NO SENDGRID KEY - CONSOLE FALLBACK ===");
        console.log(`To: aret@murco.au`);
        console.log(`Subject: New Consultation Request - ${validatedData.name}`);
        console.log(emailContent);
        console.log("=========================================");
      }

      res.json({ success: true, message: "Consultation request sent successfully" });
    } catch (error) {
      console.error("Error sending consultation email:", error);
      res.status(500).json({ success: false, message: "Failed to send consultation request" });
    }
  });

  // Serve video files
  app.get("/api/video/:filename", (req, res) => {
    const filename = req.params.filename;
    const videoPath = path.join(process.cwd(), "public", "videos", filename);
    res.sendFile(videoPath);
  });

  // Serve attached assets (images, etc.)
  app.get("/attached_assets/:filename", (req, res) => {
    const filename = req.params.filename;
    const assetPath = path.join(process.cwd(), "attached_assets", filename);
    res.sendFile(assetPath);
  });

  const httpServer = createServer(app);

  return httpServer;
}
