import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import { featureItems } from '../../data/keyFeatures';

export default function FeatureGrid() {
  return (
    <ul className="grid gap-[15px] sm:grid-cols-2 sm:gap-x-4 xl:grid-cols-[334fr_349fr] xl:[grid-auto-rows:minmax(130px,auto)]">
      {featureItems.map((item, i) => (
        <motion.li
          key={item.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
        >
          <FeatureCard {...item} />
        </motion.li>
      ))}
    </ul>
  );
}