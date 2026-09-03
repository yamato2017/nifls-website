import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const hostelFees = [
  { room: "1人部屋", price: "57,000円 / 月" },
  { room: "2人部屋", price: "47,000円 / 月" },
  { room: "3〜4人部屋", price: "42,000円 / 月" },
  { room: "5人部屋", price: "37,000円 / 月" },
];

const hostelGallery = [
  "/hostel2.jpg",
  "/hostel3.jpg",
  "/hostel4.jpg",
  "/hostel5.jpg",
  "/hostel6.jpg",
  "/hostel7.jpg",
  "/hostel8.jpg",
  "/hostel9.jpg",
];

const foodGallery = [
  "/food1.jpg",
  "/food2.jpg",
  "/food3.jpg",
  "/food4.jpg",
  "/food5.jpg",
  "/food6.jpg",
];

export default function StudentLifePage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F7FBFE] text-[#082F69]">
                {/* HERO */}
        <section className="relative overflow-hidden bg-[#082F69]">
          <div className="relative mx-auto h-[430px] max-w-[1760px] overflow-hidden">
            <Image
              src="/sports4.jpg"
              alt="名古屋国際外語学院 学生生活"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[62%_48%]"
            />

            {/* DARK PHOTO TONE */}
            <div className="absolute inset-0 bg-[#082F69]/10" />

            {/* LEFT PREMIUM GRADIENT */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,251,254,0.98)_0%,rgba(239,248,252,0.96)_21%,rgba(232,246,252,0.84)_34%,rgba(218,240,248,0.48)_46%,rgba(8,47,105,0.04)_67%,transparent_100%)]" />

            {/* BOTTOM DEPTH */}
            <div className="absolute inset-x-0 bottom-0 h-[95px] bg-gradient-to-t from-[#062F62]/18 to-transparent" />

            {/* DECORATION */}
            <div className="pointer-events-none absolute -left-[145px] -top-[170px] h-[420px] w-[420px] rounded-full border border-[#4DBEE5]/15" />
            <div className="pointer-events-none absolute -left-[70px] -top-[95px] h-[270px] w-[270px] rounded-full border border-[#EFB62E]/15" />

            <div
              className="pointer-events-none absolute left-[3%] bottom-[34px] h-[88px] w-[120px] opacity-[0.13]"
              style={{
                backgroundImage:
                  "radial-gradient(circle,#168EBF 1.5px,transparent 1.5px)",
                backgroundSize: "14px 14px",
              }}
            />

            {/* TEXT */}
            <div className="relative z-10 flex h-full items-center px-6 sm:px-10 lg:px-16 xl:px-20">
              <div className="max-w-[620px]">
                <div className="flex items-center gap-4">
                  <span className="h-[2px] w-11 bg-[#D8A52B]" />

                  <p className="text-[11px] font-black tracking-[0.28em] text-[#B97E0D]">
                    STUDENT LIFE
                  </p>
                </div>

                <h1
                  className="mt-5 text-[48px] font-black tracking-[0.04em] text-[#07366F] sm:text-[58px]"
                  style={{
                    fontFamily:
                      '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                  }}
                >
                  学生生活
                </h1>

                <div className="mt-6 flex items-center gap-5">
                  <span
                    className="text-[23px] font-semibold tracking-[0.08em] text-[#0C477D]"
                    style={{
                      fontFamily:
                        '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                    }}
                  >
                    学ぶ
                  </span>

                  <span className="h-7 w-px bg-[#E2AA2C]" />

                  <span
                    className="text-[23px] font-semibold tracking-[0.08em] text-[#0C477D]"
                    style={{
                      fontFamily:
                        '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                    }}
                  >
                    暮らす
                  </span>

                  <span className="h-7 w-px bg-[#E2AA2C]" />

                  <span
                    className="text-[23px] font-semibold tracking-[0.08em] text-[#0C477D]"
                    style={{
                      fontFamily:
                        '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                    }}
                  >
                    つながる
                  </span>
                </div>

                <p className="mt-7 max-w-[520px] text-[13px] font-bold leading-[2] text-[#355A76]">
                  名古屋で始まる新しい毎日。
                  <br />
                  学習から生活まで、安心できる環境を整えています。
                </p>

                <div className="mt-7 flex h-[3px] w-[115px]">
                  <span className="flex-1 bg-[#1BBBD2]" />
                  <span className="w-[34px] bg-[#E5AD2C]" />
                </div>
              </div>
            </div>

            {/* RIGHT CORNER ACCENT */}
            <div className="absolute right-8 top-7 h-[70px] w-[70px] border-r-[3px] border-t-[3px] border-white/40" />
          </div>

          <div className="h-[4px] bg-gradient-to-r from-[#EFB62E] via-[#4DBEE5] to-[#07366F]" />
        </section>
        {/* THREE POINTS */}
        <section className="relative bg-[#F7FBFE] px-5 py-8 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-[1380px] gap-4 md:grid-cols-3">
            {[
              {
                no: "01",
                en: "LEARN",
                title: "学ぶ",
                text: "日本語力と進学に必要な力を身につける。",
              },
              {
                no: "02",
                en: "LIVE",
                title: "暮らす",
                text: "学生寮と生活環境で新生活をサポート。",
              },
              {
                no: "03",
                en: "CONNECT",
                title: "楽しむ",
                text: "学校行事や交流を通して日本を体験。",
              },
            ].map((item) => (
              <div
                key={item.no}
                className="relative overflow-hidden rounded-[18px] border border-[#D4E4EE] bg-white px-6 py-5 shadow-[0_9px_22px_rgba(21,76,115,0.07)]"
              >
                <span className="absolute right-4 top-0 font-serif text-[56px] font-bold text-[#EDF4F9]">
                  {item.no}
                </span>

                <div className="relative z-10">
                  <p className="text-[10px] font-bold tracking-[0.18em] text-[#C58D18]">
                    {item.en}
                  </p>

                  <p
                    className="mt-1 text-[25px] font-semibold text-[#07366F]"
                    style={{
                      fontFamily:
                        '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                    }}
                  >
                    {item.title}
                  </p>

                  <div className="mt-3 h-[2px] w-9 bg-[#D6A22E]" />

                  <p className="mt-3 text-[12px] font-medium leading-[1.8] text-[#587185]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SCHOOL LIFE */}
        <section className="relative overflow-hidden bg-[#EEF7FC] px-5 py-14 sm:px-8 lg:px-10">
          <div className="pointer-events-none absolute -right-28 -top-32 h-[390px] w-[390px] rounded-full border border-[#D9AD3D]/25" />

          <div
            className="pointer-events-none absolute left-[3%] top-[45px] h-[100px] w-[145px] opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, #48A8DC 1.5px, transparent 1.5px)",
              backgroundSize: "14px 14px",
            }}
          />

          <div className="relative z-10 mx-auto max-w-[1450px]">
            <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="relative min-h-[430px]">
                <div className="absolute bottom-[-10px] left-0 top-[-10px] w-[105px] rounded-l-[26px] bg-[#082F69]" />

                <div className="absolute bottom-[14px] left-[48px] right-[12px] top-[14px] rounded-[26px] border-2 border-[#E0B13C]" />

                <div className="absolute bottom-[19px] left-[62px] right-[8px] top-[8px] overflow-hidden rounded-[23px] bg-white shadow-[0_18px_42px_rgba(7,54,111,0.14)]">
                  <Image
                    src="/bbq1.jpg"
                    alt="授業風景"
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div>
                <p className="text-[11px] font-bold tracking-[0.24em] text-[#C58D18]">
                  SCHOOL LIFE
                </p>

                <h2
                  className="mt-3 text-[40px] font-semibold tracking-[0.06em] text-[#07366F]"
                  style={{
                    fontFamily:
                      '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                  }}
                >
                  学校での毎日
                </h2>

                <p className="mt-4 text-[17px] font-bold text-[#244B6B]">
                  日本語を学び、進学に向けて準備する毎日。
                </p>

                <div className="mt-4 h-[2px] w-12 bg-[#D6A22E]" />

                <p className="mt-5 text-[14px] font-medium leading-[2] text-[#4E687D]">
                  授業では日本語の基礎から応用まで段階的に学び、
                  大学・大学院・専門学校への進学に必要な力を身につけます。
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {["日本語授業", "進学指導", "自習・学習支援"].map((item) => (
                    <div
                      key={item}
                      className="rounded-[13px] border border-[#D5E4EE] bg-white px-4 py-4 text-center shadow-[0_6px_16px_rgba(20,77,115,0.06)]"
                    >
                      <span className="mx-auto block h-2 w-2 rounded-full bg-[#F0BD46]" />
                      <p className="mt-2 text-[12px] font-bold text-[#07366F]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid overflow-hidden rounded-[16px] border border-[#D4E4EE] bg-white shadow-[0_8px_22px_rgba(21,76,115,0.07)] sm:grid-cols-[150px_1fr]">
                  <div className="relative min-h-[115px]">
                    <Image
                      src="/library1.jpg"
                      alt="学習環境"
                      fill
                      sizes="150px"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="flex items-center p-5">
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.16em] text-[#C58D18]">
                        STUDY SPACE
                      </p>

                      <p className="mt-1 text-[16px] font-bold text-[#07366F]">
                        学習環境
                      </p>

                      <p className="mt-2 text-[11px] font-medium leading-[1.7] text-[#637A8C]">
                        授業以外の時間も、自分の目標に向けて学習できます。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DORMITORY */}
        <section
          id="dormitory"
          className="relative overflow-hidden bg-[#F8FCFF] px-5 py-14 sm:px-8 lg:px-10"
        >
          <div className="pointer-events-none absolute left-[-90px] top-[-100px] h-[330px] w-[330px] rounded-full border-[18px] border-[#EDF6FB]" />

          <div className="relative z-10 mx-auto max-w-[1450px]">
            <div className="mb-8 text-center">
              <div className="flex items-center justify-center gap-4">
                <span className="h-px w-9 bg-[#D6A22E]" />

                <p className="text-[11px] font-bold tracking-[0.24em] text-[#C58D18]">
                  STUDENT DORMITORY
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
                学生寮
              </h2>

              <p className="mt-3 text-[14px] font-semibold text-[#48677F]">
                日本での新生活を安心して始められる住環境
              </p>
            </div>

            <div className="grid overflow-hidden rounded-[24px] border border-[#D2E3ED] bg-white shadow-[0_16px_42px_rgba(18,71,107,0.11)] lg:grid-cols-[46%_54%]">
              <div className="relative min-h-[460px]">
                <Image
                  src="/hostel1.jpg"
                  alt="学生寮"
                  fill
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#062A5A]/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <p className="text-[10px] font-bold tracking-[0.18em] text-[#F0BD46]">
                    STUDENT DORMITORY
                  </p>

                  <p
                    className="mt-2 text-[27px] font-semibold text-white"
                    style={{
                      fontFamily:
                        '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                    }}
                  >
                    安心できる住環境
                  </p>
                </div>
              </div>

              <div className="relative bg-[linear-gradient(135deg,#FFFFFF_0%,#F3FAFE_100%)] p-7 lg:p-9">
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ["通学に便利", "学院から7〜15分"],
                    ["無料Wi-Fi", "快適なネット環境"],
                    ["専用食堂", "毎日の食事も安心"],
                    ["生活設備", "暮らしに必要な設備を完備"],
                  ].map(([title, text]) => (
                    <div
                      key={title}
                      className="rounded-[15px] border border-[#D6E5EE] bg-white px-5 py-4 shadow-[0_7px_18px_rgba(22,77,115,0.06)]"
                    >
                      <span className="block h-[3px] w-8 rounded-full bg-[#F0BD46]" />

                      <p className="mt-3 text-[14px] font-bold text-[#07366F]">
                        {title}
                      </p>

                      <p className="mt-1 text-[11px] font-medium text-[#6A8192]">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* COMPACT DORMITORY FEE */}
                <div className="mt-5 overflow-hidden rounded-[16px] border border-[#486F98] bg-[#082F69]">
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                    <div>
                      <p className="text-[9px] font-bold tracking-[0.16em] text-[#65C9F6]">
                        DORMITORY FEE
                      </p>

                      <p className="mt-0.5 text-[14px] font-bold text-white">
                        寮費
                      </p>
                    </div>

                    <div className="rounded-full bg-[#F0BD46] px-4 py-2 text-[11px] font-extrabold text-[#082F69]">
                      入寮費 60,000円
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4">
                    {hostelFees.map((item, index) => (
                      <div
                        key={item.room}
                        className={`px-4 py-3 text-center ${
                          index !== hostelFees.length - 1
                            ? "border-r border-white/10"
                            : ""
                        }`}
                      >
                        <p className="text-[10px] font-bold text-[#BFD2E4]">
                          {item.room}
                        </p>

                        <p className="mt-1 text-[13px] font-bold text-[#F0BD46]">
                          {item.price}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* HOSTEL GALLERY */}
            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
              {hostelGallery.map((src, index) => (
                <div
                  key={src}
                  className="group relative aspect-[4/3] overflow-hidden rounded-[14px] border border-[#D7E5ED] bg-white shadow-[0_6px_16px_rgba(20,77,115,0.06)]"
                >
                  <Image
                    src={src}
                    alt={`学生寮設備 ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-center transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#082F69] via-[#65C9F6] to-[#F0BD46]" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOD */}
        <section className="relative overflow-hidden bg-[#EEF7FC] px-5 py-14 sm:px-8 lg:px-10">
          <div className="pointer-events-none absolute -right-28 bottom-[-160px] h-[370px] w-[370px] rounded-full border border-[#D8AA3A]/25" />

          <div className="relative z-10 mx-auto max-w-[1400px]">
            <div className="mb-8 text-center">
              <div className="flex items-center justify-center gap-4">
                <span className="h-px w-9 bg-[#D6A22E]" />

                <p className="text-[11px] font-bold tracking-[0.24em] text-[#C58D18]">
                  CAFETERIA & MEALS
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
                食事・食堂
              </h2>

              <p className="mt-3 text-[14px] font-semibold text-[#48677F]">
                毎日の食事も安心
              </p>
            </div>

            {/*
              FOOD GALLERY
              Important:
              object-contain is intentional here.
              The original food photos have different framing/orientation,
              so we show the whole meal instead of cropping it.
            */}
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {foodGallery.map((src, index) => (
                <div
                  key={src}
                  className="group relative h-[250px] overflow-hidden rounded-[16px] border border-[#D2E3ED] bg-white p-2 shadow-[0_8px_20px_rgba(21,76,115,0.07)] sm:h-[280px] lg:h-[300px]"
                >
                  <div className="relative h-full w-full overflow-hidden rounded-[12px] bg-[#F8FBFD]">
                    <Image
                      src={src}
                      alt={`食事 ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-contain object-center"
                    />
                  </div>

                  <span className="absolute left-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#082F69] text-[10px] font-bold text-[#F0BD46] shadow-md">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>

            {/* FOOD INFORMATION */}
            <div className="mt-5 grid overflow-hidden rounded-[18px] border border-[#466E97] bg-[#082F69] shadow-[0_12px_28px_rgba(7,54,111,0.16)] md:grid-cols-3">
              {[
                ["1日3食", "朝・昼・夕の食事を提供"],
                ["毎食2種類", "2種類のメニューから選択"],
                ["専用食堂", "安心できる食事環境"],
              ].map(([title, text], index) => (
                <div
                  key={title}
                  className={`px-6 py-5 text-center ${
                    index !== 2
                      ? "border-b border-white/10 md:border-b-0 md:border-r"
                      : ""
                  }`}
                >
                  <p className="text-[21px] font-bold text-[#F0BD46]">
                    {title}
                  </p>

                  <p className="mt-1 text-[11px] font-medium text-[#D8E7F4]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

                {/* EVENTS */}
        <section className="relative overflow-hidden bg-white px-5 py-14 sm:px-8 lg:px-10">
          {/* BACKGROUND DECORATION */}
          <div className="pointer-events-none absolute -left-[120px] top-[40px] h-[300px] w-[300px] rounded-full border border-[#4DBEE5]/10" />

          <div
            className="pointer-events-none absolute bottom-[35px] left-[3%] h-[90px] w-[120px] opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle,#0D5AA7 1.5px,transparent 1.5px)",
              backgroundSize: "14px 14px",
            }}
          />

          <div className="relative mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            {/* =========================
                LEFT
            ========================= */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-9 bg-[#D6A22E]" />

                <p className="text-[11px] font-bold tracking-[0.24em] text-[#C58D18]">
                  SCHOOL EVENTS
                </p>
              </div>

              <h2
                className="mt-4 text-[38px] font-semibold tracking-[0.07em] text-[#07366F]"
                style={{
                  fontFamily:
                    '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                }}
              >
                学校行事
              </h2>

              <div className="mt-4 flex items-center gap-2">
                <span className="h-[3px] w-[40px] rounded-full bg-[#D6A22E]" />
                <span className="h-[3px] w-[18px] rounded-full bg-[#45B9DC]" />
              </div>

              <p className="mt-6 max-w-[560px] text-[14px] font-medium leading-[2] text-[#536E82]">
                学習だけでなく、学校行事や交流を通して
                <br className="hidden sm:block" />
                日本の文化や社会に触れる機会があります。
              </p>

              {/* SEASONS */}
              <div className="mt-7 grid grid-cols-2 gap-3">
                {[
                  ["SPRING", "春", "入学・新しい生活"],
                  ["SUMMER", "夏", "交流・校外活動"],
                  ["AUTUMN", "秋", "文化体験・進学準備"],
                  ["WINTER", "冬", "学習成果・卒業準備"],
                ].map(([en, jp, text], index) => (
                  <div
                    key={en}
                    className="group relative overflow-hidden rounded-[16px] border border-[#D4E4ED] bg-[linear-gradient(135deg,#FFFFFF_0%,#F3F9FC_100%)] px-5 py-4 transition duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_22px_rgba(7,54,111,0.07)]"
                  >
                    <div
                      className={`absolute left-0 top-0 h-full w-[3px] ${
                        index === 0
                          ? "bg-[#E7B337]"
                          : index === 1
                            ? "bg-[#42B9DB]"
                            : index === 2
                              ? "bg-[#D89C29]"
                              : "bg-[#376BA5]"
                      }`}
                    />

                    <p className="text-[9px] font-black tracking-[0.17em] text-[#C58D18]">
                      {en}
                    </p>

                    <p
                      className="mt-1 text-[20px] font-black text-[#07366F]"
                      style={{
                        fontFamily:
                          '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                      }}
                    >
                      {jp}
                    </p>

                    <p className="mt-1 text-[10px] font-medium text-[#6A8192]">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* =========================
                RIGHT PHOTO COLLAGE
            ========================= */}
            <div className="relative py-5 pr-5">
              {/* NAVY BACK SHAPE */}
              <div className="absolute bottom-0 right-0 top-0 w-[120px] rounded-r-[30px] bg-[#07366F]" />

              {/* GOLD OUTLINE */}
              <div className="absolute bottom-[14px] left-[14px] right-[24px] top-[14px] rounded-[27px] border-2 border-[#E2B238]" />

              {/* PHOTO FRAME */}
              <div className="relative mr-[34px] overflow-hidden rounded-[25px] border border-[#D4E2EA] bg-white p-[7px] shadow-[0_20px_48px_rgba(7,54,111,0.15)]">
                <div className="grid h-[390px] grid-cols-2 grid-rows-4 gap-[6px] sm:grid-cols-4 sm:grid-rows-2">
                  {/* BBQ */}
                  <div className="relative overflow-hidden rounded-[14px]">
                    <Image
                      src="/bbq1.jpg"
                      alt="学校行事"
                      fill
                      sizes="(max-width: 640px) 50vw, 15vw"
                      className="object-cover object-center transition duration-500 hover:scale-[1.04]"
                    />
                  </div>

                  {/* CULTURE */}
                  <div className="relative overflow-hidden rounded-[14px]">
                    <Image
                      src="/bunka1.jpg"
                      alt="文化体験"
                      fill
                      sizes="(max-width: 640px) 50vw, 15vw"
                      className="object-cover object-center transition duration-500 hover:scale-[1.04]"
                    />
                  </div>

                  <div className="relative overflow-hidden rounded-[14px]">
                    <Image
                      src="/bunka3.jpg"
                      alt="文化体験"
                      fill
                      sizes="(max-width: 640px) 50vw, 15vw"
                      className="object-cover object-center transition duration-500 hover:scale-[1.04]"
                    />
                  </div>

                  {/* SPORTS */}
                  <div className="relative overflow-hidden rounded-[14px]">
                    <Image
                      src="/sports1.jpg"
                      alt="スポーツ行事"
                      fill
                      sizes="(max-width: 640px) 50vw, 15vw"
                      className="object-cover object-center transition duration-500 hover:scale-[1.04]"
                    />
                  </div>

                  {/* KYOTO */}
                  <div className="relative overflow-hidden rounded-[14px]">
                    <Image
                      src="/kyoto1.jpg"
                      alt="校外活動"
                      fill
                      sizes="(max-width: 640px) 50vw, 15vw"
                      className="object-cover object-center transition duration-500 hover:scale-[1.04]"
                    />
                  </div>

                  <div className="relative overflow-hidden rounded-[14px]">
                    <Image
                      src="/kyoto3.jpg"
                      alt="校外活動"
                      fill
                      sizes="(max-width: 640px) 50vw, 15vw"
                      className="object-cover object-center transition duration-500 hover:scale-[1.04]"
                    />
                  </div>

                  {/* GROUP */}
                  <div className="relative overflow-hidden rounded-[14px]">
                    <Image
                      src="/cover1.jpg"
                      alt="学生交流"
                      fill
                      sizes="(max-width: 640px) 50vw, 15vw"
                      className="object-cover object-center transition duration-500 hover:scale-[1.04]"
                    />
                  </div>

                  {/* ENTRANCE CEREMONY */}
                  <div className="relative overflow-hidden rounded-[14px]">
                    <Image
                      src="/nyugaku1.jpg"
                      alt="入学式"
                      fill
                      sizes="(max-width: 640px) 50vw, 15vw"
                      className="object-cover object-center transition duration-500 hover:scale-[1.04]"
                    />
                  </div>
                </div>

                {/* SMALL CORNER DETAIL */}
                <div className="pointer-events-none absolute left-0 top-0 h-[38px] w-[38px] rounded-br-[20px] border-b border-r border-[#E2B238]/50" />
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#EEF7FC] px-5 py-9 sm:px-8 lg:px-10">
          <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-5 overflow-hidden rounded-[20px] border border-[#476F99] bg-[#082F69] px-7 py-6 text-white shadow-[0_13px_30px_rgba(7,54,111,0.17)] md:flex-row">
            <div>
              <p className="text-[10px] font-bold tracking-[0.18em] text-[#65C9F6]">
                START YOUR LIFE AT NIFLS
              </p>

              <p
                className="mt-1 text-[22px] font-semibold"
                style={{
                  fontFamily:
                    '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                }}
              >
                NIFLSで新しい学生生活を始めませんか。
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/#courses"
                className="rounded-[10px] border border-white/25 bg-[#0B376F] px-5 py-3 text-[13px] font-bold text-white transition hover:border-[#65C9F6]"
              >
                コースを見る
              </a>

              <a
                href="/contact"
                className="rounded-[10px] bg-[#F0BD46] px-5 py-3 text-[13px] font-extrabold text-[#082F69] transition hover:bg-[#F5C95F]"
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