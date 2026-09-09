import Link from "next/link";

function SchoolIcon({ teal = false }: { teal?: boolean }) {
  const stroke = teal ? "#4BD4D0" : "#E9B743";

  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 48 48"
      fill="none"
      stroke={stroke}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 40h32" />
      <path d="M11 40V20h26v20" />
      <path d="M8 20l16-10 16 10" />
      <path d="M24 10V5" />
      <path d="M24 5l6 3-6 3" />
      <path d="M16 25h5v6h-5z" />
      <path d="M27 25h5v6h-5z" />
      <path d="M21 34h6v6h-6z" />
    </svg>
  );
}

export default function SchoolBuildings() {
  return (
    <section className="bg-[#EFF6FB] px-5 pb-5">
      <div className="mx-auto max-w-[1700px] overflow-hidden rounded-[16px] border border-[#DFBD6C] bg-[#FFFDF8] shadow-[0_5px_16px_rgba(56,81,99,0.05)]">
        {/* TITLE */}
        <div className="flex items-center justify-center gap-4 border-b border-[#E8DDC4] py-4">
          <span className="h-px w-12 bg-[#D7A637]" />

          <h2
            className="text-[25px] font-semibold tracking-[0.08em] text-[#092F69]"
            style={{
              fontFamily:
                '"Noto Serif SC","Songti SC","SimSun","Yu Mincho",serif',
            }}
          >
            校舍
          </h2>

          <span className="h-px w-12 bg-[#D7A637]" />
        </div>

        <div className="mx-auto grid max-w-[1100px] md:grid-cols-2">
          {/* MAIN SCHOOL */}
          <Link
            href="/zh/contact#access"
            prefetch={false}
            className="group flex items-center justify-center gap-6 border-b border-[#E6DDCA] px-6 py-6 transition duration-300 hover:bg-[#F6FBFE] md:border-b-0 md:border-r md:px-10"
          >
            <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[#07336E] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_8px_20px_rgba(7,51,110,0.22)]">
              <SchoolIcon />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-4">
                <p
                  className="text-[25px] font-semibold text-[#092F69]"
                  style={{
                    fontFamily:
                      '"Noto Serif SC","Songti SC","SimSun","Yu Mincho",serif',
                  }}
                >
                  本校
                </p>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEF5FA] text-[16px] font-bold text-[#D7A637] transition duration-300 group-hover:translate-x-1 group-hover:bg-[#07336E] group-hover:text-[#F0BD46]">
                  →
                </span>
              </div>

              <p className="mt-2 text-[13px] font-medium leading-[1.7] text-[#455D73]">
                〒455-0003 爱知县名古屋市港区辰巳町30-18
              </p>

              <p className="mt-2 text-[9px] font-bold tracking-[0.16em] text-[#B78319]">
                ACCESS
              </p>
            </div>
          </Link>

          {/* CHITOSE SCHOOL */}
          <Link
            href="/zh/contact#access"
            prefetch={false}
            className="group flex items-center justify-center gap-6 px-6 py-6 transition duration-300 hover:bg-[#F4FCFC] md:px-10"
          >
            <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[#118E98] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_8px_20px_rgba(17,142,152,0.22)]">
              <SchoolIcon teal />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-4">
                <p
                  className="text-[25px] font-semibold text-[#092F69]"
                  style={{
                    fontFamily:
                      '"Noto Serif SC","Songti SC","SimSun","Yu Mincho",serif',
                  }}
                >
                  千年校
                </p>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEF8F8] text-[16px] font-bold text-[#118E98] transition duration-300 group-hover:translate-x-1 group-hover:bg-[#118E98] group-hover:text-white">
                  →
                </span>
              </div>

              <p className="mt-2 text-[13px] font-medium leading-[1.7] text-[#455D73]">
                〒455-0003 爱知县名古屋市港区辰巳町1-45
              </p>

              <p className="mt-2 text-[9px] font-bold tracking-[0.16em] text-[#118E98]">
                ACCESS
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}