import { NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({
  region: process.env.CUSTOM_AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.CUSTOM_AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.CUSTOM_AWS_SECRET_ACCESS_KEY || "",
    sessionToken: undefined,
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const command = new SendEmailCommand({
      Destination: {
        ToAddresses: ["chainguardintelligence@gmail.com"],
      },
      Message: {
        Body: {
          Text: { Data: `From: ${name} (${email})\n\nMessage:\n${message}` },
        },
        Subject: { Data: `New Contact Form Submission from ${name}` },
      },
      Source: "chainguardintelligence@gmail.com",
    });

    await ses.send(command);
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("SES Error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Failed to send message";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
