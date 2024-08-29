import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingNav from "./components/ui/FloatingNav";
import { NavbarDemo } from "./components/NavbarDemo";
import Footer from "./components/Footer";
import SignInNavbarAddition from "./components/SignInNavbarAddition";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OMANET UG",
  description: "OMANET UGANDA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex"><NavbarDemo/><SignInNavbarAddition/></div>
        
        {/* <FloatingNav/> */}
        {children}
        <Footer/>
        </body>
    </html>
  );
}
