import type {Metadata} from 'next';
import './globals.css'; // Global styles
import {ThemeProvider} from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Muhammad Ammar Asad — Full-Stack Developer',
  description: 'Full-stack web developer in Islamabad. B.S. Computer Science student at FAST-NUCES. Building web apps with Next.js, TypeScript, and Supabase.',
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
