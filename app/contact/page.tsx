import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const campuses = [
  {
    label: "本校",
    en: "MAIN SCHOOL",
    image: "/schoolhonko.jpg",
    address: "〒455-0003 愛知県名古屋市港区辰巳町30-18",
    tel: "052-355-9981",
    fax: "052-355-9982",
    accent: "#082F69",
  },
  {
    label: "千年校",
    en: "CHITOSE SCHOOL",
    image: "/schoolchitoseko.jpg",
    address: "〒455-0003 愛知県名古屋市港区辰巳町1-45",
    tel: "052-888-8686",
    fax: "052-888-8687",
    accent: "#1597A0",
  },
];

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M4 4h4l2 5-3 2c1.4 3 3.6 5.2 6.6 6.6l2-3 4.4 2V20c0 1.1-.9 2-2 2C10.3 22 2 13.7 2 6c0-1.1.9-2 2-2Z" />
    </svg>
  );
}

function FaxIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M6 8V3h12v5" />
      <rect x="4" y="9" width="16" height="8" rx="2" />
      <path d="M7 14h10v7H7z" />
      <path d="M8 6h8" />
    </svg>
  );
}

function MailIcon() {
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
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function TrainIcon() {
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
      <rect x="5" y="3" width="14" height="14" rx="2" />
      <path d="M8 7h8" />
      <path d="M8 11h8" />
      <path d="M8 21l3-4" />
      <path d="M16 21l-3-4" />
    </svg>
  );
}

function ClockIcon() {
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
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F7FBFE] text-[#082F69]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#EAF6FC]">
          <div className="relative mx-auto h-[330px] max-w-[1760px] overflow-hidden">
            <Image
              src="/herocontact.jpg"
              alt="お問い合わせ"
              fill
              priority
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,252,255,0.92)_0%,rgba(247,252,255,0.84)_27%,rgba(247,252,255,0.48)_48%,rgba(247,252,255,0.10)_70%,rgba(247,252,255,0)_100%)]" />

            <div className="absolute bottom-0 left-0 h-[5px] w-full bg-gradient-to-r from-[#F0BD46] via-[#65C9F6] to-[#082F69]" />

            <div className="relative z-10 flex h-full items-center px-[6%]">
              <div>
                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-[#D6A22E]" />

                  <p className="text-[12px] font-bold tracking-[0.28em] text-[#C48B18]">
                    CONTACT
                  </p>
                </div>

                <h1
                  className="mt-4 text-[50px] font-semibold tracking-[0.06em] text-[#07366F]"
                  style={{
                    fontFamily:
                      '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                  }}
                >
                  お問い合わせ
                </h1>

                <p className="mt-5 text-[16px] font-semibold leading-[1.9] text-[#294B68]">
                  入学・学校生活・各種ご相談について、
                  <br />
                  お気軽にお問い合わせください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SCHOOL INFO */}
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#F7FBFE_0%,#EEF7FC_55%,#F7FBFE_100%)] px-5 py-12 sm:px-8 lg:px-10">
          <div className="pointer-events-none absolute -right-28 top-[-120px] h-[390px] w-[390px] rounded-full border border-[#D8AA36]/25" />
          <div className="pointer-events-none absolute -right-12 top-[-55px] h-[260px] w-[260px] rounded-full border-[16px] border-white/70" />

          <div
            className="pointer-events-none absolute left-[2%] top-[130px] h-[120px] w-[165px] opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, #49AEE7 1.5px, transparent 1.5px)",
              backgroundSize: "14px 14px",
            }}
          />

          <div className="pointer-events-none absolute left-[-40px] top-[95px] select-none font-serif text-[110px] font-bold text-[#E6F1F8]">
            CONTACT
          </div>

          <div className="relative z-10 mx-auto max-w-[1450px]">
            <div className="mb-9 text-center">
              <div className="flex items-center justify-center gap-4">
                <span className="h-px w-9 bg-[#D6A22E]" />
                <p className="text-[11px] font-bold tracking-[0.24em] text-[#C58D18]">
                  SCHOOL INFORMATION
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
                連絡先
              </h2>

              <div className="mx-auto mt-3 h-[2px] w-10 bg-[#D6A22E]" />
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {campuses.map((campus, index) => (
                <div
                  key={campus.label}
                  className="group relative overflow-visible rounded-[22px] bg-white"
                >
                  <div
                    className={`absolute inset-y-[-10px] ${
                      index === 0 ? "left-[-10px]" : "right-[-10px]"
                    } w-[105px] rounded-[22px]`}
                    style={{ backgroundColor: campus.accent }}
                  />

                  <div
                    className={`absolute bottom-[14px] top-[14px] ${
                      index === 0
                        ? "left-[34px] right-[-5px]"
                        : "left-[-5px] right-[34px]"
                    } rounded-[22px] border-2 border-[#E1B33B]`}
                  />

                  <div className="relative overflow-hidden rounded-[22px] border border-[#C9DDE9] bg-white shadow-[0_18px_44px_rgba(15,68,107,0.15)]">
                    <div className="grid min-h-[350px] md:grid-cols-[42%_58%]">
                      <div className="relative min-h-[330px] overflow-hidden bg-[#E8F3F9]">
                        <Image
                          src={campus.image}
                          alt={`名古屋国際外語学院 ${campus.label}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 42vw"
                          className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#062A5A]/60 via-transparent to-transparent" />

                        <div
                          className="absolute left-0 top-0 rounded-br-[18px] px-5 py-2.5 text-[12px] font-bold text-white shadow-[0_5px_14px_rgba(0,0,0,0.18)]"
                          style={{ backgroundColor: campus.accent }}
                        >
                          {campus.label}
                        </div>

                        <span className="absolute bottom-3 right-4 font-serif text-[58px] font-bold text-white/30">
                          0{index + 1}
                        </span>
                      </div>

                      <div className="relative flex flex-col justify-center bg-[linear-gradient(135deg,#FFFFFF_0%,#F7FBFE_65%,#EDF7FC_100%)] p-7">
                        <span className="pointer-events-none absolute right-4 top-2 font-serif text-[74px] font-bold leading-none text-[#EAF3F8]">
                          0{index + 1}
                        </span>

                        <div className="relative z-10">
                          <p className="text-[10px] font-bold tracking-[0.2em] text-[#C58D18]">
                            {campus.en}
                          </p>

                          <h3
                            className="mt-2 text-[30px] font-semibold tracking-[0.04em] text-[#07366F]"
                            style={{
                              fontFamily:
                                '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                            }}
                          >
                            {campus.label}
                          </h3>

                          <div className="mt-3 flex items-center gap-3">
                            <span
                              className="h-[3px] w-10 rounded-full"
                              style={{ backgroundColor: campus.accent }}
                            />
                            <span className="h-px flex-1 bg-[#DCE8EF]" />
                          </div>

                          <div className="mt-5 flex items-start gap-3">
                            <div
                              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#F0BD46] shadow-[0_6px_14px_rgba(7,54,111,0.16)]"
                              style={{ backgroundColor: campus.accent }}
                            >
                              ●
                            </div>

                            <p className="pt-1 text-[13px] font-bold leading-[1.8] text-[#244B6B]">
                              {campus.address}
                            </p>
                          </div>

                          <div className="mt-5 grid grid-cols-2 gap-3">
                            <a
                              href={`tel:${campus.tel.replace(/-/g, "")}`}
                              className="flex items-center gap-3 rounded-[13px] border border-[#D5E5EE] bg-white px-4 py-3 shadow-[0_5px_14px_rgba(26,76,111,0.06)] transition hover:-translate-y-[2px] hover:border-[#D9AB3A]"
                            >
                              <span
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#F0BD46]"
                                style={{ backgroundColor: campus.accent }}
                              >
                                <PhoneIcon />
                              </span>

                              <div>
                                <p className="text-[9px] font-bold tracking-[0.08em] text-[#6F8394]">
                                  TEL
                                </p>
                                <p className="mt-0.5 text-[13px] font-extrabold text-[#07366F]">
                                  {campus.tel}
                                </p>
                              </div>
                            </a>

                            <div className="flex items-center gap-3 rounded-[13px] border border-[#D5E5EE] bg-white px-4 py-3 shadow-[0_5px_14px_rgba(26,76,111,0.06)]">
                              <span
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#F0BD46]"
                                style={{ backgroundColor: campus.accent }}
                              >
                                <FaxIcon />
                              </span>

                              <div>
                                <p className="text-[9px] font-bold tracking-[0.08em] text-[#6F8394]">
                                  FAX
                                </p>
                                <p className="mt-0.5 text-[13px] font-extrabold text-[#07366F]">
                                  {campus.fax}
                                </p>
                              </div>
                            </div>
                          </div>

                          <p className="mt-5 text-[9px] font-bold tracking-[0.15em] text-[#8AA0B2]">
                            NAGOYA INTERNATIONAL FOREIGN LANGUAGE SCHOOL
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-7 overflow-hidden rounded-[20px] border border-[#436C99] bg-[#082F69] shadow-[0_14px_34px_rgba(7,54,111,0.18)]">
              <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#F0BD46] via-[#65C9F6] to-[#F0BD46]" />

              <div className="grid lg:grid-cols-3">
                <div className="flex items-center gap-4 px-6 py-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0B376F] text-[#F0BD46] ring-1 ring-white/10">
                    <MailIcon />
                  </span>

                  <div>
                    <p className="text-[10px] font-bold tracking-[0.16em] text-[#65C9F6]">
                      EMAIL
                    </p>

                    <a
                      href="mailto:nifls2012@nifty.com"
                      className="mt-1 block text-[12px] font-bold text-white hover:text-[#F0BD46]"
                    >
                      nifls2012@nifty.com
                    </a>

                    <a
                      href="mailto:nifls2012@gmail.com"
                      className="mt-0.5 block text-[12px] font-bold text-white hover:text-[#F0BD46]"
                    >
                      nifls2012@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 border-y border-white/10 px-6 py-5 lg:border-x lg:border-y-0">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0B376F] text-[#F0BD46] ring-1 ring-white/10">
                    <TrainIcon />
                  </span>

                  <div>
                    <p className="text-[10px] font-bold tracking-[0.16em] text-[#65C9F6]">
                      ACCESS
                    </p>

                    <p className="mt-1 text-[12px] font-bold leading-[1.7] text-white">
                      地下鉄名港線「東海通」駅
                      <br />
                      2番出口から
                      <span className="ml-1 text-[#F0BD46]">徒歩3分</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 px-6 py-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0B376F] text-[#F0BD46] ring-1 ring-white/10">
                    <ClockIcon />
                  </span>

                  <div>
                    <p className="text-[10px] font-bold tracking-[0.16em] text-[#65C9F6]">
                      受付時間
                    </p>

                    <p className="mt-1 text-[13px] font-bold text-white">
                      月曜日〜金曜日
                    </p>

                    <p className="mt-0.5 text-[18px] font-bold text-[#F0BD46]">
                      8:30〜17:30
                    </p>

                    <p className="mt-0.5 text-[9px] text-[#B7CADE]">
                      土・日・祝日はお休みです
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SNS */}
        <section className="relative overflow-hidden bg-[#FFFFFF] px-5 py-10 sm:px-8 lg:px-10">
          <div className="pointer-events-none absolute -left-20 bottom-[-170px] h-[300px] w-[300px] rounded-full border-[18px] border-[#EAF5FB]" />

          <div className="relative z-10 mx-auto max-w-[1200px]">
            <div className="mb-7 text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-[#D6A22E]" />
                <p className="text-[11px] font-bold tracking-[0.24em] text-[#C58D18]">
                  SNS & MESSAGE
                </p>
                <span className="h-px w-8 bg-[#D6A22E]" />
              </div>

              <h2
                className="mt-2 text-[30px] font-semibold tracking-[0.06em] text-[#07366F]"
                style={{
                  fontFamily:
                    '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                }}
              >
                SNS・メッセージ
              </h2>
            </div>

            <div className="grid overflow-hidden rounded-[20px] border border-[#D2E3ED] bg-white shadow-[0_12px_30px_rgba(21,76,115,0.08)] md:grid-cols-[1fr_1fr_1.25fr]">
              <div className="flex items-center gap-4 p-5">
                <div className="relative h-[120px] w-[120px] shrink-0 overflow-hidden rounded-[14px] border border-[#DCE9EF] bg-white">
                  <Image
                    src="/line.jpg"
                    alt="LINE QR"
                    fill
                    className="object-contain"
                  />
                </div>

                <div>
                  <p className="text-[10px] font-bold tracking-[0.14em] text-[#24A147]">
                    LINE
                  </p>
                  <p className="mt-2 text-[14px] font-bold text-[#07366F]">
                    LINEでお問い合わせ
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-y border-[#E3EDF3] p-5 md:border-x md:border-y-0">
                <div className="relative h-[120px] w-[120px] shrink-0 overflow-hidden rounded-[14px] border border-[#DCE9EF] bg-white">
                  <Image
                    src="/wechat.jpg"
                    alt="WeChat QR"
                    fill
                    className="object-contain"
                  />
                </div>

                <div>
                  <p className="text-[10px] font-bold tracking-[0.14em] text-[#16A269]">
                    WeChat
                  </p>
                  <p className="mt-2 text-[14px] font-bold text-[#07366F]">
                    WeChatでお問い合わせ
                  </p>
                </div>
              </div>

              <a
                href="https://www.facebook.com/NIFLS.School/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-[linear-gradient(135deg,#F7FBFF_0%,#EEF5FF_100%)] p-6 transition hover:bg-[#EAF3FF]"
              >
                <div>
                  <p className="text-[10px] font-bold tracking-[0.15em] text-[#C58D18]">
                    OFFICIAL FACEBOOK
                  </p>

                  <div className="mt-3 flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] text-[26px] font-bold text-white shadow-[0_6px_14px_rgba(24,119,242,0.22)]">
                      f
                    </span>

                    <div>
  <p className="text-[18px] font-bold text-[#07366F]">
    Facebook
  </p>

  <p className="mt-1 text-[11px] text-[#6D8294]">
    NIFLS School
  </p>
</div>
                  </div>
                </div>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#082F69] text-[#F0BD46] transition group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================
            ACCESS / GOOGLE MAP
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#EEF7FC] px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
          {/* BACKGROUND DECORATION */}
          <div className="pointer-events-none absolute -right-[140px] -top-[170px] h-[430px] w-[430px] rounded-full border border-[#E2B33E]/25" />

          <div className="pointer-events-none absolute -left-[170px] bottom-[-210px] h-[420px] w-[420px] rounded-full border border-[#55BFE2]/20" />

          <div
            className="pointer-events-none absolute left-[3%] top-[45px] h-[95px] w-[135px] opacity-[0.16]"
            style={{
              backgroundImage:
                "radial-gradient(circle,#43B4D9 1.5px,transparent 1.5px)",
              backgroundSize: "14px 14px",
            }}
          />

          <div className="relative z-10 mx-auto max-w-[1450px]">
            {/* =================================================
                SECTION TITLE
            ================================================== */}
            <div className="mb-8 text-center lg:mb-10">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-9 bg-[#D6A22E]" />

                <p className="text-[10px] font-black tracking-[0.26em] text-[#C58B18] sm:text-[11px]">
                  ACCESS
                </p>

                <span className="h-px w-9 bg-[#D6A22E]" />
              </div>

              <h2
                className="mt-3 text-[32px] font-semibold tracking-[0.04em] text-[#07366F] sm:text-[38px] lg:text-[42px]"
                style={{
                  fontFamily:
                    '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                }}
              >
                アクセス
              </h2>

              <p className="mx-auto mt-3 max-w-[650px] text-[12px] font-medium leading-[1.8] text-[#61798B] sm:text-[13px]">
                名古屋国際外語学院 本校・千年校へのアクセスをご案内します。
              </p>
            </div>

            {/* =================================================
                MAP CARDS
                PC = 2 columns
                MOBILE = stacked
            ================================================== */}
            <div className="grid gap-6 lg:grid-cols-2">
              {/* =================================================
                  本校
              ================================================== */}
              <div className="relative overflow-hidden rounded-[24px] border border-[#C9DFEA] bg-white shadow-[0_16px_38px_rgba(7,54,111,0.10)]">
                {/* TOP BRAND LINE */}
                <div className="absolute left-0 top-0 z-20 h-[4px] w-full bg-gradient-to-r from-[#EFB62E] via-[#53C0E3] to-[#07366F]" />

                {/* HEADER */}
                <div className="relative px-5 pb-4 pt-6 sm:px-6">
                  <div className="absolute -left-[22px] -top-[20px] h-[72px] w-[72px] rounded-full bg-[#07366F]/[0.04]" />

                  <div className="relative flex items-end gap-3">
                    <h3
                      className="text-[27px] font-semibold tracking-[0.05em] text-[#07366F]"
                      style={{
                        fontFamily:
                          '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                      }}
                    >
                      本校
                    </h3>

                    <span className="pb-1 text-[9px] font-black tracking-[0.25em] text-[#C58B18]">
                      HONKO
                    </span>
                  </div>
                </div>

                {/* MAP */}
                <div className="mx-4 overflow-hidden rounded-[17px] border border-[#D5E4EC] bg-[#EAF4F9] sm:mx-5">
                  <iframe
                    title="名古屋国際外語学院 本校 Google Map"
                    src="https://www.google.com/maps?q=%E6%84%9B%E7%9F%A5%E7%9C%8C%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%B8%82%E6%B8%AF%E5%8C%BA%E8%BE%B0%E5%B7%B3%E7%94%BA30-18&output=embed"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-[230px] w-full border-0 sm:h-[280px] lg:h-[300px]"
                  />
                </div>

                {/* INFO */}
                <div className="px-5 py-5 sm:px-6 sm:py-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-[2px] flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF4FA] text-[#07366F]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z" />
                        <circle cx="12" cy="10" r="2" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-[9px] font-black tracking-[0.14em] text-[#A77A17]">
                        ADDRESS
                      </p>

                      <p className="mt-1 text-[12px] font-bold leading-[1.8] text-[#365873] sm:text-[13px]">
                        〒455-0003
                        <br />
                        愛知県名古屋市港区辰巳町30-18
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=%E6%84%9B%E7%9F%A5%E7%9C%8C%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%B8%82%E6%B8%AF%E5%8C%BA%E8%BE%B0%E5%B7%B3%E7%94%BA30-18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex min-h-[43px] items-center justify-center rounded-[11px] bg-[#07366F] px-5 text-[12px] font-black text-white transition hover:bg-[#0B4A87]"
                  >
                    Google Mapsで見る
                    <span className="ml-2 text-[#F0BD46]">↗</span>
                  </a>
                </div>
              </div>

              {/* =================================================
                  千年校
              ================================================== */}
              <div className="relative overflow-hidden rounded-[24px] border border-[#C9DFEA] bg-white shadow-[0_16px_38px_rgba(7,54,111,0.10)]">
                {/* TOP BRAND LINE */}
                <div className="absolute left-0 top-0 z-20 h-[4px] w-full bg-gradient-to-r from-[#EFB62E] via-[#53C0E3] to-[#07366F]" />

                {/* HEADER */}
                <div className="relative px-5 pb-4 pt-6 sm:px-6">
                  <div className="absolute -left-[22px] -top-[20px] h-[72px] w-[72px] rounded-full bg-[#1199A7]/[0.05]" />

                  <div className="relative flex items-end gap-3">
                    <h3
                      className="text-[27px] font-semibold tracking-[0.05em] text-[#07366F]"
                      style={{
                        fontFamily:
                          '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                      }}
                    >
                      千年校
                    </h3>

                    <span className="pb-1 text-[9px] font-black tracking-[0.25em] text-[#C58B18]">
                      CHITOSE
                    </span>
                  </div>
                </div>

                {/* MAP */}
                <div className="mx-4 overflow-hidden rounded-[17px] border border-[#D5E4EC] bg-[#EAF4F9] sm:mx-5">
                  <iframe
                    title="名古屋国際外語学院 千年校 Google Map"
                    src="https://www.google.com/maps?q=%E6%84%9B%E7%9F%A5%E7%9C%8C%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%B8%82%E6%B8%AF%E5%8C%BA%E8%BE%B0%E5%B7%B3%E7%94%BA1-45&output=embed"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-[230px] w-full border-0 sm:h-[280px] lg:h-[300px]"
                  />
                </div>

                {/* INFO */}
                <div className="px-5 py-5 sm:px-6 sm:py-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-[2px] flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF4FA] text-[#1199A7]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z" />
                        <circle cx="12" cy="10" r="2" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-[9px] font-black tracking-[0.14em] text-[#A77A17]">
                        ADDRESS
                      </p>

                      <p className="mt-1 text-[12px] font-bold leading-[1.8] text-[#365873] sm:text-[13px]">
                        〒455-0003
                        <br />
                        愛知県名古屋市港区辰巳町1-45
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=%E6%84%9B%E7%9F%A5%E7%9C%8C%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%B8%82%E6%B8%AF%E5%8C%BA%E8%BE%B0%E5%B7%B3%E7%94%BA1-45"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex min-h-[43px] items-center justify-center rounded-[11px] bg-[#07366F] px-5 text-[12px] font-black text-white transition hover:bg-[#0B4A87]"
                  >
                    Google Mapsで見る
                    <span className="ml-2 text-[#F0BD46]">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}