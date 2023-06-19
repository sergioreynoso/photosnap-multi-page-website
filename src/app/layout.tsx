import Footer from "@/src/components/footer";
import Header from "@/src/components/header";
import "./globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ weight: ["400", "500", "700"], subsets: ["latin"] });

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
        className={`${dmSans.className}  bg-brand-white text-sm font-normal text-brand-black dark:bg-brand-black dark:text-brand-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
