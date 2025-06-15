import { useState } from "react";

function GiftCardPayment() {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [balance, setBalance] = useState<number | null>(null);

  const handleRedeem = async () => {
    setStatus(null);
    setBalance(null);
    const res = await fetch("/api/validate-giftcard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });
    const data = await res.json();
    if (data.valid) {
      setStatus("success");
      setBalance(data.balance);
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="mt-4">
      <label className="block mb-2 font-semibold">Pay with Gift Card</label>
      <div className="flex gap-2">
        <input
          type="text"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            setStatus(null);
            setBalance(null);
          }}
          placeholder="Enter gift card code"
          className="flex-1 px-3 py-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleRedeem}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          type="button"
        >
          Redeem
        </button>
      </div>
      {status === "success" && (
        <div className="text-green-600 mt-2">
          Gift card applied! Balance: €{balance}
        </div>
      )}
      {status === "error" && (
        <div className="text-red-600 mt-2">Invalid gift card code.</div>
      )}
    </div>
  );
}

export default GiftCardPayment;
