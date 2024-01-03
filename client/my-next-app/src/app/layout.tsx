import type { Metadata } from "next";
// import { Inter } from 'next/font/google'
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { Toaster, toast } from 'sonner';
import { isMobile } from "react-device-detect";
import Mobile from "./mobile/page";
import "react-toastify/dist/ReactToastify.css";

// const inter = Inter({ subsets: ['latin'] })

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
        {/* {isMobile ? <Mobile /> : children} */}
        {/* <div>
          <ToastContainer theme="colored" />
        </div> */}
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
