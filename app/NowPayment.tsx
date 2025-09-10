import { useState } from "react";
import { Button } from "@/components/ui/button";

function NowPaymentsButton({
  price,
  currency = "EUR",
}: {
  price: number;
  currency?: string;
}) {
  const [loading, setLoading] = useState(false);

  const handleNowPayments = async () => {
    setLoading(true);
    const res = await fetch("/api/create-nowpayments-invoice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price_amount: price, price_currency: currency }),
    });
    const data = await res.json();
    setLoading(false);
    if (data.url) {
      window.open(data.url, "_blank");
    } else {
      alert("Failed to create crypto invoice.");
    }
  };

  return (
    <div className="flex px-10 flex-col items-center justify-center">
      <Button
        className=" w-full mt-2 bg-blue-600 hover:bg-blue-700 mb-6"
        onClick={handleNowPayments}
        disabled={loading}
      >
        {loading ? "Processing..." : "Pay with Crypto"}
      </Button>
    </div>
  );
}

export default NowPaymentsButton;
