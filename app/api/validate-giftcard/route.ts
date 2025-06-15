import { NextRequest, NextResponse } from "next/server";

// Example: Replace with your real database logic
const VALID_GIFTCARDS = [
  { code: "GIFT123", balance: 100 },
  { code: "SUMMER2024", balance: 50 },
];

export async function POST(req: NextRequest) {
  const { code } = await req.json();

  if (!code) {
    return NextResponse.json(
      { valid: false, message: "No code provided." },
      { status: 400 }
    );
  }

  const giftcard = VALID_GIFTCARDS.find(
    (g) => g.code.toUpperCase() === code.trim().toUpperCase()
  );

  if (giftcard) {
    return NextResponse.json({ valid: true, balance: giftcard.balance });
  } else {
    return NextResponse.json(
      { valid: false, message: "Invalid gift card code." },
      { status: 404 }
    );
  }
}
