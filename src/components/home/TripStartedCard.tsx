import StatusPhotoCard from './StatusPhotoCard';

export default function TripStartedCard() {
  return (
    <StatusPhotoCard
      image={{ src: '/assets/how/student-boarding-bus.webp', alt: 'Smiling schoolgirl with a backpack beside a yellow school bus', width: 214, height: 283 }}
      title="Trip Started"
      meta={'8:15 AM \u2022 School Bus'}
      cardBox={{ left: '5.1%', top: '75.3%', width: '88.8%', height: '22.3%' }}
      scale="6.5cqw"
    />
  );
}