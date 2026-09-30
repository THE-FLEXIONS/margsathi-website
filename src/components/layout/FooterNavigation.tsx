import FooterBrand from './FooterBrand';
import FooterColumn from './FooterColumn';
import FooterContact from './FooterContact';
import { footerColumns } from '../../data/footer';

export default function FooterNavigation() {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3 xl:grid-cols-[371fr_237fr_235fr_233fr_348fr] xl:gap-0">
      <div className="col-span-2 lg:col-span-3 xl:col-span-1">
        <FooterBrand />
      </div>
      {footerColumns.map((column) => (
        <div key={column.title} className="xl:border-l xl:border-border/70 xl:pl-[38px]">
          <FooterColumn {...column} />
        </div>
      ))}
      <div className="col-span-2 lg:col-span-3 xl:col-span-1 xl:border-l xl:border-border/70 xl:pl-[40px]">
        <FooterContact />
      </div>
    </div>
  );
}