
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { SessionProvider } from "./component/SessionProvider";
import UserButton from "./component/UserButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Js Chat GPT App",
  description: "CHatGpt brought to you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased px-2 md:px-5`}
        >
          <header className="text-white font-bold bg-green-900 text-2xl flex justify-between px-6">
            <div className="flex flex-grow">
              <Link href="/">GPT Chat</Link>
              <Link href="/about" className="ml-5 font-light">About us</Link>
            </div>
            <div>
              <UserButton />
            </div>
          </header>
          <div className="flex flex-col md:flex-row">
            <div className="flex-grow"> {children}</div>
          </div>

        </body>
      </html>
    </SessionProvider>
  );
}
