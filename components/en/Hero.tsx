import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#DDF4FF]">
      <div className="relative mx-auto h-[285px] overflow-hidden sm:h-[350px] lg:h-[475px] lg:max-w-[1760px]">

        {/* =====================================================
            MOBILE / TABLET PHOTO
            Show the full school building without zooming
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
            alt="Nagoya International Foreign Language School Main School"
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

        {/* SOFT LIGHT BEHIND TITLE */}
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
        ====================================================== */}
        <div className="absolute inset-y-0 right-0 hidden w-[70%] lg:block">
          <Image
            src="/schoolhonko.jpg"
            alt="Nagoya International Foreign Language School Main School"
            fill
            priority
            sizes="70vw"
            className="object-cover object-[55%_50%]"
          />
        </div>

        {/* DESKTOP GRADIENT */}
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
                text-[27px]
                font-medium
                leading-[1.32]
                tracking-[-0.04em]
                text-[#082F69]

                min-[380px]:text-[29px]
                min-[430px]:text-[32px]

                sm:text-[41px]

                lg:text-[57px]
                lg:font-semibold
                lg:leading-[1.18]
                lg:tracking-[-0.035em]
              "
              style={{
                fontFamily:
                  '"Georgia","Times New Roman","Yu Mincho","Hiragino Mincho ProN",serif',
              }}
            >
              <span className="block whitespace-nowrap">
                Learn Japanese.
              </span>

              <span className="mt-[3px] block whitespace-nowrap sm:mt-1 lg:mt-0">
                <span>Expand Your </span>
                <span className="font-semibold text-[#D99A1B]">
                  Future.
                </span>
              </span>
            </h1>

            {/* =================================================
                DESKTOP ONLY
            ================================================== */}
            <div className="mt-7 hidden items-center gap-4 lg:flex">
              <span className="h-[2px] w-9 bg-[#DDA52E]" />

              <p
                className="text-[25px] font-semibold tracking-[0.01em] text-[#123E72]"
                style={{
                  fontFamily:
                    '"Georgia","Times New Roman","Yu Mincho","Hiragino Mincho ProN",serif',
                }}
              >
                Study in Nagoya. Step into the World.
              </p>

              <span className="h-[2px] w-9 bg-[#DDA52E]" />
            </div>

            <p className="mt-7 hidden max-w-[570px] text-[15px] font-medium leading-[2] text-[#173C60] lg:block">
              Nagoya International Foreign Language School supports
              international students who aim to pursue higher education in
              Japan through quality Japanese language education and a
              supportive student life.
            </p>
          </div>
        </div>

        {/* MOBILE NAVY CURVE */}
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

        {/* MOBILE GOLD LINE */}
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
            DESKTOP CURVE
        ====================================================== */}
        <div className="absolute -bottom-[92px] -left-[115px] hidden h-[155px] w-[500px] rotate-[5deg] rounded-[50%] bg-[#093B78] lg:block" />

        <div className="absolute -bottom-[44px] -left-[70px] hidden h-[85px] w-[440px] rotate-[5deg] rounded-[50%] border-t-[7px] border-[#E5B13D] lg:block" />
      </div>
    </section>
  );
}