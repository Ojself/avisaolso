import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const body = localFont({
  src: [
    {
      path: "./fonts/OpenSans300.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/OpenSans400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/OpenSans700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-body",
});

const display = localFont({
  src: [
    {
      path: "./fonts/national-2-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/national-2-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/national-2-narrow-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Oslo Byråd utvider skjenketid til klokken 06:00",
  description: "Byrådet tillater utvidet skjenketid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='no'>
      <body className={`${body.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
