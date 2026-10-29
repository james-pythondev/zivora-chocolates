import React from 'react';
import { useCart } from '../context/CartContext';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toast, setIsCartOpen } = useCart();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom duration-300">
      <div className="bg-cocoa-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-cocoa-700 flex items-center gap-3 text-xs sm:text-sm">
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
        <span className="font-medium text-cocoa-100">{toast}</span>
        <button
          onClick={() => setIsCartOpen(true)}
          className="ml-2 px-2.5 py-1 rounded-lg bg-caramel-400 text-cocoa-950 font-bold text-xs hover:bg-caramel-300 transition-colors flex items-center gap-1"
        >
          <ShoppingBag className="w-3 h-3" />
          <span>View</span>
        </button>
      </div>
    </div>
  );
};

