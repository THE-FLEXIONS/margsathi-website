import NewsletterFooterCTA from './NewsletterFooterCTA';
import FooterNavigation from './FooterNavigation';
import FooterLegalBar from './FooterLegalBar';
import FooterBrandArtwork from './FooterBrandArtwork';

export default function Footer() {
  return (
    <footer className="relative mt-4">
      <div className="mx-auto max-w-[1536px] px-4 pt-16 sm:px-8 xl:px-[3.7%] xl:pt-[85px]">
        <div className="xl:-mx-[12px]">
          <NewsletterFooterCTA />
        </div>
        <div className="mt-12 xl:mt-[48px]">
          <FooterNavigation />
        </div>
        <div className="mt-10 xl:mt-[31px]">
          <FooterLegalBar />
        </div>
      </div>
      <div className="mt-6 xl:mt-[22px]">
        <FooterBrandArtwork />
      </div>
    </footer>
  );
}