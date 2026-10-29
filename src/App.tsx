import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { ChocolatesSection } from './components/ChocolatesSection';
import { OilsSection } from './components/OilsSection';
import { StorySection } from './components/StorySection';
import { ProcessSection } from './components/ProcessSection';
import { HowItWorks } from './components/HowItWorks';
import { BulkGifting } from './components/BulkGifting';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { Toast } from './components/Toast';
import { MobileCartBar } from './components/MobileCartBar';

export function AppContent() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-cocoa-900 selection:bg-caramel-300 selection:text-cocoa-950 font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Highlights />
        <ChocolatesSection />
        <OilsSection />
        <StorySection />
        <ProcessSection />
        <HowItWorks />
        <BulkGifting />
        <FAQSection />
      </main>
      <Footer />
      <CartDrawer />
      <Toast />
      <MobileCartBar />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
