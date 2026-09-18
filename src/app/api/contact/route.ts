import { NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Read variables inside the handler
    const accessKeyId =
      process.env.CUSTOM_AWS_ACCESS_KEY_ID ||
      process.env.AWS_ACCESS_KEY_ID ||
      "";
    const secretAccessKey =
      process.env.CUSTOM_AWS_SECRET_ACCESS_KEY ||
      process.env.AWS_SECRET_ACCESS_KEY ||
      "";
    const region =
      process.env.CUSTOM_AWS_REGION || process.env.AWS_REGION || "us-east-1";

    // Debug check: ensures runtime actually sees credentials
    if (!accessKeyId || !secretAccessKey) {
      return NextResponse.json(
        {
          error:
            "Server Configuration Error: Missing AWS IAM credentials in environment.",
        },
        { status: 500 },
      );
    }

    // Instantiate client inside request scope without inherited session token
    const ses = new SESClient({
      region,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });

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
