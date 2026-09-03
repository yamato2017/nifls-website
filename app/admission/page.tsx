import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BOSHU_URL = "/boshu.pdf";
const INTERVIEW_URL = "/contact";

const flow = [
  {
    title: "募集要件確認",
    en: "REQUIREMENTS",
    text: "出願条件を確認",
    icon: "check",
  },
  {
    title: "面接申込み",
    en: "INTERVIEW",
    text: "オンラインで申込み",
    icon: "people",
  },
  {
    title: "書類確認・面接",
    en: "SCREENING",
    text: "書類確認・面接実施",
    icon: "document",
  },
  {
    title: "選考",
    en: "SELECTION",
    text: "本校にて選考",
    icon: "select",
  },
  {
    title: "COE申請",
    en: "COE APPLICATION",
    text: "入管へ申請",
    icon: "file",
  },
  {
    title: "COE交付",
    en: "COE ISSUANCE",
    text: "COE交付",
    icon: "card",
  },
  {
    title: "学費納入・ビザ",
    en: "PAYMENT & VISA",
    text: "学費納入・ビザ申請",
    icon: "yen",
  },
  {
    title: "来日・入学",
    en: "ARRIVAL",
    text: "日本で学校生活開始",
    icon: "plane",
  },
];

function FlowIcon({ type }: { type: string }) {
  const common =
    "h-[22px] w-[22px] fill-none stroke-current stroke-[1.8]";

  if (type === "check") {
    return (
      <svg viewBox="0 0 24 24" className={common}>
        <path d="M5 12.5l4 4L19 7" />
      </svg>
    );
  }

  if (type === "people") {
    return (
      <svg viewBox="0 0 24 24" className={common}>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3.5 19c.8-4 3.2-6 5.5-6s4.7 2 5.5 6" />
        <path d="M14 14c3 0 5 1.7 5.8 4.5" />
      </svg>
    );
  }

  if (type === "document" || type === "file") {
    return (
      <svg viewBox="0 0 24 24" className={common}>
        <path d="M6 3h9l3 3v15H6z" />
        <path d="M15 3v4h4M9 11h6M9 15h6" />
      </svg>
    );
  }

  if (type === "select") {
    return (
      <svg viewBox="0 0 24 24" className={common}>
        <path d="M12 4l6 4v8l-6 4-6-4V8z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    );
  }

  if (type === "card") {
    return (
      <svg viewBox="0 0 24 24" className={common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="9" cy="11" r="2" />
        <path d="M6 16c1-2 2-3 3-3s2 1 3 3M14 10h4M14 14h4" />
      </svg>
    );
  }

  if (type === "yen") {
    return (
      <svg viewBox="0 0 24 24" className={common}>
        <path d="M6 4l6 8 6-8M12 12v8M7 13h10M7 17h10" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common}>
      <path d="M3 14l18-8-6 15-3-6-6-3z" />
      <path d="M12 15l9-9" />
    </svg>
  );
}

export default function AdmissionPage() {
  return (
    <>
      <Header />

      <main
        className="overflow-hidden bg-white text-[#07366F]"
        style={{
          fontFamily:
            '"Noto Sans JP","Yu Gothic","YuGothic","Hiragino Kaku Gothic ProN",sans-serif',
        }}
      >
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden bg-[#EEF8FD]">
          <div className="mx-auto grid h-[300px] max-w-[1760px] lg:grid-cols-[43%_57%]">
            {/* LEFT */}
            <div className="relative flex items-center overflow-hidden px-6 sm:px-10 lg:px-16 xl:px-20">
              <div className="pointer-events-none absolute -left-6 top-[-10px] select-none text-[115px] font-black leading-none tracking-[-0.05em] text-[#DCECF6]/60">
                ADMISSION
              </div>

              <div className="pointer-events-none absolute -left-28 -top-40 h-[370px] w-[370px] rounded-full border border-[#B7DBEC]/35" />

              <div
                className="pointer-events-none absolute bottom-5 right-[9%] h-[75px] w-[110px] opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle,#D5A52C 1.5px,transparent 1.5px)",
                  backgroundSize: "14px 14px",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  <span className="h-[2px] w-11 bg-[#DBA82A]" />

                  <p className="text-[12px] font-black tracking-[0.3em] text-[#BD8511]">
                    ADMISSIONS
                  </p>
                </div>

                <h1 className="mt-5 text-[50px] font-black tracking-[0.05em] text-[#07366F] sm:text-[58px] lg:text-[62px]">
                  入学案内
                </h1>

                <div className="mt-5 flex items-center gap-3">
                  <span className="h-[4px] w-[56px] rounded-full bg-[#07366F]" />
                  <span className="h-[4px] w-[24px] rounded-full bg-[#61C5E7]" />
                  <span className="h-[4px] w-[12px] rounded-full bg-[#EDB833]" />
                </div>
              </div>
            </div>

            {/* RIGHT PHOTO */}
            <div className="relative hidden overflow-hidden lg:block">
              <div className="absolute inset-0 [clip-path:polygon(11%_0,100%_0,100%_100%,0_100%)]">
                <Image
                  src="/class1.jpg"
                  alt="名古屋国際外語学院 授業風景"
                  fill
                  priority
                  sizes="57vw"
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#EEF8FD]/25 via-transparent to-[#062D5C]/5" />
              </div>

              <div className="absolute bottom-0 left-[9%] top-0 w-[5px] -skew-x-[18deg] bg-[#EDB833]" />
            </div>
          </div>

          <div className="h-[4px] bg-gradient-to-r from-[#EDB833] via-[#5FC4E6] to-[#07366F]" />
        </section>

        {/* =====================================================
            REQUIREMENTS
        ===================================================== */}
        <section className="relative bg-[linear-gradient(180deg,#FFFFFF_0%,#F1F9FD_100%)] px-5 py-10 sm:px-8">
          <div className="mx-auto max-w-[1480px]">
            <div className="mb-7 text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-[#D5A22A]" />

                <p className="text-[10px] font-black tracking-[0.25em] text-[#C18913]">
                  APPLICATION REQUIREMENTS
                </p>

                <span className="h-px w-8 bg-[#D5A22A]" />
              </div>

              <h2 className="mt-2 text-[32px] font-black tracking-[0.05em] text-[#07366F]">
                募集要件
              </h2>
            </div>

            <div className="overflow-hidden rounded-[22px] border border-[#CADFEB] bg-white shadow-[0_15px_36px_rgba(10,62,103,0.08)]">
              <div className="grid lg:grid-cols-4">
                {/* BASIC */}
                <div className="border-b border-[#DCE9F1] p-6 lg:border-b-0 lg:border-r">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#07366F] text-[#EDB833] shadow-md">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-6 w-6 fill-none stroke-current"
                        strokeWidth="1.7"
                      >
                        <path d="M3 9l9-5 9 5-9 5z" />
                        <path d="M7 12v5c3 2 7 2 10 0v-5" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-[9px] font-black tracking-[0.18em] text-[#C28B17]">
                        BASIC
                      </p>

                      <h3 className="mt-1 text-[18px] font-black text-[#07366F]">
                        基本条件
                      </h3>
                    </div>
                  </div>

                  <div className="mt-5 space-y-2.5 text-[12px] font-bold leading-[1.7] text-[#4D697E]">
                    <p>✓ 12年教育課程を修了または卒業見込み</p>

                    <p>
                      ✓ 卒業後
                      <span className="mx-1 font-black text-[#D6473E]">
                        2年以内
                      </span>
                    </p>

                    <p>✓ 高校・大学の成績証明書を提出</p>
                    <p>✓ 英語ができる方を優先</p>
                  </div>
                </div>

                {/* JAPANESE */}
                <div className="border-b border-[#DCE9F1] bg-[#F5FBFE] p-6 lg:border-b-0 lg:border-r">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1498A8] text-[17px] font-black text-white">
                      あ
                    </div>

                    <div>
                      <p className="text-[9px] font-black tracking-[0.18em] text-[#1498A8]">
                        JAPANESE
                      </p>

                      <h3 className="mt-1 text-[18px] font-black text-[#07366F]">
                        日本語能力
                      </h3>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex-1 rounded-[13px] border border-[#DCE9F0] bg-white px-3 py-3 text-center">
                      <p className="text-[9px] font-bold text-[#778C9C]">
                        面接時
                      </p>

                      <p className="mt-1 text-[24px] font-black text-[#138A9A]">
                        N5
                      </p>

                      <p className="text-[9px] font-bold text-[#557083]">
                        合格必須
                      </p>
                    </div>

                    <span className="text-[21px] font-black text-[#D4A029]">
                      →
                    </span>

                    <div className="flex-1 rounded-[13px] bg-[#07366F] px-3 py-3 text-center text-white">
                      <p className="text-[9px] font-bold text-white/65">
                        来日まで
                      </p>

                      <p className="mt-1 text-[24px] font-black text-[#EDB833]">
                        N4
                      </p>

                      <p className="text-[9px] font-bold">取得必要</p>
                    </div>
                  </div>
                </div>

                {/* HEALTH */}
                <div className="border-b border-[#DCE9F1] p-6 lg:border-b-0 lg:border-r">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D39A20] text-[21px] text-white">
                      ♡
                    </div>

                    <div>
                      <p className="text-[9px] font-black tracking-[0.18em] text-[#C28B17]">
                        HEALTH & LIFE
                      </p>

                      <h3 className="mt-1 text-[18px] font-black text-[#07366F]">
                        健康・生活条件
                      </h3>
                    </div>
                  </div>

                  <div className="mt-5 space-y-2.5 text-[12px] font-bold leading-[1.7] text-[#4D697E]">
                    <p>✓ 健康であること</p>
                    <p>✓ 国により結核（TB）検査が必要</p>

                    <p className="font-black text-[#D6473E]">
                      × タトゥーのある方は応募不可
                    </p>

                    <p className="font-black text-[#D6473E]">
                      × フルタイム勤務経験がある方は不可
                    </p>
                  </div>
                </div>

                {/* FINANCIAL */}
                <div className="bg-[#F5FBFE] p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#07366F] text-[19px] font-black text-[#EDB833]">
                      ¥
                    </div>

                    <div>
                      <p className="text-[9px] font-black tracking-[0.18em] text-[#C28B17]">
                        FINANCIAL
                      </p>

                      <h3 className="mt-1 text-[18px] font-black text-[#07366F]">
                        経費支弁
                      </h3>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3 text-[12px] font-bold leading-[1.7] text-[#4D697E]">
                    <p>✓ 経費支弁者は安定した収入がある方</p>

                    <div className="rounded-[13px] border border-[#C9E0EB] bg-white px-4 py-3">
                      <p className="text-[9px] font-bold tracking-[0.12em] text-[#718A9A]">
                        BANK BALANCE
                      </p>

                      <p className="mt-1 text-[21px] font-black text-[#1182A1]">
                        300万円相当
                      </p>

                      <p className="mt-1 text-[10px] font-bold text-[#5C7789]">
                        の銀行残高を確保
                      </p>
                    </div>

                    <p>✓ 日本の法律・学校のルールを厳守できる方</p>
                  </div>
                </div>
              </div>

              {/* PDF CTA */}
              <div className="flex flex-col items-center justify-between gap-4 border-t border-[#D9E7EF] bg-[#EAF6FC] px-6 py-4 sm:flex-row">
                <div>
                  <p className="text-[9px] font-black tracking-[0.17em] text-[#BE8815]">
                    MORE INFORMATION
                  </p>

                  <p className="mt-1 text-[13px] font-bold text-[#315877]">
                    詳細な募集条件は募集要項をご確認ください。
                  </p>
                </div>

                <a
                  href={BOSHU_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-5 rounded-full bg-[#07366F] px-5 py-3 text-[13px] font-black text-white shadow-[0_8px_18px_rgba(7,54,111,0.16)] transition hover:-translate-y-[2px]"
                >
                  募集要項を見る

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EDB833] text-[#07366F] transition group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            IMPORTANT INFORMATION
        ===================================================== */}
        <section className="bg-[#07366F] px-5 py-8 sm:px-8">
          <div className="mx-auto max-w-[1480px]">
            <div className="mb-5 text-center">
              <p className="text-[9px] font-black tracking-[0.22em] text-[#64C7E9]">
                IMPORTANT INFORMATION
              </p>

              <h2 className="mt-1 text-[20px] font-black text-white">
                出願前に確認していただきたいこと
              </h2>
            </div>

            <div className="grid overflow-hidden rounded-[17px] border border-white/15 bg-[#0A417D] md:grid-cols-4">
              {[
                ["選考料", "27,500円（税込）", "COE申請前に支払い"],
                ["学生寮", "2年間 入寮必須", "本校指定の学生寮"],
                ["食事", "1日3食", "授業のある日は寮費に含む"],
                ["学費", "一括納入", "月払いには対応していません"],
              ].map(([label, main, sub], index) => (
                <div
                  key={label}
                  className={`px-5 py-5 text-center ${
                    index !== 3
                      ? "border-b border-white/10 md:border-b-0 md:border-r"
                      : ""
                  }`}
                >
                  <p className="text-[9px] font-bold tracking-[0.16em] text-[#70CAE9]">
                    {label}
                  </p>

                  <p className="mt-2 text-[19px] font-black text-[#EDB833]">
                    {main}
                  </p>

                  <p className="mt-1 text-[10px] font-bold leading-[1.6] text-[#D1E1ED]">
                    {sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            ONLINE INTERVIEW
        ===================================================== */}
        <section className="bg-[#EDF8FD] px-5 py-9 sm:px-8">
          <div className="mx-auto max-w-[1250px]">
            <div className="relative overflow-hidden rounded-[21px] border border-[#456F99] bg-gradient-to-r from-[#062F62] to-[#0C5794] shadow-[0_15px_34px_rgba(7,54,111,0.14)]">
              <div
                className="pointer-events-none absolute right-[3%] top-[10px] h-[80px] w-[110px] opacity-15"
                style={{
                  backgroundImage:
                    "radial-gradient(circle,#ffffff 1.5px,transparent 1.5px)",
                  backgroundSize: "13px 13px",
                }}
              />

              <div className="flex flex-col items-center justify-between gap-5 px-7 py-6 md:flex-row md:px-10">
                <div>
                  <p className="text-[9px] font-black tracking-[0.2em] text-[#66C9EB]">
                    ONLINE INTERVIEW
                  </p>

                  <h2 className="mt-2 text-[23px] font-black text-white">
                    オンライン面接のお申込み
                  </h2>

                  <p className="mt-2 text-[12px] font-bold leading-[1.8] text-[#D3E3EE]">
                    募集要件をご確認のうえ、オンライン面接をご希望の方は
                    申込みページへお進みください。
                  </p>
                </div>

                <Link
                  href={INTERVIEW_URL}
                  className="group flex min-w-[270px] items-center justify-between rounded-[14px] bg-[#EDB833] px-5 py-4 text-[#07366F] transition hover:-translate-y-[2px]"
                >
                  <span className="text-[14px] font-black">
                    面接申込みはこちら
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07366F] text-[18px] text-white transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ADMISSION FLOW
        ===================================================== */}
        <section className="bg-white px-5 py-10 sm:px-8">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-7 text-center">
              <p className="text-[10px] font-black tracking-[0.23em] text-[#BF8915]">
                ADMISSION FLOW
              </p>

              <h2 className="mt-2 text-[31px] font-black tracking-[0.04em] text-[#07366F]">
                入学までの流れ
              </h2>
            </div>

            {/* DESKTOP */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute left-[5%] right-[5%] top-[29px] h-[2px] bg-gradient-to-r from-[#07366F] via-[#25A8BB] to-[#DBA52A]" />

                <div className="relative grid grid-cols-8 gap-2">
                  {flow.map((item) => (
                    <div key={item.title} className="text-center">
                      <div className="relative mx-auto flex h-[59px] w-[59px] items-center justify-center rounded-full border-[5px] border-white bg-[#07366F] text-[#EDB833] shadow-[0_7px_18px_rgba(7,54,111,0.15)]">
                        <FlowIcon type={item.icon} />
                      </div>

                      <p className="mt-3 text-[7px] font-black tracking-[0.1em] text-[#BE8814]">
                        {item.en}
                      </p>

                      <p className="mt-1 text-[12px] font-black text-[#07366F]">
                        {item.title}
                      </p>

                      <p className="mx-auto mt-1.5 max-w-[135px] text-[9px] font-bold leading-[1.55] text-[#728695]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* MOBILE */}
            <div className="grid gap-3 lg:hidden">
              {flow.map((item, index) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 rounded-[14px] border border-[#D5E5EE] bg-[#F8FCFE] px-4 py-3"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#07366F] text-[#EDB833]">
                    <FlowIcon type={item.icon} />
                  </div>

                  <div>
                    <p className="text-[8px] font-black tracking-[0.12em] text-[#BE8814]">
                      {item.en}
                    </p>

                    <p className="mt-0.5 text-[13px] font-black text-[#07366F]">
                      {item.title}
                    </p>
                  </div>

                  {index !== flow.length - 1 && (
                    <span className="ml-auto text-[#2DA8BB]">↓</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            DOCUMENTS
        ===================================================== */}
        <section className="bg-[#EDF8FD] px-5 py-9 sm:px-8">
          <div className="mx-auto max-w-[1350px]">
            <div className="mb-6 text-center">
              <p className="text-[10px] font-black tracking-[0.22em] text-[#BE8814]">
                APPLICATION DOCUMENTS
              </p>

              <h2 className="mt-2 text-[30px] font-black text-[#07366F]">
                出願の準備
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <a
                href={BOSHU_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-[18px] border border-[#CBDDEA] bg-white px-6 py-5 shadow-[0_9px_22px_rgba(7,54,111,0.06)] transition hover:-translate-y-1"
              >
                <div>
                  <p className="text-[9px] font-black tracking-[0.15em] text-[#BE8814]">
                    PDF
                  </p>

                  <p className="mt-1 text-[17px] font-black text-[#07366F]">
                    募集要項
                  </p>

                  <p className="mt-1 text-[10px] font-bold text-[#708697]">
                    募集条件を確認
                  </p>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#07366F] text-[#EDB833] transition group-hover:translate-y-1">
                  ↓
                </span>
              </a>

              <a
                href="/gansho.xlsx"
                download
                className="group flex items-center justify-between rounded-[18px] border border-[#CBDDEA] bg-white px-6 py-5 shadow-[0_9px_22px_rgba(7,54,111,0.06)] transition hover:-translate-y-1"
              >
                <div>
                  <p className="text-[9px] font-black tracking-[0.15em] text-[#1498A8]">
                    EXCEL
                  </p>

                  <p className="mt-1 text-[17px] font-black text-[#07366F]">
                    入学願書
                  </p>

                  <p className="mt-1 text-[10px] font-bold text-[#708697]">
                    願書をダウンロード
                  </p>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1498A8] text-white transition group-hover:translate-y-1">
                  ↓
                </span>
              </a>

              <a
                href="/#documents"
                className="group flex items-center justify-between rounded-[18px] bg-[#07366F] px-6 py-5 text-white shadow-[0_10px_24px_rgba(7,54,111,0.15)] transition hover:-translate-y-1"
              >
                <div>
                  <p className="text-[9px] font-black tracking-[0.15em] text-[#64C7E9]">
                    DOCUMENTS
                  </p>

                  <p className="mt-1 text-[17px] font-black">
                    資料ダウンロード
                  </p>

                  <p className="mt-1 text-[10px] font-bold text-[#C7D9E7]">
                    その他の資料はこちら
                  </p>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EDB833] text-[#07366F] transition group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}