import { NextResponse } from "next/server";
import { Resend } from "resend";

import { siteConfig } from "@/lib/site-config";
import type { ContactFormData } from "@/types";

export async function POST(request: Request) {
  const data = (await request.json()) as Partial<ContactFormData>;

  if (!data.companyName || !data.contactPerson || !data.phone || !data.email) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // No email provider configured yet: log so the submission isn't silently
    // lost during local development. Set RESEND_API_KEY (and optionally
    // RESEND_FROM_EMAIL once a sending domain is verified) to enable real
    // delivery to siteConfig.email.
    console.log("[CRES contact submission]", data);
    return NextResponse.json({ success: true });
  }

  try {
    const resend = new Resend(apiKey);
    const fromAddress = process.env.RESEND_FROM_EMAIL ?? "CRES Website <onboarding@resend.dev>";
    const role = data.inquiryType === "buyer" ? "Buyer" : "Supplier";

    await resend.emails.send({
      from: fromAddress,
      to: siteConfig.email,
      replyTo: data.email,
      subject: `New ${role.toLowerCase()} enquiry from ${data.companyName}`,
      text: [
        `Enquiry type: ${role}`,
        `Company: ${data.companyName}`,
        `Contact person: ${data.contactPerson}`,
        `Phone: ${data.phone}`,
        `Email: ${data.email}`,
        `City: ${data.city ?? "-"}`,
        `Estimated monthly ${role === "Buyer" ? "requirement" : "UCO available"}: ${data.monthlyUco ?? "-"}`,
        "",
        "Message:",
        data.message ?? "-",
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[CRES contact submission] Failed to send email", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 502 }
    );
  }
}
