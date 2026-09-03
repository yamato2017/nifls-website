import Header from "@/components/Header";
import Footer from "@/components/Footer";

type DocumentItem = {
  title: string;
  category: string;
  file: string;
};

type ArchiveYear = {
  year: string;
  items: DocumentItem[];
};

const featured2026: DocumentItem[] = [
  {
    title: "自己点検",
    category: "学校評価",
    file: "/jikotenken26.pdf",
  },
  {
    title: "課程修了者一覧表",
    category: "修了者",
    file: "/katei26.pdf",
  },
  {
    title: "2026年度 第1回 JLPT 結果一覧表",
    category: "JLPT",
    file: "/jlpt2601.pdf",
  },
  {
    title: "2026年度 第2回 JLPT 結果一覧表",
    category: "JLPT",
    file: "/jlpt2602.pdf",
  },
];

const recentYears: ArchiveYear[] = [
  {
    year: "2025",
    items: [
      { title: "自己点検", category: "学校評価", file: "/jikotenken25.pdf" },
      { title: "課程修了者一覧表", category: "修了者", file: "/katei25.pdf" },
      {
        title: "2025年度 第1回 JLPT 結果一覧表",
        category: "JLPT",
        file: "/jlpt2501.pdf",
      },
      {
        title: "2025年度 第2回 JLPT 結果一覧表",
        category: "JLPT",
        file: "/jlpt2502.pdf",
      },
    ],
  },
  {
    year: "2024",
    items: [
      { title: "自己点検", category: "学校評価", file: "/jikotenken24.pdf" },
      { title: "課程修了者一覧表", category: "修了者", file: "/katei24.pdf" },
      {
        title: "2024年度 第1回 JLPT 結果一覧表",
        category: "JLPT",
        file: "/jlpt2401.pdf",
      },
      {
        title: "2024年度 第2回 JLPT 結果一覧表",
        category: "JLPT",
        file: "/jlpt2402.pdf",
      },
    ],
  },
];

const archiveYears: ArchiveYear[] = [
  {
    year: "2023",
    items: [
      { title: "自己点検", category: "学校評価", file: "/jikotenken23.pdf" },
      { title: "課程修了者一覧表", category: "修了者", file: "/katei23.pdf" },
      {
        title: "2023年度 第1回 JLPT 結果一覧表",
        category: "JLPT",
        file: "/jlpt2301.pdf",
      },
      {
        title: "2023年度 第2回 JLPT 結果一覧表",
        category: "JLPT",
        file: "/jlpt2302.pdf",
      },
    ],
  },
  {
    year: "2022",
    items: [
      { title: "自己点検", category: "学校評価", file: "/jikotenken22.pdf" },
      { title: "課程修了者一覧表", category: "修了者", file: "/katei22.pdf" },
      {
        title: "2022年度 第1回 JLPT 結果一覧表",
        category: "JLPT",
        file: "/jlpt2201.pdf",
      },
      {
        title: "2022年度 第2回 JLPT 結果一覧表",
        category: "JLPT",
        file: "/jlpt2202.pdf",
      },
    ],
  },
  {
    year: "2021",
    items: [
      { title: "自己点検", category: "学校評価", file: "/jikotenken21.pdf" },
      { title: "課程修了者一覧表", category: "修了者", file: "/katei21.pdf" },
      {
        title: "2021年度 第1回 JLPT 結果一覧表",
        category: "JLPT",
        file: "/jlpt2101.pdf",
      },
      {
        title: "2021年度 第2回 JLPT 結果一覧表",
        category: "JLPT",
        file: "/jlpt2102.pdf",
      },
    ],
  },
  {
    year: "2020",
    items: [
      { title: "自己点検", category: "学校評価", file: "/jikotenken20.pdf" },
      { title: "課程修了者一覧表", category: "修了者", file: "/katei20.pdf" },
      {
        title: "2020年度 第1回 JLPT 結果一覧表",
        category: "JLPT",
        file: "/jlpt2001.pdf",
      },
      {
        title: "2020年度 第2回 JLPT 結果一覧表",
        category: "JLPT",
        file: "/jlpt2002.pdf",
      },
    ],
  },
  {
    year: "2019",
    items: [
      { title: "自己点検", category: "学校評価", file: "/jikotenken19.pdf" },
      { title: "課程修了者一覧表", category: "修了者", file: "/katei19.pdf" },
      {
        title: "2019年度 第1回 JLPT 結果一覧表",
        category: "JLPT",
        file: "/jlpt1901.pdf",
      },
      {
        title: "2019年度 第2回 JLPT 結果一覧表",
        category: "JLPT",
        file: "/jlpt1902.pdf",
      },
    ],
  },
];

function PdfIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h4" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 5h5v5" />
      <path d="m19 5-8 8" />
      <path d="M17 13v6H5V7h6" />
    </svg>
  );
}

function FeaturedCard({
  doc,
  index,
}: {
  doc: DocumentItem;
  index: number;
}) {
  const styles = [
    {
      icon: "bg-[#E6F7FB] text-[#11ABC6]",
      tag: "bg-[#E8F7FB] text-[#129DB8]",
      line: "bg-[#14BBD5]",
    },
    {
      icon: "bg-[#FFF4DC] text-[#D59A18]",
      tag: "bg-[#FFF5DE] text-[#B67F10]",
      line: "bg-[#DCA31F]",
    },
    {
      icon: "bg-[#EDF3FF] text-[#3970C6]",
      tag: "bg-[#EDF3FF] text-[#3970C6]",
      line: "bg-[#3970C6]",
    },
    {
      icon: "bg-[#F4EDFF] text-[#8059C7]",
      tag: "bg-[#F4EDFF] text-[#8059C7]",
      line: "bg-[#8059C7]",
    },
  ];

  const s = styles[index];

  return (
    <a
      href={doc.file}
      target="_blank"
      rel="noreferrer"
      className="group relative overflow-hidden rounded-[18px] border border-[#D9E5EC] bg-white px-5 py-5 shadow-[0_10px_28px_rgba(8,38,74,.045)] transition duration-300 hover:-translate-y-[2px] hover:shadow-[0_15px_34px_rgba(8,38,74,.08)]"
    >
      <div className={`absolute left-0 top-0 h-[4px] w-full ${s.line}`} />

      <div className="flex items-start justify-between gap-4">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-[12px] ${s.icon}`}
        >
          <PdfIcon />
        </div>

        <span className="text-[8px] font-black tracking-[0.15em] text-[#9AA7B1]">
          PDF
        </span>
      </div>

      <span
        className={`mt-4 inline-flex rounded-full px-2.5 py-1 text-[8px] font-black ${s.tag}`}
      >
        {doc.category}
      </span>

      <h3 className="mt-2 min-h-[44px] text-[14px] font-black leading-[1.55] text-[#08264B]">
        {doc.title}
      </h3>

      <div className="mt-4 flex items-center justify-between border-t border-[#E5ECEF] pt-3">
        <span className="text-[9.5px] font-black text-[#4B6478]">
          PDFを見る
        </span>

        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F0F6F9] text-[#118CB8] transition group-hover:bg-[#082B57] group-hover:text-white">
          <ExternalIcon />
        </span>
      </div>
    </a>
  );
}

function YearBand({ year }: { year: ArchiveYear }) {
  return (
    <details className="group overflow-hidden rounded-[15px] border border-[#DBE6EC] bg-white">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-4 transition hover:bg-[#F8FBFD]">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#082B57] text-[13px] font-black text-white">
            {year.year.slice(2)}
          </div>

          <div>
            <p className="text-[14px] font-black text-[#08264B]">
              {year.year}年度
            </p>

            <p className="mt-0.5 text-[9px] font-bold text-[#93A1AC]">
              {year.items.length}件の公開資料
            </p>
          </div>
        </div>

        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF6F9] text-[#0A8FBF] transition group-open:rotate-90">
          <ArrowIcon />
        </span>
      </summary>

      <div className="border-t border-[#E2E9EE] bg-[#F8FBFD] px-5">
        {year.items.map((item) => (
          <a
            key={item.title}
            href={item.file}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-4 border-b border-[#E4EAEE] py-3 last:border-b-0"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#FFF0F0] text-[#E8414B]">
                <PdfIcon />
              </span>

              <span className="text-[10.5px] font-bold text-[#435D71]">
                {item.title}
              </span>
            </div>

            <span className="flex items-center gap-1 text-[9px] font-black text-[#0A88B8]">
              PDF
              <ExternalIcon />
            </span>
          </a>
        ))}
      </div>
    </details>
  );
}

export default function InformationPage() {
  return (
    <>
      <Header />

      <main className="overflow-hidden bg-[#F5F9FC] text-[#08264B]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#071F43]">
          <div className="grid min-h-[360px] lg:grid-cols-[0.9fr_1.1fr]">
            {/* LEFT */}
            <div className="relative z-20 flex items-center bg-[#071F43] px-6 py-14 sm:px-10 lg:px-14 xl:pl-[8vw]">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.55) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.55) 1px,transparent 1px)",
                  backgroundSize: "52px 52px",
                }}
              />

              <div className="pointer-events-none absolute -left-20 bottom-[-100px] h-[260px] w-[260px] rounded-full border border-[#2CCAE1]/10" />

              <div className="relative max-w-[620px]">
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-10 bg-[#2CC9DF]" />

                  <span className="text-[10px] font-black tracking-[0.32em] text-[#51D9E9]">
                    PUBLIC INFORMATION & REPORTS
                  </span>
                </div>

                <h1 className="mt-5 text-[44px] font-black leading-none tracking-[0.04em] text-white sm:text-[56px] lg:text-[64px]">
                  情報公開
                </h1>

                <p className="mt-6 max-w-[590px] text-[12.5px] font-medium leading-[2] text-white/65 sm:text-[13px]">
                  自己点検、課程修了者一覧表、JLPT結果一覧表など、
                  当学院が公開する各種資料をご確認いただけます。
                </p>

                <div className="mt-7 flex h-[3px] w-[110px]">
                  <span className="flex-1 bg-[#22C5DC]" />
                  <span className="w-[32px] bg-[#E4AA22]" />
                </div>
              </div>
            </div>

            {/* RIGHT PHOTO */}
<div className="relative min-h-[300px] overflow-hidden bg-[#DCEAF3] lg:min-h-[360px]">
  <img
    src="/schoolhonko.jpg"
    alt="名古屋国際外語学院"
    className="absolute inset-0 h-full w-full object-cover object-[center_62%]"
  />

  {/* LEFT SIDE GRADIENT */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#071F43]/45 via-[#071F43]/8 to-transparent" />

  {/* BOTTOM GRADIENT */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#071F43]/45 via-transparent to-transparent" />

  {/* CYAN + GOLD DECORATION */}
  <div className="absolute left-0 top-0 h-full w-[5px] bg-[#29C7DE]" />
  <div className="absolute left-[14px] top-0 h-[38%] w-[4px] bg-[#E4AA22]" />

  {/* TOP RIGHT CORNER */}
  <div className="absolute right-6 top-6 h-[70px] w-[70px] border-r-[3px] border-t-[3px] border-white/45" />

  {/* SCHOOL LABEL */}
  <div className="absolute bottom-6 right-7 text-right">
    <span className="block text-[9px] font-black tracking-[0.28em] text-white/75">
      NIFLS
    </span>

    <span className="mt-1 block text-[14px] font-black text-white drop-shadow-md">
      名古屋国際外語学院
    </span>
  </div>
</div>
          </div>
        </section>

        {/* INFO TILES */}
        <section className="relative z-30 -mt-[30px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-[1500px] overflow-hidden rounded-[18px] border border-[#D9E5EC] bg-white shadow-[0_18px_45px_rgba(7,36,72,.12)] md:grid-cols-3">
            <div className="relative flex items-center gap-4 border-b border-[#E0E8ED] px-5 py-5 md:border-b-0 md:border-r lg:px-7">
              <div className="absolute left-0 top-0 h-full w-[4px] bg-[#16BDD7]" />

              <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#E7F8FB] text-[#0BA7C3]">
                <PdfIcon />
              </div>

              <div>
                <p className="text-[12px] font-black text-[#08264B]">公開資料</p>
                <p className="mt-1 text-[10px] font-medium text-[#778B9A]">
                  学校運営に関する資料を公開
                </p>
              </div>
            </div>

            <div className="relative flex items-center gap-4 border-b border-[#E0E8ED] px-5 py-5 md:border-b-0 md:border-r lg:px-7">
              <div className="absolute left-0 top-0 h-full w-[4px] bg-[#DFA51F]" />

              <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#FFF4DA] text-[#D29816]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="5" width="16" height="15" rx="2" />
                  <path d="M8 3v4M16 3v4M4 10h16" />
                </svg>
              </div>

              <div>
                <p className="text-[12px] font-black text-[#08264B]">
                  年度別アーカイブ
                </p>
                <p className="mt-1 text-[10px] font-medium text-[#778B9A]">
                  過去の公開資料も確認できます
                </p>
              </div>
            </div>

            <div className="relative flex items-center gap-4 px-5 py-5 lg:px-7">
              <div className="absolute left-0 top-0 h-full w-[4px] bg-[#4778C8]" />

              <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#EAF0FF] text-[#4775C7]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3 4 7v5c0 5 3.4 8 8 9 4.6-1 8-4 8-9V7z" />
                  <path d="m8.5 12 2.2 2.2 4.8-5" />
                </svg>
              </div>

              <div>
                <p className="text-[12px] font-black text-[#08264B]">
                  情報の透明性
                </p>
                <p className="mt-1 text-[10px] font-medium text-[#778B9A]">
                  正確で分かりやすい情報公開
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2026 */}
        <section className="bg-gradient-to-b from-[#F4F9FC] to-white pb-10 pt-16 lg:pb-12 lg:pt-20">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
            <div className="mb-6 flex items-end justify-between">
              <div>
                <span className="text-[9px] font-black tracking-[0.25em] text-[#0BAFCB]">
                  LATEST DOCUMENTS
                </span>

                <h2 className="mt-2 text-[27px] font-black text-[#08264B] sm:text-[32px]">
                  2026年度 公開資料
                </h2>
              </div>

              <span className="hidden rounded-full bg-[#082B57] px-4 py-2 text-[9px] font-black text-white sm:inline-flex">
                CURRENT
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {featured2026.map((doc, index) => (
                <FeaturedCard key={doc.title} doc={doc} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* RECENT */}
        <section className="bg-white py-9 lg:py-10">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-6 lg:grid-cols-[250px_1fr]">
              <div>
                <span className="text-[9px] font-black tracking-[0.25em] text-[#D39A16]">
                  RECENT ARCHIVE
                </span>

                <h2 className="mt-2 text-[25px] font-black leading-[1.45] text-[#08264B]">
                  最近の公開資料
                </h2>

                <p className="mt-4 text-[10.5px] font-medium leading-[1.8] text-[#718493]">
                  年度を選択すると、その年度の資料をご確認いただけます。
                </p>
              </div>

              <div className="space-y-3">
                {recentYears.map((year) => (
                  <YearBand key={year.year} year={year} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ARCHIVE */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#EDF4F8] to-[#F6FAFC] py-10 lg:py-12">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
            <div className="mb-6">
              <span className="text-[9px] font-black tracking-[0.25em] text-[#0BAFCB]">
                ARCHIVE TIMELINE
              </span>

              <h2 className="mt-2 text-[27px] font-black text-[#08264B] sm:text-[31px]">
                過去の公開資料
              </h2>

              <p className="mt-3 text-[10.5px] font-medium text-[#718493]">
                2019年度から2023年度までの資料を年度別に確認できます。
              </p>
            </div>

            <div className="relative">
              <div className="absolute bottom-4 left-[20px] top-4 hidden w-[2px] bg-gradient-to-b from-[#17BDD7] via-[#DDA51F] to-[#4976C4] md:block" />

              <div className="space-y-3">
                {archiveYears.map((year, index) => (
                  <details
                    key={year.year}
                    className="group relative overflow-hidden rounded-[16px] border border-[#D7E4EB] bg-white shadow-[0_7px_20px_rgba(8,38,74,.035)]"
                  >
                    <summary className="grid cursor-pointer list-none gap-4 px-5 py-4 transition hover:bg-[#F8FBFD] md:grid-cols-[65px_150px_1fr_36px] md:items-center">
                      <div className="relative hidden md:flex">
                        <span
                          className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-[4px] border-[#EDF4F8] text-[10px] font-black text-white ${
                            index === 0
                              ? "bg-[#13B8D3]"
                              : index === 1
                                ? "bg-[#DDA51F]"
                                : index === 2
                                  ? "bg-[#3C7BBB]"
                                  : index === 3
                                    ? "bg-[#4C79C1]"
                                    : "bg-[#815ABF]"
                          }`}
                        >
                          {year.year.slice(2)}
                        </span>
                      </div>

                      <div>
                        <p className="text-[15px] font-black text-[#08264B]">
                          {year.year}年度
                        </p>

                        <p className="mt-0.5 text-[8.5px] font-bold text-[#95A3AE]">
                          {year.items.length}件の資料
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {year.items.map((item) => (
                          <span
                            key={item.title}
                            className="rounded-full bg-[#F2F6F8] px-2.5 py-1 text-[8.5px] font-bold text-[#607386]"
                          >
                            {item.category}
                          </span>
                        ))}
                      </div>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF6F9] text-[#0A8FBF] transition group-open:rotate-90">
                        <ArrowIcon />
                      </span>
                    </summary>

                    <div className="border-t border-[#E1E9EE] bg-[#F8FBFD] px-5 py-1 md:pl-[215px]">
                      {year.items.map((item) => (
                        <a
                          key={item.title}
                          href={item.file}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-between gap-4 border-b border-[#E2E9ED] py-3 last:border-b-0"
                        >
                          <div className="flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#FFF0F0] text-[#E8414B]">
                              <PdfIcon />
                            </span>

                            <span className="text-[10.5px] font-bold text-[#435D71]">
                              {item.title}
                            </span>
                          </div>

                          <span className="flex shrink-0 items-center gap-1 text-[9px] font-black text-[#0A88B8]">
                            PDF
                            <ExternalIcon />
                          </span>
                        </a>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="bg-white py-6">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col gap-3 rounded-[14px] border border-[#DCE6EB] bg-[#F7FAFC] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[10px] font-medium text-[#718493]">
                公開資料についてご不明な点がございましたら、お問い合わせください。
              </p>

              <a
                href="/#contact"
                className="inline-flex items-center gap-2 text-[10px] font-black text-[#0A89BA]"
              >
                お問い合わせ
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}