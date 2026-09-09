import Image from "next/image";
import Header from "@/components/zh/Header";
import Footer from "@/components/zh/Footer";

const courses = [
  {
    no: "01",
    title: "升学2年课程",
    hours: "1,600",
    accent: "#13BCD6",
    accentSoft: "#DDF7FB",
    levels: [
      "初级Ⅰ",
      "初级Ⅱ",
      "中级Ⅰ",
      "中级Ⅱ",
      "高级Ⅰ",
      "高级Ⅱ",
      "高级Ⅲ",
      "高级Ⅳ",
    ],
  },
  {
    no: "02",
    title: "升学1年9个月课程",
    hours: "1,400",
    accent: "#E3A91E",
    accentSoft: "#FFF3CF",
    levels: [
      "初级Ⅱ",
      "中级Ⅰ",
      "中级Ⅱ",
      "高级Ⅰ",
      "高级Ⅱ",
      "高级Ⅲ",
      "高级Ⅳ",
    ],
  },
  {
    no: "03",
    title: "升学1年6个月课程",
    hours: "1,200",
    accent: "#2F70D0",
    accentSoft: "#E8F0FF",
    levels: [
      "初级Ⅱ",
      "中级Ⅰ",
      "中级Ⅱ",
      "高级Ⅰ",
      "高级Ⅱ",
      "高级Ⅲ",
    ],
  },
];

const strengths = [
  {
    no: "01",
    title: "助力升入大学及专门学校",
    text: "根据每一位学生的升学目标，为进入理想学校提供全面支持。",
    type: "school",
  },
  {
    no: "02",
    title: "全面支持JLPT与EJU备考",
    text: "在课堂学习中循序渐进地提升升学所需的日语能力及应试能力。",
    type: "book",
  },
  {
    no: "03",
    title: "根据志愿学校进行升学指导",
    text: "针对大学、研究生院、专门学校等不同升学目标，提供细致的升学指导。",
    type: "target",
  },
  {
    no: "04",
    title: "直至合格的个别支持",
    text: "从申请材料、志愿理由书到面试准备，为实现合格录取提供个别指导。",
    type: "support",
  },
];

const steps = [
  {
    no: "01",
    level: "初级",
    title: "打好日语基础",
    text: "均衡学习文字、词汇、语法和会话，打下日常生活所需的日语基础。",
  },
  {
    no: "02",
    level: "中级",
    title: "掌握实用日语",
    text: "综合提升读、写、听、说能力，培养能够用日语表达自己想法的能力。",
  },
  {
    no: "03",
    level: "中高级",
    title: "提升考试与升学所需能力",
    text: "围绕JLPT与EJU进行学习，提高升学所需的日语能力及综合运用能力。",
  },
  {
    no: "04",
    level: "高级",
    title: "培养升学后的日语运用能力",
    text: "掌握进入大学或专门学校后继续学习所需的更高水平、更具实践性的日语运用能力。",
  },
];

const fourSkills = [
  {
    kanji: "读",
    en: "READING",
    title: "阅读",
    text: "准确理解文章内容，培养能够适应升学后学习所需的阅读理解能力。",
  },
  {
    kanji: "写",
    en: "WRITING",
    title: "写作",
    text: "通过作文、志愿理由书等练习，培养有逻辑地用文字表达自己想法的能力。",
  },
  {
    kanji: "听",
    en: "LISTENING",
    title: "听力",
    text: "从日常会话到课堂学习，提升准确理解各种场合中日语内容的能力。",
  },
  {
    kanji: "说",
    en: "SPEAKING",
    title: "口语",
    text: "通过会话、发表及面试练习，培养清楚准确地向他人表达自己意见的能力。",
  },
];

function StrengthIcon({ type }: { type: string }) {
  if (type === "school") {
    return (
      <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7">
        <path
          d="M7 20 24 9l17 11M11 22v16h26V22M18 38V27h12v11M5 40h38"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "book") {
    return (
      <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7">
        <path
          d="M7 11h12c4 0 5 3 5 6v22c0-4-3-6-7-6H7V11ZM41 11H29c-4 0-5 3-5 6v22c0-4 3-6 7-6h10V11Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "target") {
    return (
      <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7">
        <circle cx="22" cy="26" r="13" stroke="currentColor" strokeWidth="2" />
        <circle cx="22" cy="26" r="6" stroke="currentColor" strokeWidth="2" />
        <path
          d="m22 26 17-17M34 9h5v5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7">
      <circle cx="20" cy="16" r="7" stroke="currentColor" strokeWidth="2" />
      <path
        d="M7 39c1-9 6-14 13-14 5 0 9 2 11 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="m31 34 4 4 8-10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CoursesPage() {
  return (
    <>
      <Header />

      <main className="overflow-hidden bg-[#F7FAFC] text-[#09264A]">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative h-[310px] overflow-hidden sm:h-[360px] lg:h-[405px]">
          <Image
            src="/herolife.jpg"
            alt="名古屋国际外语学院 课程介绍"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#041B3B]/95 via-[#08264A]/65 to-transparent" />

          <div
            className="absolute inset-y-0 left-0 w-[68%] sm:w-[55%] lg:w-[48%]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 78% 100%, 0% 100%)",
              background:
                "linear-gradient(135deg,#061D40 0%,#082B59 70%,#0A315F 100%)",
            }}
          />

          <div className="absolute left-[43%] top-[-30%] hidden h-[160%] w-[3px] rotate-[22deg] bg-[#14BED7] lg:block" />
          <div className="absolute left-[45%] top-[-30%] hidden h-[160%] w-[3px] rotate-[22deg] bg-[#E7AE24] lg:block" />

          <div className="relative mx-auto flex h-full max-w-[1500px] items-center px-5 sm:px-8 lg:px-12">
            <div className="relative z-10">
              <h1 className="text-[43px] font-black tracking-[0.08em] text-white sm:text-[56px] lg:text-[68px]">
                课程介绍
              </h1>

              <div className="mt-3 flex items-center gap-4">
                <p className="text-[13px] font-black tracking-[0.38em] text-[#41D9ED]">
                  COURSE
                </p>

                <div className="flex h-[3px] w-[82px]">
                  <span className="flex-1 bg-[#13BDD8]" />
                  <span className="w-[25px] bg-[#E4AA22]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ====================================================== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F4FAFC] to-[#EAF3F8] py-12 lg:py-14">
          <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-[#11BDD7]/[0.06] blur-2xl" />

          <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-7 lg:grid-cols-[0.75fr_1.45fr] lg:items-center">
              <div>
                <span className="text-[10px] font-black tracking-[0.3em] text-[#0CB3CF]">
                  ACADEMIC COURSE
                </span>

                <h2 className="mt-3 text-[27px] font-black leading-[1.45] text-[#08264B] sm:text-[34px]">
                  以在日本升学为目标的
                  <br />
                  日语教育
                </h2>

                <div className="mt-4 flex h-[3px] w-[92px]">
                  <span className="flex-1 bg-[#10BBD5]" />
                  <span className="w-[28px] bg-[#E3AA22]" />
                </div>

                <p className="mt-5 max-w-[470px] text-[13px] font-medium leading-[1.9] text-[#607489]">
                  培养升入大学、研究生院及专门学校所需的日语能力，
                  同时提升应对考试、申请及面试的综合能力。
                </p>
              </div>

              <div className="grid overflow-hidden rounded-[22px] border border-[#D6E4EB] bg-white/85 shadow-[0_18px_45px_rgba(8,38,74,0.07)] sm:grid-cols-2 lg:grid-cols-4">
                {strengths.map((item, index) => (
                  <div
                    key={item.no}
                    className={`group relative px-5 py-6 transition duration-300 hover:bg-[#F7FCFD] ${
                      index !== strengths.length - 1
                        ? "border-b border-[#DCE6EC] lg:border-b-0 lg:border-r"
                        : ""
                    }`}
                  >
                    <span className="absolute right-4 top-1 text-[46px] font-black text-[#08264B]/[0.035]">
                      {item.no}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#E6F8FB] text-[#0BAFC9] transition duration-300 group-hover:bg-[#08264B] group-hover:text-white">
                      <StrengthIcon type={item.type} />
                    </div>

                    <h3 className="mt-4 text-[13px] font-black leading-[1.6] text-[#09264A]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[10.5px] font-medium leading-[1.8] text-[#6C8092]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            COURSE ROADMAP
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#EDF4F8] py-14 lg:py-16">
          <div
            className="absolute inset-0 opacity-[0.32]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(9,38,74,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(9,38,74,.045) 1px,transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          <div className="absolute -right-[130px] top-[-130px] h-[420px] w-[420px] rounded-full border border-[#1DBBD3]/10" />
          <div className="absolute -right-[60px] top-[-60px] h-[280px] w-[280px] rounded-full border border-[#E0A820]/10" />

          <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
            <div className="mb-8 text-center">
              <span className="text-[10px] font-black tracking-[0.3em] text-[#0CB3CF]">
                COURSE LINEUP
              </span>

              <h2 className="mt-2 text-[30px] font-black text-[#08264B] sm:text-[36px]">
                课程介绍
              </h2>

              <div className="mx-auto mt-4 flex h-[3px] w-[90px]">
                <span className="flex-1 bg-[#10BBD5]" />
                <span className="w-[26px] bg-[#E3AA22]" />
              </div>

              <p className="mx-auto mt-5 max-w-[620px] text-[12px] font-medium leading-[1.9] text-[#64788B] sm:text-[13px]">
                根据学习目标及学习期间，学院设置了3种升学课程。
                <br className="hidden sm:block" />
                每个级别均由10周、200小时的课程构成。
              </p>
            </div>

            <div className="space-y-4">
              {courses.map((course) => (
                <article
                  key={course.no}
                  className="group relative overflow-hidden rounded-[24px] border border-white/80 bg-white shadow-[0_14px_40px_rgba(8,38,74,0.07)] transition duration-300 hover:-translate-y-[2px] hover:shadow-[0_20px_50px_rgba(8,38,74,0.11)]"
                >
                  <div
                    className="absolute left-0 top-0 h-full w-[7px]"
                    style={{ backgroundColor: course.accent }}
                  />

                  <div className="grid lg:grid-cols-[360px_1fr]">
                    <div className="relative overflow-hidden border-b border-[#DCE7ED] px-6 py-6 lg:border-b-0 lg:border-r lg:px-8">
                      <div
                        className="absolute -right-8 -top-12 h-36 w-36 rounded-full opacity-45"
                        style={{ backgroundColor: course.accentSoft }}
                      />

                      <div className="relative">
                        <div className="mb-4 flex items-center gap-3">
                          <div
                            className="flex h-11 w-11 items-center justify-center rounded-[13px] text-[15px] font-black text-white"
                            style={{ backgroundColor: course.accent }}
                          >
                            {course.no}
                          </div>

                          <span className="text-[9px] font-black tracking-[0.18em] text-[#8294A4]">
                            ACADEMIC COURSE
                          </span>
                        </div>

                        <h3 className="text-[22px] font-black leading-[1.45] text-[#09264A] sm:text-[24px]">
                          {course.title}
                        </h3>

                        <div className="mt-5 border-t border-[#DCE6EC] pt-4">
                          <span className="block text-[9px] font-black tracking-[0.18em] text-[#8294A4]">
                            总授课时间
                          </span>

                          <div className="mt-2 flex items-end gap-2">
                            <strong
                              className="text-[38px] font-black leading-none sm:text-[43px]"
                              style={{ color: course.accent }}
                            >
                              {course.hours}
                            </strong>

                            <span className="pb-[3px] text-[13px] font-black text-[#53697C]">
                              小时
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="px-5 py-6 sm:px-7 lg:px-8">
                      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <span className="text-[9px] font-black tracking-[0.18em] text-[#71879B]">
                            LEARNING PROGRESSION
                          </span>

                          <p className="mt-1 text-[11px] font-bold text-[#445E75]">
                            每个级别 10周/200小时
                          </p>
                        </div>

                        <span className="rounded-full bg-[#F1F5F8] px-3 py-1.5 text-[9px] font-black tracking-[0.12em] text-[#8A9AA8]">
                          BASIC → ADVANCED
                        </span>
                      </div>

                      <div className="relative">
                        <div className="absolute left-5 right-5 top-[31px] hidden h-[2px] bg-[#D8E4EA] md:block" />

                        <div
                          className="grid gap-3"
                          style={{
                            gridTemplateColumns: `repeat(${course.levels.length}, minmax(0, 1fr))`,
                          }}
                        >
                          {course.levels.map((level, index) => {
                            const isLast = index === course.levels.length - 1;

                            return (
                              <div key={level} className="relative">
                                <div
                                  className="relative z-10 flex min-h-[64px] flex-col items-center justify-center rounded-[22px] border-2 px-2 text-center transition duration-300"
                                  style={{
                                    borderColor: course.accent,
                                    backgroundColor: isLast
                                      ? course.accent
                                      : "#FFFFFF",
                                    color: isLast ? "#FFFFFF" : "#173957",
                                  }}
                                >
                                  <span className="text-[11px] font-black sm:text-[12px]">
                                    {level}
                                  </span>

                                  <span
                                    className={`mt-1 text-[9px] font-bold ${
                                      isLast ? "text-white/80" : "text-[#7E91A1]"
                                    }`}
                                  >
                                    200小时
                                  </span>
                                </div>

                                <div className="mt-2 text-center">
                                  <span
                                    className="inline-block rounded-full px-2 py-1 text-[8px] font-black"
                                    style={{
                                      backgroundColor: course.accentSoft,
                                      color: course.accent,
                                    }}
                                  >
                                    10周
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-5 overflow-hidden rounded-[14px] bg-[#08264B] px-5 py-3.5 text-center shadow-[0_10px_28px_rgba(8,38,74,.14)]">
              <p className="text-[11px] font-bold tracking-[0.03em] text-white/85 sm:text-[12px]">
                <span className="mr-3 text-[#46D7EA]">
                  CURRICULUM RULE
                </span>
                每个级别
                <strong className="mx-1 text-white">10周/200小时</strong>
                ／ 每课时
                <strong className="mx-1 text-[#F1B52A]">45分钟</strong>
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            LEARNING STEP
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#061F42] py-14 lg:py-16">
          <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-[#0BB7D2]/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-full w-[28%] bg-gradient-to-l from-[#0B396A]/40 to-transparent" />

          <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-10 xl:grid-cols-[270px_1fr] xl:items-center">
              <div>
                <span className="text-[10px] font-black tracking-[0.3em] text-[#48D8EB]">
                  LEARNING STEP
                </span>

                <h2 className="mt-3 text-[28px] font-black leading-[1.45] text-white sm:text-[34px]">
                  从基础到升学，
                  <br />
                  循序渐进地学习
                </h2>

                <div className="mt-4 flex h-[3px] w-[82px]">
                  <span className="flex-1 bg-[#14BDD7]" />
                  <span className="w-[24px] bg-[#E5AA20]" />
                </div>

                <p className="mt-5 text-[12px] font-medium leading-[1.9] text-white/60">
                  在每个学习阶段掌握相应能力，
                  并顺利进入下一学习级别。
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-[6%] right-[6%] top-[42px] hidden h-[2px] bg-gradient-to-r from-[#19C0DA] via-[#E1AA22] to-[#4D82D6] lg:block" />

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {steps.map((step, index) => (
                    <div key={step.no} className="relative">
                      <div className="relative z-10">
                        <div className="mb-5 flex items-center lg:justify-center">
                          <div
                            className={`flex h-[84px] w-[84px] items-center justify-center rounded-full border-[7px] border-[#061F42] shadow-[0_0_0_2px_rgba(255,255,255,.12)] ${
                              index === 1
                                ? "bg-[#E5AA20]"
                                : index === 2
                                  ? "bg-[#376FC2]"
                                  : "bg-[#12BBD5]"
                            }`}
                          >
                            <div className="text-center text-white">
                              <span className="block text-[9px] font-black tracking-widest opacity-75">
                                STEP
                              </span>

                              <span className="block text-[20px] font-black">
                                {step.no}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="lg:text-center">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-[10px] font-black ${
                              index === 1
                                ? "bg-[#FFF3D2] text-[#B27C00]"
                                : index === 2
                                  ? "bg-[#E7F0FF] text-[#2F64B2]"
                                  : "bg-[#DDF7FB] text-[#079CB6]"
                            }`}
                          >
                            {step.level}
                          </span>

                          <h3 className="mt-3 text-[15px] font-black leading-[1.6] text-white">
                            {step.title}
                          </h3>

                          <p className="mt-2 text-[10.5px] font-medium leading-[1.8] text-white/58">
                            {step.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FOUR SKILLS
        ====================================================== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#F7FBFD] via-white to-[#EDF5F8] py-14 lg:py-16">
          <div className="absolute left-[-90px] bottom-[-90px] h-64 w-64 rounded-full border-[45px] border-[#12BBD7]/[0.04]" />
          <div className="absolute right-[-40px] top-[-40px] h-44 w-44 rounded-full bg-[#E4AB21]/[0.05]" />

          <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="text-[10px] font-black tracking-[0.3em] text-[#0CB3CF]">
                  FOUR SKILLS
                </span>

                <h2 className="mt-2 text-[28px] font-black leading-[1.45] text-[#08264B] sm:text-[35px]">
                  均衡掌握升学后同样重要的
                  <br className="hidden sm:block" />
                  日语四项技能
                </h2>
              </div>

              <p className="max-w-[580px] text-[12px] font-medium leading-[1.9] text-[#63788B] lg:text-right">
                不将“读、写、听、说”作为相互独立的技能进行学习，
                而是在实际学习及生活场景中综合提升日语运用能力。
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[26px] border border-[#D7E5EC] bg-white shadow-[0_18px_50px_rgba(8,38,74,.07)]">
              <div className="absolute left-0 top-0 h-full w-[6px] bg-gradient-to-b from-[#12BDD8] via-[#2C72CC] to-[#E5AA21]" />

              <div className="grid md:grid-cols-2 xl:grid-cols-4">
                {fourSkills.map((skill, index) => (
                  <div
                    key={skill.title}
                    className={`group relative min-h-[220px] px-6 py-7 transition duration-300 hover:bg-[#F8FCFD] ${
                      index !== fourSkills.length - 1
                        ? "border-b border-[#DEE7ED] xl:border-b-0 xl:border-r"
                        : ""
                    }`}
                  >
                    <span className="absolute right-4 top-0 text-[74px] font-black leading-none text-[#08264B]/[0.035]">
                      {skill.kanji}
                    </span>

                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-full text-[17px] font-black text-white shadow-sm ${
                          index === 0
                            ? "bg-[#0DAFCB]"
                            : index === 1
                              ? "bg-[#D99E17]"
                              : index === 2
                                ? "bg-[#316BC0]"
                                : "bg-[#08264B]"
                        }`}
                      >
                        {skill.kanji}
                      </div>

                      <div>
                        <span className="text-[9px] font-black tracking-[0.18em] text-[#0CB3CF]">
                          {skill.en}
                        </span>

                        <h3 className="mt-1 text-[20px] font-black text-[#08264B]">
                          {skill.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-5 text-[11.5px] font-medium leading-[1.9] text-[#65798B]">
                      {skill.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CAREER SUPPORT
        ====================================================== */}
        <section className="bg-[#EAF2F6] py-10 lg:py-12">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
            <div className="overflow-hidden rounded-[24px] bg-[#082B57] shadow-[0_22px_55px_rgba(7,31,65,.16)]">
              <div className="grid lg:grid-cols-[1.04fr_0.96fr]">
                <div className="relative px-6 py-9 sm:px-9 lg:px-12 lg:py-11">
                  <span className="text-[10px] font-black tracking-[0.3em] text-[#46D8EB]">
                    CAREER SUPPORT
                  </span>

                  <h2 className="mt-3 text-[28px] font-black leading-[1.5] text-white sm:text-[34px]">
                    向理想学校迈进。
                    <br />
                    全面支持您的升学之路
                  </h2>

                  <p className="mt-5 max-w-[610px] text-[12.5px] font-medium leading-[1.95] text-white/65">
                    除日语学习外，我们还会在升学咨询、志愿学校选择、
                    申请材料、志愿理由书及面试等方面，
                    逐项为学生提供升学所需的支持。
                  </p>

                  <div className="mt-7 grid gap-2.5 sm:grid-cols-2">
                    {[
                      "升学咨询/志愿学校选择",
                      "JLPT/EJU备考",
                      "志愿理由书/申请指导",
                      "面试练习/个别指导",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-[12px] border border-white/10 bg-white/[0.055] px-4 py-3"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0B327] text-[10px] font-black text-[#08264B]">
                          ✓
                        </span>

                        <span className="text-[11px] font-bold text-white/85">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative min-h-[290px] lg:min-h-full">
                  <Image
                    src="/herolife.jpg"
                    alt="以升学为目标的学生"
                    fill
                    className="object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-[#082B57]/55 via-transparent to-transparent" />
                  <div className="absolute bottom-0 right-0 h-[74px] w-[74px] border-b-[7px] border-r-[7px] border-[#E7AE24]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            NOTE
        ====================================================== */}
        <section className="bg-white py-6">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
            <div className="flex items-start gap-3 rounded-[14px] border border-[#DDE7ED] bg-[#F7FAFC] px-5 py-4">
              <span className="mt-[1px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E6F8FB] text-[11px] font-black text-[#0BAFC9]">
                ※
              </span>

              <p className="text-[11px] font-medium leading-[1.8] text-[#667A8C]">
                为取得更好的学习效果，部分授课内容可能会进行调整。
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}