import Image from "next/image";

const points = [
  {
    type: "shield",
    before: "開校以来、継続して",
    highlight: "適正校クラスⅠ",
  },
  {
    type: "train",
    before: "地下鉄名港線「東海通」駅から",
    highlight: "徒歩3分",
  },
  {
    type: "train",
    before: "名古屋駅から",
    highlight: "約20分",
  },
  {
    type: "school",
    before: "本校・千年校の",
    highlight: "2校舎",
  },
  {
    type: "bed",
    before: "",
    highlight: "学生寮",
    after: "完備",
  },
  {
    type: "food",
    before: "",
    highlight: "カフェテリア",
    after: "完備",
  },
  {
    type: "support",
    before: "進学から日本での生活まで",
    highlight: "総合的にサポート",
  },
];

function PointIcon({ type }: { type: string }) {
  if (type === "shield") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    );
  }

  if (type === "train") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="3" width="14" height="14" rx="2" />
        <path d="M8 7h8" />
        <path d="M8 11h8" />
        <path d="M8 21l3-4" />
        <path d="M16 21l-3-4" />
      </svg>
    );
  }

  if (type === "school") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21h18" />
        <path d="M5 21V9h14v12" />
        <path d="M4 9l8-5 8 5" />
        <path d="M9 13v5" />
        <path d="M12 13v5" />
        <path d="M15 13v5" />
      </svg>
    );
  }

  if (type === "bed") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 19v-8" />
        <path d="M21 19v-6" />
        <path d="M3 14h18" />
        <path d="M7 14V9h5a4 4 0 014 4v1" />
        <path d="M3 19h18" />
      </svg>
    );
  }

  if (type === "food") {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 3v8" />
        <path d="M3 3v5a3 3 0 006 0V3" />
        <path d="M6 11v10" />
        <path d="M15 3v18" />
        <path d="M15 3c4 2 5 6 5 9h-5" />
      </svg>
    );
  }

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="10" r="7" />
      <path d="M8 12l3 3 5-6" />
      <path d="M4 20l4-4" />
      <path d="M20 20l-4-4" />
    </svg>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-[#c8deed] bg-[#f4faff] px-6 py-16"
    >
      {/* TOP DECORATION */}
      <div className="absolute left-0 top-0 h-[4px] w-full bg-[#0a376f]" />
      <div className="absolute left-0 top-[4px] h-[2px] w-full bg-[#d8aa3f]" />

      {/* SOFT BACKGROUND */}
      <div className="absolute right-[-160px] top-[-140px] h-[500px] w-[500px] rounded-full bg-[#dff2fc]/55" />
      <div className="absolute bottom-[-160px] left-[-170px] h-[420px] w-[420px] rounded-full bg-[#e8f5fc]/75" />

      <div className="relative z-10 mx-auto max-w-[1540px]">
        <div className="grid items-center gap-5 lg:grid-cols-[44%_17%_39%]">

          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-[#d7a63a]" />

              <p className="text-[13px] font-bold tracking-[0.18em] text-[#c18c25]">
                ABOUT US
              </p>

              <span className="h-px w-8 bg-[#d7a63a]" />
            </div>

            <h2
              className="mt-4 text-[48px] font-semibold tracking-[0.02em] text-[#0a3269]"
              style={{
                fontFamily:
                  '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
              }}
            >
              学校紹介
            </h2>

            <p className="mt-5 text-[21px] font-bold tracking-[0.01em] text-[#183f69]">
              学びやすさと安心を備えた日本語教育環境
            </p>

            <div className="mt-3 h-[2px] w-14 bg-[#d8a638]" />

            {/* POINTS */}
            <div className="mt-7">
              {points.map((item, index) => (
                <div
                  key={`${item.type}-${index}`}
                  className={`flex items-center gap-4 py-[13px] ${
                    index !== points.length - 1
                      ? "border-b border-[#d7e3ec]"
                      : ""
                  }`}
                >
                  <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#0b376f] text-[#e3b441] shadow-[0_4px_10px_rgba(10,55,111,0.14)]">
                    <PointIcon type={item.type} />
                  </div>

                  <p className="text-[16px] font-semibold leading-[1.7] text-[#244967]">
                    {item.before}
                    {item.before && " "}

                    <span className="font-bold text-[#c78d1d]">
                      {item.highlight}
                    </span>

                    {item.after && (
                      <span className="ml-1 text-[#244967]">
                        {item.after}
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CENTER ART */}
          <div className="relative hidden h-[610px] lg:block">

            {/* CURVED ART */}
            <div className="absolute left-1/2 top-[-35px] h-[700px] w-[300px] -translate-x-1/2 overflow-hidden">
              <div className="absolute left-[15px] top-0 h-[730px] w-[320px] rounded-[50%] border-[2px] border-[#d8aa3f]/70" />

              <div className="absolute left-[48px] top-[8px] h-[715px] w-[305px] rounded-[50%] border-[16px] border-[#dff2fc]/90" />

              <div className="absolute left-[78px] top-[15px] h-[700px] w-[290px] rounded-[50%] border border-[#e8c871]/45" />
            </div>

            {/* BADGE 1 */}
            <div className="absolute left-[6px] top-[125px] flex items-center gap-3">
              <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#d7b254] bg-white shadow-[0_10px_24px_rgba(20,70,105,0.12)]">
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#0b376f] text-[#e6b43e]">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect x="5" y="3" width="14" height="14" rx="2" />
                    <path d="M8 7h8M8 11h8M8 21l3-4M16 21l-3-4" />
                  </svg>
                </div>
              </div>

              <div>
                <p className="text-[14px] font-bold text-[#173f69]">
                  東海通駅
                </p>

                <p className="mt-1 text-[15px] font-bold text-[#c78d1d]">
                  徒歩3分
                </p>

                <div className="mt-2 h-[2px] w-10 bg-[#d7aa3e]" />
              </div>
            </div>

            {/* BADGE 2 */}
            <div className="absolute left-[-18px] top-[305px] flex items-center gap-3">
              <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#d7b254] bg-white shadow-[0_10px_24px_rgba(20,70,105,0.12)]">
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#0b376f] text-[#e6b43e]">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M3 19v-8M21 19v-6M3 14h18M7 14V9h5a4 4 0 014 4v1M3 19h18" />
                  </svg>
                </div>
              </div>

              <div>
                <p className="text-[14px] font-bold text-[#173f69]">
                  学生寮
                </p>

                <p className="mt-1 text-[15px] font-bold text-[#c78d1d]">
                  完備
                </p>

                <div className="mt-2 h-[2px] w-10 bg-[#d7aa3e]" />
              </div>
            </div>

            {/* BADGE 3 */}
            <div className="absolute left-[8px] top-[485px] flex items-center gap-3">
              <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#d7b254] bg-white shadow-[0_10px_24px_rgba(20,70,105,0.12)]">
                <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#0b376f] text-[#e6b43e]">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M6 3v8M3 3v5a3 3 0 006 0V3M6 11v10M15 3v18M15 3c4 2 5 6 5 9h-5" />
                  </svg>
                </div>
              </div>

              <div>
                <p className="text-[14px] font-bold text-[#173f69]">
                  カフェテリア
                </p>

                <p className="mt-1 text-[15px] font-bold text-[#c78d1d]">
                  完備
                </p>

                <div className="mt-2 h-[2px] w-10 bg-[#d7aa3e]" />
              </div>
            </div>
          </div>

          {/* RIGHT PHOTO */}
          <div className="relative flex justify-start lg:pl-0">

            {/* BACK FRAME */}
            <div className="absolute left-[-14px] top-[-16px] h-[93%] w-[92%] rounded-[24px] border border-[#d9b35a]/45 bg-[#e2f4fd]" />

            {/* PHOTO CARD */}
            <div className="relative w-full max-w-[470px] overflow-hidden rounded-[22px] border border-white bg-white p-[8px] shadow-[0_20px_50px_rgba(20,78,118,0.16)]">

              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[15px] bg-[#eaf4fa]">
                <Image
                  src="/schoolchitoseko.jpg"
                  alt="名古屋国際外語学院 千年校"
                  fill
                  sizes="(max-width: 1024px) 90vw, 470px"
                  className="object-contain object-center"
                />
              </div>

              <div className="flex items-center justify-between gap-4 px-4 pb-3 pt-4">
                <div className="min-w-0">
                  <p className="text-[10px] font-bold tracking-[0.16em] text-[#c4932d]">
                    NAGOYA
                  </p>

                  <p className="mt-1 whitespace-nowrap text-[16px] font-bold text-[#0a376f]">
                    名古屋国際外語学院
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-[#c9ddea] bg-[#f3f9fd] px-4 py-2 text-[12px] font-bold text-[#315a7d]">
                  千年校
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="#school-details"
            className="group flex min-w-[330px] items-center justify-center gap-6 rounded-[8px] border border-[#d6a53a] bg-[#0a376f] px-10 py-[15px] text-[16px] font-bold text-white shadow-[0_8px_20px_rgba(10,55,111,0.16)] transition duration-300 hover:-translate-y-[2px] hover:bg-[#0d468b]"
          >
            学校紹介を見る

            <span className="text-[22px] text-[#e5b13f] transition duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* SKYLINE */}
        <div className="pointer-events-none mt-10 h-[85px] opacity-[0.16]">
          <svg
            viewBox="0 0 1200 120"
            className="h-full w-full"
            fill="#5aa6d9"
          >
            <rect x="10" y="70" width="28" height="50" />
            <rect x="45" y="55" width="32" height="65" />
            <rect x="84" y="78" width="40" height="42" />
            <rect x="135" y="48" width="38" height="72" />
            <rect x="180" y="62" width="26" height="58" />

            <circle
              cx="250"
              cy="86"
              r="28"
              fill="none"
              stroke="#5aa6d9"
              strokeWidth="5"
            />

            <line
              x1="250"
              y1="58"
              x2="250"
              y2="114"
              stroke="#5aa6d9"
              strokeWidth="4"
            />

            <line
              x1="222"
              y1="86"
              x2="278"
              y2="86"
              stroke="#5aa6d9"
              strokeWidth="4"
            />

            <rect x="320" y="45" width="35" height="75" />
            <rect x="366" y="68" width="28" height="52" />

            <polygon points="470,120 500,50 530,120" />
            <rect x="495" y="28" width="10" height="50" />

            <rect x="585" y="67" width="32" height="53" />
            <rect x="625" y="52" width="36" height="68" />
            <rect x="670" y="75" width="30" height="45" />

            <path d="M785 120V88h80v32H785z" />
            <path d="M795 88l30-20 30 20" />
            <path d="M805 68l20-14 20 14" />
            <rect x="819" y="40" width="12" height="28" />

            <rect x="930" y="60" width="35" height="60" />
            <rect x="975" y="44" width="42" height="76" />
            <rect x="1028" y="70" width="32" height="50" />
            <rect x="1070" y="55" width="38" height="65" />
            <rect x="1118" y="80" width="50" height="40" />
          </svg>
        </div>
      </div>
    </section>
  );
}