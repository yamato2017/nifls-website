"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navItems = [
  ["ホーム", "/"],
  ["学校紹介", "/about"],
  ["コース", "/courses"],
  ["入学案内", "/admission"],
  ["学費", "/tuition"],
  ["学校生活", "/student-life"],
  ["情報公開", "/information"],
  ["資料ダウンロード", "/#documents"],
];

const languageItems = [
  {
    label: "日本語",
    href: "/",
  },
  {
    label: "English",
    href: "/en",
  },
  {
    label: "中文",
    href: "/zh",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const languageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target as Node)
      ) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full overflow-x-clip bg-[#082F69] text-white shadow-[0_7px_28px_rgba(4,31,67,0.22)]">
      {/* =====================================================
          MAIN HEADER
      ===================================================== */}
      <div
        className="
          mx-auto
          flex
          min-h-[88px]
          w-full
          max-w-[1920px]
          items-center
          gap-3
          px-4

          sm:min-h-[94px]
          sm:px-6

          min-[1280px]:min-h-[94px]
          min-[1280px]:gap-2
          min-[1280px]:px-4

          min-[1450px]:min-h-[100px]
          min-[1450px]:gap-3
          min-[1450px]:px-5

          min-[1650px]:min-h-[104px]
          min-[1650px]:gap-4
          min-[1650px]:px-8
        "
      >
        {/* =====================================================
            LOGO + SCHOOL NAME
        ===================================================== */}
        <Link
          href="/"
          prefetch={false}
          onClick={() => setMenuOpen(false)}
          aria-label="名古屋国際外語学院 ホーム"
          className="
            group
            flex
            min-w-0
            flex-1
            items-center
            gap-3.5

            min-[1280px]:w-[245px]
            min-[1280px]:flex-none
            min-[1280px]:gap-2.5

            min-[1400px]:w-[265px]

            min-[1500px]:w-[285px]
            min-[1500px]:gap-3

            min-[1650px]:w-[330px]
            min-[1650px]:gap-3.5
          "
        >
          {/* LOGO */}
          <div
            className="
              relative
              flex
              h-[58px]
              w-[58px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-white
              shadow-[0_8px_22px_rgba(0,0,0,0.18)]
              transition
              duration-300

              group-hover:-translate-y-[2px]
              group-hover:scale-[1.025]

              sm:h-[66px]
              sm:w-[66px]

              min-[1280px]:h-[58px]
              min-[1280px]:w-[58px]

              min-[1450px]:h-[64px]
              min-[1450px]:w-[64px]

              min-[1650px]:h-[74px]
              min-[1650px]:w-[74px]
            "
          >
            <Image
              src="/logo.jpg"
              alt="名古屋国際外語学院"
              width={72}
              height={72}
              priority
              className="
                h-[54px]
                w-[54px]
                rounded-full
                object-contain

                sm:h-[62px]
                sm:w-[62px]

                min-[1280px]:h-[54px]
                min-[1280px]:w-[54px]

                min-[1450px]:h-[60px]
                min-[1450px]:w-[60px]

                min-[1650px]:h-[70px]
                min-[1650px]:w-[70px]
              "
            />
          </div>

          {/* SCHOOL NAME */}
          <div className="min-w-0">
            <p
              className="
                whitespace-nowrap
                text-[17px]
                font-black
                leading-none
                tracking-[0.03em]
                text-white

                sm:text-[20px]

                min-[1280px]:text-[17px]
                min-[1400px]:text-[18px]
                min-[1500px]:text-[20px]
                min-[1650px]:text-[23px]
              "
            >
              名古屋国際外語学院
            </p>

            <p
              className="
                mt-[7px]
                whitespace-nowrap
                text-[6px]
                font-bold
                tracking-[0.1em]
                text-[#65C9F6]

                sm:text-[7px]

                min-[1280px]:text-[5.5px]
                min-[1400px]:text-[6px]
                min-[1500px]:text-[6.5px]
                min-[1650px]:text-[8px]
              "
            >
              NAGOYA INTERNATIONAL FOREIGN LANGUAGE SCHOOL
            </p>

            <div className="mt-2 flex h-[2px] w-[86px] overflow-hidden rounded-full opacity-90">
              <span className="flex-1 bg-[#65C9F6]" />
              <span className="w-[24px] bg-[#F0BD46]" />
            </div>
          </div>
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}
        <nav
          className="
            ml-auto
            hidden
            h-[56px]
            items-center
            rounded-[15px]
            border
            border-[#4878AA]
            bg-[#0A376F]/80
            p-[4px]
            shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_8px_22px_rgba(3,28,61,0.10)]

            min-[1280px]:flex

            min-[1450px]:h-[60px]
            min-[1450px]:p-[5px]

            min-[1650px]:h-[62px]
          "
        >
          {navItems.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              prefetch={false}
              className="
                group/nav
                relative
                flex
                h-[46px]
                items-center
                justify-center
                whitespace-nowrap
                rounded-[10px]
                px-[6px]
                text-[10.5px]
                font-extrabold
                tracking-[-0.01em]
                text-white
                transition-all
                duration-300

                hover:-translate-y-[2px]
                hover:scale-[1.015]
                hover:bg-white/[0.09]
                hover:text-white
                hover:shadow-[0_8px_18px_rgba(0,0,0,0.15)]

                min-[1360px]:px-[7px]
                min-[1360px]:text-[11px]

                min-[1450px]:h-[50px]
                min-[1450px]:px-2
                min-[1450px]:text-[11.5px]

                min-[1550px]:px-2.5
                min-[1550px]:text-[12px]

                min-[1700px]:px-3
                min-[1700px]:text-[12.5px]
              "
            >
              <span className="pointer-events-none absolute left-1/2 top-[3px] h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#F0BD46] to-[#65C9F6] transition-all duration-300 group-hover/nav:w-[55%]" />

              {label}
            </Link>
          ))}
        </nav>

        {/* =====================================================
            DESKTOP RIGHT AREA
        ===================================================== */}
        <div
          className="
            hidden
            shrink-0
            items-center
            gap-1.5

            min-[1280px]:flex

            min-[1450px]:gap-2

            min-[1650px]:gap-2.5
          "
        >
          {/* LANGUAGE */}
          <div ref={languageRef} className="relative">
            <button
              type="button"
              onClick={() => setLanguageOpen((prev) => !prev)}
              aria-expanded={languageOpen}
              aria-label="言語を選択"
              className="
                group
                flex
                h-[46px]
                items-center
                justify-center
                whitespace-nowrap
                rounded-[10px]
                border
                border-[#4D7CAE]
                bg-[#0B376F]
                px-2
                text-[10.5px]
                font-extrabold
                text-white
                shadow-[0_5px_14px_rgba(0,0,0,0.08)]
                transition-all
                duration-300

                hover:-translate-y-[2px]
                hover:border-[#65C9F6]
                hover:bg-[#10427D]
                hover:shadow-[0_9px_20px_rgba(0,0,0,0.16)]

                min-[1450px]:h-[50px]
                min-[1450px]:px-2.5
                min-[1450px]:text-[11.5px]

                min-[1650px]:px-3.5
                min-[1650px]:text-[12.5px]
              "
            >
              <span className="mr-1 text-[#65C9F6]">◎</span>

              日本語

              <span
                className={`ml-1 text-[7px] transition-transform duration-300 ${
                  languageOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {languageOpen && (
              <div className="absolute right-0 top-[55px] z-[100] w-[165px] overflow-hidden rounded-[14px] border border-[#C8DBE7] bg-white p-2 text-[#082F69] shadow-[0_18px_42px_rgba(0,0,0,0.22)]">
                {languageItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    prefetch={false}
                    onClick={() => setLanguageOpen(false)}
                    className={`relative flex min-h-[43px] items-center rounded-[9px] px-4 text-[12px] font-bold transition-all duration-200 hover:translate-x-[2px] hover:bg-[#EDF8FC] ${
                      item.label === "日本語"
                        ? "bg-[#EFF9FC] text-[#0AAFCB]"
                        : "text-[#14395F]"
                    }`}
                  >
                    {item.label}

                    {item.label === "日本語" && (
                      <span className="absolute right-3 h-2 w-2 rounded-full bg-[#19BDD5]" />
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* APPLY */}
          <Link
            href="/application"
            prefetch={false}
            className="
              group
              flex
              h-[46px]
              items-center
              justify-center
              gap-1
              whitespace-nowrap
              rounded-[10px]
              bg-[#EAB32F]
              px-2
              text-[10.5px]
              font-black
              text-[#082F69]
              shadow-[0_7px_18px_rgba(0,0,0,0.12)]
              transition-all
              duration-300

              hover:-translate-y-[3px]
              hover:scale-[1.025]
              hover:bg-[#F4C44F]
              hover:shadow-[0_12px_25px_rgba(226,169,35,0.28)]

              min-[1450px]:h-[50px]
              min-[1450px]:px-2.5
              min-[1450px]:text-[11.5px]

              min-[1650px]:gap-2
              min-[1650px]:px-3.5
              min-[1650px]:text-[12.5px]
            "
          >
            <span className="transition-transform duration-300 group-hover:-rotate-[8deg]">
              ✎
            </span>

            <span>申込み</span>
          </Link>

          {/* CONTACT */}
          <Link
            href="/contact"
            prefetch={false}
            className="
              group
              flex
              h-[46px]
              items-center
              justify-center
              gap-1
              whitespace-nowrap
              rounded-[10px]
              bg-[#65C9F6]
              px-2
              text-[10.5px]
              font-black
              text-[#082F69]
              shadow-[0_7px_18px_rgba(0,0,0,0.12)]
              transition-all
              duration-300

              hover:-translate-y-[3px]
              hover:scale-[1.025]
              hover:bg-[#81D8FA]
              hover:shadow-[0_12px_25px_rgba(101,201,246,0.28)]

              min-[1450px]:h-[50px]
              min-[1450px]:px-2.5
              min-[1450px]:text-[11.5px]

              min-[1650px]:gap-2
              min-[1650px]:px-3.5
              min-[1650px]:text-[12.5px]
            "
          >
            <span className="transition-transform duration-300 group-hover:scale-110">
              ✉
            </span>

            <span>お問い合わせ</span>
          </Link>
        </div>

        {/* =====================================================
            MOBILE / TABLET HAMBURGER
        ===================================================== */}
        <button
          type="button"
          aria-label="メニューを開く"
          aria-expanded={menuOpen}
          onClick={() => {
            setMenuOpen((prev) => !prev);
            setLanguageOpen(false);
          }}
          className="flex h-[50px] w-[50px] shrink-0 flex-col items-center justify-center gap-[5px] rounded-[12px] border border-[#537EAE] bg-[#0B376F] shadow-[0_5px_14px_rgba(0,0,0,0.10)] transition hover:border-[#65C9F6] min-[1280px]:hidden"
        >
          <span
            className={`block h-[2px] w-[23px] rounded-full bg-white transition ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />

          <span
            className={`block h-[2px] w-[23px] rounded-full bg-white transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`block h-[2px] w-[23px] rounded-full bg-white transition ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* =====================================================
          MOBILE / TABLET MENU
      ===================================================== */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#062B60] min-[1280px]:hidden">
          <div className="mx-auto max-w-[1000px] px-4 py-5 sm:px-6">
            <nav className="grid gap-2.5 sm:grid-cols-2">
              {navItems.map(([label, href], index) => (
                <Link
                  key={label}
                  href={href}
                  prefetch={false}
                  onClick={() => setMenuOpen(false)}
                  className="
                    group/mobile
                    relative
                    flex
                    min-h-[50px]
                    items-center
                    justify-between
                    overflow-hidden
                    rounded-[11px]
                    border
                    border-white/10
                    bg-white/[0.045]
                    px-4
                    text-[13px]
                    font-bold
                    transition-all
                    duration-300

                    hover:-translate-y-[2px]
                    hover:border-[#65C9F6]/60
                    hover:bg-white/[0.085]
                    hover:shadow-[0_8px_18px_rgba(0,0,0,0.15)]
                  "
                >
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#F0BD46] to-[#65C9F6] transition-all duration-300 group-hover/mobile:w-full" />

                  <span className="flex items-center gap-3">
                    <span className="text-[9px] font-black text-[#65C9F6]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {label}
                  </span>

                  <span className="text-[#F0BD46] transition group-hover/mobile:translate-x-1">
                    →
                  </span>
                </Link>
              ))}
            </nav>

            {/* LANGUAGE */}
            <div className="mt-4 rounded-[14px] border border-white/10 bg-white/[0.035] p-4">
              <p className="text-[9px] font-black tracking-[0.22em] text-[#65C9F6]">
                LANGUAGE
              </p>

              <div className="mt-3 grid grid-cols-3 gap-2">
                {languageItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    prefetch={false}
                    onClick={() => setMenuOpen(false)}
                    className={`flex min-h-[44px] items-center justify-center rounded-[10px] border px-2 text-[11px] font-bold transition-all duration-300 hover:-translate-y-[2px] ${
                      item.label === "日本語"
                        ? "border-[#65C9F6] bg-[#65C9F6] text-[#082F69] shadow-[0_6px_14px_rgba(101,201,246,0.18)]"
                        : "border-white/15 bg-white/[0.04] text-white hover:border-[#65C9F6]/60 hover:bg-white/[0.08]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Link
                href="/application"
                prefetch={false}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[50px] items-center justify-center gap-2 rounded-[11px] bg-[#EAB32F] px-3 text-[13px] font-black text-[#082F69] shadow-[0_7px_18px_rgba(0,0,0,0.12)] transition hover:-translate-y-[2px] hover:bg-[#F4C44F]"
              >
                ✎ 申込み
              </Link>

              <Link
                href="/contact"
                prefetch={false}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[50px] items-center justify-center gap-2 rounded-[11px] bg-[#65C9F6] px-3 text-[13px] font-black text-[#082F69] shadow-[0_7px_18px_rgba(0,0,0,0.12)] transition hover:-translate-y-[2px] hover:bg-[#81D8FA]"
              >
                ✉ お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          PREMIUM BOTTOM ACCENT
      ===================================================== */}
      <div className="relative h-[4px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F0BD46] via-[#65C9F6] via-60% to-[#F0BD46]" />
        <div className="absolute left-[24%] top-0 h-full w-[130px] bg-white/30 blur-[8px]" />
      </div>
    </header>
  );
}