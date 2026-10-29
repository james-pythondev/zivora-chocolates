import React from 'react';
import { ShoppingCart, MessageCircle, Snowflake, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const HowItWorks: React.FC = () => {
  const { setIsCartOpen } = useCart();

  const steps = [
    {
      num: '1',
      title: 'Add to cart',
      description: 'Choose your items and enter your delivery details.',
      icon: ShoppingCart,
      action: 'Browse items',
      actionHref: '#shop',
    },
    {
      num: '2',
      title: 'Confirm on WhatsApp',
      description: 'Your order opens in WhatsApp so we can confirm the address and payment.',
      icon: MessageCircle,
      action: 'Direct chat',
      isWhatsApp: true,
    },
    {
      num: '3',
      title: 'Delivered in cool packing',
      description: 'Packed in insulated wrap and shipped anywhere in Tamil Nadu.',
      icon: Snowflake,
      action: '2-4 days transit',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-caramel-600 font-bold">
            Simple & Transparent
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cocoa-950 tracking-tight mt-2">
            How ordering works
          </h2>
          <p className="mt-3 text-base text-cocoa-700 leading-relaxed">
            Order seamlessly on our website and finalize on WhatsApp with direct personal confirmation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-[#FCFAF7] rounded-3xl p-8 border border-cocoa-100 flex flex-col justify-between hover:border-cocoa-300 transition-all shadow-sm hover:shadow-soft"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-cocoa-900 text-caramel-300 flex items-center justify-center font-bold text-xl shadow-md mb-6">
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-caramel-700">
                    Step {item.num}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-cocoa-950 mt-1 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-cocoa-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-cocoa-100/80 flex items-center justify-between text-xs font-semibold text-cocoa-800">
                  <span className="text-cocoa-500">{item.action}</span>
                  {index === 0 && (
                    <button
                      onClick={() => setIsCartOpen(true)}
                      className="inline-flex items-center gap-1 text-cocoa-900 hover:text-cocoa-600 font-bold"
                    >
                      <span>Open cart</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

