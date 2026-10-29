import React, { useState } from 'react';
import { CHOCOLATE_PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { Sparkles } from 'lucide-react';

export const ChocolatesSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'nut-bar' | 'dark' | 'gift-box'>('all');

  const filteredProducts = CHOCOLATE_PRODUCTS.filter((product) => {
    if (filter === 'all') return true;
    return product.subCategory === filter;
  });

  return (
    <section id="shop" className="py-16 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-caramel-100 text-caramel-800 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kodaikanal Small Batch</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cocoa-950 tracking-tight">
            Our chocolates
          </h2>
          <p className="mt-3 text-base text-cocoa-700 font-normal leading-relaxed">
            From intense dark bars to slabs loaded with toasted nut halves and festive gift boxes. Slow-tempered by hand for the quintessential mountain snap.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                filter === 'all'
                  ? 'bg-cocoa-900 text-white shadow-sm'
                  : 'bg-white text-cocoa-800 border border-cocoa-200 hover:bg-cocoa-50'
              }`}
            >
              All Chocolates ({CHOCOLATE_PRODUCTS.length})
            </button>
            <button
              onClick={() => setFilter('nut-bar')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                filter === 'nut-bar'
                  ? 'bg-cocoa-900 text-white shadow-sm'
                  : 'bg-white text-cocoa-800 border border-cocoa-200 hover:bg-cocoa-50'
              }`}
            >
              Loaded Nut Bars 🥜
            </button>
            <button
              onClick={() => setFilter('dark')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                filter === 'dark'
                  ? 'bg-cocoa-900 text-white shadow-sm'
                  : 'bg-white text-cocoa-800 border border-cocoa-200 hover:bg-cocoa-50'
              }`}
            >
              Rich Dark 70% 🍫
            </button>
            <button
              onClick={() => setFilter('gift-box')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                filter === 'gift-box'
                  ? 'bg-cocoa-900 text-white shadow-sm'
                  : 'bg-white text-cocoa-800 border border-cocoa-200 hover:bg-cocoa-50'
              }`}
            >
              Gift Boxes 🎁
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-cocoa-900 to-cocoa-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3">
            <span className="text-3xl">❄️</span>
            <div>
              <h4 className="font-serif font-bold text-lg text-white">
                Packed in Insulated Cold Wrap
              </h4>
              <p className="text-xs text-cocoa-200">
                Guaranteed safe delivery without melting to Chennai, Coimbatore, Madurai, Trichy, and all Tamil Nadu.
              </p>
            </div>
          </div>
          <a
            href="#faq"
            className="text-xs font-bold text-caramel-300 hover:text-white underline underline-offset-4 shrink-0"
          >
            Read about our cold packing →
          </a>
        </div>
      </div>
    </section>
  );
};

