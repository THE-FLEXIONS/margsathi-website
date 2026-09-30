/**
 * Newsletter sign-up integration point.
 *
 * Set VITE_NEWSLETTER_ENDPOINT to a URL that accepts `POST { email }` as JSON
 * (your ESP, a serverless function, etc.). Until then, sign-ups are rejected
 * with NewsletterUnavailableError so the UI never reports a fake success.
 */
export class NewsletterUnavailableError extends Error {
  constructor() {
    super('Newsletter sign-up is not connected yet.');
    this.name = 'NewsletterUnavailableError';
  }
}

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function subscribeToNewsletter(email: string): Promise<void> {
  const endpoint = import.meta.env.VITE_NEWSLETTER_ENDPOINT as string | undefined;
  if (!endpoint) throw new NewsletterUnavailableError();

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });
  if (!res.ok) throw new Error(`Subscription failed (${res.status})`);
}