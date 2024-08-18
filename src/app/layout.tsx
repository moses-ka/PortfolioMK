import type { Metadata } from "next";
import "./globals.css";
import Nav from './nav'


export const metadata: Metadata = {
  title: "Moses KM",
  description: "Moses KM's Portfilio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='body'>
        <Nav></Nav>
        {children}
        </body>
    </html>
  );
}
