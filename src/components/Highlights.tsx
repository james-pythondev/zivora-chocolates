import React from 'react';
import { HeartHandshake, Flame, Snowflake, Truck } from 'lucide-react';

export const Highlights: React.FC = () => {
  const highlights = [
    {
      title: 'Handmade',
      description: 'Made by hand, not in a factory',
      icon: HeartHandshake,
      badge: 'Crafted with Care',
      color: 'bg-amber-50 border-amber-200 text-amber-900',
      iconBg: 'bg-amber-100 text-amber-700',
    },
    {
      title: 'Small batches',
      description: 'Made fresh in limited quantities',
      icon: Flame,
      badge: 'Always Fresh',
      color: 'bg-orange-50 border-orange-200 text-orange-900',
      iconBg: 'bg-orange-100 text-orange-700',
    },
    {
      title: 'Packed cool',
      description: 'Insulated packing for the journey',
      icon: Snowflake,
      badge: 'No Melt Guarantee',
      color: 'bg-sky-50 border-sky-200 text-sky-900',
      iconBg: 'bg-sky-100 text-sky-700',
    },
    {
      title: 'All Tamil Nadu',
      description: 'Delivered to your door',
      icon: Truck,
      badge: '2 to 4 Days',
      color: 'bg-emerald-50 border-emerald-200 text-emerald-900',
      iconBg: 'bg-emerald-100 text-emerald-700',
    },
  ];

  return (
    <section className="py-10 bg-white border-y border-cocoa-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#FCFAF7] border border-cocoa-100 hover:border-cocoa-300 transition-all hover:shadow-soft group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform ${item.iconBg}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif font-bold text-lg text-cocoa-950">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-cocoa-600 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

