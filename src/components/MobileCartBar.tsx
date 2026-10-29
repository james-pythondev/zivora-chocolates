import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export const MobileCartBar: React.FC = () => {
  const { totalItems, subtotal, setIsCartOpen, isFreeDelivery } = useCart();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-30 lg:hidden p-3 bg-white/95 backdrop-blur-md border-t border-cocoa-200 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-cocoa-900">{totalItems} {totalItems === 1 ? 'item' : 'items'}</span>
            <span className="text-xs text-cocoa-400">•</span>
            <span className="font-serif font-bold text-base text-cocoa-950">₹{subtotal}</span>
          </div>
          <span className="text-[10px] text-emerald-700 font-semibold">
            {isFreeDelivery ? 'Free Delivery unlocked 🎉' : '+ ₹100 delivery across TN'}
          </span>
        </div>

        <button
          onClick={() => setIsCartOpen(true)}
          className="flex-1 max-w-[200px] py-2.5 px-4 rounded-xl bg-cocoa-900 hover:bg-cocoa-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all"
        >
          <ShoppingBag className="w-4 h-4 text-caramel-300" />
          <span>View Cart</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

