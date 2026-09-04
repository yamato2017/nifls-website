"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  ["ホーム", "/"],
  ["学校紹介", "/about"],
  ["コース", "/courses"],
  ["入学案内", "/admission"],
  ["学費", "/tuition"],
  ["学生生活", "/student-life"],
  ["情報公開", "/information"],
  ["資料DL", "/#documents"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#082F69] text-white shadow-[0_5px_22px_rgba(4,31,67,0.20)]">
      <div className="mx-auto flex min-h-[82px] max-w-[1760px] items-center gap-3 px-4 sm:min-h-[88px] sm:px-6 lg:min-h-[96px] lg:px-7">

        {/* LOGO + SCHOOL NAME */}
        <Link
          href="/"
          prefetch={false}
          onClick={() => setMenuOpen(false)}
          className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4 xl:flex-none"
        >
          <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-white sm:h-[60px] sm:w-[60px] lg:h-[65px] lg:w-[65px]">
            <Image
              src="/logo.jpg"
              alt="名古屋国際外語学院"
              width={60}
              height={60}
              priority
              className="h-[48px] w-[48px] rounded-full object-contain sm:h-[55px] sm:w-[55px] lg:h-[60px] lg:w-[60px]"
            />
          </div>

          <div className="min-w-0">
            <div className="whitespace-nowrap text-[17px] font-extrabold leading-none tracking-[-0.02em] min-[380px]:text-[18px] sm:text-[21px] sm:tracking-[0.01em] lg:text-[24px]">
              名古屋国際外語学院
            </div>

            {/* ENGLISH NAME - MOBILE मा पनि देखिन्छ */}
            <div className="mt-[6px] whitespace-nowrap text-[5.5px] font-bold leading-none tracking-[0.025em] text-[#65C9F6] min-[380px]:text-[6px] sm:mt-2 sm:text-[8px] sm:tracking-[0.055em] lg:mt-3 lg:text-[10px]">
              NAGOYA INTERNATIONAL FOREIGN LANGUAGE SCHOOL
            </div>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="ml-auto hidden h-[58px] items-center rounded-[12px] border border-[#537EAE] bg-[#0B376F] px-2 xl:flex">
          {navItems.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              prefetch={false}
              className="flex h-[40px] items-center justify-center whitespace-nowrap px-3 text-[13px] font-bold tracking-[0.02em] transition hover:text-[#65C9F6]"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP BUTTONS */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <button
            type="button"
            className="flex h-[42px] items-center rounded-[9px] border border-[#537EAE] bg-[#0B376F] px-4 text-[12px] font-bold"
          >
            ◎ 日本語
            <span className="ml-1 text-[9px]">▼</span>
          </button>

          <Link
            href="/application"
            prefetch={false}
            className="flex h-[42px] items-center justify-center rounded-[9px] bg-[#E5AD2D] px-4 text-[12px] font-extrabold text-[#082F69]"
          >
            ✎&nbsp; 申込み
          </Link>

          <Link
            href="/contact"
            prefetch={false}
            className="flex h-[42px] items-center justify-center rounded-[9px] bg-[#65C9F6] px-4 text-[12px] font-extrabold text-[#082F69]"
          >
            ✉&nbsp; お問い合わせ
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          type="button"
          aria-label="メニュー"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-[50px] w-[50px] shrink-0 flex-col items-center justify-center gap-[5px] rounded-[12px] border border-[#537EAE] bg-[#0B376F] sm:h-[54px] sm:w-[54px] xl:hidden"
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

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#062B60] xl:hidden">
          <div className="mx-auto max-w-[1760px] px-4 py-4 sm:px-6">
            <nav className="grid gap-2 sm:grid-cols-2">
              {navItems.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  prefetch={false}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-[46px] items-center justify-between rounded-[9px] border border-white/10 bg-white/[0.045] px-4 text-[13px] font-bold"
                >
                  <span>{label}</span>
                  <span className="text-[#65C9F6]">→</span>
                </Link>
              ))}
            </nav>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <Link
                href="/application"
                prefetch={false}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[46px] items-center justify-center rounded-[9px] bg-[#E5AD2D] px-3 text-[13px] font-extrabold text-[#082F69]"
              >
                ✎&nbsp; 申込み
              </Link>

              <Link
                href="/contact"
                prefetch={false}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[46px] items-center justify-center rounded-[9px] bg-[#65C9F6] px-3 text-[13px] font-extrabold text-[#082F69]"
              >
                ✉&nbsp; お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}