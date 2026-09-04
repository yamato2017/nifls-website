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
                {/* =====================================================
    HERO
===================================================== */}
<section className="relative overflow-hidden bg-[#EAF6FC]">
  <div
    className="
      relative mx-auto
      h-[270px]
      max-w-[1760px]
      overflow-hidden

      sm:h-[295px]
      md:h-[315px]
      lg:h-[350px]
    "
  >
    {/* =====================================================
        RIGHT PHOTO
    ====================================================== */}
    <div
      className="
        absolute inset-y-0 right-0
        w-[57%]

        sm:w-[59%]
        md:w-[61%]
        lg:w-[62%]
      "
    >
      <Image
        src="/sports4.jpg"
        alt="名古屋国際外語学院 学生生活"
        fill
        priority
        sizes="(max-width:1023px) 61vw, 62vw"
        className="
          object-cover
          object-[65%_50%]

          sm:object-[62%_50%]
          md:object-[60%_50%]
          lg:object-[58%_50%]
        "
      />

      <div className="absolute inset-0 bg-[#082F69]/[0.04]" />
    </div>

    {/* =====================================================
        LEFT PANEL
    ====================================================== */}
    <div
      className="
        absolute inset-y-0 left-0 z-10
        w-[63%]
        bg-[#EAF6FC]

        [clip-path:polygon(0_0,100%_0,80%_100%,0_100%)]

        sm:w-[60%]
        sm:[clip-path:polygon(0_0,100%_0,81%_100%,0_100%)]

        md:w-[57%]
        md:[clip-path:polygon(0_0,100%_0,82%_100%,0_100%)]

        lg:w-[47%]
        lg:[clip-path:polygon(0_0,100%_0,82%_100%,0_100%)]
      "
    />

    {/* =====================================================
        SOFT CYAN TRANSITION
    ====================================================== */}
    <div
      className="
        pointer-events-none
        absolute inset-y-0 z-[11]

        left-[54%]
        w-[11%]

        bg-[#72C5E4]/25

        [clip-path:polygon(35%_0,100%_0,65%_100%,0_100%)]

        sm:left-[53%]
        sm:w-[10%]

        md:left-[51%]
        md:w-[9%]

        lg:left-[43%]
        lg:w-[7%]
      "
    />

    {/* LIGHT GLASS STRIP */}
    <div
      className="
        pointer-events-none
        absolute inset-y-0 z-[12]

        left-[56%]
        w-[5%]

        bg-white/20

        [clip-path:polygon(35%_0,100%_0,65%_100%,0_100%)]

        sm:left-[55%]
        md:left-[53%]

        lg:left-[45%]
        lg:w-[4%]
      "
    />

    {/* =====================================================
        GOLD DIAGONAL
    ====================================================== */}
    <div
      className="
        pointer-events-none
        absolute
        inset-y-[-12%]
        z-[14]

        left-[58%]
        w-[4px]
        rotate-[13deg]
        bg-[#EFB62E]

        sm:left-[57%]
        sm:w-[5px]

        md:left-[55%]

        lg:left-[47%]
      "
    />

    {/* =====================================================
        LARGE BACKGROUND TEXT
    ====================================================== */}
    <div
      className="
        pointer-events-none
        absolute
        -left-3
        -top-1
        z-[15]

        select-none
        whitespace-nowrap

        text-[57px]
        font-black
        leading-none
        tracking-[-0.05em]
        text-[#D8ECF7]/70

        min-[390px]:text-[61px]

        sm:text-[74px]
        md:text-[86px]

        lg:-left-5
        lg:-top-3
        lg:text-[105px]
      "
    >
      STUDENT LIFE
    </div>

    {/* =====================================================
        DECORATIVE ARC
    ====================================================== */}
    <div
      className="
        pointer-events-none
        absolute z-[15]

        -left-[155px]
        -top-[230px]

        h-[440px]
        w-[440px]

        rounded-full
        border
        border-[#4DBEE5]/20

        lg:-left-[145px]
        lg:-top-[180px]
        lg:h-[420px]
        lg:w-[420px]
      "
    />

    {/* =====================================================
        DOTS
    ====================================================== */}
    <div
      className="
        pointer-events-none
        absolute z-[16]

        bottom-[20px]
        left-[35%]

        h-[55px]
        w-[80px]
        opacity-[0.14]

        sm:left-[33%]
        sm:h-[65px]
        sm:w-[92px]

        lg:bottom-[24px]
        lg:left-[30%]
        lg:h-[76px]
        lg:w-[108px]
      "
      style={{
        backgroundImage:
          "radial-gradient(circle,#168EBF 1.4px,transparent 1.4px)",
        backgroundSize: "13px 13px",
      }}
    />

    {/* =====================================================
        TEXT CONTENT
    ====================================================== */}
    <div
      className="
        absolute inset-y-0 left-0
        z-20

        flex
        w-[56%]
        flex-col
        justify-center

        pl-5

        sm:w-[53%]
        sm:pl-8

        md:w-[50%]
        md:pl-10

        lg:w-[43%]
        lg:pl-16

        xl:pl-20
      "
    >
      {/* PAGE LABEL */}
      <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
        <span className="h-[2px] w-7 shrink-0 bg-[#D8A52B] sm:w-9 lg:w-11" />

        <p
          className="
            whitespace-nowrap
            text-[8px]
            font-black
            tracking-[0.20em]
            text-[#B97E0D]

            sm:text-[9px]
            md:text-[10px]

            lg:text-[11px]
            lg:tracking-[0.28em]
          "
        >
          STUDENT LIFE
        </p>
      </div>

      {/* TITLE */}
      <h1
        className="
          mt-4
          whitespace-nowrap
          text-[32px]
          font-black
          leading-none
          tracking-[0.035em]
          text-[#07366F]

          min-[390px]:text-[35px]

          sm:text-[41px]
          md:text-[47px]

          lg:mt-5
          lg:text-[58px]
          lg:tracking-[0.04em]
        "
        style={{
          fontFamily:
            '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
        }}
      >
        学生生活
      </h1>

      {/* =====================================================
          LEARN / LIVE / CONNECT
      ====================================================== */}
      <div className="mt-5 flex items-start gap-2 sm:gap-3 lg:mt-6 lg:gap-5">

        {/* LEARN */}
        <div className="text-center">
          <p className="mb-1 whitespace-nowrap text-[6px] font-black tracking-[0.16em] text-[#C58B18] sm:text-[7px] lg:text-[8px]">
            LEARN
          </p>

          <span
            className="
              whitespace-nowrap
              text-[13px]
              font-semibold
              tracking-[0.03em]
              text-[#0C477D]

              sm:text-[16px]

              lg:text-[21px]
              lg:tracking-[0.07em]
            "
            style={{
              fontFamily:
                '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
            }}
          >
            学ぶ
          </span>
        </div>

        <span className="mt-[14px] h-5 w-px shrink-0 bg-[#E2AA2C] sm:mt-[16px] lg:mt-[18px] lg:h-7" />

        {/* LIVE */}
        <div className="text-center">
          <p className="mb-1 whitespace-nowrap text-[6px] font-black tracking-[0.16em] text-[#C58B18] sm:text-[7px] lg:text-[8px]">
            LIVE
          </p>

          <span
            className="
              whitespace-nowrap
              text-[13px]
              font-semibold
              tracking-[0.03em]
              text-[#0C477D]

              sm:text-[16px]

              lg:text-[21px]
              lg:tracking-[0.07em]
            "
            style={{
              fontFamily:
                '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
            }}
          >
            暮らす
          </span>
        </div>

        <span className="mt-[14px] h-5 w-px shrink-0 bg-[#E2AA2C] sm:mt-[16px] lg:mt-[18px] lg:h-7" />

        {/* CONNECT */}
        <div className="text-center">
          <p className="mb-1 whitespace-nowrap text-[6px] font-black tracking-[0.16em] text-[#C58B18] sm:text-[7px] lg:text-[8px]">
            CONNECT
          </p>

          <span
            className="
              whitespace-nowrap
              text-[13px]
              font-semibold
              tracking-[0.03em]
              text-[#0C477D]

              sm:text-[16px]

              lg:text-[21px]
              lg:tracking-[0.07em]
            "
            style={{
              fontFamily:
                '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
            }}
          >
            つながる
          </span>
        </div>
      </div>

      {/* ACCENT */}
      <div className="mt-5 flex h-[3px] w-[88px] lg:mt-6 lg:w-[110px]">
        <span className="flex-1 bg-[#1BBBD2]" />
        <span className="w-[27px] bg-[#E5AD2C] lg:w-[33px]" />
      </div>
    </div>

    {/* RIGHT CORNER ACCENT */}
    <div className="pointer-events-none absolute right-7 top-6 hidden h-[62px] w-[62px] border-r-[3px] border-t-[3px] border-white/35 sm:block lg:h-[70px] lg:w-[70px]" />
  </div>

  {/* BOTTOM BRAND LINE */}
  <div className="h-[4px] bg-gradient-to-r from-[#EFB62E] via-[#4DBEE5] to-[#07366F]" />
</section>
        {/* SCHOOL LIFE */}
<section className="relative overflow-hidden bg-[#EEF7FC] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
  {/* DECORATION */}
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
      {/* =====================================================
          PHOTO
          MOBILE = compact landscape
          PC = original large layout
      ====================================================== */}
      <div
        className="
          relative
          h-[270px]

          min-[390px]:h-[290px]
          sm:h-[350px]

          lg:h-auto
          lg:min-h-[430px]
        "
      >
        {/* NAVY BACK PLATE */}
        <div
          className="
            absolute
            bottom-[-8px]
            left-0
            top-[-8px]
            w-[72px]
            rounded-l-[22px]
            bg-[#082F69]

            sm:w-[90px]

            lg:bottom-[-10px]
            lg:top-[-10px]
            lg:w-[105px]
            lg:rounded-l-[26px]
          "
        />

        {/* GOLD FRAME */}
        <div
          className="
            absolute
            bottom-[10px]
            left-[30px]
            right-[5px]
            top-[10px]
            rounded-[20px]
            border-2
            border-[#E0B13C]

            sm:left-[40px]
            sm:right-[8px]
            sm:rounded-[23px]

            lg:bottom-[14px]
            lg:left-[48px]
            lg:right-[12px]
            lg:top-[14px]
            lg:rounded-[26px]
          "
        />

        {/* PHOTO */}
        <div
          className="
            absolute
            bottom-[15px]
            left-[39px]
            right-[2px]
            top-[5px]
            overflow-hidden
            rounded-[18px]
            bg-white
            shadow-[0_14px_32px_rgba(7,54,111,0.14)]

            sm:left-[52px]
            sm:right-[4px]
            sm:rounded-[21px]

            lg:bottom-[19px]
            lg:left-[62px]
            lg:right-[8px]
            lg:top-[8px]
            lg:rounded-[23px]
            lg:shadow-[0_18px_42px_rgba(7,54,111,0.14)]
          "
        >
          <Image
            src="/bbq1.jpg"
            alt="名古屋国際外語学院 学生生活"
            fill
            sizes="(max-width: 1023px) 100vw, 55vw"
            className="
              object-cover
              object-[50%_48%]

              sm:object-center
              lg:object-center
            "
          />
        </div>
      </div>

      {/* =====================================================
          TEXT
      ====================================================== */}
      <div>
        <p className="text-[10px] font-bold tracking-[0.24em] text-[#C58D18] sm:text-[11px]">
          SCHOOL LIFE
        </p>

        <h2
          className="
            mt-2
            text-[34px]
            font-semibold
            tracking-[0.05em]
            text-[#07366F]

            sm:mt-3
            sm:text-[38px]

            lg:text-[40px]
            lg:tracking-[0.06em]
          "
          style={{
            fontFamily:
              '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
          }}
        >
          学校での毎日
        </h2>

        <p
          className="
            mt-3
            text-[15px]
            font-bold
            leading-[1.8]
            text-[#244B6B]

            sm:mt-4
            sm:text-[16px]

            lg:text-[17px]
          "
        >
          日本語を学び、進学に向けて準備する毎日。
        </p>

        <div className="mt-4 h-[2px] w-12 bg-[#D6A22E]" />

        <p
          className="
            mt-4
            text-[13px]
            font-medium
            leading-[1.9]
            text-[#4E687D]

            sm:mt-5
            sm:text-[14px]
            sm:leading-[2]
          "
        >
          授業では日本語の基礎から応用まで段階的に学び、
          大学・大学院・専門学校への進学に必要な力を身につけます。
        </p>

        {/* =====================================================
            THREE FEATURES
        ====================================================== */}
        <div className="mt-5 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-3">
          {["日本語授業", "進学指導", "自習・学習支援"].map((item) => (
            <div
              key={item}
              className="
                rounded-[12px]
                border
                border-[#D5E4EE]
                bg-white
                px-2
                py-3
                text-center
                shadow-[0_6px_16px_rgba(20,77,115,0.06)]

                sm:rounded-[13px]
                sm:px-4
                sm:py-4
              "
            >
              <span className="mx-auto block h-2 w-2 rounded-full bg-[#F0BD46]" />

              <p className="mt-2 text-[10px] font-bold text-[#07366F] sm:text-[12px]">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* =====================================================
            STUDY SPACE
        ====================================================== */}
        <div
          className="
            mt-4
            grid
            grid-cols-[105px_1fr]
            overflow-hidden
            rounded-[14px]
            border
            border-[#D4E4EE]
            bg-white
            shadow-[0_8px_22px_rgba(21,76,115,0.07)]

            sm:mt-5
            sm:grid-cols-[150px_1fr]
            sm:rounded-[16px]
          "
        >
          <div className="relative min-h-[105px] sm:min-h-[115px]">
            <Image
              src="/library1.jpg"
              alt="学習環境"
              fill
              sizes="(max-width: 639px) 105px, 150px"
              className="object-cover object-center"
            />
          </div>

          <div className="flex items-center p-4 sm:p-5">
            <div>
              <p className="text-[8px] font-bold tracking-[0.15em] text-[#C58D18] sm:text-[10px] sm:tracking-[0.16em]">
                STUDY SPACE
              </p>

              <p className="mt-1 text-[14px] font-bold text-[#07366F] sm:text-[16px]">
                学習環境
              </p>

              <p className="mt-2 text-[10px] font-medium leading-[1.7] text-[#637A8C] sm:text-[11px]">
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