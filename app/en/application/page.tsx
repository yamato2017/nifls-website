"use client";

import { FormEvent, ReactNode, useState } from "react";
import Header from "@/components/en/Header";
import Footer from "@/components/en/Footer";

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
            REQUIRED
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
    {
      label: "Yes",
      value: "はい",
    },
    {
      label: "No",
      value: "いいえ",
    },
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
      alert("Please review and confirm all items before submitting.");
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
        throw new Error(
          result.message || "Your application could not be submitted.",
        );
      }

      alert(
        "Your application has been received.\nA confirmation email has been sent to the email address you provided.",
      );

      setForm(initialForm);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("Application submit error:", error);

      alert(
        "An error occurred while submitting your application.\nPlease try again later.",
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

          <div className="relative mx-auto max-w-[1500px] px-5 py-12 sm:px-8 lg:px-12 lg:py-14">
            <div className="max-w-[900px]">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-9 shrink-0 bg-[#2CC7DF]" />

                <span className="whitespace-nowrap text-[9px] font-black tracking-[0.24em] text-[#50D9EA] sm:text-[10px] sm:tracking-[0.3em]">
                  INTERVIEW PRE-APPLICATION
                </span>
              </div>

              <h1 className="mt-5 text-[31px] font-black leading-[1.15] tracking-[-0.035em] text-white min-[380px]:text-[33px] min-[420px]:text-[35px] sm:text-[42px] md:text-[48px] lg:text-[54px] lg:tracking-[-0.02em]">
                Interview Pre-Application Form
              </h1>

              <p className="mt-5 max-w-[760px] text-[12.5px] font-medium leading-[2] text-white/65">
                If you would like to apply for an admission interview at Nagoya
                International Foreign Language School, please complete the form
                below.
              </p>

              <div className="mt-6 flex h-[3px] w-[110px]">
                <span className="flex-1 bg-[#24C5DC]" />
                <span className="w-[32px] bg-[#E4AA22]" />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            IMPORTANT NOTICE
        ===================================================== */}
        <section className="relative z-20 -mt-[1px] bg-white">
          <div className="mx-auto max-w-[1500px] px-5 py-7 sm:px-8 lg:px-12">
            <div className="grid overflow-hidden rounded-[18px] border border-[#D9E5EC] bg-[#F8FBFD] lg:grid-cols-[250px_1fr]">
              <div className="flex items-center bg-[#082F69] px-6 py-5">
                <div>
                  <p className="text-[9px] font-black tracking-[0.22em] text-[#48D8E9]">
                    IMPORTANT
                  </p>

                  <p className="mt-1 text-[16px] font-black text-white">
                    Before You Apply
                  </p>
                </div>
              </div>

              <div className="grid gap-2 px-5 py-5 text-[10.5px] font-medium leading-[1.75] text-[#607485] sm:px-6">
                <p>
                  ● Please carefully review the Application Guidelines before
                  submitting this form.
                </p>

                <p>
                  ● This is a pre-application for an admission interview. It
                  does not constitute admission or acceptance to the school.
                </p>

                <p>● Documents cannot be uploaded through this form.</p>

                <p>
                  ● The school will contact you by email regarding the required
                  documents.
                </p>
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
              {/* =================================================
                  01 BASIC INFORMATION
              ================================================= */}
              <section className="rounded-[22px] border border-[#D8E4EB] bg-white p-5 shadow-[0_10px_30px_rgba(8,47,105,.045)] sm:p-7">
                <SectionTitle
                  number="01"
                  en="BASIC INFORMATION"
                  title="Personal Information"
                />

                <div className="grid gap-5 md:grid-cols-2">
                  <Field
                    label="Full Name as Shown on Passport"
                    required
                    full
                  >
                    <input
                      required
                      value={form.fullName}
                      onChange={(e) => update("fullName", e.target.value)}
                      className={inputClass}
                      placeholder="e.g. TARO YAMADA"
                    />
                  </Field>

                  <Field label="Date of Birth" required>
                    <input
                      required
                      type="date"
                      value={form.birthDate}
                      onChange={(e) => update("birthDate", e.target.value)}
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Gender" required>
                    <select
                      required
                      value={form.gender}
                      onChange={(e) => update("gender", e.target.value)}
                      className={selectClass}
                    >
                      <option value="">Please select</option>
                      <option value="男性">Male</option>
                      <option value="女性">Female</option>
                      <option value="その他">Other</option>
                    </select>
                  </Field>

                  <Field label="Nationality" required>
                    <input
                      required
                      value={form.nationality}
                      onChange={(e) => update("nationality", e.target.value)}
                      className={inputClass}
                      placeholder="e.g. Nepal"
                    />
                  </Field>

                  <Field label="Current Country of Residence" required>
                    <input
                      required
                      value={form.residenceCountry}
                      onChange={(e) =>
                        update("residenceCountry", e.target.value)
                      }
                      className={inputClass}
                      placeholder="e.g. Nepal"
                    />
                  </Field>

                  <Field label="Mobile Number / WeChat ID" required>
                    <input
                      required
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className={inputClass}
                      placeholder="+977 / +84 / WeChat ID"
                    />
                  </Field>

                  <Field label="Email Address" required>
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

              {/* =================================================
                  02 EDUCATION
              ================================================= */}
              <section className="rounded-[22px] border border-[#D8E4EB] bg-white p-5 shadow-[0_10px_30px_rgba(8,47,105,.045)] sm:p-7">
                <SectionTitle
                  number="02"
                  en="EDUCATION"
                  title="Educational Background"
                />

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Highest Level of Education" required>
                    <select
                      required
                      value={form.educationLevel}
                      onChange={(e) =>
                        update("educationLevel", e.target.value)
                      }
                      className={selectClass}
                    >
                      <option value="">Please select</option>
                      <option value="高等学校">High School</option>
                      <option value="専門学校">Vocational School</option>
                      <option value="短期大学">Junior College</option>
                      <option value="大学">University</option>
                      <option value="大学院">Graduate School</option>
                      <option value="その他">Other</option>
                    </select>
                  </Field>

                  <Field label="Total Years of Education" required>
                    <input
                      required
                      value={form.totalEducationYears}
                      onChange={(e) =>
                        update("totalEducationYears", e.target.value)
                      }
                      className={inputClass}
                      placeholder="e.g. 12 years"
                    />
                  </Field>

                  <Field label="Name of School / University" required full>
                    <input
                      required
                      value={form.schoolName}
                      onChange={(e) => update("schoolName", e.target.value)}
                      className={inputClass}
                      placeholder="Enter the official school name"
                    />
                  </Field>

                  <Field label="Major / Field of Study">
                    <input
                      value={form.major}
                      onChange={(e) => update("major", e.target.value)}
                      className={inputClass}
                      placeholder="e.g. Business Administration"
                    />
                  </Field>

                  <div />

                  <Field label="Date of Enrollment" required>
                    <input
                      required
                      type="date"
                      value={form.schoolStart}
                      onChange={(e) => update("schoolStart", e.target.value)}
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Date of Graduation" required>
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

              {/* =================================================
                  03 JAPANESE LANGUAGE
              ================================================= */}
              <section className="rounded-[22px] border border-[#D8E4EB] bg-white p-5 shadow-[0_10px_30px_rgba(8,47,105,.045)] sm:p-7">
                <SectionTitle
                  number="03"
                  en="JAPANESE LANGUAGE"
                  title="Japanese Language Study & Qualifications"
                />

                <div className="grid gap-5 md:grid-cols-2">
                  <Field
                    label="Are you currently studying Japanese?"
                    required
                    full
                  >
                    <RadioGroup
                      name="studyingJapanese"
                      value={form.studyingJapanese}
                      onChange={(v) => update("studyingJapanese", v)}
                    />
                  </Field>

                  <Field
                    label="Japanese Language Qualification(s) Passed"
                    full
                  >
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
                        <option value="">None / Please select</option>
                        <option value="JLPT N1">JLPT N1</option>
                        <option value="JLPT N2">JLPT N2</option>
                        <option value="JLPT N3">JLPT N3</option>
                        <option value="JLPT N4">JLPT N4</option>
                        <option value="JLPT N5">JLPT N5</option>
                        <option value="JFT-Basic">JFT-Basic</option>
                        <option value="NAT-TEST">NAT-TEST</option>
                        <option value="その他">Other</option>
                      </select>

                      {form.japaneseQualification.startsWith("その他：") && (
                        <div className="rounded-[12px] border border-[#BFE5EC] bg-[#F4FCFD] p-4">
                          <label className="mb-2 block text-[11px] font-black text-[#14395F]">
                            Please enter the name of the qualification
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
                            placeholder="e.g. TOPJ, J.TEST"
                            autoFocus
                          />
                        </div>
                      )}
                    </div>
                  </Field>
                </div>
              </section>

              {/* =================================================
                  04 / 05
              ================================================= */}
              <div className="grid gap-5 lg:grid-cols-2">
                <section className="rounded-[22px] border border-[#D8E4EB] bg-white p-5 shadow-[0_10px_30px_rgba(8,47,105,.045)] sm:p-7">
                  <SectionTitle
                    number="04"
                    en="WORK EXPERIENCE"
                    title="Work Experience"
                  />

                  <Field label="Do you have any work experience?" required>
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
                    title="Relatives in Japan"
                  />

                  <Field
                    label="Do you have any relatives living in Japan?"
                    required
                  >
                    <RadioGroup
                      name="relativesInJapan"
                      value={form.relativesInJapan}
                      onChange={(v) => update("relativesInJapan", v)}
                    />
                  </Field>
                </section>
              </div>

              {/* =================================================
                  06 FUTURE PLAN
              ================================================= */}
              <section className="rounded-[22px] border border-[#D8E4EB] bg-white p-5 shadow-[0_10px_30px_rgba(8,47,105,.045)] sm:p-7">
                <SectionTitle
                  number="06"
                  en="FUTURE PLAN"
                  title="Plans After Japanese Language School"
                />

                <div className="grid gap-5 md:grid-cols-2">
                  <Field
                    label="What do you plan to do after graduating from Japanese language school?"
                    required
                  >
                    <select
                      required
                      value={form.futurePlan}
                      onChange={(e) => update("futurePlan", e.target.value)}
                      className={selectClass}
                    >
                      <option value="">Please select</option>
                      <option value="大学院進学">
                        Enter Graduate School
                      </option>
                      <option value="大学進学">Enter University</option>
                      <option value="専門学校進学">
                        Enter Vocational School
                      </option>
                      <option value="就職">Employment</option>
                      <option value="その他">Other</option>
                    </select>
                  </Field>

                  <Field label="Desired Major / Occupation">
                    <input
                      value={form.desiredMajor}
                      onChange={(e) => update("desiredMajor", e.target.value)}
                      className={inputClass}
                      placeholder="e.g. IT, Business, Engineering"
                    />
                  </Field>

                  <Field
                    label="Preferred School / University"
                    full
                  >
                    <input
                      value={form.desiredSchool}
                      onChange={(e) =>
                        update("desiredSchool", e.target.value)
                      }
                      className={inputClass}
                      placeholder="Enter the school name if known"
                    />
                  </Field>
                </div>
              </section>

              {/* =================================================
                  07 FINANCIAL SPONSOR
              ================================================= */}
              <section className="rounded-[22px] border border-[#D8E4EB] bg-white p-5 shadow-[0_10px_30px_rgba(8,47,105,.045)] sm:p-7">
                <SectionTitle
                  number="07"
                  en="FINANCIAL SPONSOR"
                  title="Financial Sponsor"
                />

                <div className="grid gap-5 md:grid-cols-2">
                  <Field
                    label="Who will pay your tuition and living expenses?"
                    required
                  >
                    <select
                      required
                      value={form.sponsorRelation}
                      onChange={(e) =>
                        update("sponsorRelation", e.target.value)
                      }
                      className={selectClass}
                    >
                      <option value="">Please select</option>
                      <option value="父">Father</option>
                      <option value="母">Mother</option>
                      <option value="兄弟・姉妹">Brother / Sister</option>
                      <option value="親族">Other Relative</option>
                      <option value="本人">Self</option>
                      <option value="その他">Other</option>
                    </select>
                  </Field>

                  <Field label="Financial Sponsor's Full Name" required>
                    <input
                      required
                      value={form.sponsorName}
                      onChange={(e) => update("sponsorName", e.target.value)}
                      className={inputClass}
                      placeholder="Enter full name"
                    />
                  </Field>

                  <Field label="Occupation" required>
                    <input
                      required
                      value={form.sponsorOccupation}
                      onChange={(e) =>
                        update("sponsorOccupation", e.target.value)
                      }
                      className={inputClass}
                      placeholder="e.g. Business Owner"
                    />
                  </Field>

                  <Field label="Company / Business Name">
                    <input
                      value={form.sponsorCompany}
                      onChange={(e) =>
                        update("sponsorCompany", e.target.value)
                      }
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Approximate Annual Income" required>
                    <input
                      required
                      value={form.sponsorIncome}
                      onChange={(e) =>
                        update("sponsorIncome", e.target.value)
                      }
                      className={inputClass}
                      placeholder="e.g. USD 20,000"
                    />
                  </Field>

                  <Field
                    label="Financial Sponsor's Country of Residence"
                    required
                  >
                    <input
                      required
                      value={form.sponsorCountry}
                      onChange={(e) =>
                        update("sponsorCountry", e.target.value)
                      }
                      className={inputClass}
                      placeholder="e.g. Nepal"
                    />
                  </Field>
                </div>
              </section>

              {/* =================================================
                  08 APPLICATION
              ================================================= */}
              <section className="rounded-[22px] border border-[#D8E4EB] bg-white p-5 shadow-[0_10px_30px_rgba(8,47,105,.045)] sm:p-7">
                <SectionTitle
                  number="08"
                  en="APPLICATION"
                  title="Application Information"
                />

                <div className="grid gap-5 md:grid-cols-2">
                  <Field
                    label="How did you hear about Nagoya International Foreign Language School?"
                    required
                  >
                    <select
                      required
                      value={form.source}
                      onChange={(e) => update("source", e.target.value)}
                      className={selectClass}
                    >
                      <option value="">Please select</option>
                      <option value="留学エージェント">
                        Study Abroad Agent
                      </option>
                      <option value="友人・知人">
                        Friend / Acquaintance
                      </option>
                      <option value="家族・親族">
                        Family / Relative
                      </option>
                      <option value="学校・先生">
                        School / Teacher
                      </option>
                      <option value="Google / 検索エンジン">
                        Google / Search Engine
                      </option>
                      <option value="SNS">Social Media</option>
                      <option value="その他">Other</option>
                    </select>
                  </Field>

                  <Field label="Preferred Intake" required>
                    <select
                      required
                      value={form.intake}
                      onChange={(e) => update("intake", e.target.value)}
                      className={selectClass}
                    >
                      <option value="">Please select</option>
                      <option value="4月入学">April Intake</option>
                      <option value="7月入学">July Intake</option>
                      <option value="10月入学">October Intake</option>
                      <option value="1月入学">January Intake</option>
                    </select>
                  </Field>

                  <Field label="Do you have any tattoos?" required>
                    <RadioGroup
                      name="tattoo"
                      value={form.tattoo}
                      onChange={(v) => update("tattoo", v)}
                    />
                  </Field>

                  <Field
                    label="Have you previously applied to a Japanese language school in Japan?"
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

              {/* =================================================
                  09 CONFIRM & SUBMIT
              ================================================= */}
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
                        Confirmation & Submission
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-7">
                  <p className="mb-5 text-[12px] font-bold text-[#36556F]">
                    Please review and confirm all of the following before
                    submitting your application.
                  </p>

                  <div className="space-y-3">
                    {[
                      {
                        key: "confirmGuideline" as const,
                        text: "I have carefully reviewed the Application Guidelines before submitting this form.",
                      },
                      {
                        key: "confirmPreApplication" as const,
                        text: "I understand that this is a pre-application for an admission interview and does not constitute admission or acceptance to the school.",
                      },
                      {
                        key: "confirmNoUpload" as const,
                        text: "I understand that documents are not uploaded through this form.",
                      },
                      {
                        key: "confirmEmail" as const,
                        text: "I understand that the school may contact me by email regarding required documents, and I will check my email regularly after submitting this form.",
                      },
                      {
                        key: "confirmTruth" as const,
                        text: "I confirm that the information I have provided is accurate and true.",
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
                      {submitting
                        ? "Submitting..."
                        : "Submit Pre-Application"}

                      {!submitting && (
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F0B83A] text-[#082F69] transition group-hover:translate-x-1">
                          →
                        </span>
                      )}
                    </button>

                    <p className="mt-4 text-center text-[9.5px] font-medium text-[#8A9AA7]">
                      Please review your information once more before
                      submitting.
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