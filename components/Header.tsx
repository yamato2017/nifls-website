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
      <div className="mx-auto flex min-h-[78px] max-w-[1760px] items-center gap-4 px-4 sm:min-h-[88px] sm:px-6 lg:min-h-[96px] lg:px-7">
        {/* BRAND */}
        <Link
          href="/"
          prefetch={false}
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
            <div className="truncate text-[18px] font-extrabold leading-none tracking-[0.01em] sm:text-[21px] lg:text-[24px]">
              名古屋国際外語学院
            </div>

            <div className="mt-2 hidden whitespace-nowrap text-[8px] font-bold tracking-[0.055em] text-[#65C9F6] sm:block lg:mt-3 lg:text-[10px]">
              NAGOYA INTERNATIONAL FOREIGN LANGUAGE SCHOOL
            </div>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="ml-auto hidden h-[58px] items-center rounded-[12px] border border-[#537EAE] bg-[#0B376F] px-2 xl:flex">
          {navItems.map(([label, href], index) => (
            <Link
              key={label}
              href={href}
              prefetch={false}
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
            </Link>
          ))}
        </nav>

        {/* DESKTOP RIGHT BUTTONS */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <button
            type="button"
            className="hidden h-[50px] whitespace-nowrap rounded-[10px] border border-[#527DAD] bg-[#0B376F] px-4 text-[13px] font-bold text-white xl:block"
          >
            ◎ 日本語⌄
          </button>

          <Link
            href="/application"
            prefetch={false}
            className="hidden h-[50px] items-center justify-center whitespace-nowrap rounded-[10px] border border-[#527DAD] bg-[#0B376F] px-5 text-[13px] font-bold text-white xl:flex"
          >
            ✎&nbsp; 申込み
          </Link>

          <Link
            href="/contact"
            prefetch={false}
            className="flex h-[50px] items-center justify-center whitespace-nowrap rounded-[10px] bg-[#F0BD46] px-5 text-[13px] font-extrabold text-[#082F69] shadow-[0_5px_14px_rgba(0,0,0,0.14)] transition hover:bg-[#F5C95F]"
          >
            ✉&nbsp; お問い合わせ
          </Link>
        </div>

        {/* MOBILE / TABLET MENU BUTTON */}
        <button
          type="button"
          aria-label="メニュー"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[10px] border border-[#527DAD] bg-[#0B376F] xl:hidden"
        >
          <div className="flex flex-col gap-[5px]">
            <span
              className={`h-[2px] w-5 rounded-full bg-white transition ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />

            <span
              className={`h-[2px] w-5 rounded-full bg-white transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-[2px] w-5 rounded-full bg-white transition ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* MOBILE / TABLET MENU */}
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
                  className="flex min-h-[48px] items-center justify-between rounded-[10px] border border-white/10 bg-white/[0.04] px-4 text-[13px] font-bold text-white transition hover:border-[#F0BA3C]/40 hover:bg-white/[0.07] hover:text-[#F0BA3C]"
                >
                  <span>{label}</span>
                  <span className="text-[#65C9F6]">→</span>
                </Link>
              ))}
            </nav>

            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <Link
                href="/application"
                prefetch={false}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[50px] items-center justify-center rounded-[10px] border border-[#527DAD] bg-[#0B376F] px-4 text-[13px] font-bold text-white"
              >
                ✎&nbsp; 申込み
              </Link>

              <Link
                href="/contact"
                prefetch={false}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[50px] items-center justify-center rounded-[10px] bg-[#F0BD46] px-4 text-[13px] font-extrabold text-[#082F69]"
              >
                ✉&nbsp; お問い合わせ
              </Link>
            </div>

            <div className="mt-3 flex items-center justify-between rounded-[10px] border border-white/10 bg-white/[0.03] px-4 py-3">
              <span className="text-[11px] font-bold text-white/70">
                LANGUAGE
              </span>

              <span className="text-[12px] font-bold text-white">
                ◎ 日本語
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}