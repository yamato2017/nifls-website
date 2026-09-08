import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "名古屋国際外語学院",
    template: "%s | 名古屋国際外語学院",
  },
  description:
    "名古屋国際外語学院は、名古屋で日本語を学び、日本での進学を目指す留学生をサポートする日本語学校です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}