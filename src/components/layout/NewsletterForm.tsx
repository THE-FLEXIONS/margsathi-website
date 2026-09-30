import { useId, useState, type FormEvent } from 'react';
import { ArrowRight, Loader2, Mail } from 'lucide-react';
import { EMAIL_PATTERN, NewsletterUnavailableError, subscribeToNewsletter } from '../../lib/newsletter';
import { newsletterCopy } from '../../data/footer';

type Status =
  | { kind: 'idle' }
  | { kind: 'submitting' }
  | { kind: 'success' }
  | { kind: 'error'; message: string };

export default function NewsletterForm() {
  const inputId = useId();
  const messageId = useId();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const value = email.trim();
    if (!EMAIL_PATTERN.test(value)) {
      setStatus({ kind: 'error', message: 'Please enter a valid email address.' });
      return;
    }
    setStatus({ kind: 'submitting' });
    try {
      await subscribeToNewsletter(value);
      setStatus({ kind: 'success' });
      setEmail('');
    } catch (err) {
      setStatus({
        kind: 'error',
        message:
          err instanceof NewsletterUnavailableError
            ? 'Sign-ups open soon \u2014 we couldn\u2019t add you just yet. Please try again later.'
            : 'Something went wrong. Please try again.',
      });
    }
  };

  const submitting = status.kind === 'submitting';
  const message =
    status.kind === 'error'
      ? status.message
      : status.kind === 'success'
        ? 'Thanks! You\u2019re on the list.'
        : newsletterCopy.privacy;

  const ring = status.kind === 'error' ? 'ring-icon-red/50' : 'ring-border/60';

  return (
    <form noValidate onSubmit={onSubmit} className="w-full">
      {/* Phones: input pill with the button full-width beneath. sm+: one pill with the button inside. */}
      <div
        className={`flex flex-col gap-3 sm:h-[54px] sm:flex-row sm:items-center sm:gap-0 sm:rounded-full sm:bg-white sm:pl-[30px] sm:shadow-[0_8px_26px_-14px_rgb(19_37_74/0.3)] sm:ring-1 sm:transition-shadow sm:focus-within:ring-2 sm:focus-within:ring-navy/25 ${ring}`}
      >
        <div
          className={`flex h-[52px] items-center rounded-full bg-white pl-[18px] shadow-[0_8px_26px_-14px_rgb(19_37_74/0.3)] ring-1 transition-shadow focus-within:ring-2 focus-within:ring-navy/25 sm:contents ${ring}`}
        >
        <Mail className="size-[19px] shrink-0 text-navy" strokeWidth={1.9} aria-hidden />
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status.kind === 'error') setStatus({ kind: 'idle' });
          }}
          placeholder={newsletterCopy.placeholder}
          aria-invalid={status.kind === 'error'}
          aria-describedby={messageId}
          className="h-full min-w-0 flex-1 bg-transparent px-[12px] text-[16px] text-navy outline-none placeholder:text-text-secondary sm:px-[17px] sm:text-[15px]"
        />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="group flex h-[50px] w-full shrink-0 items-center justify-center gap-[16px] rounded-full bg-navy-deep text-[15.5px] font-semibold text-white transition-[filter,transform] duration-300 hover:brightness-125 disabled:opacity-80 sm:mr-[2px] sm:h-[48px] sm:w-[163px]"
        >
          {newsletterCopy.cta}
          {submitting ? (
            <Loader2 className="size-[18px] animate-spin" aria-hidden />
          ) : (
            <ArrowRight className="size-[18px] transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.2} aria-hidden />
          )}
        </button>
      </div>
      <p
        id={messageId}
        role="status"
        aria-live="polite"
        className={`mt-[14px] text-[14px] ${
          status.kind === 'error' ? 'text-icon-red' : status.kind === 'success' ? 'text-green' : 'text-text-secondary'
        }`}
      >
        {message}
      </p>
    </form>
  );
}