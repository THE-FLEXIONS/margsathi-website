/** Heavy typographic opening quote used on feedback cards and panels. */
export default function QuoteMark({ className = '' }: { className?: string }) {
  return (
    <span aria-hidden className={`block overflow-hidden leading-[0.86] font-extrabold select-none ${className}`}>
      {'\u201C'}
    </span>
  );
}