import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, phone, location, message } = req.body || {};
  if (!name || !phone) return res.status(400).json({ error: "Missing fields" });

  const port = Number(process.env.SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.titan.email", // confirm in GoDaddy dashboard
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: `"Arihant Doors Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `New enquiry from ${String(name).replace(/[\r\n]+/g, " ")}`,
      text: `Name: ${name}\nPhone: ${phone}\nLocation / builder: ${location || "-"}\n\nMessage:\n${message || "-"}`,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Mail error:", err.message);
    return res.status(500).json({ error: "Could not send" });
  }
}