import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#75C7F2]">
      <div className="relative mx-auto h-[475px] max-w-[1760px] overflow-hidden">

        {/* SCHOOL PHOTO */}
        <div className="absolute inset-y-0 right-0 w-[70%]">
          <Image
            src="/schoolhonko.jpg"
            alt="名古屋国際外語学院 本校"
            fill
            priority
            className="object-cover object-[55%_50%]"
          />
        </div>

        {/* BLUE HERO GRADIENT */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#DDF4FF_0%,#CBEFFF_29%,rgba(191,231,251,0.93)_39%,rgba(149,211,245,0.55)_53%,rgba(82,177,233,0.05)_73%)]" />

        {/* TEXT */}
        <div className="relative z-10 flex h-full items-center px-[6%]">
          <div className="max-w-[650px]">
            <h1
              className="text-[60px] font-semibold leading-[1.18] tracking-[-0.035em] text-[#082F69]"
              style={{
                fontFamily:
                  '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
              }}
            >
              日本語から
              <br />
              <span className="text-[#E5AA29]">未来</span>
              がひろがる
            </h1>

            <div className="mt-7 flex items-center gap-4">
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

            <p className="mt-7 max-w-[555px] text-[15px] font-medium leading-[2] text-[#173C60]">
              名古屋国際外語学院は、日本での進学を目指す留学生を、
              <br />
              日本語教育と充実した学生生活の両面からサポートします。
            </p>
          </div>
        </div>

        {/* DECORATIVE CURVE */}
        <div className="absolute -bottom-[92px] -left-[115px] h-[155px] w-[500px] rotate-[5deg] rounded-[50%] bg-[#093B78]" />

        <div className="absolute -bottom-[44px] -left-[70px] h-[85px] w-[440px] rotate-[5deg] rounded-[50%] border-t-[7px] border-[#E5B13D]" />
      </div>
    </section>
  );
}