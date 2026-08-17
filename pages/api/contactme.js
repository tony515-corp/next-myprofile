import nodemailer from "nodemailer";

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

function isFilledString(value, maxLength) {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ status: false, error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body || {};

  if (
    !isFilledString(name, 200) ||
    !isFilledString(email, 320) ||
    !isFilledString(subject, 300) ||
    !isFilledString(message, 5000)
  ) {
    return res.status(400).json({ status: false, error: "Invalid input" });
  }

  if (!EMAIL_PATTERN.test(email.trim())) {
    return res.status(400).json({ status: false, error: "Invalid email" });
  }

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO || user;

  if (!user || !pass || !to) {
    console.error("SMTP is not configured. Copy .env.example to .env.local.");
    return res.status(503).json({
      status: false,
      error: "Mail is not configured on this server",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Website contact" <${user}>`,
      to,
      replyTo: `${name.trim()} <${email.trim()}>`,
      subject: subject.trim(),
      text: `From: ${name.trim()} <${email.trim()}>\n\n${message.trim()}`,
    });

    return res.status(200).json({ status: true });
  } catch (error) {
    console.error("Failed to send contact email");
    return res.status(500).json({ status: false, error: "Failed to send message" });
  }
}
