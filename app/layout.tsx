import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Script from 'next/script';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
config.autoAddCss = false;

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { googleSansBold, googleSansMedium, jakartaSans, outfitSans, robotoMono, jetbrainsMono } from './fonts';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Akshay Patel',
  description: 'Personal Portfolio Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tagId: string = '' + process.env.NEXT_PUBLIC_TAG_ID;
  const beacon = {
    token: '' + process.env.NEXT_PUBLIC_CF_TOKEN,
  };
  return (
    <html lang="en" className="scroll-smooth">
      {/* <head>
        <script src="http://localhost:3000" type="text/JSX"></script>
      </head> */}
      <Script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon={JSON.stringify(beacon)}
      ></Script>
      <GoogleTagManager gtmId={tagId} />
      <body
        className={`${geistSans.variable} ${geistMono.variable} 
        ${googleSansBold.variable} ${googleSansMedium.variable} 
        ${jakartaSans.variable} ${outfitSans.variable} 
        ${robotoMono.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId={tagId} />
    </html>
  );
}
