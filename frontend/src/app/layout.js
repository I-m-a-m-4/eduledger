import { DM_Sans } from "next/font/google";
import "./globals.css";
import Web3Provider from "@/providers/Web3Provider";
import BackendStatus from "@/components/BackendStatus";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "EduVault - Decentralized Educational Materials Sharing",
  description: "Share and monetize your educational materials on the blockchain with EduVault",
  icons: {
    icon: "/logo.png",              // general favicon
    shortcut: "/logo.png",          // legacy shortcut icon
    apple: "/logo.png"     // optional iOS icon (place in public/ if used)
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} font-sans antialiased`}
      >
        <Web3Provider>
          <BackendStatus />
          {children}
        </Web3Provider>
      </body>
    </html>
  );
}
