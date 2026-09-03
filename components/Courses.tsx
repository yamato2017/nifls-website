import Image from "next/image";

function CourseInfo({
  period,
  hours,
}: {
  period: string;
  hours: string;
}) {
  return (
    <div className="mt-5 flex max-w-[520px] overflow-hidden rounded-[14px] border border-[#dceaf4] bg-white shadow-[0_7px_20px_rgba(40,94,135,0.07)]">
      <div className="flex flex-1 items-center gap-3 px-4 py-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#07366f] text-[#efba37]">
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M16 3v4M8 3v4M3 10h18" />
          </svg>
        </div>

        <div>
          <p className="text-[10px] font-bold text-[#55728d]">修業期間</p>
          <p className="mt-0.5 text-[17px] font-bold text-[#c88e19]">
            {period}
          </p>
        </div>
      </div>

      <div className="my-3 w-px bg-[#d7e5ef]" />

      <div className="flex flex-1 items-center gap-3 px-4 py-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#07366f] text-[#efba37]">
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>
        </div>

        <div>
          <p className="text-[10px] font-bold text-[#55728d]">授業時間</p>
          <p className="mt-0.5 text-[17px] font-bold text-[#c88e19]">
            {hours}
          </p>
        </div>
      </div>
    </div>
  );
}

function CourseButton({
  href = "#contact",
  reverse = false,
}: {
  href?: string;
  reverse?: boolean;
}) {
  return (
    <a
      href={href}
      className="group mt-5 inline-flex min-w-[210px] items-center justify-between gap-5 rounded-[10px] bg-[#07366f] px-5 py-3 text-[14px] font-bold tracking-[0.08em] text-white shadow-[0_8px_18px_rgba(7,54,111,0.16)] transition duration-300 hover:-translate-y-[2px] hover:bg-[#0a4488]"
    >
      {reverse && (
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#efb938] text-[17px] font-bold text-[#07366f] transition duration-300 group-hover:-translate-x-1">
          ←
        </span>
      )}

      <span className="flex-1 text-center">詳しく見る</span>

      {!reverse && (
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#efb938] text-[17px] font-bold text-[#07366f] transition duration-300 group-hover:translate-x-1">
          →
        </span>
      )}
    </a>
  );
}

export default function Courses() {
  return (
    <section
      id="courses"
      className="relative overflow-hidden bg-[#f8fcff] px-5 py-14 sm:px-8 lg:px-10"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute left-[-20px] top-[25px] select-none font-serif text-[90px] font-bold tracking-[0.04em] text-[#eaf3fb] sm:text-[120px] lg:text-[140px]">
        COURSES
      </div>

      <div className="absolute right-[-160px] top-[-190px] h-[520px] w-[520px] rounded-full border border-[#e3bd59]/40" />
      <div className="absolute right-[-105px] top-[-145px] h-[430px] w-[430px] rounded-full border-[18px] border-[#e6f5fd]/70" />

      <div
        className="pointer-events-none absolute right-[4%] top-[45px] h-[125px] w-[170px] opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, #49aee7 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* SECTION TITLE */}
        <div className="relative mb-10 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-9 bg-[#d5a02a]" />
            <p className="text-[13px] font-bold tracking-[0.24em] text-[#c58d18]">
              COURSES
            </p>
            <span className="h-px w-9 bg-[#d5a02a]" />
          </div>

          <h2
            className="mt-3 text-[40px] font-semibold tracking-[0.08em] text-[#07366f] sm:text-[46px]"
            style={{
              fontFamily:
                '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
            }}
          >
            コース紹介
          </h2>

          <p className="mt-2 text-[15px] font-semibold tracking-[0.14em] text-[#174777]">
            未来につながる日本語を学ぶ
          </p>

          <div className="mx-auto mt-3 h-[2px] w-10 bg-[#d9a22a]" />
        </div>

        {/* APRIL COURSE */}
        <div className="relative grid items-stretch lg:grid-cols-2">
          <div className="relative z-10 min-h-[330px]">
            <div className="absolute bottom-[-8px] left-0 top-[-12px] w-[105px] rounded-l-[24px] bg-[#07366f]" />

            <div className="absolute bottom-[13px] left-[50px] right-[18px] top-[12px] rounded-[24px] border-2 border-[#e3b642]" />

            <div className="absolute bottom-[18px] left-[64px] right-[14px] top-[8px] overflow-hidden rounded-[22px] bg-white shadow-[0_16px_36px_rgba(7,54,111,0.14)]">
              <Image
                src="/hero.jpg"
                alt="名古屋国際外語学院 授業風景"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            <div
              className="absolute bottom-[10px] left-[14px] h-[65px] w-[74px] opacity-90"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #efbd37 2px, transparent 2px)",
                backgroundSize: "14px 14px",
              }}
            />
          </div>

          <div className="relative flex min-h-[330px] items-center overflow-hidden rounded-r-[26px] bg-gradient-to-r from-[#ffffff] to-[#eaf6ff] px-8 py-7 lg:px-12">
            <div
              className="absolute right-[22px] top-[8px] text-[80px] font-bold leading-none text-[#d9ebf8]/70"
              style={{ fontFamily: "Georgia, serif" }}
            >
              APR
            </div>

            <div className="relative z-10 w-full">
              <p className="text-[11px] font-bold tracking-[0.22em] text-[#c58d18]">
                APRIL ENTRY
              </p>

              <div className="mt-1 flex flex-wrap items-end gap-x-6 gap-y-2">
                <h3
                  className="text-[34px] font-semibold tracking-[0.04em] text-[#07366f]"
                  style={{
                    fontFamily:
                      '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                  }}
                >
                  4月入学
                </h3>

                <div className="mb-1 h-[36px] w-px bg-[#bad7ea]" />

                <p
                  className="text-[24px] font-semibold text-[#07366f]"
                  style={{
                    fontFamily:
                      '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                  }}
                >
                  2年コース
                </p>
              </div>

              <div className="mt-2 h-[2px] w-9 bg-[#dda62d]" />

              <p className="mt-4 max-w-[620px] text-[14px] font-medium leading-[1.85] text-[#334e68]">
                しっかりとした学習期間で日本語力を段階的に高め、
                大学・大学院・専門学校への進学を目指すコースです。
              </p>

              <CourseInfo period="2年" hours="1,600時間" />
              <CourseButton />
            </div>
          </div>
        </div>

        {/* JULY COURSE */}
        <div className="relative mt-5 grid items-stretch lg:grid-cols-2">
          <div className="relative order-2 flex min-h-[330px] items-center overflow-hidden rounded-l-[26px] bg-gradient-to-l from-[#ffffff] to-[#f2f9ff] px-8 py-7 lg:order-1 lg:px-12">
            <div
              className="absolute left-[22px] top-[8px] text-[80px] font-bold leading-none text-[#d9ebf8]/70"
              style={{ fontFamily: "Georgia, serif" }}
            >
              JUL
            </div>

            <div className="relative z-10 ml-auto w-full max-w-[620px] lg:text-right">
              <p className="text-[11px] font-bold tracking-[0.22em] text-[#c58d18]">
                JULY ENTRY
              </p>

              <div className="mt-1 flex flex-wrap items-end gap-x-6 gap-y-2 lg:justify-end">
                <h3
                  className="text-[34px] font-semibold tracking-[0.04em] text-[#07366f]"
                  style={{
                    fontFamily:
                      '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                  }}
                >
                  7月入学
                </h3>

                <div className="mb-1 hidden h-[36px] w-px bg-[#bad7ea] sm:block" />

                <p
                  className="text-[24px] font-semibold text-[#07366f]"
                  style={{
                    fontFamily:
                      '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                  }}
                >
                  1年9ヶ月コース
                </p>
              </div>

              <div className="mt-2 h-[2px] w-9 bg-[#dda62d] lg:ml-auto" />

              <p className="mt-4 text-[14px] font-medium leading-[1.85] text-[#334e68]">
                日本語を効率的に学びながら、進学に必要な力を
                バランスよく身につけるコースです。
              </p>

              <div className="lg:ml-auto">
                <CourseInfo period="1年9ヶ月" hours="1,400時間" />
              </div>

              <div className="lg:flex lg:justify-end">
                <CourseButton reverse />
              </div>
            </div>
          </div>

          <div className="relative order-1 min-h-[330px] lg:order-2">
            <div className="absolute bottom-[-8px] right-0 top-[-12px] w-[105px] rounded-r-[24px] bg-[#07366f]" />

            <div className="absolute bottom-[13px] left-[18px] right-[50px] top-[12px] rounded-[24px] border-2 border-[#e3b642]" />

            <div className="absolute bottom-[18px] left-[14px] right-[64px] top-[8px] overflow-hidden rounded-[22px] bg-white shadow-[0_16px_36px_rgba(7,54,111,0.14)]">
              <Image
                src="/class2.jpg"
                alt="名古屋国際外語学院 授業風景"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            <div
              className="absolute bottom-[10px] right-[14px] h-[65px] w-[74px] opacity-90"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #efbd37 2px, transparent 2px)",
                backgroundSize: "14px 14px",
              }}
            />
          </div>
        </div>

        {/* OCTOBER COURSE */}
        <div className="relative mt-5 grid items-stretch lg:grid-cols-2">
          <div className="relative z-10 min-h-[330px]">
            <div className="absolute bottom-[-8px] left-0 top-[-12px] w-[105px] rounded-l-[24px] bg-[#07366f]" />

            <div className="absolute bottom-[13px] left-[50px] right-[18px] top-[12px] rounded-[24px] border-2 border-[#e3b642]" />

            <div className="absolute bottom-[18px] left-[64px] right-[14px] top-[8px] overflow-hidden rounded-[22px] bg-white shadow-[0_16px_36px_rgba(7,54,111,0.14)]">
              <Image
                src="/class1.jpg"
                alt="名古屋国際外語学院 授業風景"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[center_65%]"
              />
            </div>

            <div
              className="absolute bottom-[10px] left-[14px] h-[65px] w-[74px] opacity-90"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #efbd37 2px, transparent 2px)",
                backgroundSize: "14px 14px",
              }}
            />
          </div>

          <div className="relative flex min-h-[330px] items-center overflow-hidden rounded-r-[26px] bg-gradient-to-r from-[#ffffff] to-[#eaf6ff] px-8 py-7 lg:px-12">
            <div
              className="absolute right-[22px] top-[8px] text-[80px] font-bold leading-none text-[#d9ebf8]/70"
              style={{ fontFamily: "Georgia, serif" }}
            >
              OCT
            </div>

            <div className="relative z-10 w-full">
              <p className="text-[11px] font-bold tracking-[0.22em] text-[#c58d18]">
                OCTOBER ENTRY
              </p>

              <div className="mt-1 flex flex-wrap items-end gap-x-6 gap-y-2">
                <h3
                  className="text-[34px] font-semibold tracking-[0.04em] text-[#07366f]"
                  style={{
                    fontFamily:
                      '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                  }}
                >
                  10月入学
                </h3>

                <div className="mb-1 h-[36px] w-px bg-[#bad7ea]" />

                <p
                  className="text-[24px] font-semibold text-[#07366f]"
                  style={{
                    fontFamily:
                      '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                  }}
                >
                  1年6ヶ月コース
                </p>
              </div>

              <div className="mt-2 h-[2px] w-9 bg-[#dda62d]" />

              <p className="mt-4 max-w-[620px] text-[14px] font-medium leading-[1.85] text-[#334e68]">
                短期間で日本語力を伸ばしながら、
                大学・大学院・専門学校への進学を目指すコースです。
              </p>

              <CourseInfo period="1年6ヶ月" hours="1,200時間" />
              <CourseButton />
            </div>
          </div>
        </div>

        {/* BOTTOM NOTE */}
        <div className="mt-9 flex justify-center">
          <div className="flex items-center gap-3 rounded-full border border-[#d8e8f3] bg-white px-7 py-3 shadow-[0_6px_18px_rgba(34,86,125,0.06)]">
            <span className="h-2 w-2 rounded-full bg-[#d8a22d]" />

            <p className="text-[12px] font-medium tracking-[0.04em] text-[#48677f]">
              コースの詳細・出願条件についてはお問い合わせください。
            </p>
          </div>
        </div>

        {/* BOTTOM CITY SILHOUETTE */}
        <div className="pointer-events-none mt-7 h-[58px] opacity-[0.12]">
          <svg
            viewBox="0 0 1200 100"
            className="h-full w-full"
            fill="#4aa6df"
          >
            <rect x="0" y="70" width="25" height="30" />
            <rect x="32" y="50" width="28" height="50" />
            <rect x="68" y="65" width="22" height="35" />
            <rect x="98" y="40" width="34" height="60" />
            <rect x="140" y="58" width="28" height="42" />
            <polygon points="200,100 220,42 240,100" />
            <rect x="216" y="25" width="8" height="45" />
            <rect x="275" y="55" width="35" height="45" />
            <rect x="320" y="35" width="40" height="65" />
            <rect x="370" y="62" width="25" height="38" />
            <path d="M445 100V65h70v35z" />
            <path d="M452 65l28-20 28 20" />
            <rect x="476" y="32" width="8" height="25" />
            <rect x="560" y="50" width="28" height="50" />
            <rect x="598" y="68" width="25" height="32" />
            <rect x="635" y="42" width="38" height="58" />
            <polygon points="735,100 760,30 785,100" />
            <rect x="756" y="12" width="8" height="42" />
            <rect x="820" y="62" width="30" height="38" />
            <rect x="860" y="45" width="34" height="55" />
            <rect x="905" y="68" width="28" height="32" />
            <path d="M980 100V65h65v35z" />
            <path d="M988 65l25-18 25 18" />
            <rect x="1080" y="52" width="28" height="48" />
            <rect x="1118" y="38" width="35" height="62" />
            <rect x="1162" y="65" width="38" height="35" />
          </svg>
        </div>
      </div>
    </section>
  );
}