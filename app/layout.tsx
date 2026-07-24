import type {Metadata} from 'next';
import {DM_Sans, IBM_Plex_Mono, Reenie_Beanie} from 'next/font/google';
import './globals.css';

import {Header} from '@/components/Header';
import {ThemeProvider} from '@/components/ThemeProvider';
import FooterSection from '@/components/FooterSection';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

const reenieBeanie = Reenie_Beanie({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-reenie-beanie',
  display: 'swap',
});

// Phase 2 TODO: replace placeholder title/description with real values
// once the personalization pass is complete.
export const metadata: Metadata = {
  title: {
    default: 'Ammar Asad — Full Stack Developer',
    template: '%s · Ammar Asad',
  },
  description:
    'Full stack developer based in Islamabad, building clean, scalable web applications with Next.js, TypeScript, and Supabase.',
  // Phase 2 TODO: set metadataBase to the production URL once deployed.
  // metadataBase: new URL('https://ammarasad.dev'),
  openGraph: {
    title: 'Ammar Asad — Full Stack Developer',
    description:
      'Full stack developer based in Islamabad, building clean, scalable web applications.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ammar Asad — Full Stack Developer',
    description:
      'Full stack developer based in Islamabad, building clean, scalable web applications.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${ibmPlexMono.variable} ${reenieBeanie.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="w-full bg-[#EFECE6] dark:bg-[#0f0f0f] min-h-screen text-[#1F1F1F] dark:text-[#F5F2EE]">
            <div className="w-full max-w-[1024px] lg:max-w-[1280px] xl:max-w-[1360px] mx-auto min-h-screen bg-[#F5F2EE] dark:bg-[#1a1a1a] border-x border-[#D1C7BD] dark:border-[#2a2a2a] shadow-sm flex flex-col justify-between">
              <Header />
              <main className="flex-1 w-full px-4 sm:px-8 md:px-12 py-6 sm:py-10">
                {children}
              </main>
              <FooterSection />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
