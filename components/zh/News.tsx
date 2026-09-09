import Link from "next/link";

const newsItems = [
  {
    date: "2026.08.01",
    category: "通知",
    title: "2027年4月生 招生中",
    href: "/zh/admission",
    pdf: false,
  },
  {
    date: "2026.08.01",
    category: "通知",
    title: "长期休假通知",
    href: "/chokikikan.pdf",
    pdf: true,
  },
];

export default function News() {
  return (
    <section className="bg-[#EFF6FB] px-5 pb-7">
      <div className="mx-auto max-w-[1700px] overflow-hidden rounded-[12px] border border-[#9AB6D1] bg-white shadow-[0_5px_16px_rgba(28,72,110,0.06)]">
        <div className="grid md:grid-cols-[145px_1fr]">
          {/* NEWS TITLE */}
          <div className="relative flex items-center justify-center overflow-hidden bg-[#07336E] px-6 py-6 text-[16px] font-semibold tracking-[0.08em] text-white md:items-start md:pt-[22px]">
            <div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full border border-white/10" />
            <div className="absolute -right-8 top-[-25px] h-20 w-20 rounded-full border border-[#E4B53C]/15" />

            <span className="relative z-10 mr-2 text-[#E4B53C]">
              ◇
            </span>

            <span className="relative z-10">
              NEWS
            </span>
          </div>

          {/* MOBILE NEWS */}
          <div className="block px-5 md:hidden">
            {newsItems.map((item, index) => {
              const content = (
                <>
                  {/* DATE + CATEGORY */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[13px] font-medium text-[#284E72]">
                      {item.date}
                    </span>

                    <span className="shrink-0 rounded-[6px] bg-[#0D55A8] px-4 py-2 text-[11px] font-bold text-white">
                      {item.category}
                    </span>
                  </div>

                  {/* TITLE */}
                  <p className="mt-4 w-full whitespace-normal break-keep text-left text-[17px] font-bold leading-[1.65] text-[#113A68]">
                    {item.title}
                  </p>

                  {/* BUTTON */}
                  <div className="mt-4 flex justify-end">
                    {item.pdf ? (
                      <span className="inline-flex items-center gap-2 rounded-[8px] border border-[#B9D8E9] bg-[#F3FAFE] px-5 py-2.5 text-[12px] font-bold text-[#087DB6]">
                        查看PDF
                        <span className="text-[14px]">↗</span>
                      </span>
                    ) : (
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F1F7FB] text-[18px] font-bold text-[#6D91AA] transition group-hover:translate-x-1 group-hover:bg-[#E4F5FA] group-hover:text-[#0A9FC1]">
                        →
                      </span>
                    )}
                  </div>
                </>
              );

              const className = `group block py-5 ${
                index !== newsItems.length - 1
                  ? "border-b border-[#DCE7EF]"
                  : ""
              }`;

              return item.pdf ? (
                <a
                  key={`mobile-${item.date}-${item.title}`}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={className}
                >
                  {content}
                </a>
              ) : (
                <Link
                  key={`mobile-${item.date}-${item.title}`}
                  href={item.href}
                  prefetch={false}
                  className={className}
                >
                  {content}
                </Link>
              );
            })}
          </div>

          {/* TABLET / DESKTOP NEWS */}
          <div className="hidden px-6 md:block">
            {newsItems.map((item, index) => {
              const content = (
                <>
                  {/* DATE */}
                  <span className="shrink-0 text-[13px] font-medium text-[#284E72]">
                    {item.date}
                  </span>

                  {/* CATEGORY */}
                  <span className="rounded-[5px] bg-[#0D55A8] px-2 py-1.5 text-center text-[11px] font-bold text-white">
                    {item.category}
                  </span>

                  {/* TITLE */}
                  <p className="min-w-0 break-keep text-[15px] font-bold leading-[1.6] text-[#113A68] transition group-hover:text-[#0A69B5]">
                    {item.title}
                  </p>

                  {/* BUTTON */}
                  {item.pdf ? (
                    <span className="flex shrink-0 items-center gap-2 rounded-[7px] border border-[#B9D8E9] bg-[#F3FAFE] px-4 py-2 text-[11px] font-bold text-[#087DB6] transition duration-200 group-hover:border-[#19B9D3] group-hover:bg-[#EAF9FC]">
                      查看PDF
                      <span className="text-[13px]">↗</span>
                    </span>
                  ) : (
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F1F7FB] text-[17px] font-bold text-[#6D91AA] transition duration-200 group-hover:translate-x-1 group-hover:bg-[#E4F5FA] group-hover:text-[#0A9FC1]">
                      →
                    </span>
                  )}
                </>
              );

              const className = `group grid min-h-[82px] grid-cols-[125px_90px_minmax(0,1fr)_auto] items-center gap-5 py-3 transition ${
                index !== newsItems.length - 1
                  ? "border-b border-[#DCE7EF]"
                  : ""
              }`;

              return item.pdf ? (
                <a
                  key={`desktop-${item.date}-${item.title}`}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={className}
                >
                  {content}
                </a>
              ) : (
                <Link
                  key={`desktop-${item.date}-${item.title}`}
                  href={item.href}
                  prefetch={false}
                  className={className}
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}