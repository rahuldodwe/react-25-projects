import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {

    const [qrCode, setQrCode] = useState('')

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input type="text" name="qr-code" placeholder="Enter your value here" />
        <button>Generate</button>
      </div>
      <QRCode id="qr-code-value" value="" />
    </div>
  );
}
