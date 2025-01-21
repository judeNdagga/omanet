import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import FloatingNav from "./components/ui/FloatingNav";
import { NavbarDemo } from "./components/NavbarDemo";
import Footer from "./components/Footer";
import SignInNavbarAddition from "./components/SignInNavbarAddition";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-Montserrat",
});

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
      <body className={montserrat.variable}>
        <div className="flex">
          <NavbarDemo />
          <SignInNavbarAddition />
        </div>

        {/* <FloatingNav/> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
