import WhoWeServeHeader from './WhoWeServeHeader';
import AudienceGrid from './AudienceGrid';
import ImpactStrip from './ImpactStrip';
import { trustedJourneys } from '../../data/whoWeServe';

export default function WhoWeServeSection() {
  return (
    <section id="who-we-serve" aria-labelledby="serve-heading" className="relative overflow-hidden">
      {/* faint atmospheric shape, top-right */}
      <span
        className="pointer-events-none absolute -top-[120px] right-[-4%] hidden h-[380px] w-[40%] rounded-full bg-soft-blue/50 blur-3xl xl:block"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1536px] px-4 pt-16 pb-12 sm:px-8 xl:pt-[min(38px,2.5vw)] xl:pr-[3.7%] xl:pb-[20px] xl:pl-[4.3%]">
        <WhoWeServeHeader />
        <div className="mt-10 xl:mt-[20px]">
          <AudienceGrid />
        </div>
        <div className="mt-8 xl:mt-[27px] xl:-mr-[0.5%] xl:-ml-[0.9%]">
          <ImpactStrip
            {...trustedJourneys}
            introClassName="xl:w-[366px]"
            columnsClassName="xl:grid-cols-[260fr_234fr_263fr_240fr]"
            className="xl:min-h-[158px] xl:py-[6px]"
          />
        </div>
      </div>
    </section>
  );
}