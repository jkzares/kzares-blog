import NextTopLoader from 'nextjs-toploader';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kzares",
  description: "Personal Blog || Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color='white' />
        {children}
      </body>
    </html>
  );
}
