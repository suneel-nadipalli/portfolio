import type { Metadata } from "next";
import { Geist, Geist_Mono, Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";
import RootLayoutShell from './RootLayoutShell';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const pressStart2P = Press_Start_2P({ variable: "--font-press-start", weight: "400", subsets: ["latin"] });
const vt323 = VT323({ variable: '--font-vt323', weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: "The Sandbox",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${pressStart2P.variable} ${vt323.variable} antialiased`}>
        <RootLayoutShell>
          {children}
        </RootLayoutShell>
      </body>
    </html>
  );
}
