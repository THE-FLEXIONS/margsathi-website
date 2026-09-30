import { Info } from 'lucide-react';

interface FeedbackNoticeProps {
  note: { before: string; emphasis: string; after: string };
}

export default function FeedbackNotice({ note }: FeedbackNoticeProps) {
  return (
    <aside
      aria-label="About this feedback"
      className="flex items-center gap-[20px] rounded-[12px] border-l-[3px] border-icon-blue/70 bg-soft-blue/70 py-[16px] pr-[24px] pl-[28px] shadow-[0_8px_24px_-18px_rgb(19_37_74/0.25)] xl:w-[440px]"
    >
      <Info className="size-[26px] shrink-0 text-icon-blue" strokeWidth={1.8} aria-hidden />
      <p className="text-[14px] leading-[1.47] text-navy/85">
        <strong className="font-semibold text-navy">Note:</strong> {note.before}
        <strong className="font-semibold text-navy">{note.emphasis}</strong>
        {note.after}
      </p>
    </aside>
  );
}