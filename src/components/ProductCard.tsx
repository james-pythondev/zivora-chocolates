import React, { useState } from 'react';
import { Plus, Check, Info, Sparkles, MessageCircle } from 'lucide-react';
import type { Product, ProductSizeOption } from '../types';
import { useCart } from '../context/CartContext';
import { BUSINESS_CONFIG } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<ProductSizeOption>(product.sizeOptions[0]);
  const [showDetails, setShowDetails] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  const directWhatsAppUrl = `https://wa.me/${BUSINESS_CONFIG.phoneClean}?text=${encodeURIComponent(
    `Hello Zivora Chocolates! I'd like to order *${product.name}* (${selectedSize.label}) - ₹${selectedSize.price}. Please confirm availability and delivery to Tamil Nadu.`
  )}`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-cocoa-100 flex flex-col justify-between chocolate-card group relative">
      {/* Product Image & Badges */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-cocoa-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cocoa-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-cocoa-900 shadow-sm flex items-center gap-1 border border-cocoa-100">
            <Sparkles className="w-3 h-3 text-caramel-500" />
            <span>{product.badge}</span>
          </div>
        )}

        {/* Weight preview pill */}
        <div className="absolute top-3 right-3 bg-cocoa-900/80 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[11px] font-semibold">
          {selectedSize.weight}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Name & Tagline */}
        <div className="mb-2">
          <h3 className="font-serif text-xl font-bold text-cocoa-950 group-hover:text-cocoa-700 transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-cocoa-600 font-medium mt-1 line-clamp-1">
            {product.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs text-cocoa-600/90 leading-relaxed mb-4 flex-1">
          {product.description}
        </p>

        {/* Ingredients toggle */}
        {product.ingredients && (
          <div className="mb-4">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-[11px] font-medium text-cocoa-500 hover:text-cocoa-800 flex items-center gap-1"
            >
              <Info className="w-3 h-3" />
              <span>{showDetails ? 'Hide ingredients' : 'View ingredients'}</span>
            </button>
            {showDetails && (
              <p className="text-[11px] text-cocoa-600/80 italic mt-1.5 p-2 bg-cocoa-50/70 rounded-lg border border-cocoa-100">
                {product.ingredients}
              </p>
            )}
          </div>
        )}

        {/* Size / Weight Selector */}
        <div className="space-y-1.5 mb-4">
          <label className="text-[11px] font-bold uppercase tracking-wider text-cocoa-500">
            Select Pack Size
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            {product.sizeOptions.map((opt) => {
              const isSelected = selectedSize.weight === opt.weight;
              return (
                <button
                  key={opt.weight}
                  type="button"
                  onClick={() => setSelectedSize(opt)}
                  className={`px-2 py-1.5 text-xs font-semibold rounded-lg border transition-all text-center ${
                    isSelected
                      ? 'bg-cocoa-900 text-white border-cocoa-900 shadow-sm'
                      : 'bg-white text-cocoa-800 border-cocoa-200 hover:bg-cocoa-50'
                  }`}
                >
                  <div>{opt.weight}</div>
                  <div className={`text-[10px] font-normal ${isSelected ? 'text-caramel-300' : 'text-cocoa-500'}`}>
                    ₹{opt.price}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="pt-3 border-t border-cocoa-100 flex items-center justify-between gap-2 mt-auto">
          <div>
            <span className="text-[10px] text-cocoa-500 block">Total for {selectedSize.weight}</span>
            <div className="font-serif text-2xl font-bold text-cocoa-950">
              ₹{selectedSize.price}
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Quick WhatsApp chat for this product */}
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl border border-cocoa-200 text-cocoa-700 hover:text-emerald-700 hover:border-emerald-300 hover:bg-emerald-50 transition-colors"
              title="Order this directly on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />
            </a>

            {/* Add to cart button */}
            <button
              onClick={handleAddToCart}
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs transition-all active:scale-95 shadow-sm ${
                justAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-cocoa-900 text-white hover:bg-cocoa-800'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
