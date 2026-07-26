'use server';

import {Resend} from 'resend';
import {z} from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000, 'Message is too long'),
});

export type ContactState = {
  ok: boolean;
  error?: string;
};

/**
 * Server Action that sends a contact form submission via Resend.
 *
 * Requires RESEND_API_KEY in the environment. If the key is not set,
 * returns an error message asking the user to email directly.
 */
export async function submitContact(formData: FormData): Promise<ContactState> {
  const parsed = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!parsed.success) {
    const firstError = parsed.error.issues[0];
    return {ok: false, error: firstError?.message ?? 'Invalid input'};
  }

  const {name, email, message} = parsed.data;

  // If no API key is configured, return a helpful error instead of crashing.
  if (!process.env.RESEND_API_KEY) {
    return {
      ok: false,
      error: 'The contact form is not yet configured. Please email ammarasad321993@gmail.com directly.',
    };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'ammarasad321993@gmail.com',
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    });

    return {ok: true};
  } catch (error) {
    console.error('Contact form error:', error);
    return {
      ok: false,
      error: 'Something went wrong sending your message. Please try emailing ammarasad321993@gmail.com directly.',
    };
  }
}
