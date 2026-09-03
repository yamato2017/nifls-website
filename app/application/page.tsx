"use client";

import { FormEvent, ReactNode, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
            必須
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
  return (
    <div className="grid grid-cols-2 gap-3">
      {["はい", "いいえ"].map((option) => (
        <label
          key={option}
          className={`flex cursor-pointer items-center gap-3 rounded-[12px] border px-4 py-3.5 transition ${
            value === option
              ? "border-[#17BBD5] bg-[#EFFBFD]"
              : "border-[#D7E3EA] bg-white hover:border-[#A9CBD8]"
          }`}
        >
          <input
            type="radio"
            name={name}
            value={option}
            checked={value === option}
            onChange={() => onChange(option)}
            className="h-4 w-4 accent-[#0BAFCB]"
            required
          />

          <span className="text-[12px] font-bold text-[#294C6B]">
            {option}
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
      alert("確認事項をすべて確認してください。");
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
        throw new Error(result.message || "送信に失敗しました。");
      }

      alert(
        "お申込みを受け付けました。\nご入力いただいたメールアドレスに確認メールを送信しました。",
      );

      setForm(initialForm);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("Application submit error:", error);

      alert(
        "送信中にエラーが発生しました。\n時間をおいて再度お試しください。",
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
        {/* HERO */}
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

          <div className="relative mx-auto max-w-[1500px] px-5 py-12 sm:px-8 lg:px-12 lg:py-14">
            <div className="max-w-[820px]">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-9 bg-[#2CC7DF]" />

                <span className="text-[10px] font-black tracking-[0.3em] text-[#50D9EA]">
                  INTERVIEW PRE-APPLICATION
                </span>
              </div>

              <h1 className="mt-5 text-[38px] font-black leading-[1.35] text-white sm:text-[48px]">
                面接事前申込みフォーム
              </h1>

              <p className="mt-5 max-w-[700px] text-[12.5px] font-medium leading-[2] text-white/65">
                名古屋国際外語学院の入学面接を希望する方は、
                以下のフォームに必要事項をご入力ください。
              </p>

              <div className="mt-6 flex h-[3px] w-[110px]">
                <span className="flex-1 bg-[#24C5DC]" />
                <span className="w-[32px] bg-[#E4AA22]" />
              </div>
            </div>
          </div>
        </section>

        {/* NOTICE */}
        <section className="relative z-20 -mt-[1px] bg-white">
          <div className="mx-auto max-w-[1500px] px-5 py-7 sm:px-8 lg:px-12">
            <div className="grid overflow-hidden rounded-[18px] border border-[#D9E5EC] bg-[#F8FBFD] lg:grid-cols-[250px_1fr]">
              <div className="flex items-center bg-[#082F69] px-6 py-5">
                <div>
                  <p className="text-[9px] font-black tracking-[0.22em] text-[#48D8E9]">
                    IMPORTANT
                  </p>

                  <p className="mt-1 text-[16px] font-black text-white">
                    お申込みの前に
                  </p>
                </div>
              </div>

              <div className="grid gap-2 px-5 py-5 text-[10.5px] font-medium leading-[1.75] text-[#607485] sm:px-6">
                <p>● お申込み前に、募集要項をよくご確認ください。</p>

                <p>
                  ● この申込みは面接前の事前申込みであり、
                  入学許可・合格を意味するものではありません。
                </p>

                <p>● このフォームでは書類のアップロードは行いません。</p>

                <p>● 必要書類については学校からメールでご案内します。</p>
              </div>
            </div>
          </div>
        </section>

        {/* FORM */}
        <section className="pb-14 pt-3 lg:pb-20">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* 01 */}
              <section className="rounded-[22px] border border-[#D8E4EB] bg-white p-5 shadow-[0_10px_30px_rgba(8,47,105,.045)] sm:p-7">
                <SectionTitle
                  number="01"
                  en="BASIC INFORMATION"
                  title="基本情報"
                />

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="パスポート表記の氏名" required full>
                    <input
                      required
                      value={form.fullName}
                      onChange={(e) => update("fullName", e.target.value)}
                      className={inputClass}
                      placeholder="例：TARO YAMADA"
                    />
                  </Field>

                  <Field label="生年月日" required>
                    <input
                      required
                      type="date"
                      value={form.birthDate}
                      onChange={(e) => update("birthDate", e.target.value)}
                      className={inputClass}
                    />
                  </Field>

                  <Field label="性別" required>
                    <select
                      required
                      value={form.gender}
                      onChange={(e) => update("gender", e.target.value)}
                      className={selectClass}
                    >
                      <option value="">選択してください</option>
                      <option value="男性">男性</option>
                      <option value="女性">女性</option>
                      <option value="その他">その他</option>
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

                  <Field label="現在の居住国" required>
                    <input
                      required
                      value={form.residenceCountry}
                      onChange={(e) =>
                        update("residenceCountry", e.target.value)
                      }
                      className={inputClass}
                    />
                  </Field>

                  <Field label="携帯電話番号 / WeChat ID" required>
                    <input
                      required
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className={inputClass}
                      placeholder="+977 / +84 / WeChat ID"
                    />
                  </Field>

                  <Field label="メールアドレス" required>
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

              {/* 02 */}
              <section className="rounded-[22px] border border-[#D8E4EB] bg-white p-5 shadow-[0_10px_30px_rgba(8,47,105,.045)] sm:p-7">
                <SectionTitle number="02" en="EDUCATION" title="学歴" />

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="最終学歴" required>
                    <select
                      required
                      value={form.educationLevel}
                      onChange={(e) =>
                        update("educationLevel", e.target.value)
                      }
                      className={selectClass}
                    >
                      <option value="">選択してください</option>
                      <option>高等学校</option>
                      <option>専門学校</option>
                      <option>短期大学</option>
                      <option>大学</option>
                      <option>大学院</option>
                      <option>その他</option>
                    </select>
                  </Field>

                  <Field label="総就学年数" required>
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

                  <Field label="学校・大学名" required full>
                    <input
                      required
                      value={form.schoolName}
                      onChange={(e) => update("schoolName", e.target.value)}
                      className={inputClass}
                    />
                  </Field>

                  <Field label="専攻・学科">
                    <input
                      value={form.major}
                      onChange={(e) => update("major", e.target.value)}
                      className={inputClass}
                    />
                  </Field>

                  <div />

                  <Field label="入学年月日" required>
                    <input
                      required
                      type="date"
                      value={form.schoolStart}
                      onChange={(e) => update("schoolStart", e.target.value)}
                      className={inputClass}
                    />
                  </Field>

                  <Field label="卒業年月日" required>
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

              {/* 03 */}
              <section className="rounded-[22px] border border-[#D8E4EB] bg-white p-5 shadow-[0_10px_30px_rgba(8,47,105,.045)] sm:p-7">
                <SectionTitle
                  number="03"
                  en="JAPANESE LANGUAGE"
                  title="日本語学習・日本語資格"
                />

                <div className="grid gap-5 md:grid-cols-2">
                  <Field
                    label="現在、日本語を勉強していますか？"
                    required
                    full
                  >
                    <RadioGroup
                      name="studyingJapanese"
                      value={form.studyingJapanese}
                      onChange={(v) => update("studyingJapanese", v)}
                    />
                  </Field>

                  <Field label="合格している日本語資格" full>
                    <select
                      value={form.japaneseQualification}
                      onChange={(e) =>
                        update("japaneseQualification", e.target.value)
                      }
                      className={selectClass}
                    >
                      <option value="">なし / 選択してください</option>
                      <option>JLPT N1</option>
                      <option>JLPT N2</option>
                      <option>JLPT N3</option>
                      <option>JLPT N4</option>
                      <option>JLPT N5</option>
                      <option>JFT-Basic</option>
                      <option>NAT-TEST</option>
                      <option>その他</option>
                    </select>
                  </Field>
                </div>
              </section>

              {/* 04 / 05 */}
              <div className="grid gap-5 lg:grid-cols-2">
                <section className="rounded-[22px] border border-[#D8E4EB] bg-white p-5 shadow-[0_10px_30px_rgba(8,47,105,.045)] sm:p-7">
                  <SectionTitle
                    number="04"
                    en="WORK EXPERIENCE"
                    title="職歴"
                  />

                  <Field label="職歴はありますか？" required>
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
                    title="日本にいる親族"
                  />

                  <Field label="日本に親族はいますか？" required>
                    <RadioGroup
                      name="relativesInJapan"
                      value={form.relativesInJapan}
                      onChange={(v) => update("relativesInJapan", v)}
                    />
                  </Field>
                </section>
              </div>

              {/* 06 */}
              <section className="rounded-[22px] border border-[#D8E4EB] bg-white p-5 shadow-[0_10px_30px_rgba(8,47,105,.045)] sm:p-7">
                <SectionTitle
                  number="06"
                  en="FUTURE PLAN"
                  title="日本語学校卒業後の進路"
                />

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="日本語学校卒業後の希望進路" required>
                    <select
                      required
                      value={form.futurePlan}
                      onChange={(e) => update("futurePlan", e.target.value)}
                      className={selectClass}
                    >
                      <option value="">選択してください</option>
                      <option>大学院進学</option>
                      <option>大学進学</option>
                      <option>専門学校進学</option>
                      <option>就職</option>
                      <option>その他</option>
                    </select>
                  </Field>

                  <Field label="希望する専攻・職種">
                    <input
                      value={form.desiredMajor}
                      onChange={(e) => update("desiredMajor", e.target.value)}
                      className={inputClass}
                    />
                  </Field>

                  <Field label="希望する学校・大学名" full>
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

              {/* 07 */}
              <section className="rounded-[22px] border border-[#D8E4EB] bg-white p-5 shadow-[0_10px_30px_rgba(8,47,105,.045)] sm:p-7">
                <SectionTitle
                  number="07"
                  en="FINANCIAL SPONSOR"
                  title="経費支弁者"
                />

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="学費・生活費を支払う方" required>
                    <select
                      required
                      value={form.sponsorRelation}
                      onChange={(e) =>
                        update("sponsorRelation", e.target.value)
                      }
                      className={selectClass}
                    >
                      <option value="">選択してください</option>
                      <option>父</option>
                      <option>母</option>
                      <option>兄弟・姉妹</option>
                      <option>親族</option>
                      <option>本人</option>
                      <option>その他</option>
                    </select>
                  </Field>

                  <Field label="経費支弁者氏名" required>
                    <input
                      required
                      value={form.sponsorName}
                      onChange={(e) => update("sponsorName", e.target.value)}
                      className={inputClass}
                    />
                  </Field>

                  <Field label="職業" required>
                    <input
                      required
                      value={form.sponsorOccupation}
                      onChange={(e) =>
                        update("sponsorOccupation", e.target.value)
                      }
                      className={inputClass}
                    />
                  </Field>

                  <Field label="会社・事業所名">
                    <input
                      value={form.sponsorCompany}
                      onChange={(e) =>
                        update("sponsorCompany", e.target.value)
                      }
                      className={inputClass}
                    />
                  </Field>

                  <Field label="おおよその年収" required>
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

                  <Field label="経費支弁者の居住国" required>
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

              {/* 08 */}
              <section className="rounded-[22px] border border-[#D8E4EB] bg-white p-5 shadow-[0_10px_30px_rgba(8,47,105,.045)] sm:p-7">
                <SectionTitle
                  number="08"
                  en="APPLICATION"
                  title="申込み情報"
                />

                <div className="grid gap-5 md:grid-cols-2">
                  <Field
                    label="名古屋国際外語学院をどこで知りましたか？"
                    required
                  >
                    <select
                      required
                      value={form.source}
                      onChange={(e) => update("source", e.target.value)}
                      className={selectClass}
                    >
                      <option value="">選択してください</option>
                      <option>留学エージェント</option>
                      <option>友人・知人</option>
                      <option>家族・親族</option>
                      <option>学校・先生</option>
                      <option>Google / 検索エンジン</option>
                      <option>SNS</option>
                      <option>その他</option>
                    </select>
                  </Field>

                  <Field label="希望入学時期" required>
                    <select
                      required
                      value={form.intake}
                      onChange={(e) => update("intake", e.target.value)}
                      className={selectClass}
                    >
                      <option value="">選択してください</option>
                      <option>4月入学</option>
                      <option>7月入学</option>
                      <option>10月入学</option>
                      <option>1月入学</option>
                    </select>
                  </Field>

                  <Field label="タトゥーはありますか？" required>
                    <RadioGroup
                      name="tattoo"
                      value={form.tattoo}
                      onChange={(v) => update("tattoo", v)}
                    />
                  </Field>

                  <Field
                    label="過去に日本の日本語学校へ申請したことがありますか？"
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

              {/* 09 */}
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
                        確認・送信
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-7">
                  <p className="mb-5 text-[12px] font-bold text-[#36556F]">
                    送信前に、以下の内容をすべてご確認ください。
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        key: "confirmGuideline" as const,
                        text: "申込み前に募集要項をよく確認しました。",
                      },
                      {
                        key: "confirmPreApplication" as const,
                        text: "この申込みは面接前の事前申込みであり、入学許可・合格を意味するものではないことを理解しました。",
                      },
                      {
                        key: "confirmNoUpload" as const,
                        text: "このフォームでは書類をアップロードしないことを理解しました。",
                      },
                      {
                        key: "confirmEmail" as const,
                        text: "必要書類について学校からメールで連絡がある場合があり、申込み後はメールを定期的に確認します。",
                      },
                      {
                        key: "confirmTruth" as const,
                        text: "入力した内容に間違いがなく、事実であることを確認します。",
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
                      {submitting ? "送信中..." : "申込みを送信する"}

                      {!submitting && (
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F0B83A] text-[#082F69] transition group-hover:translate-x-1">
                          →
                        </span>
                      )}
                    </button>

                    <p className="mt-4 text-center text-[9.5px] font-medium text-[#8A9AA7]">
                      送信前に、入力内容をもう一度ご確認ください。
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