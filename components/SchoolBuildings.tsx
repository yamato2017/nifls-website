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
                '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
            }}
          >
            校舎
          </h2>

          <span className="h-px w-12 bg-[#D7A637]" />
        </div>

        <div className="mx-auto grid max-w-[1100px] md:grid-cols-2">

          {/* HONKO */}
          <div className="flex items-center justify-center gap-6 border-b border-[#E6DDCA] px-10 py-6 md:border-b-0 md:border-r">
            <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[#07336E]">
              <SchoolIcon />
            </div>

            <div>
              <p
                className="text-[25px] font-semibold text-[#092F69]"
                style={{
                  fontFamily:
                    '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                }}
              >
                本校
              </p>

              <p className="mt-2 text-[13px] font-medium text-[#455D73]">
                〒455-0003 愛知県名古屋市港区辰巳町30-18
              </p>
            </div>
          </div>

          {/* CHITOSE */}
          <div className="flex items-center justify-center gap-6 px-10 py-6">
            <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[#118E98]">
              <SchoolIcon teal />
            </div>

            <div>
              <p
                className="text-[25px] font-semibold text-[#092F69]"
                style={{
                  fontFamily:
                    '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                }}
              >
                千年校
              </p>

              <p className="mt-2 text-[13px] font-medium text-[#455D73]">
                〒455-0003 愛知県名古屋市港区辰巳町 1-45
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}