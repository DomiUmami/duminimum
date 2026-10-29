
import nodemailer from "nodemailer";

const allowedProjectTypes = [
  "New Website",
  "Website Redesign",
  "Website Development",
  "Maintenance and Support",
  "Other",
];

const allowedBudgets = [
  "",
  "Under $250",
  "$250–$500",
  "$500–$1,000",
  "$1,000+",
  "Not sure yet",
];

const allowedTimelines = [
  "",
  "ASAP",
  "Within 2–4 weeks",
  "Within 1–3 months",
  "Flexible",
];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      error: "Method not allowed.",
    });
  }

  try {
    const {
      name,
      email,
      projectType,
      budget = "",
      timeline = "",
      details,
    } = req.body || {};

    const cleanName = typeof name === "string" ? name.trim() : "";
    const cleanEmail = typeof email === "string" ? email.trim() : "";
    const cleanDetails =
      typeof details === "string" ? details.trim() : "";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!cleanName || !cleanEmail || !projectType || !cleanDetails) {
      return res.status(400).json({
        error: "Please complete all required fields.",
      });
    }

    if (cleanName.length > 100 || cleanEmail.length > 254) {
      return res.status(400).json({
        error: "Name or email address is too long.",
      });
    }

    if (!emailPattern.test(cleanEmail)) {
      return res.status(400).json({
        error: "Please enter a valid email address.",
      });
    }

    if (cleanDetails.length > 2000) {
      return res.status(400).json({
        error: "Project details must be 2,000 characters or fewer.",
      });
    }

    if (!allowedProjectTypes.includes(projectType)) {
      return res.status(400).json({
        error: "Please select a valid project type.",
      });
    }

    if (!allowedBudgets.includes(budget)) {
      return res.status(400).json({
        error: "Please select a valid budget.",
      });
    }

    if (!allowedTimelines.includes(timeline)) {
      return res.status(400).json({
        error: "Please select a valid timeline.",
      });
    }

    if (
      !process.env.GMAIL_USER ||
      !process.env.GMAIL_APP_PASSWORD ||
      !process.env.EMAIL
    ) {
      console.error("Missing email environment variables.");

      return res.status(500).json({
        error: "Email service is not configured. Please try again later.",
      });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"DUMinimum Project Inquiry" <${process.env.GMAIL_USER}>`,
      to: process.env.EMAIL,
      replyTo: cleanEmail,
      subject: `DUMinimum Project Inquiry - ${cleanName}`,
      text: `
New DUMinimum project inquiry

Name:
${cleanName}

Email:
${cleanEmail}

Project Type:
${projectType}

Estimated Budget:
${budget || "Not specified"}

Desired Timeline:
${timeline || "Not specified"}

Project Details:
${cleanDetails}
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact form email error:", error);

    return res.status(500).json({
      error: "Unable to send your inquiry. Please try again later.",
    });
  }
}
