import React from 'react';
import { WELLNESS_OIL_PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { Leaf, ShieldCheck } from 'lucide-react';

export const OilsSection: React.FC = () => {
  return (
    <section id="wellness-oils" className="py-16 sm:py-20 bg-[#F4F1EA] border-t border-cocoa-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase mb-3">
            <Leaf className="w-3.5 h-3.5" />
            <span>Pure Botanical Distillations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cocoa-950 tracking-tight">
            Wellness oils
          </h2>
          <p className="mt-3 text-base text-cocoa-700 font-normal leading-relaxed">
            Distilled from the aromatic hills and forest plantations of Kodaikanal. Pure therapeutic eucalyptus, wintergreen pain oil, citrus diffuser essences, and mountain herbal infusions.
          </p>

          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 mt-4 px-3.5 py-1.5 bg-emerald-50 rounded-full border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Pure & Unadulterated • Direct from Kodaikanal Groves</span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WELLNESS_OIL_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

