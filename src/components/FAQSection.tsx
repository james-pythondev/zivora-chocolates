import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, BUSINESS_CONFIG } from '../data/products';

export const FAQSection: React.FC = () => {
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cocoa-100 text-cocoa-800 text-xs font-bold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Doubts?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cocoa-950 tracking-tight">
            Questions
          </h2>
          <p className="mt-3 text-base text-cocoa-700 leading-relaxed">
            Everything you need to know about our Kodaikanal chocolates, insulated packaging, and delivery.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'border-cocoa-300 bg-[#FCFAF7] shadow-sm'
                    : 'border-cocoa-100 bg-white hover:border-cocoa-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-cocoa-950">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-cocoa-900 text-white rotate-180'
                        : 'bg-cocoa-100 text-cocoa-700'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-sm sm:text-base text-cocoa-700 leading-relaxed border-t border-cocoa-100/60 pt-3">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* More Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FCFAF7] border border-cocoa-100 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif font-bold text-cocoa-950 text-base">
              Have another question not listed here?
            </h4>
            <p className="text-xs text-cocoa-600 mt-0.5">
              We are active on WhatsApp from 9:00 AM to 8:00 PM every day.
            </p>
          </div>
          <a
            href={`https://wa.me/${BUSINESS_CONFIG.phoneClean}?text=${encodeURIComponent(
              'Hello Zivora Chocolates! I have a question about your products and delivery.'
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-cocoa-200 text-xs font-bold text-cocoa-900 hover:bg-cocoa-50 transition-colors shrink-0 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />
            <span>Ask us on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

