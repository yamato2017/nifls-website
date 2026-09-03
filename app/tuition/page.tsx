import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const aprilRows = [
  ["検定料", "¥25,000", "¥0"],
  ["入学金", "¥50,000", "¥0"],
  ["授業料", "¥720,000", "¥720,000"],
  ["諸経費", "¥50,000", "¥50,000"],
  ["消費税（10%）", "¥84,500", "¥77,000"],
];

const julyRows = [
  ["検定料", "¥25,000", "¥0"],
  ["入学金", "¥50,000", "¥0"],
  ["授業料", "¥720,000", "¥540,000"],
  ["諸経費", "¥50,000", "¥37,500"],
  ["消費税（10%）", "¥84,500", "¥71,500"],
];

const octoberRows = [
  ["検定料", "¥25,000", "¥0"],
  ["入学金", "¥50,000", "¥0"],
  ["授業料", "¥720,000", "¥360,000"],
  ["諸経費", "¥50,000", "¥25,000"],
  ["消費税（10%）", "¥84,500", "¥38,500"],
];

const courses = [
  {
    no: "01",
    month: "4月入学",
    en: "APRIL ENTRY",
    course: "進学2年コース",
    duration: "2年",
    firstLabel: "1年目",
    secondLabel: "2年目",
    first: "¥929,500",
    second: "¥847,000",
    total: "¥1,776,500",
    totalLabel: "2年間総額",
    rows: aprilRows,
    accent: "#082F69",
    soft: "#EEF5FB",
  },
  {
    no: "02",
    month: "7月入学",
    en: "JULY ENTRY",
    course: "進学1年9ヶ月コース",
    duration: "1年9ヶ月",
    firstLabel: "1年目",
    secondLabel: "2年目",
    first: "¥929,500",
    second: "¥649,000",
    total: "¥1,578,500",
    totalLabel: "1年9ヶ月総額",
    rows: julyRows,
    accent: "#1297A8",
    soft: "#ECF9FB",
  },
  {
    no: "03",
    month: "10月入学",
    en: "OCTOBER ENTRY",
    course: "進学1年6ヶ月コース",
    duration: "1年6ヶ月",
    firstLabel: "1年目",
    secondLabel: "2年目（半年）",
    first: "¥929,500",
    second: "¥423,500",
    total: "¥1,353,000",
    totalLabel: "1年6ヶ月総額",
    rows: octoberRows,
    accent: "#C58C18",
    soft: "#FFF8E9",
  },
];

const dormitoryFees = [
  {
    room: "1人部屋",
    price: "¥57,000",
  },
  {
    room: "2人部屋",
    price: "¥47,000",
  },
  {
    room: "3〜4人部屋",
    price: "¥42,000",
  },
  {
    room: "5人部屋",
    price: "¥37,000",
  },
];

function MealIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M6 3v8" />
      <path d="M3.5 3v5a2.5 2.5 0 0 0 5 0V3" />
      <path d="M6 11v10" />
      <path d="M17 3c-2 2-3 5-3 8h5V3" />
      <path d="M17 11v10" />
    </svg>
  );
}

export default function TuitionPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F7FBFE] text-[#082F69]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#EEF7FC]">
          <div className="relative mx-auto h-[370px] max-w-[1760px] overflow-hidden">
            <Image
              src="/bunka2.jpg"
              alt="名古屋国際外語学院 授業風景"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,252,255,0.98)_0%,rgba(247,252,255,0.96)_27%,rgba(241,249,254,0.78)_45%,rgba(239,248,253,0.28)_68%,rgba(239,248,253,0)_100%)]" />

            <div className="absolute left-[-100px] top-[-150px] h-[330px] w-[330px] rounded-full border-[22px] border-white/45" />

            <div
              className="absolute left-[39%] top-[35px] h-[105px] w-[145px] opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #D6A22E 1.5px, transparent 1.5px)",
                backgroundSize: "14px 14px",
              }}
            />

            <div className="absolute bottom-0 left-0 h-[5px] w-full bg-gradient-to-r from-[#F0BD46] via-[#65C9F6] to-[#082F69]" />

            <div className="relative z-10 flex h-full items-center px-[6%]">
              <div className="max-w-[620px]">
                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-[#D6A22E]" />

                  <p className="text-[12px] font-bold tracking-[0.28em] text-[#C58B18]">
                    TUITION & FEES
                  </p>
                </div>

                <h1
                  className="mt-4 text-[52px] font-semibold tracking-[0.06em] text-[#07366F]"
                  style={{
                    fontFamily:
                      '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                  }}
                >
                  学費のご案内
                </h1>

                <div className="mt-4 h-[2px] w-12 bg-[#D6A22E]" />

                <p className="mt-5 text-[16px] font-semibold leading-[1.9] text-[#31526F]">
                  入学時期により、コース期間と学費が異なります。
                  <br />
                  各コースの費用をご確認ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SCHOOL FEES */}
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#F8FCFF_0%,#EEF7FC_55%,#F8FCFF_100%)] px-5 py-12 sm:px-8 lg:px-10">
          {/* BACKGROUND DECOR */}
          <div className="pointer-events-none absolute -right-32 top-[-145px] h-[410px] w-[410px] rounded-full border border-[#D8AA36]/25" />

          <div className="pointer-events-none absolute left-[-45px] top-[110px] select-none font-serif text-[105px] font-bold tracking-[0.04em] text-[#E8F2F8]">
            SCHOOL FEES
          </div>

          <div className="relative z-10 mx-auto max-w-[1500px]">
            {/* TITLE */}
            <div className="mb-9 text-center">
              <div className="flex items-center justify-center gap-4">
                <span className="h-px w-9 bg-[#D6A22E]" />

                <p className="text-[11px] font-bold tracking-[0.24em] text-[#C58D18]">
                  SCHOOL FEES
                </p>

                <span className="h-px w-9 bg-[#D6A22E]" />
              </div>

              <h2
                className="mt-2 text-[38px] font-semibold tracking-[0.08em] text-[#07366F]"
                style={{
                  fontFamily:
                    '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                }}
              >
                学費
              </h2>

              <p className="mt-2 text-[13px] font-semibold text-[#627A8D]">
                3つの入学時期から選べます
              </p>

              <div className="mx-auto mt-3 h-[2px] w-10 bg-[#D6A22E]" />
            </div>

            {/* COURSE CARDS */}
            <div className="grid gap-5 xl:grid-cols-3">
              {courses.map((course) => (
                <article
                  key={course.month}
                  className="group relative overflow-hidden rounded-[22px] border border-[#CBDDE8] bg-white shadow-[0_15px_36px_rgba(20,76,112,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_21px_44px_rgba(20,76,112,0.15)]"
                >
                  {/* TOP ACCENT */}
                  <div
                    className="h-[5px] w-full"
                    style={{ backgroundColor: course.accent }}
                  />

                  {/* COURSE HEADER */}
                  <div
                    className="relative overflow-hidden px-6 pb-5 pt-6"
                    style={{
                      background: `linear-gradient(135deg,#FFFFFF 0%,${course.soft} 100%)`,
                    }}
                  >
                    <span className="pointer-events-none absolute right-3 top-[-5px] font-serif text-[78px] font-bold leading-none text-[#E8F2F7]">
                      {course.no}
                    </span>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p
                            className="text-[10px] font-bold tracking-[0.18em]"
                            style={{ color: course.accent }}
                          >
                            {course.en}
                          </p>

                          <span
                            className="mt-2 inline-flex rounded-full px-3.5 py-1.5 text-[11px] font-bold text-white"
                            style={{
                              backgroundColor: course.accent,
                            }}
                          >
                            {course.month}
                          </span>
                        </div>

                        <div className="rounded-[12px] border border-[#D3E2EB] bg-white px-3 py-2 text-center shadow-sm">
                          <p className="text-[9px] font-bold text-[#748797]">
                            修業期間
                          </p>

                          <p
                            className="mt-0.5 text-[14px] font-bold"
                            style={{ color: course.accent }}
                          >
                            {course.duration}
                          </p>
                        </div>
                      </div>

                      <h3
                        className="mt-4 text-[25px] font-semibold tracking-[0.03em] text-[#07366F]"
                        style={{
                          fontFamily:
                            '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                        }}
                      >
                        {course.course}
                      </h3>

                      <div className="mt-3 flex items-center gap-3">
                        <span
                          className="h-[3px] w-9 rounded-full"
                          style={{ backgroundColor: course.accent }}
                        />

                        <span className="h-px flex-1 bg-[#DCE7EE]" />
                      </div>
                    </div>
                  </div>

                  {/* TABLE */}
                  <div className="px-5 pb-5 pt-1">
                    <div className="overflow-hidden rounded-[14px] border border-[#D8E6EE] bg-white">
                      <div
                        className="grid grid-cols-[1.08fr_1fr_1fr] px-4 py-3 text-[10px] font-bold"
                        style={{ backgroundColor: course.soft }}
                      >
                        <span>項目</span>

                        <span className="text-center">
                          {course.firstLabel}
                        </span>

                        <span className="text-center">
                          {course.secondLabel}
                        </span>
                      </div>

                      {course.rows.map(([label, first, second]) => (
                        <div
                          key={label}
                          className="grid grid-cols-[1.08fr_1fr_1fr] items-center border-t border-[#E3EDF2] px-4 py-3 text-[11px]"
                        >
                          <span className="font-bold text-[#244964]">
                            {label}
                          </span>

                          <span className="text-center font-semibold text-[#173F69]">
                            {first}
                          </span>

                          <span className="text-center font-semibold text-[#173F69]">
                            {second}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* YEAR TOTAL */}
                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <div
                        className="rounded-[13px] px-4 py-3 text-center"
                        style={{ backgroundColor: course.soft }}
                      >
                        <p className="text-[9px] font-bold text-[#6D8394]">
                          {course.firstLabel}合計
                        </p>

                        <p
                          className="mt-1 text-[19px] font-extrabold"
                          style={{ color: course.accent }}
                        >
                          {course.first}
                        </p>
                      </div>

                      <div
                        className="rounded-[13px] px-4 py-3 text-center"
                        style={{ backgroundColor: course.soft }}
                      >
                        <p className="text-[9px] font-bold text-[#6D8394]">
                          {course.secondLabel}合計
                        </p>

                        <p
                          className="mt-1 text-[19px] font-extrabold"
                          style={{ color: course.accent }}
                        >
                          {course.second}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* TOTAL */}
                  <div
                    className="flex items-center justify-between gap-4 px-6 py-4 text-white"
                    style={{ backgroundColor: course.accent }}
                  >
                    <div>
                      <p className="text-[9px] font-bold tracking-[0.14em] text-white/70">
                        TOTAL SCHOOL FEE
                      </p>

                      <p className="mt-0.5 text-[11px] font-bold">
                        {course.totalLabel}
                      </p>
                    </div>

                    <p className="text-[27px] font-extrabold text-[#F7C64B]">
                      {course.total}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* IMPORTANT NOTICE */}
            <div className="relative mt-7 overflow-hidden rounded-[18px] border-2 border-[#F0BD46] bg-[#082F69] shadow-[0_15px_34px_rgba(7,54,111,0.20)]">
              <div className="absolute left-0 top-0 h-full w-[7px] bg-[#F0BD46]" />

              <div className="flex flex-col gap-4 px-6 py-5 md:flex-row md:items-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F0BD46] text-[25px] font-black text-[#082F69] shadow-[0_6px_16px_rgba(0,0,0,0.18)]">
                  !
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[#D9423A] px-3 py-1 text-[10px] font-extrabold tracking-[0.08em] text-white">
                      重要
                    </span>

                    <p className="text-[9px] font-bold tracking-[0.17em] text-[#65C9F6]">
                      IMPORTANT PAYMENT INFORMATION
                    </p>
                  </div>

                  <p className="mt-2 text-[18px] font-bold leading-[1.7] text-white md:text-[21px]">
                    学費および学生寮費は
                    <span className="mx-1 text-[#F0BD46]">
                      年払いのみ
                    </span>
                    となります。
                  </p>

                  <p className="mt-1 text-[12px] font-semibold text-[#D8E7F4]">
                    月払い・分割払いには対応しておりません。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DORMITORY FEES */}
        <section className="relative overflow-hidden bg-white px-5 py-12 sm:px-8 lg:px-10">
          <div
            className="pointer-events-none absolute right-[2%] top-[40px] h-[110px] w-[150px] opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, #49AEE7 1.5px, transparent 1.5px)",
              backgroundSize: "14px 14px",
            }}
          />

          <div className="relative z-10 mx-auto max-w-[1350px]">
            {/* TITLE */}
            <div className="mb-8 text-center">
              <div className="flex items-center justify-center gap-4">
                <span className="h-px w-9 bg-[#D6A22E]" />

                <p className="text-[11px] font-bold tracking-[0.24em] text-[#C58D18]">
                  DORMITORY FEES
                </p>

                <span className="h-px w-9 bg-[#D6A22E]" />
              </div>

              <h2
                className="mt-2 text-[36px] font-semibold tracking-[0.08em] text-[#07366F]"
                style={{
                  fontFamily:
                    '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                }}
              >
                学生寮費
              </h2>

              <p className="mt-3 text-[13px] font-semibold text-[#61798B]">
                学費とは別に、学生寮をご利用の場合は下記費用が必要です。
              </p>
            </div>

            {/* MAIN DORM FEE PANEL */}
            <div className="overflow-hidden rounded-[22px] border border-[#416C99] bg-[#082F69] shadow-[0_16px_36px_rgba(7,54,111,0.18)]">
              <div className="h-[4px] w-full bg-gradient-to-r from-[#F0BD46] via-[#65C9F6] to-[#F0BD46]" />

              <div className="grid lg:grid-cols-[270px_1fr]">
                {/* INITIAL */}
                <div className="flex flex-col justify-center border-b border-white/10 px-7 py-7 lg:border-b-0 lg:border-r">
                  <p className="text-[10px] font-bold tracking-[0.16em] text-[#65C9F6]">
                    INITIAL FEE
                  </p>

                  <p className="mt-2 text-[17px] font-bold text-white">
                    入寮費
                  </p>

                  <p className="mt-2 text-[35px] font-extrabold text-[#F0BD46]">
                    ¥60,000
                  </p>

                  <p className="mt-1 text-[10px] text-[#B8CDDF]">
                    初回のみ
                  </p>
                </div>

                {/* MONTHLY */}
                <div className="grid grid-cols-2 md:grid-cols-4">
                  {dormitoryFees.map((item, index) => (
                    <div
                      key={item.room}
                      className={`flex flex-col justify-center px-5 py-7 text-center ${
                        index !== dormitoryFees.length - 1
                          ? "border-r border-white/10"
                          : ""
                      }`}
                    >
                      <p className="text-[12px] font-bold text-[#DCE9F4]">
                        {item.room}
                      </p>

                      <p className="mt-3 text-[24px] font-extrabold text-[#F0BD46]">
                        {item.price}
                      </p>

                      <p className="mt-1 text-[10px] font-semibold text-[#B8CDDF]">
                        / 月
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* MEALS INCLUDED */}
              <div className="border-t border-white/10 bg-[#0A396D] px-5 py-5">
                <div className="mx-auto flex max-w-[900px] flex-col items-center justify-center gap-4 rounded-[16px] border border-[#F0BD46]/70 bg-[#FFF9E9] px-5 py-4 text-[#082F69] shadow-[0_8px_20px_rgba(0,0,0,0.12)] sm:flex-row">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F0BD46] text-[#082F69]">
                    <MealIcon />
                  </span>

                  <div className="text-center sm:text-left">
                    <p className="text-[10px] font-bold tracking-[0.15em] text-[#C58D18]">
                      MEALS INCLUDED
                    </p>

                    <p className="mt-1 text-[16px] font-extrabold sm:text-[18px]">
                      寮費には1日3食の食事代が含まれています。
                    </p>

                    <p className="mt-1 text-[11px] font-semibold text-[#506980]">
                      朝食・昼食・夕食
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* NOT INCLUDED */}
            <p className="mt-3 text-center text-[11px] font-medium tracking-[0.03em] text-[#708697]">
              ※ 光熱費は寮費に含まれていません。
            </p>
          </div>
        </section>

        {/* INFORMATION */}
        <section className="bg-[#EEF7FC] px-5 py-9 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-[1200px] gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-[10px] font-bold tracking-[0.18em] text-[#C58D18]">
                INFORMATION
              </p>

              <p className="mt-2 text-[14px] font-bold text-[#07366F]">
                学費・出願条件の詳細は募集要項をご確認ください。
              </p>

              <p className="mt-1 text-[11px] leading-[1.7] text-[#6A8192]">
                費用や納入時期についてご不明な点がございましたら、
                お気軽にお問い合わせください。
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/boshu.pdf"
                download
                className="rounded-[11px] bg-[#082F69] px-5 py-3 text-[13px] font-bold text-white shadow-[0_7px_17px_rgba(7,54,111,0.13)] transition hover:-translate-y-[2px] hover:bg-[#0B4585]"
              >
                募集要項をダウンロード
              </a>

              <a
                href="/contact"
                className="rounded-[11px] bg-[#F0BD46] px-5 py-3 text-[13px] font-extrabold text-[#082F69] shadow-[0_7px_17px_rgba(0,0,0,0.10)] transition hover:-translate-y-[2px] hover:bg-[#F5C95F]"
              >
                お問い合わせ →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}