import Footer from "@/src/components/footer/footer";
import Header from "@/src/components/header/header";
import "./globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dmSans",
});

export const metadata = {
  title: "Photosnap Multi Page Website",
  description: "A Frontend Mentor Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`relative ${dmSans.className} bg-brand-white pt-[72px] text-sm font-normal text-brand-black`}>
        <Header />
        <div className="mx-auto max-w-[1440px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
