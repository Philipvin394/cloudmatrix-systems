import { NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({ region: "us-east-1" });

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const command = new SendEmailCommand({
      Destination: { ToAddresses: ["Chainguardintelligence@gmail.com"] },
      Message: {
        Body: {
          Text: { Data: `From: ${name} (${email})\n\nMessage:\n${message}` },
        },
        Subject: { Data: `New Contact Form Submission from ${name}` },
      },
      Source: "Chainguardintelligence@gmail.com",
    });

    await ses.send(command);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
