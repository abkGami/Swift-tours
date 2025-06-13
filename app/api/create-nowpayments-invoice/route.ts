import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { price_amount, price_currency } = await req.json();

  const apiKey = process.env.NOWPAYMENTS_API_KEY; // Set this in your .env.local

  const res = await fetch("https://api.nowpayments.io/v1/invoice", {
    method: "POST",
    headers: {
      "x-api-key": apiKey!,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      price_amount,
      price_currency,
      order_description: "Boat booking payment",
      success_url: "https://yourdomain.com/success", // Change to your success page
      cancel_url: "https://yourdomain.com/cancel", // Change to your cancel page
    }),
  });

  const data = await res.json();

  if (data && data.invoice_url) {
    return NextResponse.json({ url: data.invoice_url });
  } else {
    return NextResponse.json(
      { error: "Failed to create invoice" },
      { status: 500 }
    );
  }
}
