import React from 'react';
import { Gift, MessageCircle, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/products';

export const BulkGifting: React.FC = () => {
  const bulkWhatsAppUrl = `https://wa.me/${BUSINESS_CONFIG.phoneClean}?text=${encodeURIComponent(
    'Hello Zivora Chocolates! I am planning for an event/festival/corporate gifting and would like to enquire about custom gift boxes and bulk orders with special pricing.'
  )}`;

  return (
    <section id="gifts" className="py-20 bg-gradient-to-br from-cocoa-950 via-cocoa-900 to-[#1F0C05] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-caramel-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cocoa-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-caramel-400/20 border border-caramel-400/30 text-caramel-300 text-xs font-bold tracking-wider uppercase">
              <Gift className="w-3.5 h-3.5" />
              <span>Festive & Corporate Solutions</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2]">
              Gifts and bulk orders
            </h2>

            <p className="text-base sm:text-lg text-cocoa-100 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              Planning for Diwali, a wedding, a festival or corporate gifting? We make custom gift boxes and take bulk orders with special pricing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-cocoa-200 pt-2">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-caramel-400 shrink-0" />
                <span>Custom ribbons & personalized cards</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-caramel-400 shrink-0" />
                <span>Tiered volume discounts for 20+ boxes</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-caramel-400 shrink-0" />
                <span>Customized assortment mixes</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-caramel-400 shrink-0" />
                <span>Multi-city dispatch across Tamil Nadu</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={bulkWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base hover:bg-[#20ba5a] shadow-lg shadow-[#25D366]/20 transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Enquire on WhatsApp</span>
              </a>

              <span className="text-xs text-cocoa-300">
                Direct reply within minutes from Kodaikanal team
              </span>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-cocoa-900/50 backdrop-blur-md">
                <img
                  src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80"
                  alt="Zivora Chocolates Custom Gift Boxes"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 bg-cocoa-900/90 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-white">
                        Curated Celebration Boxes
                      </h4>
                      <p className="text-xs text-cocoa-300 mt-0.5">
                        Handcrafted truffles, nut slabs, and wellness oils in velvet finish boxes.
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-caramel-400/20 text-caramel-300 font-bold text-xs">
                      Custom
                    </span>
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
