import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aethrion CX — AI-Powered Customer Experience Platform | AthenaServ Infotech",
  description:
    "Aethrion CX is an enterprise AI-powered customer experience platform that unifies omnichannel contact center, AI automation, sentiment analytics, agent assist, quality management, and Customer 360 in one workspace.",
  keywords:
    "AI customer experience platform, customer experience platform, AI contact center, omnichannel contact center, AI customer service, customer experience automation, conversational AI, AI agent assist, sentiment analytics, customer 360, enterprise customer experience",
  authors: [{ name: "AthenaServ Infotech" }],
  openGraph: {
    title: "Aethrion CX — AI-Powered Customer Experience Platform",
    description:
      "One intelligent workspace for every customer interaction. Unify voice, chat, email, WhatsApp, analytics, and AI automation with Aethrion CX.",
    type: "website",
    locale: "en_US",
    siteName: "Aethrion CX by AthenaServ Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aethrion CX — AI-Powered Customer Experience Platform",
    description:
      "Turn every customer interaction into a resolution. Enterprise-grade AI CX platform by AthenaServ Infotech.",
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
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
