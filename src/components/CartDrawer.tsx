import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle, Truck, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BUSINESS_CONFIG } from '../data/products';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    subtotal,
    isFreeDelivery,
    amountNeededForFreeDelivery,
    totalAmount,
    customerDetails,
    setCustomerDetails,
    sendOrderViaWhatsApp,
  } = useCart();

  if (!isCartOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCustomerDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    sendOrderViaWhatsApp();
  };

  const freeDeliveryProgress = Math.min(100, (subtotal / BUSINESS_CONFIG.freeDeliveryThreshold) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col justify-between border-l border-cocoa-200">
          {/* Header */}
          <div className="p-5 border-b border-cocoa-200 bg-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-cocoa-900 text-caramel-300 flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-cocoa-950">
                  Your cart
                </h3>
                <span className="text-xs text-cocoa-500 font-medium">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {cart.length > 0 && (
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-[11px] text-cocoa-500 hover:text-red-600 px-2 py-1"
                >
                  Clear all
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 text-cocoa-500 hover:text-cocoa-900 rounded-lg hover:bg-cocoa-100 transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Free Delivery Bar */}
          <div className="bg-[#F5EFE6] px-5 py-3 border-b border-cocoa-200">
            <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
              <span className="flex items-center gap-1.5 text-cocoa-900">
                <Truck className="w-4 h-4 text-cocoa-700" />
                {isFreeDelivery ? (
                  <span className="text-emerald-700 font-bold">You unlocked FREE Delivery across Tamil Nadu! 🎉</span>
                ) : (
                  <span>
                    Add <strong className="text-cocoa-950 font-bold">₹{amountNeededForFreeDelivery}</strong> more for{' '}
                    <strong className="text-emerald-700">FREE delivery</strong>
                  </span>
                )}
              </span>
              <span className="font-bold text-cocoa-800">
                ₹{subtotal}/₹{BUSINESS_CONFIG.freeDeliveryThreshold}
              </span>
            </div>
            <div className="w-full bg-cocoa-200 h-2 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${
                  isFreeDelivery ? 'bg-emerald-600' : 'bg-caramel-500'
                }`}
                style={{ width: `${freeDeliveryProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-12 px-4 space-y-3">
                <div className="w-16 h-16 rounded-full bg-cocoa-100 text-cocoa-400 flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg font-bold text-cocoa-900">
                  Your cart is empty
                </h4>
                <p className="text-xs text-cocoa-600 max-w-xs mx-auto">
                  Explore our handcrafted Kodaikanal chocolates, nut bars, and fresh wellness oils!
                </p>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cocoa-900 text-white text-xs font-bold hover:bg-cocoa-800 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-caramel-300" />
                  <span>Explore Chocolates</span>
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-3 bg-white rounded-xl border border-cocoa-100 shadow-sm"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover bg-cocoa-50 shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif font-bold text-sm text-cocoa-950 truncate">
                        {item.name}
                      </h4>
                      <div className="text-[11px] text-cocoa-500 font-medium">
                        {item.selectedSize.label} • ₹{item.selectedSize.price} each
                      </div>
                      <div className="font-bold text-xs text-cocoa-900 mt-0.5">
                        ₹{item.selectedSize.price * item.quantity}
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <div className="flex items-center border border-cocoa-200 rounded-lg overflow-hidden bg-cocoa-50/50">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-cocoa-200 text-cocoa-700 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-cocoa-900">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-cocoa-200 text-cocoa-700 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="text-cocoa-400 hover:text-red-500 transition-colors p-0.5"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Delivery Details Form */}
            {cart.length > 0 && (
              <form id="checkout-form" onSubmit={handleCheckout} className="pt-4 space-y-3">
                <div className="flex items-center justify-between border-b border-cocoa-200 pb-2">
                  <h4 className="font-serif text-sm font-bold text-cocoa-950">
                    Delivery Details (Tamil Nadu)
                  </h4>
                  <span className="text-[10px] text-cocoa-500">* Required for WhatsApp order</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <label className="block font-semibold text-cocoa-800 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Priya Sundaram"
                      value={customerDetails.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-lg border border-cocoa-200 bg-white focus:outline-none focus:ring-2 focus:ring-cocoa-900/20 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-cocoa-800 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 9876543210"
                      value={customerDetails.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-lg border border-cocoa-200 bg-white focus:outline-none focus:ring-2 focus:ring-cocoa-900/20 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-cocoa-800 mb-1">
                      Full Delivery Address *
                    </label>
                    <textarea
                      name="address"
                      required
                      rows={2}
                      placeholder="Door / Flat No., Street, Area, Landmark"
                      value={customerDetails.address}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-lg border border-cocoa-200 bg-white focus:outline-none focus:ring-2 focus:ring-cocoa-900/20 text-xs resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-semibold text-cocoa-800 mb-1">
                        City / Town
                      </label>
                      <input
                        type="text"
                        name="city"
                        placeholder="e.g. Coimbatore"
                        value={customerDetails.city}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg border border-cocoa-200 bg-white focus:outline-none focus:ring-2 focus:ring-cocoa-900/20 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-cocoa-800 mb-1">
                        PIN Code
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        placeholder="e.g. 641001"
                        value={customerDetails.pincode}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg border border-cocoa-200 bg-white focus:outline-none focus:ring-2 focus:ring-cocoa-900/20 text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-cocoa-800 mb-1">
                      Gifting Message / Delivery Note (Optional)
                    </label>
                    <input
                      type="text"
                      name="notes"
                      placeholder="e.g. Please add a birthday note"
                      value={customerDetails.notes}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-lg border border-cocoa-200 bg-white focus:outline-none focus:ring-2 focus:ring-cocoa-900/20 text-xs"
                    />
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-cocoa-200 bg-white space-y-3">
              {/* Cost Summary */}
              <div className="space-y-1.5 text-xs text-cocoa-700">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-cocoa-900">₹{subtotal}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1">
                    <span>Delivery fee</span>
                    {isFreeDelivery && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                        FREE
                      </span>
                    )}
                  </span>
                  <span className={`font-bold ${isFreeDelivery ? 'text-emerald-700' : 'text-cocoa-900'}`}>
                    {isFreeDelivery ? '₹0' : `₹${BUSINESS_CONFIG.deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-cocoa-950 pt-2 border-t border-cocoa-100">
                  <span>Total Amount</span>
                  <span className="font-serif text-lg">₹{totalAmount}</span>
                </div>
              </div>

              {/* Order on WhatsApp Button */}
              <button
                type="submit"
                form="checkout-form"
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Order on WhatsApp</span>
              </button>

              {/* Exact note from markdown */}
              <p className="text-[11px] text-center text-cocoa-600 leading-snug">
                Delivery is ₹100, free above ₹600. Payment details are shared on WhatsApp.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
