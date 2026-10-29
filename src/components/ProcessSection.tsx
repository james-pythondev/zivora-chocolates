import React from 'react';
import { Flame, Layers, Snowflake, Truck, Sparkles } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Melted and tempered',
      description: 'Chocolate is melted slowly and tempered for a clean snap and shine.',
      icon: Flame,
      color: 'from-amber-500 to-orange-600',
      bgGlow: 'bg-amber-50',
    },
    {
      step: '02',
      title: 'Filled and set',
      description: 'Nuts, zest and fillings go in, then each bar sets until firm.',
      icon: Layers,
      color: 'from-orange-600 to-cocoa-700',
      bgGlow: 'bg-orange-50',
    },
    {
      step: '03',
      title: 'Packed cool',
      description: 'Wrapped and packed in insulated packaging for the journey.',
      icon: Snowflake,
      color: 'from-sky-500 to-blue-600',
      bgGlow: 'bg-sky-50',
    },
    {
      step: '04',
      title: 'Delivered',
      description: 'Shipped to your address anywhere in Tamil Nadu.',
      icon: Truck,
      color: 'from-emerald-500 to-teal-700',
      bgGlow: 'bg-emerald-50',
    },
  ];

  return (
    <section id="process" className="py-20 bg-[#FAF7F2] border-y border-cocoa-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-caramel-100 text-caramel-800 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Crafting Journey</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cocoa-950 tracking-tight">
            From our kitchen to your door
          </h2>
          <p className="mt-3 text-base text-cocoa-700 leading-relaxed">
            Every step is calibrated by human hand to preserve aroma, texture, and pristine arrival at your doorstep.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-cocoa-100 shadow-soft hover:shadow-warm transition-all flex flex-col justify-between relative group"
              >
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${item.color} shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-serif text-3xl font-extrabold text-cocoa-200 group-hover:text-cocoa-400 transition-colors">
                    {item.step}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-cocoa-950">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cocoa-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Progress bar line for visual flow */}
                <div className="mt-6 pt-4 border-t border-cocoa-50 flex items-center gap-2">
                  <div className="h-1 flex-1 bg-cocoa-100 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${item.color} w-full`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

