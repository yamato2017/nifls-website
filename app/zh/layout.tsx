import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "名古屋国际外语学院",
  description:
    "名古屋国际外语学院官方网站。为希望在日本升学的留学生提供日语教育及学习生活支持。",
};

export default function ZhLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="zh-site"
      style={{
        fontFamily:
          '"Microsoft YaHei","PingFang SC","Noto Sans SC","Source Han Sans SC","SimHei",sans-serif',
      }}
    >
      {children}
    </div>
  );
}