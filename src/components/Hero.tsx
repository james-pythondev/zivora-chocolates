import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, Snowflake, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/products';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#FAF7F2] via-[#F6ECE3] to-[#FAF7F2]">
      {/* Decorative hill mist & chocolate aura blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-caramel-100/40 via-cocoa-100/30 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Origin Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cocoa-900/5 border border-cocoa-900/10 text-cocoa-800 text-xs font-semibold tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-caramel-500 animate-ping" />
              <MapPin className="w-3.5 h-3.5 text-cocoa-600" />
              <span>Handcrafted in Kodaikanal Hills, Tamil Nadu</span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cocoa-950 tracking-tight leading-[1.15]">
              Homemade chocolates from the{' '}
              <span className="text-cocoa-700 italic underline decoration-caramel-400 decoration-wavy decoration-2">
                Kodaikanal Hills
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-cocoa-700 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Small-batch chocolates, nut bars and gift boxes, plus wellness oils, made with care and packed cool for delivery anywhere in Tamil Nadu.
            </p>

            {/* Badges / Value triggers */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs font-semibold text-cocoa-900">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 border border-cocoa-200/60 shadow-sm">
                <span className="text-base">🍫</span> From ₹230 per 250 g
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> Free delivery above ₹600
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 border border-sky-200 text-sky-800 shadow-sm">
                <Snowflake className="w-4 h-4 text-sky-600" /> Insulated Cool Packing
              </span>
            </div>

            {/* Call to actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <a
                href="#shop"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-cocoa-900 text-[#FAF7F2] font-semibold text-base hover:bg-cocoa-800 shadow-lg shadow-cocoa-900/20 hover:shadow-cocoa-900/30 transition-all active:scale-[0.98]"
              >
                <span>Shop chocolates</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${BUSINESS_CONFIG.phoneClean}?text=${encodeURIComponent(
                  'Hello Zivora Chocolates! I would like to order fresh chocolates and wellness oils from Kodaikanal.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white border border-cocoa-200 text-cocoa-900 font-semibold text-base hover:bg-cocoa-50 hover:border-cocoa-300 transition-all shadow-sm"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366] fill-current" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Quick micro note */}
            <p className="text-xs text-cocoa-500 pt-1">
              🚀 Shipped directly from Kodaikanal in 2–4 days. 100% satisfaction guaranteed.
            </p>
          </div>

          {/* Hero Visual Card / Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-caramel-400/30 via-cocoa-400/20 to-transparent rounded-3xl blur-xl" />

              {/* Main Card */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-warm border border-cocoa-100">
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1548741487-18d16a145e80?auto=format&fit=crop&w=1000&q=80"
                    alt="Handmade Roasted Almond Chocolate from Kodaikanal"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cocoa-950/80 via-transparent to-transparent" />
                  
                  {/* Floating floating badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-cocoa-900 shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-caramel-500" />
                    <span>Freshly Tempered Today</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs uppercase tracking-widest text-caramel-200 font-semibold">
                      Signature Creation
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                      Roasted Almond Crunch Bar
                    </h3>
                    <p className="text-xs text-cocoa-100/90 mt-0.5 line-clamp-1">
                      California almonds slow-roasted over woodfire and loaded in rich tempered chocolate.
                    </p>
                  </div>
                </div>

                {/* Card footer perks */}
                <div className="p-4 sm:p-5 bg-[#FCF8F5] grid grid-cols-2 gap-3 border-t border-cocoa-100 text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-caramel-100 text-caramel-700 flex items-center justify-center font-bold">
                      ₹
                    </div>
                    <div>
                      <div className="font-bold text-cocoa-900">Starting ₹230</div>
                      <div className="text-[11px] text-cocoa-500">per 250 g batch</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <Snowflake className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-cocoa-900">Zero Melt Packing</div>
                      <div className="text-[11px] text-cocoa-500">Insulated thermal wrap</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

