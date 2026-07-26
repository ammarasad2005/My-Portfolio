import type {Metadata} from 'next';
import './globals.css'; // Global styles
import {ThemeProvider} from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Muhammad Ammar Asad — Full-Stack Developer',
  description: 'Full-stack developer in Islamabad. Backend AI Engineer Intern at FlyRank AI. I got tired of clicking Download 47 times, so I built a Chrome extension — that\'s the pattern across everything I ship: replace manual work with one working app.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
