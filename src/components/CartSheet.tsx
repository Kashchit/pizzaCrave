import React from 'react';
import { Minus, Plus, Trash2, ShoppingBag, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useCart } from '@/contexts/CartContext';
import { QRCode } from './QRCode';

interface CartSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartSheet: React.FC<CartSheetProps> = ({ isOpen, onClose }) => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();
  const [showQRCode, setShowQRCode] = React.useState(false);

  const handleShowQRCode = () => {
    if (items.length === 0) return;
    setShowQRCode(true);
  };

  const getOrderDetails = () => {
    return items.map(item => `${item.pizza.name}${item.size ? ` (${item.size})` : ''} x${item.quantity}`).join(', ');
  };

  if (items.length === 0) {
    return (
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="w-full sm:max-w-lg">
          <SheetHeader>
            <SheetTitle>Your Cart</SheetTitle>
            <SheetDescription>Your delicious items await!</SheetDescription>
          </SheetHeader>
          
          <div className="flex flex-col items-center justify-center h-96 text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium text-muted-foreground mb-2">Your cart is empty</h3>
            <p className="text-sm text-muted-foreground mb-4">Add some delicious pizzas to get started!</p>
            <Button onClick={onClose} className="pizza-button">
              Browse Menu
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle>Your Cart ({getTotalItems()} items)</SheetTitle>
          <SheetDescription>Review your order before checkout</SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-auto py-4">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 p-4 pizza-card rounded-lg">
                <img 
                  src={item.pizza.image} 
                  alt={item.pizza.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm truncate">{item.pizza.name}</h4>
                  {item.size && (
                    <p className="text-xs text-muted-foreground">Size: {item.size}</p>
                  )}
                  <p className="text-sm font-bold text-primary">
                    ₹{((item.sizePrice || item.pizza.price) * item.quantity).toFixed(0)}
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="h-8 w-8 p-0"
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  
                  <span className="w-8 text-center text-sm font-medium">
                    {item.quantity}
                  </span>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="h-8 w-8 p-0"
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                  
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                    className="h-8 w-8 p-0 ml-2"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total and Checkout */}
        <div className="border-t pt-4 space-y-4">
          <div className="flex justify-between items-center text-lg font-bold">
            <span>Total:</span>
            <span className="text-primary">₹{getTotalPrice().toFixed(0)}</span>
          </div>
          
          <Button 
            onClick={handleShowQRCode} 
            className="w-full pizza-button text-white"
            size="lg"
          >
            <QrCode className="mr-2 h-5 w-5" />
            Show QR Code
          </Button>
        </div>

        {/* QR Code Section */}
        {showQRCode && (
          <div className="border-t pt-4 space-y-4">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground">
                <QrCode className="h-4 w-4" />
                Scan QR Code to Pay ₹{getTotalPrice().toFixed(0)}
              </div>
              
              <div className="flex justify-center">
                <QRCode upiId="kashchit10@paytm" amount={getTotalPrice()} />
              </div>
              
              <div className="text-xs text-muted-foreground space-y-2">
                <p>Open any UPI app and scan this QR code</p>
                <p>UPI ID: <code className="bg-muted px-2 py-1 rounded">kashchit10@paytm</code></p>
                <p>Amount: <code className="bg-muted px-2 py-1 rounded">₹{getTotalPrice().toFixed(0)}</code></p>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};