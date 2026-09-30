import WhyItMattersContent from './WhyItMattersContent';
import WhyItMattersVisual from './WhyItMattersVisual';
import BuiltForEveryone from './BuiltForEveryone';
import MobilityLandscape from './MobilityLandscape';

export default function WhyItMattersSection() {
  return (
    <section id="why-it-matters" aria-labelledby="why-heading" className="relative">
      <div className="mx-auto max-w-[1536px]">
        <div className="relative px-4 pt-16 sm:px-8 xl:min-h-[min(617px,40.2vw)] xl:px-[6.6%] xl:pt-[min(95px,6.2vw)]">
          <WhyItMattersContent />
          <WhyItMattersVisual />
        </div>
        <div className="mt-10 px-4 sm:px-8 xl:mt-[min(22px,1.43vw)] xl:px-[3.6%]">
          <BuiltForEveryone />
        </div>
      </div>
      <MobilityLandscape />
    </section>
  );
}