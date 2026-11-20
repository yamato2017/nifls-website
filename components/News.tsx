
type NewsItem = {
  date: string;
  category: "重要" | "入学案内" | "学校行事";
  title: string;
  href?: string;
  action?: "pdf" | "photos";
  isNew?: boolean;
};

const newsItems: NewsItem[] = [
  {
    date: "2026.08.01",
    category: "重要",
    title: "長期休暇期間のお知らせ",
    href: "/chokikikan.pdf",
    action: "pdf",
  },
  {
    date: "2026.11.20",
    category: "入学案内",
    title: "2028年4月生の入学申請に関する事前相談を受け付けています",
    isNew: true,
  },
  {
    date: "2026.11.20",
    category: "入学案内",
    title: "2027年4月生の在留資格認定証明書交付申請が無事完了しました",
  },
  {
    date: "2026.10.13",
    category: "学校行事",
    title: "スポーツ大会を実施しました",
    href: "https://www.facebook.com/media/set/?set=a.1702560451447283&type=3",
    action: "photos",
  },
  {
    date: "2026.07.16",
    category: "学校行事",
    title: "BBQを実施しました",
    href: "https://www.facebook.com/media/set/?set=a.1622945279408801&type=3",
    action: "photos",
  },
  {
    date: "2026.05.20",
    category: "学校行事",
    title: "2026年4月生の入学式を挙行しました",
    href: "https://www.facebook.com/media/set/?set=a.1573882340981762&type=3",
    action: "photos",
  },
];

function ArrowUpRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function News() {
  return (
    <section
      id="news"
      className="relative bg-[#F4F8FC] px-5 py-7 sm:px-8 lg:px-12 lg:py-9"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* SECTION HEADING */}
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-[2px] w-7 bg-[#EFB62E]" />

              <span className="text-[9px] font-black tracking-[0.25em] text-[#0B72B2]">
                NEWS & UPDATES
              </span>
            </div>

            <h2 className="mt-1.5 text-[25px] font-black tracking-[0.04em] text-[#07366F] sm:text-[29px]">
              お知らせ
            </h2>
          </div>

          <div className="hidden items-center gap-1.5 pb-1 sm:flex">
            <span className="h-[3px] w-10 rounded-full bg-[#07366F]" />
            <span className="h-[3px] w-5 rounded-full bg-[#18BBD6]" />
            <span className="h-[3px] w-3 rounded-full bg-[#EFB62E]" />
          </div>
        </div>

        {/* NEWS PANEL */}
        <div className="overflow-hidden rounded-[15px] border border-[#D5E2EF] bg-white shadow-[0_7px_22px_rgba(7,54,111,.06)]">
          {/* TOP ACCENT */}
          <div className="flex h-[4px] w-full">
            <span className="w-[78%] bg-[#07366F]" />
            <span className="w-[16%] bg-[#18BBD6]" />
            <span className="flex-1 bg-[#EFB62E]" />
          </div>

          {newsItems.map((item, index) => {
            const rowClass = [
              "group relative flex flex-col gap-2.5 px-4 py-3.5",
              "transition-colors duration-200",
              "sm:px-6",
              "lg:grid lg:min-h-[62px]",
              "lg:grid-cols-[112px_105px_minmax(0,1fr)_105px]",
              "lg:items-center lg:gap-4 lg:py-2.5",
              index === 0
                ? "bg-[#F0F5FC] hover:bg-[#E9F2FC]"
                : "hover:bg-[#F5F9FD]",
              index !== newsItems.length - 1
                ? "border-b border-[#E5ECF3]"
                : "",
            ].join(" ");

            const content = (
              <>
                {index === 0 && (
                  <span className="absolute inset-y-0 left-0 w-[3px] bg-[#EFB62E]" />
                )}

                {/* DATE + CATEGORY */}
                <div className="flex items-center gap-3 lg:contents">
                  <span className="shrink-0 text-[11px] font-bold tabular-nums text-[#55718D]">
                    {item.date}
                  </span>

                  <span
                    className={`inline-flex w-fit min-w-[76px] shrink-0 items-center justify-center rounded-[6px] px-2.5 py-1 text-[10px] font-black ${
                      item.category === "重要"
                        ? "bg-[#FFF0BD] text-[#976000]"
                        : item.category === "入学案内"
                          ? "bg-[#E7F1FC] text-[#075DA2]"
                          : "bg-[#E7F6F2] text-[#087C68]"
                    }`}
                  >
                    {item.category === "重要" && (
                      <span className="mr-1.5 h-[5px] w-[5px] rounded-full bg-[#DFA21E]" />
                    )}
                    {item.category}
                  </span>
                </div>

                {/* TITLE */}
                <div className="flex min-w-0 items-start gap-2.5 lg:items-center">
                  {item.isNew && (
                    <span className="mt-0.5 shrink-0 rounded-[4px] bg-[#E93558] px-1.5 py-0.5 text-[9px] font-black text-white lg:mt-0">
                      NEW
                    </span>
                  )}

                  <p className="min-w-0 text-[12px] font-bold leading-[1.65] text-[#113A68] transition-colors group-hover:text-[#087AB8] sm:text-[13px]">
                    {item.title}
                  </p>
                </div>

                {/* ACTION */}
                <div className="flex justify-end">
                  {item.action === "pdf" ? (
                    <span className="inline-flex items-center gap-1.5 rounded-[7px] border border-[#BCD3EA] bg-white px-3 py-1.5 text-[10px] font-black text-[#075DA2] transition-colors group-hover:border-[#0C8EBF] group-hover:bg-[#EAF6FD]">
                      PDFを見る
                      <ArrowUpRightIcon />
                    </span>
                  ) : item.action === "photos" ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-black text-[#087DB7] transition-colors group-hover:text-[#07366F]">
                      写真を見る
                      <ArrowUpRightIcon />
                    </span>
                  ) : (
                    <span className="hidden lg:block" />
                  )}
                </div>
              </>
            );

            return item.href ? (
              <a
                key={`${item.date}-${item.title}`}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={rowClass}
              >
                {content}
              </a>
            ) : (
              <div
                key={`${item.date}-${item.title}`}
                className={rowClass}
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
