import { useState } from "react";

function IbanPaymentInfo() {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);

  const iban = "DE89 3704 0044 0532 0130 00";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(iban);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="mt-4">
      <button
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        onClick={() => setShow(!show)}
        type="button"
      >
        {show ? "Hide IBAN Details" : "Pay via IBAN (Bank Transfer)"}
      </button>
      {show && (
        <div className="mt-3 p-4 border rounded bg-gray-50 text-sm">
          <div>
            <strong>Bank Name:</strong> Your Bank Name
          </div>
          {/* <div>
            <strong>IBAN:</strong> DE89 3704 0044 0532 0130 00
          </div> */}
          <div className="flex items-center gap-2">
            <strong>IBAN:</strong>
            <span>{iban}</span>
            <button
              onClick={handleCopy}
              type="button"
              className="ml-1 p-1 rounded hover:bg-gray-200"
              title="Copy IBAN"
              aria-label="Copy IBAN"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/tabler/icons/icons/copy.svg"
                alt="Copy"
                className="w-4 h-4 inline"
              />
            </button>
            {copied && (
              <span className="text-green-600 text-xs ml-2">Copied!</span>
            )}
          </div>
          <div>
            <strong>BIC/SWIFT:</strong> COBADEFFXXX
          </div>
          <div>
            <strong>Account Holder:</strong> Your Company Name
          </div>
          <div className="mt-2">
            <strong>Reference:</strong> Please use{" "}
            <span className="font-mono bg-gray-200 px-1 rounded">
              BOAT-{/* {boat.id} or booking ref */}
            </span>{" "}
            as payment reference.
          </div>
          <div className="mt-2 text-xs text-gray-500">
            After payment, please send your payment confirmation to{" "}
            <a href="mailto:info@yourdomain.com" className="underline">
              info@yourdomain.com
            </a>
            .
          </div>
        </div>
      )}
    </div>
  );
}
export default IbanPaymentInfo;
