import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from 'sonner';
import { isMobile } from "react-device-detect";
import Mobile from "./mobile/page";

export const metadata: Metadata = {
  title: "Deepdiive",
  description: "Ride the Wave of Better Conversations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {isMobile ? <Mobile /> : children}
        <Toaster richColors />
      </body>
    </html>
  );
}
