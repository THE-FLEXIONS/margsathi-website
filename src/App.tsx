import Header from './components/layout/Header';
import HeroSection from './components/home/HeroSection';
import WhyItMattersSection from './components/home/WhyItMattersSection';
import HowItWorksSection from './components/home/HowItWorksSection';
import KeyFeaturesSection from './components/home/KeyFeaturesSection';
import WhoWeServeSection from './components/home/WhoWeServeSection';
import EarlyFeedbackSection from './components/home/EarlyFeedbackSection';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-surface-page">
      <Header />
      <main>
        <HeroSection />
        <WhyItMattersSection />
        <HowItWorksSection />
        <KeyFeaturesSection />
        <WhoWeServeSection />
        <EarlyFeedbackSection />
      </main>
    </div>
  );
}
