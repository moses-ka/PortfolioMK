import type { Metadata } from "next";
import "./globals.css";
import Nav from './nav'
import LoadingAnimation from "./loadingAnimation";

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
    
    <html  className="" lang="en"
    
    >
      <body className='body'>
        <Nav />
        {children}
      </body>
    </html>
   
  );
}
