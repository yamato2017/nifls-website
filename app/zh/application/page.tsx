"use client";

import { FormEvent, ReactNode, useState } from "react";
import Header from "@/components/zh/Header";
import Footer from "@/components/zh/Footer";

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbz9Dazzi5EP9NgOn6FYnVwWju3jdsZSfX--eQXh_t2U3_tJDJQvBQc4DOJ0yphT_UuBfQ/exec";

type FormDataType = {
  fullName: string;
  birthDate: string;
  gender: string;
  nationality: string;
  residenceCountry: string;
  phone: string;
  email: string;

  educationLevel: string;
  totalEducationYears: string;
  schoolName: string;
  major: string;
  schoolStart: string;
  schoolEnd: string;

  studyingJapanese: string;
  japaneseQualification: string;

  workExperience: string;
  relativesInJapan: string;

  futurePlan: string;
  desiredMajor: string;
  desiredSchool: string;

  sponsorRelation: string;
  sponsorName: string;
  sponsorOccupation: string;
  sponsorCompany: string;
  sponsorIncome: string;
  sponsorCountry: string;

  source: string;
  intake: string;
  tattoo: string;
  appliedBefore: string;

  confirmGuideline: boolean;
  confirmPreApplication: boolean;
  confirmNoUpload: boolean;
  confirmEmail: boolean;
  confirmTruth: boolean;
};

const initialForm: FormDataType = {
  fullName: "",
  birthDate: "",
  gender: "",
  nationality: "",
  residenceCountry: "",
  phone: "",
  email: "",

  educationLevel: "",
  totalEducationYears: "",
  schoolName: "",
  major: "",
  schoolStart: "",
  schoolEnd: "",

  studyingJapanese: "",
  japaneseQualification: "",

  workExperience: "",
  relativesInJapan: "",

  futurePlan: "",
  desiredMajor: "",
  desiredSchool: "",

  sponsorRelation: "",
  sponsorName: "",
  sponsorOccupation: "",
  sponsorCompany: "",
  sponsorIncome: "",
  sponsorCountry: "",

  source: "",
  intake: "",
  tattoo: "",
  appliedBefore: "",

  confirmGuideline: false,
  confirmPreApplication: false,
  confirmNoUpload: false,
  confirmEmail: false,
  confirmTruth: false,
};

function SectionTitle({
  number,
  en,
  title,
}: {
  number: string;
  en: string;
  title: string;
}) {
  return (
    <div className="mb-7 flex items-start gap-4 border-b border-[#D9E5EC] pb-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#082F69] text-[15px] font-black text-white shadow-[0_8px_20px_rgba(8,47,105,.16)]">
        {number}
      </div>

      <div>
        <p className="text-[9px] font-black tracking-[0.25em] text-[#16BBD6]">
          {en}
        </p>

        <h2 className="mt-1 text-[22px] font-black text-[#082F69] sm:text-[25px]">
          {title}
        </h2>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
  full = false,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
  full?: boolean;
}) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <label className="mb-2 flex items-center gap-2 text-[12px] font-black text-[#14395F]">
        {label}

        {required && (
          <span className="rounded-[5px] bg-[#FFF0F0] px-2 py-0.5 text-[8px] font-black text-[#E33B48]">
            必填
          </span>
        )}
      </label>

      {children}
    </div>
  );
}

function RadioGroup({
  name,
  value,
  onChange,
}: {
  name: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const options = [
    { label: "是", value: "はい" },
    { label: "否", value: "いいえ" },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {options.map((option) => (
        <label
          key={option.value}
          className={`flex cursor-pointer items-center gap-3 rounded-[12px] border px-4 py-3.5 transition ${
            value === option.value
              ? "border-[#17BBD5] bg-[#EFFBFD]"
              : "border-[#D7E3EA] bg-white hover:border-[#A9CBD8]"
          }`}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className="h-4 w-4 accent-[#0BAFCB]"
            required
          />

          <span className="text-[12px] font-bold text-[#294C6B]">
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
}

export default function ApplicationPage() {
  const [form, setForm] = useState<FormDataType>(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const update = <K extends keyof FormDataType>(
    key: K,
    value: FormDataType[K],
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (submitting) return;

    const allConfirmed =
      form.confirmGuideline &&
      form.confirmPreApplication &&
      form.confirmNoUpload &&
      form.confirmEmail &&
      form.confirmTruth;

    if (!allConfirmed) {
      alert("请确认所有确认事项。");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(GAS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "提交失败。");
      }

      alert(
        "您的申请已成功提交。\n确认邮件已发送至您填写的电子邮箱。",
      );

      setForm(initialForm);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("Application submit error:", error);

      alert(
        "提交过程中发生错误。\n请稍后再试。",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "h-[48px] w-full rounded-[11px] border border-[#D5E2E9] bg-white px-4 text-[12px] font-medium text-[#173C5F] outline-none transition placeholder:text-[#A6B3BD] focus:border-[#12B9D4] focus:ring-4 focus:ring-[#12B9D4]/10";

  const selectClass =
    "h-[48px] w-full rounded-[11px] border border-[#D5E2E9] bg-white px-4 text-[12px] font-medium text-[#173C5F] outline-none transition focus:border-[#12B9D4] focus:ring-4 focus:ring-[#12B9D4]/10";

  return (
    <>
      <Header />

      <main className="overflow-hidden bg-[#F3F8FB] text-[#082F69]">
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden bg-[#071F43]">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.7) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.7) 1px,transparent 1px)",
              backgroundSize: "52px 52px",
            }}
          />

          <div className="absolute right-[-100px] top-[-120px] h-[360px] w-[360px] rounded-full border border-[#2BC8DF]/15" />
          <div className="absolute right-[3%] top-[-35px] h-[220px] w-[220px] rounded-full border border-[#E4AA21]/15" />

          <div className="relative mx-auto max-w-[1180px] px-5 py-11 sm:px-8 sm:py-12 lg:py-14">
            <div className="max-w-[900px]">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-9 shrink-0 bg-[#2CC7DF]" />

                <span className="whitespace-nowrap text-[9px] font-black tracking-[0.24em] text-[#50D9EA] sm:text-[10px] sm:tracking-[0.3em]">
                  INTERVIEW PRE-APPLICATION
                </span>
              </div>

              <h1 className="mt-5 whitespace-nowrap text-[31px] font-black leading-[1.15] tracking-[-0.035em] text-white min-[380px]:text-[33px] min-[420px]:text-[35px] sm:text-[42px] md:text-[48px] lg:text-[54px] lg:tracking-[-0.02em]">
                面试预申请表
              </h1>

              <p className="mt-5 max-w-[760px] text-[13px] font-medium leading-[2] text-white/70 sm:text-[14px]">
                希望参加名古屋国际外语学院入学面试的申请者，
                请填写以下表格中的必要信息。
              </p>

              <div className="mt-6 flex h-[3px] w-[110px] overflow-hidden rounded-full">
                <span className="flex-1 bg-[#24C5DC]" />
                <span className="w-[32px] bg-[#E4AA22]" />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            NOTICE
        ===================================================== */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1180px] px-5 py-9 sm:px-8 sm:py-10">
            <div className="overflow-hidden rounded-[20px] border border-[#D7E3EA] bg-[#F8FBFD] shadow-[0_8px_24px_rgba(8,47,105,0.05)] md:grid md:min-h-[205px] md:grid-cols-[31%_69%]">
              {/* LEFT */}
              <div className="flex items-center bg-[#123A76] px-7 py-7 text-white sm:px-9 md:px-9 md:py-8">
                <div>
                  <p className="text-[11px] font-black tracking-[0.22em] text-[#55DCEB] sm:text-[12px]">
                    IMPORTANT
                  </p>

                  <h2 className="mt-2 text-[21px] font-black leading-[1.5] text-white sm:text-[23px]">
                    申请前请确认
                  </h2>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex items-center bg-[#F8FBFD] px-6 py-7 sm:px-8 md:px-9 md:py-8 lg:px-10">
                <ul className="w-full space-y-3.5 text-[13px] font-medium leading-[1.9] text-[#526C7E] sm:text-[14px] lg:text-[15px]">
                  <li className="flex items-start gap-3">
                    <span className="mt-[11px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#60798C]" />

                    <span>
                      申请前，请仔细阅读
                      <a
                        href="/boshu.pdf"
                        download
                        className="mx-1 font-black text-[#087AB5] underline decoration-[2px] underline-offset-[4px] transition hover:text-[#D99C14]"
                      >
                        招生简章
                      </a>
                      。
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-[11px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#60798C]" />

                    <span>
                      此申请仅为入学面试前的预申请，
                      并不代表已获得入学许可或录取。
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-[11px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#60798C]" />

                    <span>本表格无需上传任何申请材料。</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-[11px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#60798C]" />

                    <span>
                      所需材料将由学校通过电子邮件另行通知。
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FORM
        ===================================================== */}
        <section className="pb-14 pt-3 lg:pb-20">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* =====================================================
                  01 BASIC INFORMATION
              ===================================================== */}
              <section className="rounded-[22px] border border-[#D8E4EB] bg-white p-5 shadow-[0_10px_30px_rgba(8,47,105,.045)] sm:p-7">
                <SectionTitle
                  number="01"
                  en="BASIC INFORMATION"
                  title="基本信息"
                />

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="护照上的姓名" required full>
                    <input
                      required
                      value={form.fullName}
                      onChange={(e) => update("fullName", e.target.value)}
                      className={inputClass}
                      placeholder="例：TARO YAMADA"
                    />
                  </Field>

                  <Field label="出生日期" required>
                    <input
                      required
                      type="date"
                      value={form.birthDate}
                      onChange={(e) => update("birthDate", e.target.value)}
                      className={inputClass}
                    />
                  </Field>

                  <Field label="性别" required>
                    <select
                      required
                      value={form.gender}
                      onChange={(e) => update("gender", e.target.value)}
                      className={selectClass}
                    >
                      <option value="">请选择</option>
                      <option value="男性">男</option>
                      <option value="女性">女</option>
                      <option value="その他">其他</option>
                    </select>
                  </Field>

                  <Field label="国籍" required>
                    <input
                      required
                      value={form.nationality}
                      onChange={(e) => update("nationality", e.target.value)}
                      className={inputClass}
                    />
                  </Field>

                  <Field label="目前居住国家或地区" required>
                    <input
                      required
                      value={form.residenceCountry}
                      onChange={(e) =>
                        update("residenceCountry", e.target.value)
                      }
                      className={inputClass}
                    />
                  </Field>

                  <Field label="手机号码 / WeChat ID" required>
                    <input
                      required
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className={inputClass}
                      placeholder="+86 / +84 / WeChat ID"
                    />
                  </Field>

                  <Field label="电子邮箱" required>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={inputClass}
                      placeholder="example@email.com"
                    />
                  </Field>
                </div>
              </section>

              {/* =====================================================
                  02 EDUCATION
              ===================================================== */}
              <section className="rounded-[22px] border border-[#D8E4EB] bg-white p-5 shadow-[0_10px_30px_rgba(8,47,105,.045)] sm:p-7">
                <SectionTitle number="02" en="EDUCATION" title="学历" />

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="最高学历" required>
                    <select
                      required
                      value={form.educationLevel}
                      onChange={(e) =>
                        update("educationLevel", e.target.value)
                      }
                      className={selectClass}
                    >
                      <option value="">请选择</option>
                      <option value="高等学校">高中</option>
                      <option value="専門学校">专门学校</option>
                      <option value="短期大学">短期大学</option>
                      <option value="大学">大学</option>
                      <option value="大学院">研究生院</option>
                      <option value="その他">其他</option>
                    </select>
                  </Field>

                  <Field label="总受教育年数" required>
                    <input
                      required
                      value={form.totalEducationYears}
                      onChange={(e) =>
                        update("totalEducationYears", e.target.value)
                      }
                      className={inputClass}
                      placeholder="例：12年"
                    />
                  </Field>

                  <Field label="学校 / 大学名称" required full>
                    <input
                      required
                      value={form.schoolName}
                      onChange={(e) => update("schoolName", e.target.value)}
                      className={inputClass}
                    />
                  </Field>

                  <Field label="专业 / 学科">
                    <input
                      value={form.major}
                      onChange={(e) => update("major", e.target.value)}
                      className={inputClass}
                    />
                  </Field>

                  <div />

                  <Field label="入学日期" required>
                    <input
                      required
                      type="date"
                      value={form.schoolStart}
                      onChange={(e) => update("schoolStart", e.target.value)}
                      className={inputClass}
                    />
                  </Field>

                  <Field label="毕业日期" required>
                    <input
                      required
                      type="date"
                      value={form.schoolEnd}
                      onChange={(e) => update("schoolEnd", e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                </div>
              </section>

              {/* =====================================================
                  03 JAPANESE LANGUAGE
              ===================================================== */}
              <section className="rounded-[22px] border border-[#D8E4EB] bg-white p-5 shadow-[0_10px_30px_rgba(8,47,105,.045)] sm:p-7">
                <SectionTitle
                  number="03"
                  en="JAPANESE LANGUAGE"
                  title="日语学习与日语资格"
                />

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="目前正在学习日语吗？" required full>
                    <RadioGroup
                      name="studyingJapanese"
                      value={form.studyingJapanese}
                      onChange={(v) => update("studyingJapanese", v)}
                    />
                  </Field>

                  <Field label="已取得的日语资格" full>
                    <div className="space-y-3">
                      <select
                        value={
                          form.japaneseQualification.startsWith("その他：")
                            ? "その他"
                            : form.japaneseQualification
                        }
                        onChange={(e) => {
                          if (e.target.value === "その他") {
                            update("japaneseQualification", "その他：");
                          } else {
                            update(
                              "japaneseQualification",
                              e.target.value,
                            );
                          }
                        }}
                        className={selectClass}
                      >
                        <option value="">无 / 请选择</option>
                        <option value="JLPT N1">JLPT N1</option>
                        <option value="JLPT N2">JLPT N2</option>
                        <option value="JLPT N3">JLPT N3</option>
                        <option value="JLPT N4">JLPT N4</option>
                        <option value="JLPT N5">JLPT N5</option>
                        <option value="JFT-Basic">JFT-Basic</option>
                        <option value="NAT-TEST">NAT-TEST</option>
                        <option value="その他">其他</option>
                      </select>

                      {form.japaneseQualification.startsWith("その他：") && (
                        <div className="rounded-[12px] border border-[#BFE5EC] bg-[#F4FCFD] p-4">
                          <label className="mb-2 block text-[11px] font-black text-[#14395F]">
                            请输入资格名称
                          </label>

                          <input
                            type="text"
                            value={form.japaneseQualification.replace(
                              /^その他：/,
                              "",
                            )}
                            onChange={(e) =>
                              update(
                                "japaneseQualification",
                                `その他：${e.target.value}`,
                              )
                            }
                            className={inputClass}
                            placeholder="例：TOPJ、J.TEST 等"
                            autoFocus
                          />
                        </div>
                      )}
                    </div>
                  </Field>
                </div>
              </section>

              {/* =====================================================
                  04 / 05
              ===================================================== */}
              <div className="grid gap-5 lg:grid-cols-2">
                <section className="rounded-[22px] border border-[#D8E4EB] bg-white p-5 shadow-[0_10px_30px_rgba(8,47,105,.045)] sm:p-7">
                  <SectionTitle
                    number="04"
                    en="WORK EXPERIENCE"
                    title="工作经历"
                  />

                  <Field label="是否有工作经历？" required>
                    <RadioGroup
                      name="workExperience"
                      value={form.workExperience}
                      onChange={(v) => update("workExperience", v)}
                    />
                  </Field>
                </section>

                <section className="rounded-[22px] border border-[#D8E4EB] bg-white p-5 shadow-[0_10px_30px_rgba(8,47,105,.045)] sm:p-7">
                  <SectionTitle
                    number="05"
                    en="RELATIVES IN JAPAN"
                    title="在日亲属"
                  />

                  <Field label="在日本是否有亲属？" required>
                    <RadioGroup
                      name="relativesInJapan"
                      value={form.relativesInJapan}
                      onChange={(v) => update("relativesInJapan", v)}
                    />
                  </Field>
                </section>
              </div>

              {/* =====================================================
                  06 FUTURE PLAN
              ===================================================== */}
              <section className="rounded-[22px] border border-[#D8E4EB] bg-white p-5 shadow-[0_10px_30px_rgba(8,47,105,.045)] sm:p-7">
                <SectionTitle
                  number="06"
                  en="FUTURE PLAN"
                  title="日语学校毕业后的计划"
                />

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="日语学校毕业后的计划" required>
                    <select
                      required
                      value={form.futurePlan}
                      onChange={(e) => update("futurePlan", e.target.value)}
                      className={selectClass}
                    >
                      <option value="">请选择</option>
                      <option value="大学院進学">升入研究生院</option>
                      <option value="大学進学">升入大学</option>
                      <option value="専門学校進学">升入专门学校</option>
                      <option value="就職">就业</option>
                      <option value="その他">其他</option>
                    </select>
                  </Field>

                  <Field label="希望专业 / 职业">
                    <input
                      value={form.desiredMajor}
                      onChange={(e) => update("desiredMajor", e.target.value)}
                      className={inputClass}
                    />
                  </Field>

                  <Field label="希望升学的学校 / 大学名称" full>
                    <input
                      value={form.desiredSchool}
                      onChange={(e) =>
                        update("desiredSchool", e.target.value)
                      }
                      className={inputClass}
                    />
                  </Field>
                </div>
              </section>

              {/* =====================================================
                  07 FINANCIAL SPONSOR
              ===================================================== */}
              <section className="rounded-[22px] border border-[#D8E4EB] bg-white p-5 shadow-[0_10px_30px_rgba(8,47,105,.045)] sm:p-7">
                <SectionTitle
                  number="07"
                  en="FINANCIAL SPONSOR"
                  title="经费支付人"
                />

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="学费及生活费支付人" required>
                    <select
                      required
                      value={form.sponsorRelation}
                      onChange={(e) =>
                        update("sponsorRelation", e.target.value)
                      }
                      className={selectClass}
                    >
                      <option value="">请选择</option>
                      <option value="父">父亲</option>
                      <option value="母">母亲</option>
                      <option value="兄弟・姉妹">兄弟姐妹</option>
                      <option value="親族">亲属</option>
                      <option value="本人">本人</option>
                      <option value="その他">其他</option>
                    </select>
                  </Field>

                  <Field label="经费支付人姓名" required>
                    <input
                      required
                      value={form.sponsorName}
                      onChange={(e) => update("sponsorName", e.target.value)}
                      className={inputClass}
                    />
                  </Field>

                  <Field label="职业" required>
                    <input
                      required
                      value={form.sponsorOccupation}
                      onChange={(e) =>
                        update("sponsorOccupation", e.target.value)
                      }
                      className={inputClass}
                    />
                  </Field>

                  <Field label="公司 / 工作单位名称">
                    <input
                      value={form.sponsorCompany}
                      onChange={(e) =>
                        update("sponsorCompany", e.target.value)
                      }
                      className={inputClass}
                    />
                  </Field>

                  <Field label="大致年收入" required>
                    <input
                      required
                      value={form.sponsorIncome}
                      onChange={(e) =>
                        update("sponsorIncome", e.target.value)
                      }
                      className={inputClass}
                      placeholder="例：USD 20,000"
                    />
                  </Field>

                  <Field label="经费支付人居住国家或地区" required>
                    <input
                      required
                      value={form.sponsorCountry}
                      onChange={(e) =>
                        update("sponsorCountry", e.target.value)
                      }
                      className={inputClass}
                    />
                  </Field>
                </div>
              </section>

              {/* =====================================================
                  08 APPLICATION
              ===================================================== */}
              <section className="rounded-[22px] border border-[#D8E4EB] bg-white p-5 shadow-[0_10px_30px_rgba(8,47,105,.045)] sm:p-7">
                <SectionTitle
                  number="08"
                  en="APPLICATION"
                  title="申请信息"
                />

                <div className="grid gap-5 md:grid-cols-2">
                  <Field
                    label="您是通过什么渠道了解到名古屋国际外语学院的？"
                    required
                  >
                    <select
                      required
                      value={form.source}
                      onChange={(e) => update("source", e.target.value)}
                      className={selectClass}
                    >
                      <option value="">请选择</option>
                      <option value="留学エージェント">留学中介机构</option>
                      <option value="友人・知人">朋友 / 熟人</option>
                      <option value="家族・親族">家人 / 亲属</option>
                      <option value="学校・先生">学校 / 老师</option>
                      <option value="Google / 検索エンジン">
                        Google / 搜索引擎
                      </option>
                      <option value="SNS">社交媒体（SNS）</option>
                      <option value="その他">其他</option>
                    </select>
                  </Field>

                  <Field label="希望入学时间" required>
                    <select
                      required
                      value={form.intake}
                      onChange={(e) => update("intake", e.target.value)}
                      className={selectClass}
                    >
                      <option value="">请选择</option>
                      <option value="4月入学">4月入学</option>
                      <option value="7月入学">7月入学</option>
                      <option value="10月入学">10月入学</option>
                    </select>
                  </Field>

                  <Field label="是否有纹身？" required>
                    <RadioGroup
                      name="tattoo"
                      value={form.tattoo}
                      onChange={(v) => update("tattoo", v)}
                    />
                  </Field>

                  <Field
                    label="过去是否申请过日本的日语学校？"
                    required
                  >
                    <RadioGroup
                      name="appliedBefore"
                      value={form.appliedBefore}
                      onChange={(v) => update("appliedBefore", v)}
                    />
                  </Field>
                </div>
              </section>

              {/* =====================================================
                  09 CONFIRM & SUBMIT
              ===================================================== */}
              <section className="overflow-hidden rounded-[22px] border border-[#C7DCE8] bg-white shadow-[0_14px_35px_rgba(8,47,105,.07)]">
                <div className="bg-gradient-to-r from-[#082F69] to-[#0A4B80] p-5 sm:p-7">
                  <div className="mb-0 flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-white text-[15px] font-black text-[#082F69]">
                      09
                    </div>

                    <div>
                      <p className="text-[9px] font-black tracking-[0.25em] text-[#51D9E9]">
                        CONFIRM & SUBMIT
                      </p>

                      <h2 className="mt-1 text-[22px] font-black text-white sm:text-[25px]">
                        确认并提交
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-7">
                  <p className="mb-5 text-[12px] font-bold text-[#36556F]">
                    提交前，请确认以下所有事项。
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        key: "confirmGuideline" as const,
                        text: "申请前，我已仔细阅读并确认招生简章的内容。",
                      },
                      {
                        key: "confirmPreApplication" as const,
                        text: "我已了解此申请仅为入学面试前的预申请，并不代表已获得入学许可或录取。",
                      },
                      {
                        key: "confirmNoUpload" as const,
                        text: "我已了解本表格无需上传任何申请材料。",
                      },
                      {
                        key: "confirmEmail" as const,
                        text: "我已了解学校可能通过电子邮件通知所需材料，并会在申请后定期查看电子邮件。",
                      },
                      {
                        key: "confirmTruth" as const,
                        text: "我确认所填写的信息准确无误且内容属实。",
                      },
                    ].map((item) => (
                      <label
                        key={item.key}
                        className="flex cursor-pointer items-start gap-3 rounded-[12px] border border-[#DCE6EC] bg-[#F8FBFD] p-4 transition hover:border-[#B5D7E2]"
                      >
                        <input
                          type="checkbox"
                          checked={form[item.key]}
                          onChange={(e) =>
                            update(item.key, e.target.checked)
                          }
                          className="mt-0.5 h-4 w-4 shrink-0 accent-[#0BAFCB]"
                        />

                        <span className="text-[10.5px] font-medium leading-[1.7] text-[#526A7D]">
                          {item.text}
                        </span>
                      </label>
                    ))}
                  </div>

                  <div className="mt-7 border-t border-[#DFE8ED] pt-7">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="group flex h-[58px] w-full items-center justify-center gap-4 rounded-[14px] bg-gradient-to-r from-[#082F69] to-[#0B4E87] text-[14px] font-black tracking-[0.04em] text-white shadow-[0_12px_28px_rgba(8,47,105,.22)] transition hover:-translate-y-[1px] hover:shadow-[0_17px_36px_rgba(8,47,105,.28)] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submitting ? "提交中..." : "提交申请"}

                      {!submitting && (
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F0B83A] text-[#082F69] transition group-hover:translate-x-1">
                          →
                        </span>
                      )}
                    </button>

                    <p className="mt-4 text-center text-[9.5px] font-medium text-[#8A9AA7]">
                      提交前，请再次确认您填写的内容。
                    </p>
                  </div>
                </div>
              </section>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}