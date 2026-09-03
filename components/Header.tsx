import Image from "next/image";

const navItems = [
  ["ホーム", "#"],
  ["学校紹介", "#about"],
  ["コース", "#courses"],
  ["入学案内", "#admission"],
  ["学費", "#tuition"],
  ["学生生活", "#life"],
  ["情報公開", "#information"],
  ["資料DL", "/#documents"],
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#082F69] text-white shadow-[0_5px_22px_rgba(4,31,67,0.20)]">
      <div className="mx-auto flex min-h-[96px] max-w-[1760px] items-center gap-5 px-7">

        {/* BRAND */}
        <a href="/" className="flex shrink-0 items-center gap-4">
          <div className="flex h-[65px] w-[65px] items-center justify-center rounded-full bg-white">
            <Image
              src="/logo.jpg"
              alt="名古屋国際外語学院"
              width={60}
              height={60}
              priority
              className="h-[60px] w-[60px] rounded-full object-contain"
            />
          </div>

          <div>
            <div className="whitespace-nowrap text-[24px] font-extrabold leading-none tracking-[0.01em]">
              名古屋国際外語学院
            </div>

            <div className="mt-3 whitespace-nowrap text-[10px] font-bold tracking-[0.055em] text-[#65C9F6]">
              NAGOYA INTERNATIONAL FOREIGN LANGUAGE SCHOOL
            </div>
          </div>
        </a>

        {/* NAVIGATION */}
        <nav className="ml-auto hidden h-[58px] items-center rounded-[12px] border border-[#537EAE] bg-[#0B376F] px-2 xl:flex">
          {navItems.map(([label, href], index) => (
            <a
              key={label}
              href={href}
              className={`relative flex h-full items-center whitespace-nowrap px-[15px] text-[13px] font-bold transition ${
                index === 0
                  ? "text-[#F0BA3C]"
                  : "text-white/95 hover:text-[#F0BA3C]"
              }`}
            >
              {label}

              {index === 0 && (
                <span className="absolute bottom-0 left-[15px] right-[15px] h-[3px] rounded-full bg-[#F0BA3C]" />
              )}
            </a>
          ))}
        </nav>

        {/* RIGHT BUTTONS */}
        <div className="flex shrink-0 items-center gap-3">
          <button className="hidden h-[50px] whitespace-nowrap rounded-[10px] border border-[#527DAD] bg-[#0B376F] px-4 text-[13px] font-bold text-white lg:block">
            ◎ 日本語⌄
          </button>

          <a
            href="#application"
            className="hidden h-[50px] items-center justify-center whitespace-nowrap rounded-[10px] border border-[#527DAD] bg-[#0B376F] px-5 text-[13px] font-bold text-white lg:flex"
          >
            ✎&nbsp; 申込み
          </a>

          <a
            href="#contact"
            className="flex h-[50px] items-center justify-center whitespace-nowrap rounded-[10px] bg-[#F0BD46] px-6 text-[13px] font-extrabold text-[#082F69] shadow-[0_5px_14px_rgba(0,0,0,0.14)] transition hover:bg-[#F5C95F]"
          >
            ✉&nbsp; お問い合わせ
          </a>
        </div>
      </div>
    </header>
  );
}