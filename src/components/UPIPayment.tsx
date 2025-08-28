import React from 'react';
import { Copy, Smartphone, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';

interface UPIPaymentProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  orderDetails: string;
}

export const UPIPayment: React.FC<UPIPaymentProps> = ({ isOpen, onClose, amount, orderDetails }) => {
  const upiId = "kashchit10@paytm";
  
  const copyUPIId = () => {
    navigator.clipboard.writeText(upiId);
    toast({
      title: "UPI ID Copied!",
      description: "UPI ID has been copied to clipboard",
    });
  };

  const copyAmount = () => {
    navigator.clipboard.writeText(amount.toString());
    toast({
      title: "Amount Copied!",
      description: "Amount has been copied to clipboard",
    });
  };

  const openUPIApp = () => {
    const upiLink = `upi://pay?pa=${upiId}&pn=PizzaCrave&am=${amount}&cu=INR&tn=Pizza Order Payment - ${orderDetails}`;
    
    // Try to open UPI app
    window.location.href = upiLink;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Smartphone className="h-5 w-5 text-primary" />
            Pay with UPI
          </DialogTitle>
          <DialogDescription>
            Complete your pizza order payment using any UPI app
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Amount Display */}
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">₹{amount}</div>
            <div className="text-sm text-muted-foreground">Total Amount</div>
          </div>

          {/* Payment Options */}
          <div className="space-y-4">
            {/* Quick UPI Payment */}
            <Button
              onClick={openUPIApp}
              className="w-full pizza-button text-white h-12"
              size="lg"
            >
              <Smartphone className="mr-2 h-5 w-5" />
              Pay with UPI App
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or pay manually
                </span>
              </div>
            </div>

            {/* Manual Payment Details */}
            <div className="pizza-card rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">UPI ID:</span>
                <div className="flex items-center gap-2">
                  <code className="text-sm bg-muted px-2 py-1 rounded">{upiId}</code>
                  <Button variant="outline" size="sm" onClick={copyUPIId}>
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Amount:</span>
                <div className="flex items-center gap-2">
                  <code className="text-sm bg-muted px-2 py-1 rounded">₹{amount}</code>
                  <Button variant="outline" size="sm" onClick={copyAmount}>
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <div className="pt-2 border-t">
                <p className="text-xs text-muted-foreground">
                  <strong>Payment Note:</strong> Pizza Order - {orderDetails}
                </p>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-muted/50 rounded-lg p-4">
              <h4 className="font-medium text-sm mb-2">Payment Instructions:</h4>
              <ol className="text-xs text-muted-foreground space-y-1">
                <li>1. Open any UPI app (PhonePe, Paytm, GPay, etc.)</li>
                <li>2. Select "Pay to UPI ID" or "Send Money"</li>
                <li>3. Enter UPI ID: {upiId}</li>
                <li>4. Enter amount: ₹{amount}</li>
                <li>5. Add note: "Pizza Order"</li>
                <li>6. Complete the payment</li>
                <li>7. Contact us with transaction ID</li>
              </ol>
            </div>

            {/* Contact Info */}
            <div className="text-center text-sm text-muted-foreground">
              After payment, WhatsApp us the transaction details at <br />
              <strong>+91-XXXXX-XXXXX</strong>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};