import StatusPhotoCard from './StatusPhotoCard';

export default function ArrivedSafelyCard() {
  return (
    <StatusPhotoCard
      image={{ src: '/assets/how/student-arriving-school.webp', alt: 'Student with a backpack walking up to the school entrance', width: 226, height: 268 }}
      title="Arrived Safely"
      meta={'8:42 AM \u2022 School'}
      cardBox={{ left: '3.1%', top: '73.9%', width: '85%', height: '22.4%' }}
      scale="6.15cqw"
    />
  );
}