const facts = [
  {
    label: "創立",
    value: "2011",
    unit: "年6月",
    type: "building",
    accent: "#2F78E6",
    soft: "#EEF5FF",
  },
  {
    label: "定員",
    value: "280",
    unit: "名",
    type: "people",
    accent: "#5869F2",
    soft: "#F0F2FF",
  },
  {
    label: "教員",
    value: "17",
    unit: "名",
    type: "teacher",
    accent: "#8B4FE8",
    soft: "#F6F0FF",
  },
  {
    label: "職員",
    value: "6",
    unit: "名",
    type: "staff",
    accent: "#1AA7B7",
    soft: "#ECFAFB",
  },
  {
    label: "開校",
    value: "2012",
    unit: "年4月",
    type: "calendar",
    accent: "#E6A11A",
    soft: "#FFF8E9",
  },
  {
    label: "適正校",
    value: "クラスⅠ",
    unit: "",
    type: "shield",
    accent: "#C99618",
    soft: "#FFF9E8",
  },
];

function FactIcon({
  type,
  color,
}: {
  type: string;
  color: string;
}) {
  const common = {
    width: 29,
    height: 29,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 1.85,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "building") {
    return (
      <svg {...common}>
        <path d="M3 21h18" />
        <path d="M5 21V9h14v12" />
        <path d="M4 9l8-5 8 5" />
        <path d="M9 13v5" />
        <path d="M12 13v5" />
        <path d="M15 13v5" />
      </svg>
    );
  }

  if (type === "people") {
    return (
      <svg {...common}>
        <circle cx="9" cy="8" r="3" />
        <circle cx="16.5" cy="9" r="2.5" />
        <path d="M3.5 20c.3-4 2.5-6 5.5-6s5.2 2 5.5 6" />
        <path d="M14 15c3-.6 5.5 1.2 6 5" />
      </svg>
    );
  }

  if (type === "teacher") {
    return (
      <svg {...common}>
        <rect x="8" y="4" width="12" height="9" rx="1" />
        <circle cx="6" cy="11" r="2.5" />
        <path d="M2 21c.3-4 1.8-6 4-6s3.7 2 4 6" />
        <path d="M13 8h4" />
        <path d="M13 11h3" />
      </svg>
    );
  }

  if (type === "staff") {
    return (
      <svg {...common}>
        <circle cx="9" cy="8" r="2.5" />
        <circle cx="16" cy="8" r="2.5" />
        <path d="M3 20c.2-4 2-6 5-6 1.5 0 2.8.5 3.7 1.5" />
        <path d="M12 20c.2-4 2-6 5-6s4.8 2 5 6" />
      </svg>
    );
  }

  if (type === "calendar") {
    return (
      <svg {...common}>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4" />
        <path d="M16 3v4" />
        <path d="M4 10h16" />
        <path d="M8 14h2" />
        <path d="M14 14h2" />
        <path d="M8 17h2" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export default function SchoolFacts() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EEF7FC] via-[#F7FBFE] to-[#EEF6FB] px-5 py-8">
      {/* BACKGROUND DECORATION */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.32]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(18,103,214,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(18,103,214,.025) 1px,transparent 1px)",
          backgroundSize: "54px 54px",
        }}
      />

      <div
        className="pointer-events-none absolute left-[1.5%] top-[18%] h-[90px] w-[130px] opacity-[0.16]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2F78E6 2px, transparent 2px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div
        className="pointer-events-none absolute bottom-[8%] right-[2%] h-[85px] w-[120px] opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #D8A126 2px, transparent 2px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="pointer-events-none absolute -bottom-[80px] left-[-5%] h-[150px] w-[110%] rotate-[-2deg] rounded-[50%] bg-[#E3F1FA]/60" />

      <div className="relative mx-auto grid max-w-[1700px] grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
        {facts.map((item) => (
          <div
            key={item.label}
            className="group relative min-h-[230px] overflow-hidden rounded-[18px] border border-white/80 bg-white/95 px-5 py-5 shadow-[0_10px_28px_rgba(22,67,103,0.08)] transition duration-300 hover:-translate-y-[5px] hover:shadow-[0_18px_38px_rgba(22,67,103,0.13)]"
          >
            {/* TOP ACCENT */}
            <div
              className="absolute left-0 top-0 h-[4px] w-full"
              style={{
                background: `linear-gradient(90deg, ${item.accent}, ${item.accent}55)`,
              }}
            />

            {/* SOFT GLOW */}
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-[120px] w-[120px] rounded-full blur-[2px]"
              style={{
                backgroundColor: item.soft,
              }}
            />

            {/* ICON */}
            <div className="relative flex justify-center">
              <div
                className="flex h-[70px] w-[70px] items-center justify-center rounded-full border transition duration-300 group-hover:scale-[1.04]"
                style={{
                  borderColor: `${item.accent}22`,
                  backgroundColor: item.soft,
                  boxShadow: `0 8px 20px ${item.accent}12`,
                }}
              >
                <FactIcon type={item.type} color={item.accent} />
              </div>
            </div>

            {/* LABEL */}
            <p className="relative mt-4 text-center text-[17px] font-black tracking-[0.03em] text-[#082F69]">
              {item.label}
            </p>

            {/* DIVIDER */}
            <div
              className="relative mx-auto mt-4 h-px w-[78%]"
              style={{
                backgroundColor: `${item.accent}20`,
              }}
            />

            {/* VALUE */}
            <div className="relative mt-5 flex min-h-[58px] flex-col items-center justify-center">
              <span
                className={`whitespace-nowrap font-semibold leading-none text-[#092F69] ${
                  item.label === "適正校"
                    ? "text-[31px] sm:text-[34px]"
                    : "text-[38px] sm:text-[42px]"
                }`}
                style={{
                  fontFamily:
                    '"Georgia","Yu Mincho","Hiragino Mincho ProN",serif',
                }}
              >
                {item.value}
              </span>

              {item.unit && (
                <span className="mt-2 text-[12px] font-black text-[#667F92]">
                  {item.unit}
                </span>
              )}
            </div>

            {/* BOTTOM LINE */}
            <div
              className="absolute bottom-[18px] left-1/2 h-[4px] w-[46px] -translate-x-1/2 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${item.accent}75, ${item.accent})`,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}