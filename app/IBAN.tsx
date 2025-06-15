import { useState } from "react";

function IbanPaymentInfo() {
  const [show, setShow] = useState(false);

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
          <div>
            <strong>IBAN:</strong> DE89 3704 0044 0532 0130 00
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
