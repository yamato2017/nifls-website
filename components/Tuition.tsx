const fees = [
  {
    entry: "APRIL ENTRY",
    month: "04",
    course: "進学2年コース",
    label: "2年間総額",
    total: "¥1,776,500",
    detail: null,
  },
  {
    entry: "JULY ENTRY",
    month: "07",
    course: "進学1年9ヶ月コース",
    label: "総額",
    total: "¥1,578,500",
    detail: [
      ["1年目", "¥929,500"],
      ["2年目", "¥649,000"],
    ],
  },
  {
    entry: "OCTOBER ENTRY",
    month: "10",
    course: "進学1年6ヶ月コース",
    label: "総額",
    total: "¥1,353,000",
    detail: null,
  },
];

function GraduationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M2.5 9 12 4l9.5 5L12 14 2.5 9Z" />
      <path d="M6 11.5V16c3.8 2.8 8.2 2.8 12 0v-4.5" />
      <path d="M21.5 9v6" />
    </svg>
  );
}

export default function Tuition() {
  return (
    <section
      id="tuition"
      className="relative overflow-hidden bg-[#f7fbfe] px-5 py-14 sm:px-8 lg:px-10"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -left-32 top-[-180px] h-[390px] w-[390px] rounded-full border border-[#d9ad3c]/25" />

      <div className="pointer-events-none absolute -right-20 bottom-[-180px] h-[390px] w-[390px] rounded-full border-[24px] border-[#e9f5fc]" />

      <div
        className="pointer-events-none absolute right-[5%] top-[45px] h-[100px] w-[150px] opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, #399bd5 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        {/* TITLE */}
        <div className="mb-9 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-9 bg-[#d6a32d]" />

            <p className="text-[12px] font-bold tracking-[0.26em] text-[#c58d18]">
              SCHOOL FEE
            </p>

            <span className="h-px w-9 bg-[#d6a32d]" />
          </div>

          <h2
            className="mt-3 text-[40px] font-semibold tracking-[0.08em] text-[#07366f] sm:text-[44px]"
            style={{
              fontFamily:
                '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
            }}
          >
            学費について
          </h2>

          <div className="mx-auto mt-3 h-[2px] w-10 bg-[#d7a32d]" />
        </div>

        {/* THREE CARDS */}
        <div className="grid gap-4 md:grid-cols-3">
          {fees.map((fee, index) => (
            <a
              key={fee.entry}
              href="/tuition"
              className="group relative flex min-h-[270px] flex-col overflow-hidden rounded-[22px] border border-[#d5e6f1] bg-white shadow-[0_12px_30px_rgba(21,76,116,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#d6aa3e] hover:shadow-[0_18px_38px_rgba(21,76,116,0.14)]"
            >
              {/* TOP ACCENT */}
              <div
                className={`absolute left-0 top-0 h-[4px] w-full ${
                  index === 1
                    ? "bg-gradient-to-r from-[#d7a52f] via-[#efc358] to-[#d7a52f]"
                    : "bg-gradient-to-r from-[#07366f] via-[#168fc5] to-[#07366f]"
                }`}
              />

              {/* LARGE NUMBER */}
              <span className="pointer-events-none absolute right-4 top-2 font-serif text-[72px] font-bold leading-none text-[#edf5fa]">
                {fee.month}
              </span>

              <div className="relative z-10 flex flex-1 flex-col p-6">
                {/* ENTRY + ICON */}
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] ${
                      index === 1
                        ? "bg-[#fff5df] text-[#d29a22]"
                        : "bg-[#eaf5fc] text-[#0876b5]"
                    }`}
                  >
                    <GraduationIcon />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-[#c78e19]">
                      {fee.entry}
                    </p>

                    <h3
                      className="mt-1 text-[20px] font-bold tracking-[0.03em] text-[#07366f] lg:text-[22px]"
                      style={{
                        fontFamily:
                          '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                      }}
                    >
                      {fee.course}
                    </h3>
                  </div>
                </div>

                {/* DIVIDER */}
                <div className="my-4 h-px w-full bg-[#dce9f2]" />

                {/* JULY BREAKDOWN */}
                {fee.detail ? (
                  <div className="mb-3 grid grid-cols-2 gap-2">
                    {fee.detail.map(([year, amount]) => (
                      <div
                        key={year}
                        className="rounded-[10px] bg-[#f4f9fc] px-3 py-2"
                      >
                        <p className="text-[10px] font-bold text-[#668096]">
                          {year}
                        </p>

                        <p className="mt-0.5 text-[14px] font-bold text-[#174978]">
                          {amount}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mb-3 h-[46px]">
                    <p className="text-[11px] font-bold tracking-[0.08em] text-[#71879a]">
                      {fee.label}
                    </p>
                  </div>
                )}

                {/* TOTAL */}
                <div className="mt-auto flex items-end justify-between gap-3">
                  <div>
                    {fee.detail && (
                      <p className="mb-1 text-[10px] font-bold tracking-[0.08em] text-[#71879a]">
                        {fee.label}
                      </p>
                    )}

                    <p className="text-[29px] font-bold tracking-[-0.02em] text-[#07366f] lg:text-[32px]">
                      {fee.total}
                    </p>
                  </div>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#07366f] text-[19px] text-[#efba37] shadow-[0_6px_15px_rgba(7,54,111,0.18)] transition duration-300 group-hover:translate-x-1 group-hover:bg-[#0b478b]">
                    →
                  </span>
                </div>
              </div>

              {/* BOTTOM GOLD LINE */}
              <div className="h-[3px] w-0 bg-[#d7a32d] transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* MAIN CTA */}
        <div className="mt-7 flex justify-center">
          <a
            href="/tuition"
            className="group inline-flex min-w-[280px] items-center justify-between gap-8 rounded-[12px] bg-[#07366f] px-6 py-3.5 text-white shadow-[0_9px_22px_rgba(7,54,111,0.18)] transition duration-300 hover:-translate-y-[2px] hover:bg-[#0a4589]"
          >
            <div className="text-left">
              <p className="text-[9px] font-bold tracking-[0.18em] text-[#e6b746]">
                MORE INFORMATION
              </p>

              <p className="mt-0.5 text-[14px] font-bold tracking-[0.06em]">
                学費の詳細はこちら
              </p>
            </div>

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#efba37] text-[17px] font-bold text-[#07366f] transition duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}