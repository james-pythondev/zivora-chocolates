import React, { useState, useEffect } from 'react';
import { ShoppingBag, MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BUSINESS_CONFIG } from '../data/products';

export const Navbar: React.FC = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Our Chocolates', href: '#shop' },
    { label: 'Wellness Oils', href: '#wellness-oils' },
    { label: 'Our Story', href: '#our-story' },
    { label: 'Our Process', href: '#process' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Bulk & Gifts', href: '#gifts' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#26130A] text-[#FAF7F2] text-xs font-medium py-2 px-4 text-center tracking-wide border-b border-[#3D1E10]/40">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 text-caramel-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kodaikanal Hill Craft</span>
          </span>
          <span className="hidden sm:inline text-cocoa-400">•</span>
          <span>From ₹230 per 250 g</span>
          <span className="text-cocoa-400">•</span>
          <span className="font-semibold text-caramel-300">Free delivery on orders above ₹600 across Tamil Nadu!</span>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-md py-3 border-b border-cocoa-100'
            : 'bg-[#FAF7F2] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cocoa-800 to-cocoa-950 flex items-center justify-center text-caramel-300 shadow-md group-hover:scale-105 transition-transform">
                <span className="font-serif text-xl font-bold">Z</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-cocoa-900 leading-none">
                  Zivora
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-cocoa-600 mt-0.5">
                  Chocolates • Kodaikanal
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-cocoa-800">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-cocoa-500 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cocoa-600 hover:after:w-full after:transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              {/* WhatsApp Quick Chat */}
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.phoneClean}?text=${encodeURIComponent(
                  'Hello Zivora Chocolates! I would like to enquire about your homemade chocolates and wellness oils from Kodaikanal.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-full bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 transition-all border border-[#25D366]/30"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>+91 63803 83552</span>
              </a>

              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cocoa-900 text-white hover:bg-cocoa-800 transition-all shadow-sm active:scale-95"
                aria-label="View shopping cart"
              >
                <ShoppingBag className="w-4 h-4 text-caramel-300" />
                <span className="text-xs font-semibold hidden md:inline">Cart</span>
                {totalItems > 0 && (
                  <span className="inline-flex items-center justify-center min-w-5 h-5 px-1.5 text-[11px] font-bold text-cocoa-950 bg-caramel-300 rounded-full animate-pulse">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-cocoa-900 hover:text-cocoa-600 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-cocoa-200 px-6 py-4 shadow-lg animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-cocoa-900 font-medium py-1.5 text-base border-b border-cocoa-100 hover:text-cocoa-600"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.phoneClean}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#25D366] text-white font-semibold text-sm shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 63803 83552)</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

