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
        className={`${dmSans.className} text-black dark:text-white bg-white dark:bg-black font-normal text-sm`}>
        {children}
      </body>
    </html>
  );
}
