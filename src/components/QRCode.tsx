import React from 'react';
import upiQR from '@/assets/upi.jpg';

interface QRCodeProps {
  upiId: string;
  amount: number;
  className?: string;
}

export const QRCode: React.FC<QRCodeProps> = ({ upiId, amount, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="w-48 h-48 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center relative overflow-hidden">
       
        <img 
          src={upiQR}
          alt="UPI QR Code"
          className="w-full h-full object-contain"
        />
      </div>
      
      
      <div className="text-center mt-2">
        <p className="text-xs text-muted-foreground">Made by Kashchit</p>
      </div>
    </div>
  );
};
