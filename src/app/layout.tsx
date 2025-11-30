import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nityanand Jha — Portfolio",
  description: "Senior PHP & Automation Developer — portfolio"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
