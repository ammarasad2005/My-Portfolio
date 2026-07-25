import type {Metadata} from 'next';
import './globals.css'; // Global styles
import {ThemeProvider} from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Muhammad Ammar Asad — Full-Stack Developer',
  description: 'Full-stack developer in Islamabad. Backend AI Engineer intern at FlyRank AI. I build web apps end-to-end — UI, API, database — that replace manual work. Four projects shipped, one live at FAST NUCES Islamabad.',
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
