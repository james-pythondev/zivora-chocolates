import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="our-story" className="py-20 bg-white relative overflow-hidden">
      {/* Background warm pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-caramel-50 rounded-full blur-3xl -z-10 opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Images Grid */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative">
              {/* Main large image */}
              <div className="rounded-3xl overflow-hidden shadow-warm border-4 border-[#FAF7F2]">
                <img
                  src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80"
                  alt="Crafting artisan chocolate in Kodaikanal"
                  className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Inset smaller overlapping image */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 w-44 sm:w-56 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=500&q=80"
                  alt="Freshly roasted whole nuts"
                  className="w-full h-36 object-cover"
                />
              </div>

              {/* Floating quote bubble */}
              <div className="absolute -top-4 -left-4 bg-cocoa-900 text-white p-3.5 rounded-2xl shadow-lg max-w-[200px] border border-cocoa-700">
                <p className="text-[11px] font-medium leading-snug">
                  "Each recipe is tasted and adjusted by hand before it goes on sale."
                </p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-caramel-100 text-caramel-800 text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hill-Station Heritage</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cocoa-950 tracking-tight leading-[1.2]">
              Our story
            </h2>

            <p className="font-serif italic text-xl sm:text-2xl text-cocoa-800 leading-snug font-medium">
              “Chocolate the way it tastes when it’s made close to home, in small batches and with real ingredients.”
            </p>

            <div className="space-y-4 text-cocoa-700 text-sm sm:text-base leading-relaxed">
              <p>
                Every bar starts in a small kitchen in Kodaikanal. We make a few batches at a time so each piece is fresh when it reaches you.
              </p>
              <p>
                From a simple dark bar to a bar loaded with nut halves, each recipe is tasted and adjusted by hand before it goes on sale. No industrialized shortcuts, no hydrogenated vegetable fats — only pure cocoa butter, slow roasting, and mountain patience.
              </p>
            </div>

            {/* Checklist highlights */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-cocoa-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Real cocoa butter & single-origin beans</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-cocoa-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Woodfire roasted whole nuts</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-cocoa-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero artificial wax or preservatives</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-cocoa-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Batches made fresh weekly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
