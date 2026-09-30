import HeroContent from './HeroContent';
import HeroVisual from './HeroVisual';
import HeroDecoration from './HeroDecoration';

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative mx-auto max-w-[1600px] px-4 pt-8 pb-16 sm:px-8 lg:min-h-[min(804px,50.25vw)] lg:px-[5.1%] lg:pt-[min(87px,5.4vw)] lg:pb-[min(96px,6vw)]"
    >
      <HeroContent />
      <HeroVisual />
      <HeroDecoration />
    </section>
  );
}