import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsBar from '@/components/StatsBar';
import TeamSection from '@/components/TeamSection';
import ComparisonSection from '@/components/ComparisonSection';
import GuaranteeSection from '@/components/GuaranteeSection';
import MethodSection from '@/components/MethodSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import PropertiesCarousel from '@/components/PropertiesCarousel';
import CTASection from '@/components/CTASection';
import EligibilitySection from '@/components/EligibilitySection';
import FAQSection from '@/components/FAQSection';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <TeamSection />
      <ComparisonSection />
      <GuaranteeSection />
      <MethodSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <PropertiesCarousel />
      <CTASection />
      <EligibilitySection />
      <FAQSection />
      <StickyMobileCTA />
      <Footer />
    </main>
  );
}
