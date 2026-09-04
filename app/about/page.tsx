import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const schoolProfile = [
  ["会社名", "株式会社シージェー"],
  ["学校名称", "名古屋国際外語学院"],
  ["創立", "2011年6月"],
  ["創立者", "宮里 優華"],
  ["名誉理事長", "大山 昭文"],
  ["顧問", "吉田 勉"],
];

const fullTimeTeachers = [
  "水野 洋子",
  "吉澤 成哉",
  "井川 直子",
  "小林 美穂",
  "藤本 都李",
  "勝 男",
  "杉浦 由枝",
];

function TeacherMark() {
  return (
    <div className="relative flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-full border-[2px] border-[#0D5AA7] bg-[linear-gradient(145deg,#083D78_0%,#0B5798_100%)] shadow-[0_10px_24px_rgba(7,54,111,.18)]">
      <div className="absolute inset-[9px] rounded-full border border-white/20" />
      <div className="absolute inset-[20px] rotate-45 border border-[#64CCE8]/35" />
      <div className="absolute inset-[30px] rotate-45 border border-[#EFB62E]/50" />
      <span className="relative z-10 h-[11px] w-[11px] rounded-full bg-[#EFB62E] shadow-[0_0_0_4px_rgba(239,182,46,.12)]" />
    </div>
  );
}

function StaffIcon({ type }: { type: "teacher" | "office" }) {
  if (type === "teacher") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8"
      >
        <circle cx="7" cy="8" r="2.5" />
        <circle cx="17" cy="8" r="2.5" />
        <circle cx="12" cy="6.5" r="3" />
        <path d="M2.5 20c.5-3.6 2.1-5.5 4.8-5.5" />
        <path d="M21.5 20c-.5-3.6-2.1-5.5-4.8-5.5" />
        <path d="M6.5 20c.5-4.3 2.4-6.5 5.5-6.5s5 2.2 5.5 6.5" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
    >
      <circle cx="8" cy="8" r="3" />
      <circle cx="16.5" cy="9" r="2.5" />
      <path d="M2.5 20c.4-4.1 2.3-6.2 5.5-6.2s5.1 2.1 5.5 6.2" />
      <path d="M14 14.5c3.3-.5 6 1.3 6.7 5.5" />
    </svg>
  );
}

function TeacherCard({ name }: { name: string }) {
  return (
    <div className="group relative overflow-hidden rounded-[20px] border border-[#D5E4EC] bg-white px-5 py-6 shadow-[0_10px_26px_rgba(7,54,111,.055)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(7,54,111,.10)]">
      <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#0D5AA7] via-[#46BFE0] to-[#EFB62E]" />

      <div className="absolute -right-8 -top-8 h-[90px] w-[90px] rounded-full border border-[#0D5AA7]/[0.06]" />

      <div className="flex flex-col items-center text-center">
        <TeacherMark />

        <div className="mt-5 flex items-center gap-2">
          <span className="h-px w-5 bg-[#E2A82A]" />

          <span className="text-[8px] font-black tracking-[0.17em] text-[#B98414]">
            FULL-TIME TEACHER
          </span>

          <span className="h-px w-5 bg-[#E2A82A]" />
        </div>

        <p
          className="mt-2 whitespace-nowrap text-[20px] font-black tracking-[0.04em] text-[#07366F]"
          style={{
            fontFamily:
              '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
          }}
        >
          {name}
        </p>

        <p className="mt-1 text-[9px] font-bold tracking-[0.12em] text-[#8A9BA8]">
          専任講師
        </p>

        <div className="mt-4 h-[3px] w-[34px] rounded-full bg-[#EFB62E]" />
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Header />

      <main
        className="overflow-hidden text-[#07366F]"
        style={{
          fontFamily:
            '"Noto Sans JP","Yu Gothic","YuGothic","Hiragino Kaku Gothic ProN",sans-serif',
        }}
      >
        {/* =====================================================
    HERO
====================================================== */}
<section className="relative overflow-hidden bg-[#EAF6FC]">
  <div
    className="
      relative mx-auto
      h-[270px]
      max-w-[1760px]
      overflow-hidden

      sm:h-[295px]
      md:h-[305px]
      lg:h-[315px]
    "
  >
    {/* =====================================================
        PHOTO BACKGROUND
    ====================================================== */}
    <div
      className="
        absolute inset-y-0 right-0
        w-[56%]

        sm:w-[59%]
        md:w-[61%]
        lg:w-[57%]
      "
    >
      <Image
        src="/hero.jpg"
        alt="名古屋国際外語学院"
        fill
        priority
        sizes="(max-width:1023px) 61vw, 57vw"
        className="
          object-cover
          object-[58%_50%]

          sm:object-[56%_50%]
          md:object-[55%_50%]
          lg:object-center
        "
      />

      {/* subtle photo depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#EAF6FC]/5 via-transparent to-[#062F62]/10" />
    </div>

    {/* =====================================================
        LEFT PALE BLUE PANEL
        Large diagonal cut
    ====================================================== */}
    <div
      className="
        absolute inset-y-0 left-0 z-10
        w-[61%]
        bg-[#EAF6FC]

        [clip-path:polygon(0_0,100%_0,78%_100%,0_100%)]

        sm:w-[58%]
        sm:[clip-path:polygon(0_0,100%_0,80%_100%,0_100%)]

        md:w-[55%]
        md:[clip-path:polygon(0_0,100%_0,82%_100%,0_100%)]

        lg:w-[48%]
        lg:[clip-path:polygon(0_0,100%_0,82%_100%,0_100%)]
      "
    />

    {/* =====================================================
        TRANSLUCENT BLUE DIAGONAL LAYER
        Gives premium layered transition
    ====================================================== */}
    <div
      className="
        pointer-events-none
        absolute inset-y-0 z-[11]
        left-[53%]
        w-[11%]
        bg-[#80BEDA]/28

        [clip-path:polygon(30%_0,100%_0,70%_100%,0_100%)]

        sm:left-[51%]
        sm:w-[10%]

        md:left-[49%]
        md:w-[9%]

        lg:left-[44%]
        lg:w-[7%]
      "
    />

    {/* second subtle glass diagonal */}
    <div
      className="
        pointer-events-none
        absolute inset-y-0 z-[12]
        left-[55%]
        w-[5%]
        bg-white/16

        [clip-path:polygon(40%_0,100%_0,60%_100%,0_100%)]

        sm:left-[54%]
        md:left-[52%]

        lg:left-[46%]
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
        inset-y-[-10%]
        z-[14]

        left-[57%]
        w-[4px]
        rotate-[13deg]
        bg-[#EFB62E]

        sm:left-[56%]
        sm:w-[5px]

        md:left-[54%]

        lg:left-[48%]
        lg:w-[5px]
      "
    />

    {/* =====================================================
        LARGE ABOUT BACKGROUND
    ====================================================== */}
    <div
      className="
        pointer-events-none
        absolute
        -left-2
        -top-2
        z-[15]
        select-none
        whitespace-nowrap

        text-[78px]
        font-black
        leading-none
        tracking-[-0.07em]
        text-[#D8ECF7]/75

        sm:text-[92px]
        md:text-[106px]

        lg:-left-4
        lg:-top-5
        lg:text-[125px]
      "
    >
      ABOUT
    </div>

    {/* =====================================================
        DECORATIVE ARC
    ====================================================== */}
    <div
      className="
        pointer-events-none
        absolute
        z-[15]

        -left-[150px]
        -top-[230px]
        h-[450px]
        w-[450px]

        rounded-full
        border
        border-[#8DCEE8]/28

        sm:h-[480px]
        sm:w-[480px]

        lg:-left-32
        lg:-top-44
        lg:h-[420px]
        lg:w-[420px]
      "
    />

    {/* =====================================================
        DOT PATTERN
    ====================================================== */}
    <div
      className="
        pointer-events-none
        absolute
        z-[16]

        bottom-[25px]
        left-[36%]
        h-[62px]
        w-[84px]
        opacity-20

        sm:left-[34%]
        sm:h-[74px]
        sm:w-[100px]

        md:left-[32%]

        lg:bottom-5
        lg:left-[31%]
        lg:h-[88px]
        lg:w-[120px]
      "
      style={{
        backgroundImage:
          "radial-gradient(circle,#D5A029 1.4px,transparent 1.4px)",
        backgroundSize: "12px 12px",
      }}
    />

    {/* =====================================================
        TITLE CONTENT
    ====================================================== */}
    <div
      className="
        absolute inset-y-0 left-0
        z-20
        flex
        w-[55%]
        flex-col
        justify-center

        pl-5

        sm:w-[50%]
        sm:pl-8

        md:w-[47%]
        md:pl-10

        lg:w-[43%]
        lg:pl-16

        xl:pl-20
      "
    >
      {/* ABOUT NIFLS */}
      <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
        <span className="h-[2px] w-7 bg-[#D5A029] sm:w-9 lg:w-11" />

        <p
          className="
            whitespace-nowrap
            text-[8px]
            font-black
            tracking-[0.22em]
            text-[#B87D0A]

            sm:text-[9px]
            md:text-[10px]

            lg:text-[12px]
            lg:tracking-[0.3em]
          "
        >
          ABOUT NIFLS
        </p>
      </div>

      {/* TITLE */}
      <h1
        className="
          mt-4
          whitespace-nowrap
          text-[31px]
          font-black
          leading-none
          tracking-[0.03em]
          text-[#07366F]

          min-[390px]:text-[34px]

          sm:text-[40px]
          md:text-[46px]

          lg:mt-5
          lg:text-[58px]
          lg:tracking-[0.05em]
        "
      >
        学校紹介
      </h1>

      {/* DECORATIVE LINES */}
      <div className="mt-5 flex items-center gap-1.5 lg:gap-2">
        <span className="h-[3px] w-[38px] rounded-full bg-[#07366F] sm:w-[46px] lg:h-[4px] lg:w-[55px]" />

        <span className="h-[3px] w-[18px] rounded-full bg-[#48B7DF] sm:w-[22px] lg:h-[4px] lg:w-[26px]" />

        <span className="h-[3px] w-[10px] rounded-full bg-[#EFB62E] lg:h-[4px] lg:w-[13px]" />
      </div>
    </div>
  </div>

  {/* =====================================================
      BOTTOM ACCENT
  ====================================================== */}
  <div className="relative h-[5px] overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-[#EFB62E] via-[#43BDE4] to-[#07366F]" />
  </div>
</section>
        {/* =====================================================
            PRINCIPAL MESSAGE
        ====================================================== */}
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#F8FCFF_0%,#EAF6FC_48%,#F8FCFF_100%)] px-5 py-11 sm:px-8">
          <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-[#E1B341]/25" />

          <div className="pointer-events-none absolute left-[-30px] top-[55px] select-none text-[105px] font-black text-[#DCEEF7]/75">
            MESSAGE
          </div>

          <div
            className="pointer-events-none absolute bottom-[40px] right-[4%] h-[120px] w-[170px] opacity-15"
            style={{
              backgroundImage:
                "radial-gradient(circle,#359FCB 1.4px,transparent 1.4px)",
              backgroundSize: "15px 15px",
            }}
          />

          <div className="relative z-10 mx-auto max-w-[1420px]">
            <div className="mb-7 text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-9 bg-[#D5A029]" />
                <p className="text-[10px] font-black tracking-[0.24em] text-[#B98110]">
                  MESSAGE
                </p>
                <span className="h-px w-9 bg-[#D5A029]" />
              </div>

              <h2 className="mt-2 text-[33px] font-black text-[#07366F]">
                学院長メッセージ
              </h2>
            </div>

            <div className="relative overflow-hidden rounded-[26px] border border-[#BFDCE9] bg-white shadow-[0_22px_55px_rgba(7,54,111,0.13)]">
              <div className="absolute left-0 top-0 h-[5px] w-full bg-gradient-to-r from-[#EFB62E] via-[#4FC1E5] to-[#07366F]" />

              <div className="grid lg:grid-cols-[35%_65%]">
                <div className="relative min-h-[440px] overflow-hidden bg-[radial-gradient(circle_at_center,#FFFFFF_0%,#E6F3F8_100%)]">
                  <img
                    src="/principal.jpg"
                    alt="宮里 優華"
                    className="absolute inset-0 h-full w-full object-contain object-center"
                  />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#062F62]/95 via-[#062F62]/45 to-transparent" />

                  <div className="absolute bottom-6 left-7">
                    <p className="text-[9px] font-black tracking-[0.2em] text-[#F1BD3A]">
                      PRINCIPAL
                    </p>

                    <p className="mt-1 text-[25px] font-black text-white">
                      宮里 優華
                    </p>

                    <p className="mt-1 text-[10px] font-bold text-white/80">
                      名古屋国際外語学院
                    </p>
                  </div>
                </div>

                <div className="relative bg-[linear-gradient(135deg,#FFFFFF_0%,#F3FAFD_100%)] px-7 py-9 sm:px-10 lg:px-12">
                  <div className="absolute left-0 top-10 h-[92px] w-[5px] rounded-r-full bg-[#EFB62E]" />

                  <p className="text-[10px] font-black tracking-[0.2em] text-[#B98110]">
                    MESSAGE FROM THE PRINCIPAL
                  </p>

                  <div className="mt-5 space-y-5 text-[13px] font-medium leading-[2] text-[#405E75] sm:text-[14px]">
                    <p>
                      本学院は、日本人と外国人に対する質の高い外国語教育を行い、
                      将来より豊かな人生を送る一助となることを目的に開設されました。
                    </p>

                    <p>
                      大学や大学院、専門学校への進学に対応できるカリキュラムを編成しております。
                      また、文化、習慣も含めた教育による国際交流を通じ、
                      友好親善の一翼を担うことを目指しています。
                      本学院の教育を通じて、若い世代の国際文化交流を促進し、
                      外国の交流に努めたいと思っております。
                    </p>

                    <p>
                      本学院は教育の質の向上に絶えず努め、
                      将来新しい時代の価値観を創造できるよう、
                      その基礎作りを目指して行く所存です。
                    </p>
                  </div>

                  <div className="mt-7 flex justify-end">
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-[#718697]">
                        名古屋国際外語学院
                      </p>

                      <p className="mt-1 text-[22px] font-black tracking-[0.08em] text-[#07366F]">
                        宮里 優華
                      </p>

                      <div className="ml-auto mt-2 h-[3px] w-[52px] rounded-full bg-[#EFB62E]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SCHOOL PROFILE */}
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F4FAFD_50%,#EAF6FC_100%)] px-5 py-11 sm:px-8">
          <div className="pointer-events-none absolute -left-28 top-[120px] h-[340px] w-[340px] rounded-full border-[22px] border-[#FFFFFF]/70" />

          <div
            className="pointer-events-none absolute right-[3%] top-[45px] h-[105px] w-[145px] opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle,#38A8D3 1.5px,transparent 1.5px)",
              backgroundSize: "14px 14px",
            }}
          />

          <div className="relative z-10 mx-auto max-w-[1320px]">
            <div className="mb-7 text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-9 bg-[#D5A029]" />

                <p className="text-[10px] font-black tracking-[0.24em] text-[#B98110]">
                  SCHOOL PROFILE
                </p>

                <span className="h-px w-9 bg-[#D5A029]" />
              </div>

              <h2 className="mt-2 text-[33px] font-black text-[#07366F]">
                学校概要
              </h2>
            </div>

            <div className="relative">
              <div className="absolute -bottom-3 left-8 right-8 top-3 rounded-[26px] bg-[#0C8FA5]/15" />
              <div className="absolute -bottom-1 left-3 right-3 top-1 rounded-[26px] border border-[#D8A52E]/45" />

              <div className="relative overflow-hidden rounded-[24px] border border-[#BED8E6] bg-white shadow-[0_20px_50px_rgba(7,54,111,0.12)]">
                <div className="relative overflow-hidden bg-[linear-gradient(110deg,#062F62_0%,#0A4D86_60%,#0E7A98_100%)] px-7 py-6 text-white sm:px-9">
                  <div className="absolute bottom-0 left-0 h-[4px] w-full bg-gradient-to-r from-[#EFB62E] via-[#51C0E3] to-transparent" />

                  <p className="text-[9px] font-black tracking-[0.2em] text-[#65CCE9]">
                    NAGOYA INTERNATIONAL FOREIGN LANGUAGE SCHOOL
                  </p>

                  <div className="mt-1 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <h3 className="text-[25px] font-black tracking-[0.04em]">
                      名古屋国際外語学院
                    </h3>

                    <span className="w-fit rounded-full border border-[#EFB62E]/65 bg-[#EFB62E]/10 px-4 py-1.5 text-[10px] font-black text-[#F2C64E]">
                      SCHOOL INFORMATION
                    </span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2">
                  {schoolProfile.map(([label, value], index) => (
                    <div
                      key={label}
                      className={`relative flex min-h-[76px] items-center gap-5 px-6 py-4 sm:px-8 ${
                        index < 4 ? "border-b border-[#DFEAF1]" : ""
                      } ${
                        index % 2 === 0
                          ? "sm:border-r sm:border-[#DFEAF1]"
                          : ""
                      } ${
                        index % 4 === 1 || index % 4 === 2
                          ? "bg-[#F7FBFE]"
                          : "bg-white"
                      }`}
                    >
                      <span className="absolute left-0 top-1/2 h-8 w-[3px] -translate-y-1/2 rounded-r-full bg-[#EFB62E]/70" />

                      <div className="w-[92px] shrink-0">
                        <p className="text-[10px] font-black tracking-[0.08em] text-[#778D9D]">
                          {label}
                        </p>
                      </div>

                      <div className="h-6 w-px bg-[#D5E4EC]" />

                      <p className="text-[14px] font-black text-[#07366F]">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid border-t border-[#D8E6EE] sm:grid-cols-3">
                  <div className="bg-[#EDF8FC] px-6 py-5">
                    <p className="text-[9px] font-black tracking-[0.16em] text-[#0A9FC0]">
                      FULL-TIME
                    </p>

                    <div className="mt-2 flex items-end gap-2">
                      <span className="text-[34px] font-black text-[#07366F]">
                        7
                      </span>

                      <span className="pb-1 text-[12px] font-black">
                        名
                      </span>
                    </div>

                    <p className="mt-1 text-[11px] font-black text-[#41637E]">
                      専任講師
                    </p>
                  </div>

                  <div className="border-y border-[#D8E6EE] bg-[#F7FBFE] px-6 py-5 sm:border-x sm:border-y-0">
                    <p className="text-[9px] font-black tracking-[0.16em] text-[#B98110]">
                      PART-TIME
                    </p>

                    <div className="mt-2 flex items-end gap-2">
                      <span className="text-[34px] font-black text-[#07366F]">
                        15
                      </span>

                      <span className="pb-1 text-[12px] font-black">
                        名
                      </span>
                    </div>

                    <p className="mt-1 text-[11px] font-black text-[#41637E]">
                      非常勤講師
                    </p>
                  </div>

                  <div className="bg-[#ECFAFB] px-6 py-5">
                    <p className="text-[9px] font-black tracking-[0.16em] text-[#1199A7]">
                      OFFICE
                    </p>

                    <div className="mt-2 flex items-end gap-2">
                      <span className="text-[34px] font-black text-[#1199A7]">
                        5
                      </span>

                      <span className="pb-1 text-[12px] font-black">
                        名
                      </span>
                    </div>

                    <p className="mt-1 text-[11px] font-black text-[#41637E]">
                      事務スタッフ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TEACHING TEAM */}
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#F9FCFE_0%,#EEF7FB_52%,#FFFFFF_100%)] px-5 py-12 sm:px-8 lg:py-14">
          <div className="pointer-events-none absolute -right-[180px] -top-[180px] h-[430px] w-[430px] rounded-full border border-[#1B70BA]/12" />
          <div className="pointer-events-none absolute -right-[95px] -top-[95px] h-[270px] w-[270px] rounded-full border border-[#E5AC28]/16" />

          <div className="relative mx-auto max-w-[1420px]">
            <div className="mb-8 text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-9 bg-[#D5A029]" />

                <p className="text-[10px] font-black tracking-[0.25em] text-[#B98110]">
                  TEACHING TEAM
                </p>

                <span className="h-px w-9 bg-[#D5A029]" />
              </div>

              <h2 className="mt-2 text-[31px] font-black text-[#07366F] sm:text-[35px]">
                経験豊富な講師陣
              </h2>

              <p className="mx-auto mt-3 max-w-[700px] text-[12px] font-medium leading-[1.9] text-[#61798B]">
                日本語教育の専門知識と豊富な経験を持つ講師が、
                一人ひとりの学習目標に寄り添い、丁寧に指導します。
              </p>
            </div>

            <div className="mb-6 flex items-center justify-center gap-4">
              <span className="h-px w-[75px] bg-gradient-to-r from-transparent to-[#E1A728]" />

              <div className="text-center">
                <p className="text-[9px] font-black tracking-[0.22em] text-[#C18B16]">
                  FULL-TIME TEACHERS
                </p>

                <p className="mt-1 text-[20px] font-black text-[#07366F]">
                  専任講師
                </p>
              </div>

              <span className="h-px w-[75px] bg-gradient-to-l from-transparent to-[#E1A728]" />
            </div>

            {/* TOP 4 */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {fullTimeTeachers.slice(0, 4).map((name) => (
                <TeacherCard key={name} name={name} />
              ))}
            </div>

            {/* BOTTOM 3 PERFECT CENTER */}
            <div className="mx-auto mt-4 grid gap-4 sm:grid-cols-2 lg:max-w-[75%] lg:grid-cols-3">
              {fullTimeTeachers.slice(4).map((name) => (
                <TeacherCard key={name} name={name} />
              ))}
            </div>

            {/* SUPPORT NUMBERS */}
            <div className="mt-7 overflow-hidden rounded-[23px] border border-[#CCE0E9] bg-white shadow-[0_14px_34px_rgba(7,54,111,.07)]">
              <div className="grid lg:grid-cols-2">
                <div className="relative overflow-hidden border-b border-[#DCE7ED] bg-[linear-gradient(120deg,#F2F9FD_0%,#FFFFFF_100%)] px-6 py-7 lg:border-b-0 lg:border-r">
                  <div className="absolute -right-10 -top-10 h-[150px] w-[150px] rounded-full bg-[#DCEFFA]/50" />

                  <div className="relative flex items-center gap-6">
                    <div className="flex h-[82px] w-[82px] shrink-0 items-center justify-center rounded-full border border-[#B9DCE9] bg-white text-[#0B5799] shadow-[0_8px_20px_rgba(8,70,120,.08)]">
                      <StaffIcon type="teacher" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[9px] font-black tracking-[0.2em] text-[#0A95BC]">
                        EXPERIENCED PART-TIME TEACHERS
                      </p>

                      <div className="mt-1 flex items-end gap-2">
                        <span className="text-[50px] font-semibold leading-none text-[#07366F]">
                          15
                        </span>

                        <span className="pb-1 text-[15px] font-black text-[#355A77]">
                          名
                        </span>
                      </div>

                      <p className="mt-2 text-[15px] font-black text-[#07366F]">
                        経験豊富な非常勤講師
                      </p>

                      <p className="mt-2 text-[10.5px] font-medium leading-[1.8] text-[#718697]">
                        豊富な指導経験を持つ講師陣が、
                        質の高い日本語教育を提供します。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden bg-[linear-gradient(120deg,#F0FBFB_0%,#FFFFFF_100%)] px-6 py-7">
                  <div className="absolute -right-10 -top-10 h-[150px] w-[150px] rounded-full bg-[#DDF5F5]/60" />

                  <div className="relative flex items-center gap-6">
                    <div className="flex h-[82px] w-[82px] shrink-0 items-center justify-center rounded-full border border-[#C2E5E8] bg-white text-[#1199A7] shadow-[0_8px_20px_rgba(17,153,167,.08)]">
                      <StaffIcon type="office" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[9px] font-black tracking-[0.2em] text-[#1199A7]">
                        OFFICE SUPPORT
                      </p>

                      <div className="mt-1 flex items-end gap-2">
                        <span className="text-[50px] font-semibold leading-none text-[#1199A7]">
                          5
                        </span>

                        <span className="pb-1 text-[15px] font-black text-[#355A77]">
                          名
                        </span>
                      </div>

                      <p className="mt-2 text-[15px] font-black text-[#07366F]">
                        事務スタッフ
                      </p>

                      <p className="mt-2 text-[10.5px] font-medium leading-[1.8] text-[#718697]">
                        学生生活や各種手続きなど、
                        学習以外の面からも学生を支えます。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-4 rounded-[18px] border border-[#ECD99B] bg-[linear-gradient(90deg,#FFF9EA_0%,#FFFFFF_50%,#F6FBFE_100%)] px-6 py-5 sm:flex-row sm:items-center">
              <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-[#E9CC72] bg-white text-[#D79A10]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>

              <div className="sm:w-[270px]">
                <p className="text-[15px] font-black text-[#B77C0A]">
                  安心して学べる環境
                </p>
              </div>

              <div className="hidden h-10 w-px bg-[#E2D5A8] sm:block" />

              <p className="text-[10.5px] font-medium leading-[1.8] text-[#627889]">
                専任講師・非常勤講師・事務スタッフが連携し、
                学習面だけでなく学生生活まで総合的にサポートしています。
              </p>
            </div>
          </div>
        </section>

        {/* CAMPUS */}
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#E8F5FB_0%,#F7FCFF_48%,#E5F4FA_100%)] px-5 py-11 sm:px-8">
          <div className="relative z-10 mx-auto max-w-[1450px]">
            <div className="mb-7 text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-9 bg-[#D5A029]" />

                <p className="text-[10px] font-black tracking-[0.24em] text-[#B98110]">
                  CAMPUS
                </p>

                <span className="h-px w-9 bg-[#D5A029]" />
              </div>

              <h2 className="mt-2 text-[33px] font-black text-[#07366F]">
                校舎紹介
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-[24px] border border-[#BFD9E6] bg-white shadow-[0_18px_42px_rgba(7,54,111,0.11)]">
                <div className="grid min-h-[360px] sm:grid-cols-[47%_53%]">
                  <div className="relative min-h-[340px] p-4">
                    <div className="relative h-full w-full overflow-hidden rounded-[17px] border border-[#C7DFEA] bg-white">
                      <Image
                        src="/schoolhonko.jpg"
                        alt="名古屋国際外語学院 本校"
                        fill
                        className="object-contain object-center"
                      />
                    </div>
                  </div>

                  <div className="flex items-center p-7">
                    <div>
                      <p className="text-[9px] font-black tracking-[0.2em] text-[#B98110]">
                        MAIN SCHOOL
                      </p>

                      <h3 className="mt-2 text-[25px] font-black">
                        本校
                      </h3>

                      <p className="mt-5 text-[12px] font-bold leading-[1.9] text-[#506D82]">
                        〒455-0003
                        <br />
                        愛知県名古屋市港区辰巳町30-18
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[24px] border border-[#BFD9E6] bg-white shadow-[0_18px_42px_rgba(7,54,111,0.11)]">
                <div className="grid min-h-[360px] sm:grid-cols-[53%_47%]">
                  <div className="flex items-center p-7">
                    <div>
                      <p className="text-[9px] font-black tracking-[0.2em] text-[#1199A7]">
                        CHITOSE SCHOOL
                      </p>

                      <h3 className="mt-2 text-[25px] font-black">
                        千年校
                      </h3>

                      <p className="mt-5 text-[12px] font-bold leading-[1.9] text-[#506D82]">
                        〒455-0003
                        <br />
                        愛知県名古屋市港区辰巳町1-45
                      </p>
                    </div>
                  </div>

                  <div className="relative min-h-[340px] p-4">
                    <div className="relative h-full w-full overflow-hidden rounded-[17px] border border-[#C9E3E5] bg-white">
                      <Image
                        src="/schoolchitoseko.jpg"
                        alt="名古屋国際外語学院 千年校"
                        fill
                        className="object-contain object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F1F9FD_100%)] px-5 py-8 sm:px-8">
          <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-5 rounded-[20px] bg-[#07366F] px-7 py-5 text-white md:flex-row">
            <div>
              <p className="text-[9px] font-black tracking-[0.18em] text-[#64C7E9]">
                DISCOVER NIFLS
              </p>

              <p className="mt-1 text-[19px] font-black">
                名古屋国際外語学院で学びませんか?
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                href="/admission"
                className="rounded-[10px] border border-white/20 bg-white/10 px-5 py-3 text-[13px] font-black"
              >
                入学案内を見る
              </Link>

              <Link
                href="/contact"
                className="rounded-[10px] bg-[#EFB62E] px-5 py-3 text-[13px] font-black text-[#07366F]"
              >
                お問い合わせ →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}