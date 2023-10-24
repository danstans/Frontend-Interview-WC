import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import ThemeRegistry from "@/components/theme/ThemeRegistry";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body
          className={montserrat.className}
          style={{ background: "#CDE7ED" }}
        >
          <Header hospitalName={"Hayes Valley Health San Francisco"} />
          {children}
        </body>
      </ThemeRegistry>
    </html>
  );
}
