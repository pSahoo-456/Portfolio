import type { Metadata } from 'next';
import { Syne, Space_Mono } from 'next/font/google';
import './globals.css';

const syne = Syne({ 
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const spaceMono = Space_Mono({ 
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Prakash Sahoo | AI/ML Engineer & Researcher',
  description: 'Final-year CSE student at GIFT Autonomous specializing in AI/ML, LLM & RAG Systems, and Deep Learning. DRDO Intern, IEEE Published Author, Hackathon Champion.',
  keywords: ['AI/ML Engineer', 'Deep Learning', 'RAG Systems', 'LLM', 'Prakash Sahoo', 'Portfolio', 'GIFT Autonomous'],
  authors: [{ name: 'Prakash Sahoo' }],
  creator: 'Prakash Sahoo',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://prakashsahoo.vercel.app',
    title: 'Prakash Sahoo | AI/ML Engineer & Researcher',
    description: 'Final-year CSE student specializing in AI/ML, LLM & RAG Systems. DRDO Intern, IEEE Published Author.',
    siteName: 'Prakash Sahoo Portfolio',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
