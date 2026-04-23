import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name = "",
      phone = "",
      email = "",
      address = "",
      city = "",
      propertyType = "",
      timing = "",
      services = [],
      message = "",
      details = "",
      formType = "Contact Form",
    } = body ?? {};

    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;

    // If no creds in env, still return OK so preview works without email
    if (!user || !pass) {
      console.log("[Budget Pro Painting] Form submission (no email creds):", body);
      return NextResponse.json({ ok: true, dev: true });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    const servicesList = Array.isArray(services) ? services.join(", ") : "";
    const messageBody = message || details || "";

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <title>New ${formType} — Budget Pro Painting</title>
      </head>
      <body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,sans-serif;background:#F2EDE3;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#F2EDE3;padding:32px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="640" cellspacing="0" cellpadding="0" border="0" style="max-width:640px;background:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 12px 32px rgba(15,23,42,0.08);">
                <!-- Header -->
                <tr>
                  <td style="background:linear-gradient(135deg,#1A37A8 0%,#0F2575 100%);padding:40px 40px 36px;">
                    <div style="font-size:11px;font-weight:700;letter-spacing:0.2em;color:#FF4B57;margin-bottom:12px;">VILLA'S LANDSCAPE</div>
                    <h1 style="margin:0;color:#FFFFFF;font-size:28px;font-weight:800;letter-spacing:-0.02em;">New ${formType}</h1>
                    <p style="margin:8px 0 0;color:#B8A88F;font-size:14px;">from budgetpropainting.com</p>
                  </td>
                </tr>
                <!-- Body -->
                <tr>
                  <td style="padding:40px;">
                    <h2 style="margin:0 0 24px;color:#0A0F1E;font-size:16px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;">Contact Details</h2>
                    <table width="100%" cellspacing="0" cellpadding="0" border="0" style="font-size:15px;color:#0A0F1E;">
                      ${row("Name", name)}
                      ${row("Phone", phone, `tel:${phone}`)}
                      ${row("Email", email, `mailto:${email}`)}
                      ${address ? row("Address", address) : ""}
                      ${city ? row("City", city) : ""}
                      ${propertyType ? row("Property Type", propertyType) : ""}
                      ${timing ? row("Timing", timing) : ""}
                      ${servicesList ? row("Services", servicesList) : ""}
                    </table>

                    ${
                      messageBody
                        ? `
                    <h2 style="margin:32px 0 16px;color:#0A0F1E;font-size:16px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;">Message</h2>
                    <div style="padding:20px;background:#F2EDE3;border-left:4px solid #E30613;border-radius:8px;font-size:15px;line-height:1.65;color:#3A4158;white-space:pre-wrap;">${escapeHtml(messageBody)}</div>
                    `
                        : ""
                    }

                    <table width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top:32px;">
                      <tr>
                        <td align="center" style="padding:24px;background:linear-gradient(135deg,#FF4B57 0%,#E30613 100%);border-radius:12px;">
                          <div style="font-size:13px;color:#0F2575;font-weight:700;letter-spacing:0.1em;margin-bottom:4px;">RESPOND QUICKLY</div>
                          <div style="font-size:14px;color:#0F2575;">Usually back within 24 hours keeps leads happy</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Footer -->
                <tr>
                  <td style="background:#0A0F1E;padding:28px 40px;color:#7A8299;font-size:12px;text-align:center;">
                    Budget Pro Painting & Remodeling LLC · Altoona, IA · (515) 505-6429
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const textLines: string[] = [
      `New ${formType} — Budget Pro Painting`,
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
    ];
    if (address) textLines.push(`Address: ${address}`);
    if (city) textLines.push(`City: ${city}`);
    if (propertyType) textLines.push(`Property Type: ${propertyType}`);
    if (timing) textLines.push(`Timing: ${timing}`);
    if (servicesList) textLines.push(`Services: ${servicesList}`);
    if (messageBody) {
      textLines.push("", "Message:", messageBody);
    }

    await transporter.sendMail({
      from: `"Budget Pro Painting Website" <${user}>`,
      to: "bpprllc@gmail.com",
      replyTo: email ? `${name} <${email}>` : undefined,
      subject: `New ${formType}: ${name || "Website Lead"}${city ? " — " + city : ""}`,
      text: textLines.join("\n"),
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact API] error:", err);
    return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 500 });
  }
}

function row(label: string, value: string, href?: string) {
  const valCell = href
    ? `<a href="${href}" style="color:#1A37A8;text-decoration:none;font-weight:600;">${escapeHtml(value)}</a>`
    : `<span style="color:#0A0F1E;font-weight:500;">${escapeHtml(value)}</span>`;
  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #D6D0C0;width:140px;vertical-align:top;">
        <span style="font-size:11px;font-weight:700;letter-spacing:0.15em;color:#7A8299;text-transform:uppercase;">${label}</span>
      </td>
      <td style="padding:12px 0;border-bottom:1px solid #D6D0C0;">${valCell}</td>
    </tr>
  `;
}

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
