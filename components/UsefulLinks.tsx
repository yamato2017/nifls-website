const universities = [
  {
    name: "明治大学大学院",
    href: "https://www.meiji.ac.jp/",
  },
  {
    name: "日本大学",
    href: "https://www.nihon-u.ac.jp/",
  },
  {
    name: "中京大学",
    href: "https://www.chukyo-u.ac.jp/",
  },
  {
    name: "愛知大学",
    href: "https://www.aichi-u.ac.jp/",
  },
  {
    name: "昭和女子大学大学院",
    href: "https://www.swu.ac.jp/",
  },
];

const automotiveSchools = [
  {
    name: "トヨタ名古屋自動車大学校",
    href: "https://toyota-tcn.ac.jp/",
  },
  {
    name: "日産愛知自動車大学校",
    href: "https://www.nissan-gakuen.ac.jp/aichi/",
  },
  {
    name: "名鉄自動車大学校",
    href: "https://www.meitetsu.ac.jp/mats/",
  },
];

const supportLinks = [
  {
    name: "出入国在留管理庁",
    sub: "在留手続き",
    href: "https://www.moj.go.jp/isa/?hl=ja",
  },
  {
    name: "外国人生活支援ポータル",
    sub: "日本での生活情報",
    href: "https://www.moj.go.jp/isa/support/portal/index.html",
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export default function UsefulLinks() {
  return (
    <section className="relative overflow-hidden bg-[#f7fbfe] px-5 py-11 sm:px-8 lg:px-10">
      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* TITLE */}
        <div className="mb-7 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#d6a42e]" />

            <p className="text-[11px] font-bold tracking-[0.24em] text-[#c58d18]">
              CAREER & SUPPORT
            </p>

            <span className="h-px w-8 bg-[#d6a42e]" />
          </div>

          <h2
            className="mt-2 text-[34px] font-semibold tracking-[0.07em] text-[#07366f]"
            style={{
              fontFamily:
                '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
            }}
          >
            進学先・留学生サポート
          </h2>

          <div className="mx-auto mt-3 h-[2px] w-9 bg-[#d6a42e]" />
        </div>

        {/* 5 UNIVERSITIES */}
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="rounded-full bg-[#07366f] px-3 py-1 text-[9px] font-bold tracking-[0.12em] text-[#f0bc43]">
              UNIVERSITY
            </span>

            <p className="text-[12px] font-bold text-[#315979]">
              大学・大学院
            </p>

            <div className="h-px flex-1 bg-[#dce7ee]" />
          </div>

          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
            {universities.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex min-h-[72px] items-center justify-between overflow-hidden rounded-[12px] border border-[#d6e4ed] bg-white px-4 py-3 shadow-[0_5px_14px_rgba(25,75,110,0.06)] transition duration-300 hover:-translate-y-[2px] hover:border-[#d3a53a] hover:shadow-[0_9px_20px_rgba(25,75,110,0.10)]"
              >
                <span className="absolute left-0 top-0 h-full w-[3px] bg-[#d6a42e]" />

                <div className="min-w-0">
                  <p className="text-[8px] font-bold tracking-[0.15em] text-[#b98a29]">
                    0{index + 1}
                  </p>

                  <p className="mt-1 text-[13px] font-bold leading-[1.4] text-[#07366f]">
                    {item.name}
                  </p>
                </div>

                <span className="ml-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#edf5fa] text-[#07366f] transition duration-300 group-hover:bg-[#07366f] group-hover:text-[#efba39]">
                  <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* 3 AUTOMOTIVE */}
        <div className="mt-6">
          <div className="mb-3 flex items-center gap-3">
            <span className="rounded-full bg-[#07366f] px-3 py-1 text-[9px] font-bold tracking-[0.12em] text-[#f0bc43]">
              AUTOMOTIVE
            </span>

            <p className="text-[12px] font-bold text-[#315979]">
              自動車専門学校
            </p>

            <div className="h-px flex-1 bg-[#dce7ee]" />
          </div>

          <div className="mx-auto grid max-w-[1050px] gap-2.5 md:grid-cols-3">
            {automotiveSchools.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[76px] items-center justify-between rounded-[13px] border border-[#cfdfea] bg-gradient-to-r from-white to-[#f1f8fc] px-5 py-3 shadow-[0_5px_14px_rgba(25,75,110,0.06)] transition duration-300 hover:-translate-y-[2px] hover:border-[#d2a239]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#07366f] text-[11px] font-bold text-[#efba39]">
                    0{index + 1}
                  </span>

                  <p className="text-[14px] font-bold leading-[1.4] text-[#07366f]">
                    {item.name}
                  </p>
                </div>

                <span className="ml-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#07366f] shadow-sm transition duration-300 group-hover:bg-[#07366f] group-hover:text-[#efba39]">
                  <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* 2 SUPPORT */}
        <div className="mt-6">
          <div className="mb-3 flex items-center gap-3">
            <span className="rounded-full bg-[#07366f] px-3 py-1 text-[9px] font-bold tracking-[0.12em] text-[#f0bc43]">
              SUPPORT
            </span>

            <p className="text-[12px] font-bold text-[#315979]">
              留学生サポート
            </p>

            <div className="h-px flex-1 bg-[#dce7ee]" />
          </div>

          <div className="mx-auto grid max-w-[760px] gap-3 md:grid-cols-2">
            {supportLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[70px] items-center justify-between rounded-[12px] border border-[#d5e4ed] bg-white px-5 py-3 shadow-[0_5px_14px_rgba(25,75,110,0.06)] transition duration-300 hover:-translate-y-[2px] hover:border-[#d3a53a]"
              >
                <div>
                  <p className="text-[9px] font-bold tracking-[0.12em] text-[#ba8b29]">
                    OFFICIAL INFORMATION
                  </p>

                  <p className="mt-1 text-[14px] font-bold text-[#07366f]">
                    {item.name}
                  </p>

                  <p className="mt-0.5 text-[10px] font-medium text-[#6c8192]">
                    {item.sub}
                  </p>
                </div>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#07366f] text-[#efba39] transition duration-300 group-hover:translate-x-0.5">
                  <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}