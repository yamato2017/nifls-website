export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#062A5A] text-white">
      {/* TOP ACCENT */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#F0BD46] via-[#65C9F6] to-[#F0BD46]" />

      <div className="mx-auto max-w-[1450px] px-6 py-9 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr_1fr]">

          {/* LEFT */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.22em] text-[#65C9F6]">
              NAGOYA INTERNATIONAL FOREIGN LANGUAGE SCHOOL
            </p>

            <h2
              className="mt-2 text-[25px] font-bold tracking-[0.05em]"
              style={{
                fontFamily:
                  '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
              }}
            >
              名古屋国際外語学院
            </h2>

            <p className="mt-3 text-[12px] leading-[1.8] text-[#B8CCE0]">
              日本語を学び、進学と未来への一歩をサポートします。
            </p>

            {/* FACEBOOK */}
            <div className="mt-5">
              <p className="mb-2 text-[9px] font-bold tracking-[0.2em] text-[#8FB2D1]">
                FOLLOW US
              </p>

              <a
                href="https://www.facebook.com/NIFLS.School/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2] text-[19px] font-bold text-white shadow-[0_5px_14px_rgba(0,0,0,0.18)] transition hover:-translate-y-1"
              >
                f
              </a>
            </div>

            {/* SISTER SCHOOL */}
            <a
              href="https://yifls.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 flex max-w-[420px] items-center justify-between rounded-[13px] border border-[#4B78A5] bg-[#0B376F] px-5 py-4 shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition hover:-translate-y-[2px] hover:border-[#F0BD46]"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-bold tracking-[0.18em] text-[#65C9F6]">
                    SISTER SCHOOL
                  </span>

                  <span className="rounded-full border border-[#F0BD46]/60 bg-[#F0BD46]/10 px-2 py-[2px] text-[8px] font-bold text-[#F0BD46]">
                    姉妹校
                  </span>
                </div>

                <p className="mt-1.5 text-[16px] font-bold text-white">
                  大和外語学院
                </p>

                <p className="mt-0.5 text-[9px] text-[#AFC5D9]">
                  Yamato Foreign Language School
                </p>
              </div>

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F0BD46] text-[#082F69] transition group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* NAVIGATION */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.24em] text-[#65C9F6]">
              NAVIGATION
            </p>

            <h3 className="mt-2 text-[18px] font-bold">
              ページメニュー
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-x-7">
              {[
                ["ホーム", "#"],
                ["学校紹介", "#about"],
                ["コース", "#courses"],
                ["学生生活", "#life"],
                ["学費", "#tuition"],
                ["資料DL", "#documents"],
                ["主な進学先", "#career"],
                ["お問い合わせ", "/contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-2 border-b border-white/10 py-2.5 text-[12px] font-bold text-[#E3EDF6] transition hover:text-[#65C9F6]"
                >
                  <span className="text-[#F0BD46] transition group-hover:translate-x-1">
                    →
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.24em] text-[#65C9F6]">
              CONTACT
            </p>

            <h3 className="mt-2 text-[18px] font-bold">
              お問い合わせ
            </h3>

            <div className="mt-5 space-y-2.5">
              {/* ADDRESS */}
              <div className="rounded-[11px] border border-[#4D76A1] bg-[#0B376F] px-4 py-3">
                <p className="text-[9px] font-bold text-[#65C9F6]">
                  住所
                </p>

                <p className="mt-1 text-[12px] leading-[1.6] text-[#E2EBF4]">
                  〒455-0003
                  <br />
                  愛知県名古屋市港区辰巳町30-18
                </p>
              </div>

              {/* TEL + EMAIL */}
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="tel:0523559981"
                  className="rounded-[11px] border border-[#4D76A1] bg-[#0B376F] px-4 py-3 transition hover:border-[#F0BD46]"
                >
                  <p className="text-[9px] font-bold text-[#65C9F6]">
                    TEL
                  </p>

                  <p className="mt-1 text-[13px] font-bold text-white">
                    052-355-9981
                  </p>
                </a>

                <a
                  href="mailto:nifls2012@gmail.com"
                  className="rounded-[11px] border border-[#4D76A1] bg-[#0B376F] px-4 py-3 transition hover:border-[#F0BD46]"
                >
                  <p className="text-[9px] font-bold text-[#65C9F6]">
                    EMAIL
                  </p>

                  <p className="mt-1 truncate text-[11px] font-bold text-white">
                    nifls2012@gmail.com
                  </p>
                </a>
              </div>

              {/* CONTACT PAGE CTA */}
              <a
                href="/contact"
                className="group flex items-center justify-between rounded-[11px] bg-[#F0BD46] px-4 py-3 text-[#082F69] shadow-[0_8px_18px_rgba(0,0,0,0.14)] transition hover:-translate-y-[2px] hover:bg-[#F5C95F]"
              >
                <div>
                  <p className="text-[9px] font-bold tracking-[0.12em] text-[#1D4F79]">
                    CONTACT US
                  </p>

                  <p className="mt-0.5 text-[13px] font-extrabold">
                    お問い合わせ・詳しくはこちら
                  </p>
                </div>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#082F69] text-[#F0BD46] transition group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-8 flex flex-col gap-2 border-t border-white/15 pt-5 text-[9px] text-[#8DA9C2] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Nagoya International Foreign Language School. All Rights Reserved.
          </p>

          <p>名古屋国際外語学院</p>
        </div>
      </div>
    </footer>
  );
}