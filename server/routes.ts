import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { sendContactEmail } from "./mailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the message
      await storage.createContactMessage(validatedData);
      
      // Send email notification (This would typically call an email service)
      await sendContactEmail(validatedData);
      
      // Return success response
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'An unexpected error occurred' });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
