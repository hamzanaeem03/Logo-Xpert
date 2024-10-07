import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const audiowide = localFont({
  src: "./fonts/Audiowide-Regular.ttf",
  variable: "--font-audio-wide",
  weight: "100 200 300 400 500 600 700 800 900",
});
const clashDisplay = localFont({
  src: "./fonts/ClashDisplay-Regular.otf",
  variable: "--font-clash-display",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata = {
  title: "360 Logo Xpert",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${audiowide.variable} ${clashDisplay.variable} antialiased`}
        >
        {children}
      </body>
    </html>
  );
}
