import type { ReactNode } from 'react';
import HowItWorksIntro from './HowItWorksIntro';
import JourneyConnector from './JourneyConnector';
import JourneyStep from './JourneyStep';
import PlanJourneyCard from './PlanJourneyCard';
import TripStartedCard from './TripStartedCard';
import LiveTrackingPhone from './LiveTrackingPhone';
import EmergencySupportCard from './EmergencySupportCard';
import ArrivedSafelyCard from './ArrivedSafelyCard';
import SafetyLayer from './SafetyLayer';
import { journeySteps, type StepVisual } from '../../data/howItWorks';

const stepVisuals: Record<StepVisual, ReactNode> = {
  plan: <PlanJourneyCard />,
  start: <TripStartedCard />,
  connected: <LiveTrackingPhone />,
  support: <EmergencySupportCard />,
  arrive: <ArrivedSafelyCard />,
};

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="relative">
      <div className="mx-auto max-w-[1536px] px-4 pt-16 pb-12 sm:px-8 xl:pt-[min(38px,2.5vw)] xl:pr-[2.1%] xl:pb-[48px] xl:pl-[5.5%]">
        <HowItWorksIntro />

        <div className="relative mt-14 xl:mt-[10px]">
          {/* badge-row route, desktop only (reference box: 1419 x 60 at y 290) */}
          <JourneyConnector className="absolute top-0 left-0 hidden h-[60px] w-full xl:block" />
          <ol className="xl:grid xl:grid-cols-[299fr_294fr_287fr_283fr_256fr]">
            {journeySteps.map((step, i) => (
              <JourneyStep
                key={step.number}
                step={step}
                index={i}
                visual={stepVisuals[step.visual]}
                isLast={i === journeySteps.length - 1}
              />
            ))}
          </ol>
        </div>

        <div className="mt-6 xl:mt-[45px] xl:-mr-[0.6%] xl:-ml-[2.8%]">
          <SafetyLayer />
        </div>
      </div>
    </section>
  );
}