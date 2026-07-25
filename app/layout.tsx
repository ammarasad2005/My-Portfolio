import type {Metadata} from 'next';
import './globals.css'; // Global styles
import {ThemeProvider} from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Muhammad Ammar Asad — Full-Stack Developer',
  description: 'Full-stack developer in Islamabad. Backend AI Engineer intern at FlyRank AI. I build tools that replace manual work — a campus platform, a Chrome extension, a ride-hailing companion, a drama streaming site.',
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
