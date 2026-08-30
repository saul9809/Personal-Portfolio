// app/api/send-whatsapp/route.ts
import { NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioNumber = process.env.TWILIO_WHATSAPP_NUMBER;
    const myWhatsApp = process.env.MY_WHATSAPP_NUMBER;

    if (!accountSid || !authToken || !twilioNumber || !myWhatsApp) {
      throw new Error("Twilio configuration missing");
    }

    const client = twilio(accountSid, authToken);

    const textMessage =
      `🔔 *NUEVO MENSAJE DE CONTACTO*\n\n` +
      `👤 *Nombre:* ${name}\n` +
      `📧 *Email:* ${email}\n` +
      `📝 *Asunto:* ${subject}\n\n` +
      `💬 *Mensaje:*\n${message}\n\n` +
      `📅 *Fecha:* ${new Date().toLocaleString("es-ES")}`;

    // Enviar WhatsApp SILENCIOSAMENTE
    await client.messages.create({
      body: textMessage,
      from: twilioNumber,
      to: myWhatsApp, // tu número de WhatsApp
    });

    return NextResponse.json({
      success: true,
      id: crypto.randomUUID(),
    });
  } catch (error) {
    console.error("Error sending WhatsApp:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
