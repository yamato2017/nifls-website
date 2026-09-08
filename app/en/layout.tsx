import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nagoya International Foreign Language School",
  description:
    "Nagoya International Foreign Language School provides Japanese language education and comprehensive support for international students who aim to pursue higher education in Japan.",
};

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}