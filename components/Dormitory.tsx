import Image from "next/image";

const dormitoryPoints = [
  {
    number: "01",
    title: "通学に便利",
    main: "学院から",
    highlight: "7～15分",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-7 w-7"
      >
        <path d="M3 21h18" />
        <path d="M5 21V9h14v12" />
        <path d="M4 9l8-5 8 5" />
        <path d="M9 13h2v3H9z" />
        <path d="M14 13h2v3h-2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "無料Wi-Fi完備",
    main: "快適な",
    highlight: "ネット環境",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        className="h-7 w-7"
      >
        <path d="M4 9a12 12 0 0116 0" />
        <path d="M7 13a8 8 0 0110 0" />
        <path d="M10 17a3.5 3.5 0 014 0" />
        <circle cx="12" cy="20" r=".8" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "1日3食を提供",
    main: "朝・昼・夕",
    highlight: "3食",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        className="h-7 w-7"
      >
        <path d="M6 3v8" />
        <path d="M3 3v5a3 3 0 006 0V3" />
        <path d="M6 11v10" />
        <path d="M15 3v18" />
        <path d="M15 3c4 2 5 6 5 9h-5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "毎食2種類から選べる",
    main: "毎日の食事を",
    highlight: "2種類",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M4 7h16" />
        <path d="M6 7l1 13h10l1-13" />
        <path d="M9 3h6" />
        <path d="M8 12h8" />
        <path d="M9 16h6" />
      </svg>
    ),
  },
];

export default function Dormitory() {
  return (
    <section
      id="dormitory"
      className="relative overflow-hidden bg-[#eef7fc] px-5 py-16 sm:px-8 lg:px-10"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-[#ddb24c]/30" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-[310px] w-[310px] rounded-full border-[18px] border-white/50" />

      <div
        className="pointer-events-none absolute bottom-8 left-[3%] h-[120px] w-[170px] opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, #3b9bd5 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        {/* TITLE */}
        <div className="mb-9 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#d4a22f]" />

            <p className="text-[12px] font-bold tracking-[0.25em] text-[#c58d18]">
              STUDENT DORMITORY
            </p>

            <span className="h-px w-10 bg-[#d4a22f]" />
          </div>

          <h2
            className="mt-3 text-[42px] font-semibold tracking-[0.1em] text-[#07366f]"
            style={{
              fontFamily:
                '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
            }}
          >
            学生寮
          </h2>

          <div className="mx-auto mt-3 h-[2px] w-10 bg-[#d6a22e]" />
        </div>

        {/* MAIN CARD */}
        <div className="overflow-hidden rounded-[28px] border border-[#d3e3ee] bg-white shadow-[0_20px_55px_rgba(24,78,116,0.11)]">
          <div className="grid lg:grid-cols-[46%_54%]">
            {/* PHOTO */}
            <div className="relative min-h-[440px] overflow-hidden bg-[#dcecf5] lg:min-h-[500px]">
              <Image
                src="/hostel1.jpg"
                alt="名古屋国際外語学院 学生寮"
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover object-center"
              />

              {/* PHOTO GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#062f67]/75 via-transparent to-transparent" />

              {/* PHOTO BADGE */}
              <div className="absolute left-7 top-7 rounded-full border border-white/40 bg-[#07366f]/90 px-5 py-2 text-[12px] font-bold tracking-[0.12em] text-white backdrop-blur-sm">
                STUDENT DORMITORY
              </div>

              {/* PHOTO BOTTOM TEXT */}
              <div className="absolute bottom-7 left-7 right-7">
                <div className="mb-3 h-[3px] w-12 rounded-full bg-[#efb83a]" />

                <p
                  className="text-[27px] font-semibold tracking-[0.06em] text-white"
                  style={{
                    fontFamily:
                      '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                  }}
                >
                  安心できる住環境で
                  <br />
                  日本での新生活を。
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex flex-col justify-center bg-gradient-to-br from-white via-[#fbfdff] to-[#eef8fe] px-7 py-8 lg:px-10">
              <div className="pointer-events-none absolute right-4 top-2 font-serif text-[86px] font-bold leading-none text-[#e8f3fa]">
                LIFE
              </div>

              {/* 4 POINTS */}
              <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {dormitoryPoints.map((item) => (
                  <div
                    key={item.number}
                    className="group relative min-h-[170px] overflow-hidden rounded-[18px] border border-[#d8e6ef] bg-white p-5 shadow-[0_7px_20px_rgba(27,81,119,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#d9b04c] hover:shadow-[0_13px_28px_rgba(27,81,119,0.12)]"
                  >
                    {/* NUMBER */}
                    <span className="absolute right-4 top-3 font-serif text-[32px] font-bold text-[#edf4f9]">
                      {item.number}
                    </span>

                    <div className="relative z-10 flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#07366f] text-[#efba3b] shadow-[0_5px_12px_rgba(7,54,111,0.16)]">
                        {item.icon}
                      </div>

                      <p className="text-[15px] font-bold text-[#123e6b]">
                        {item.title}
                      </p>
                    </div>

                    <div className="relative z-10 mt-5 border-t border-dashed border-[#cddde8] pt-4">
                      <p className="text-[13px] font-semibold text-[#526d83]">
                        {item.main}
                      </p>

                      <p
                        className="mt-1 text-[25px] font-bold leading-none text-[#c78d1b]"
                        style={{
                          fontFamily:
                            '"Georgia","Yu Mincho","Hiragino Mincho ProN",serif',
                        }}
                      >
                        {item.highlight}
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#d9a52e] transition-all duration-300 group-hover:w-full" />
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="/student-life#dormitory"
                className="group relative z-10 mt-5 flex w-full items-center justify-between rounded-[13px] bg-[#07366f] px-7 py-[15px] text-white shadow-[0_9px_20px_rgba(7,54,111,0.18)] transition duration-300 hover:-translate-y-[2px] hover:bg-[#0b4587]"
              >
                <div>
                  <p className="text-[10px] font-bold tracking-[0.18em] text-[#e8bd52]">
                    MORE INFORMATION
                  </p>

                  <p className="mt-1 text-[15px] font-bold tracking-[0.08em]">
                    詳しくはこちら
                  </p>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#efba3b] text-[20px] font-bold text-[#07366f] transition duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}