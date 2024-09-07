import React, { useState } from 'react'
import QRCode from  'react-qr-code';
import './QRGenerator.css';


function QRGenerator(){
  
const [text ,setText]=useState("");
const [qrCodeValue, setQrCodeValue] = useState('');

function handleInput(event){
  setText(event.target.value);
}

function handleQRButton(){
  if (text.trim() === "") {
    alert("Please enter some text or URL to generate a QR code.");
    return;
  }
  setQrCodeValue(text);
}

  return (
  <div className="qrGenerator">
      <h1>QR Code Generator</h1>
      <input type='text' placeholder='Enter Text or Url' value={text} onChange={handleInput}/>
      <button className='qrbutton' onClick={handleQRButton}>Generate QR Code</button>
      {qrCodeValue && (
      <div className="qrcode">
        <QRCode value={qrCodeValue}/>
      </div>
       )}
  </div>
  );
}


export default QRGenerator