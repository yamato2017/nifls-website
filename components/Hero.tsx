import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#DDF4FF]">
      <div className="relative mx-auto h-[285px] overflow-hidden sm:h-[350px] lg:h-[475px] lg:max-w-[1760px]">

        {/* =====================================================
            MOBILE / TABLET PHOTO
            पूरा building देखिने — zoom हुँदैन
        ====================================================== */}
        <div
          className="
            absolute
            bottom-0
            right-[-6%]
            top-0
            w-[76%]

            sm:right-[-2%]
            sm:w-[72%]

            lg:hidden
          "
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.18) 13%, rgba(0,0,0,0.72) 34%, black 52%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.18) 13%, rgba(0,0,0,0.72) 34%, black 52%)",
          }}
        >
          <Image
            src="/schoolhonko.jpg"
            alt="名古屋国際外語学院 本校"
            fill
            priority
            sizes="80vw"
            className="object-contain object-right-bottom"
          />
        </div>

        {/* =====================================================
            MOBILE BACKGROUND
        ====================================================== */}
        <div
          className="
            absolute inset-0 lg:hidden
            bg-[linear-gradient(90deg,#E2F6FF_0%,#DDF4FF_31%,rgba(211,239,253,0.92)_45%,rgba(188,226,248,0.42)_62%,rgba(117,199,242,0)_82%)]
          "
        />

        {/* soft light behind title */}
        <div
          className="
            absolute inset-y-0 left-0
            w-[57%]
            bg-gradient-to-r
            from-white/20
            to-transparent
            lg:hidden
          "
        />

        {/* =====================================================
            DESKTOP PHOTO
            ORIGINAL DESIGN
        ====================================================== */}
        <div className="absolute inset-y-0 right-0 hidden w-[70%] lg:block">
          <Image
            src="/schoolhonko.jpg"
            alt="名古屋国際外語学院 本校"
            fill
            priority
            sizes="70vw"
            className="object-cover object-[55%_50%]"
          />
        </div>

        {/* DESKTOP GRADIENT — ORIGINAL */}
        <div
          className="
            absolute inset-0 hidden lg:block
            bg-[linear-gradient(90deg,#DDF4FF_0%,#CBEFFF_29%,rgba(191,231,251,0.93)_39%,rgba(149,211,245,0.55)_53%,rgba(82,177,233,0.05)_73%)]
          "
        />

        {/* =====================================================
            TEXT
        ====================================================== */}
        <div
          className="
            relative z-10
            flex h-full
            items-start

            px-6
            pt-[63px]

            sm:px-9
            sm:pt-[78px]

            lg:items-center
            lg:px-[6%]
            lg:pt-0
          "
        >
          <div className="max-w-[650px]">

            <h1
              className="
                text-[29px]
                font-medium
                leading-[1.32]
                tracking-[-0.04em]
                text-[#082F69]

                min-[380px]:text-[31px]
                min-[430px]:text-[34px]

                sm:text-[43px]

                lg:text-[60px]
                lg:font-semibold
                lg:leading-[1.18]
                lg:tracking-[-0.035em]
              "
              style={{
                fontFamily:
                  '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
              }}
            >
              <span className="block whitespace-nowrap">
                日本語から
              </span>

              <span className="mt-[3px] block whitespace-nowrap sm:mt-1 lg:mt-0">
                <span className="font-semibold text-[#D99A1B]">
                  未来
                </span>
                <span>がひろがる</span>
              </span>
            </h1>

            {/* =================================================
                DESKTOP ONLY
            ================================================== */}
            <div className="mt-7 hidden items-center gap-4 lg:flex">
              <span className="h-[2px] w-9 bg-[#DDA52E]" />

              <p
                className="text-[26px] font-semibold tracking-[0.02em] text-[#123E72]"
                style={{
                  fontFamily:
                    '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                }}
              >
                名古屋で学び世界へ
              </p>

              <span className="h-[2px] w-9 bg-[#DDA52E]" />
            </div>

            <p className="mt-7 hidden max-w-[555px] text-[15px] font-medium leading-[2] text-[#173C60] lg:block">
              名古屋国際外語学院は、日本での進学を目指す留学生を、
              <br />
              日本語教育と充実した学生生活の両面からサポートします。
            </p>

          </div>
        </div>

        {/* MOBILE NAVY CURVE — deeper / higher */}
<div
  className="
    absolute
    -bottom-[52px]
    -left-[105px]
    h-[105px]
    w-[335px]
    rotate-[4deg]
    rounded-[50%]
    bg-[#093B78]

    sm:-bottom-[58px]
    sm:h-[120px]
    sm:w-[410px]

    lg:hidden
  "
/>

{/* MOBILE GOLD LINE — follows top of navy */}
<div
  className="
    absolute
    -bottom-[12px]
    -left-[80px]
    h-[68px]
    w-[310px]
    rotate-[4deg]
    rounded-[50%]
    border-t-[4px]
    border-[#E5B13D]

    sm:-bottom-[14px]
    sm:h-[76px]
    sm:w-[385px]

    lg:hidden
  "
/>

        {/* =====================================================
            DESKTOP CURVE — ORIGINAL
        ====================================================== */}
        <div className="absolute -bottom-[92px] -left-[115px] hidden h-[155px] w-[500px] rotate-[5deg] rounded-[50%] bg-[#093B78] lg:block" />

        <div className="absolute -bottom-[44px] -left-[70px] hidden h-[85px] w-[440px] rotate-[5deg] rounded-[50%] border-t-[7px] border-[#E5B13D] lg:block" />

      </div>
    </section>
  );
}