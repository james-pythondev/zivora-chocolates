import React, { createContext, useContext, useState, useEffect } from 'react';
import type { CartItem, Product, ProductSizeOption, CustomerDetails } from '../types';
import { BUSINESS_CONFIG } from '../data/products';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, sizeOption: ProductSizeOption, quantity?: number) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalItems: number;
  subtotal: number;
  deliveryFee: number;
  isFreeDelivery: boolean;
  amountNeededForFreeDelivery: number;
  totalAmount: number;
  toast: string | null;
  customerDetails: CustomerDetails;
  setCustomerDetails: React.Dispatch<React.SetStateAction<CustomerDetails>>;
  sendOrderViaWhatsApp: () => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'zivora_cart_items_v1';
const CUSTOMER_STORAGE_KEY = 'zivora_customer_details_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>(() => {
    try {
      const saved = localStorage.getItem(CUSTOMER_STORAGE_KEY);
      return saved
        ? JSON.parse(saved)
        : { name: '', phone: '', address: '', city: '', pincode: '', notes: '' };
    } catch {
      return { name: '', phone: '', address: '', city: '', pincode: '', notes: '' };
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem(CUSTOMER_STORAGE_KEY, JSON.stringify(customerDetails));
    } catch (e) {
      console.error('Failed to save customer details', e);
    }
  }, [customerDetails]);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 2800);
  };

  const addToCart = (product: Product, sizeOption: ProductSizeOption, quantity = 1) => {
    const itemId = `${product.id}-${sizeOption.weight}`;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === itemId);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prevCart,
          {
            id: itemId,
            productId: product.id,
            name: product.name,
            category: product.category,
            selectedSize: sizeOption,
            quantity,
            image: product.image,
          },
        ];
      }
    });

    showToast(`Added ${quantity}x ${product.name} (${sizeOption.weight}) to cart`);
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.selectedSize.price * item.quantity, 0);
  const isFreeDelivery = subtotal >= BUSINESS_CONFIG.freeDeliveryThreshold;
  const deliveryFee = subtotal === 0 ? 0 : isFreeDelivery ? 0 : BUSINESS_CONFIG.deliveryFee;
  const amountNeededForFreeDelivery = Math.max(0, BUSINESS_CONFIG.freeDeliveryThreshold - subtotal);
  const totalAmount = subtotal + deliveryFee;

  const sendOrderViaWhatsApp = (): boolean => {
    if (cart.length === 0) return false;

    // Validate minimum required fields
    if (!customerDetails.name.trim() || !customerDetails.phone.trim() || !customerDetails.address.trim()) {
      alert('Please fill in your name, phone number, and delivery address to place your order on WhatsApp.');
      return false;
    }

    const itemsSummary = cart
      .map(
        (item) =>
          `• ${item.quantity}x ${item.name} (${item.selectedSize.label}) - ₹${item.selectedSize.price * item.quantity}`
      )
      .join('\n');

    const deliveryNote = isFreeDelivery
      ? 'FREE (Order above ₹600 🎉)'
      : `₹${BUSINESS_CONFIG.deliveryFee}`;

    const messageText = `🍫 *NEW ORDER - ZIVORA CHOCOLATES*
---------------------------------------
*Customer Details:*
• *Name:* ${customerDetails.name.trim()}
• *Phone:* ${customerDetails.phone.trim()}
• *Address:* ${customerDetails.address.trim()}
• *City / Town:* ${customerDetails.city.trim() || 'Tamil Nadu'}
• *PIN Code:* ${customerDetails.pincode.trim() || 'N/A'}
${customerDetails.notes.trim() ? `• *Special Note:* ${customerDetails.notes.trim()}\n` : ''}
*Items Ordered:*
${itemsSummary}

---------------------------------------
*Subtotal:* ₹${subtotal}
*Delivery Fee:* ${deliveryNote}
*Total Payable:* ₹${totalAmount}
---------------------------------------
📦 _Packed cool in insulated wrapping from Kodaikanal Hills._
Please confirm order acceptance and share UPI payment details. Thank you!`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.phoneClean}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    return true;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalItems,
        subtotal,
        deliveryFee,
        isFreeDelivery,
        amountNeededForFreeDelivery,
        totalAmount,
        toast,
        customerDetails,
        setCustomerDetails,
        sendOrderViaWhatsApp,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
