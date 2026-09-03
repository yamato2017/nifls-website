import "./globals.css";

export const metadata = {
  title: "名古屋国際外語学院",
  description: "Nagoya International Foreign Language School",
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