const documents = [
  {
    no: "01",
    en: "SCHOOL GUIDE",
    title: "入学案内",
    sub: "学校案内パンフレット",
    type: "PDF",
    file: "/ppt26jp.pdf",
    accent: "blue",
  },
  {
    no: "02",
    en: "ADMISSION GUIDE",
    title: "募集要項",
    sub: "出願資格・募集内容",
    type: "PDF",
    file: "/boshu.pdf",
    accent: "blue",
  },
  {
    no: "03",
    en: "PAYMENT GUIDE",
    title: "初年度納入金一覧",
    sub: "在留資格認定証明書交付後の納入金",
    type: "PDF",
    file: "/gakuhijp.pdf",
    accent: "blue",
  },
  {
    no: "04",
    en: "APPLICATION FORM",
    title: "入学願書",
    sub: "出願用Excelファイル",
    type: "EXCEL",
    file: "/gansho.xlsx",
    accent: "green",
  },
];

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function FileIcon({ type }: { type: string }) {
  if (type === "EXCEL") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M5 3h9l5 5v13H5z" />
        <path d="M14 3v6h6" />
        <path d="m8 12 4 6" />
        <path d="m12 12-4 6" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
    >
      <path d="M5 3h9l5 5v13H5z" />
      <path d="M14 3v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h6" />
    </svg>
  );
}

export default function Documents() {
  return (
    <section
      id="documents"
      className="relative overflow-hidden bg-[#f7fbfe] px-5 py-12 sm:px-8 lg:px-10"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute -left-24 top-[-100px] h-[280px] w-[280px] rounded-full border border-[#d7a633]/20" />
      <div className="pointer-events-none absolute -right-24 bottom-[-120px] h-[300px] w-[300px] rounded-full border-[18px] border-[#eaf5fb]" />

      <div
        className="pointer-events-none absolute right-[3%] top-[50px] h-[90px] w-[130px] opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle, #3899d1 1.5px, transparent 1.5px)",
          backgroundSize: "13px 13px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* TITLE */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#d6a22e]" />

            <p className="text-[12px] font-bold tracking-[0.25em] text-[#c48c1a]">
              DOWNLOAD
            </p>

            <span className="h-px w-10 bg-[#d6a22e]" />
          </div>

          <h2
            className="mt-2 text-[38px] font-semibold tracking-[0.07em] text-[#07366f]"
            style={{
              fontFamily:
                '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
            }}
          >
            資料ダウンロード
          </h2>

          <div className="mx-auto mt-3 h-[2px] w-10 bg-[#d6a22e]" />
        </div>

        {/* 2 x 2 GRID */}
        <div className="grid gap-4 md:grid-cols-2">
          {documents.map((doc) => {
            const isExcel = doc.type === "EXCEL";

            return (
              <a
                key={doc.no}
                href={doc.file}
                download
                className="group relative flex min-h-[165px] overflow-hidden rounded-[18px] border border-[#d7e6ef] bg-white shadow-[0_8px_22px_rgba(20,77,115,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#d4a739] hover:shadow-[0_14px_30px_rgba(20,77,115,0.12)]"
              >
                {/* GOLD CORNER */}
                <div className="absolute left-0 top-0 h-0 w-0 border-r-[34px] border-t-[34px] border-r-transparent border-t-[#d9aa32]" />

                {/* CONTENT */}
                <div className="flex w-full items-center gap-5 px-6 py-5 sm:px-7">
                  {/* NUMBER */}
                  <div className="w-[58px] shrink-0">
                    <p className="font-serif text-[34px] font-bold leading-none text-[#d8a631]">
                      {doc.no}
                    </p>
                  </div>

                  {/* ICON */}
                  <div
                    className={`flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[14px] border ${
                      isExcel
                        ? "border-[#cdebd7] bg-[#edf9f1] text-[#1d9a51]"
                        : "border-[#d4e8f4] bg-[#edf7fd] text-[#1682bd]"
                    }`}
                  >
                    <FileIcon type={doc.type} />
                  </div>

                  {/* TEXT */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[10px] font-bold tracking-[0.17em] text-[#07366f]">
                        {doc.en}
                      </p>

                      <span
                        className={`shrink-0 rounded-[6px] border px-2.5 py-1 text-[10px] font-bold ${
                          isExcel
                            ? "border-[#8bc9a2] text-[#168c48]"
                            : "border-[#8bbadb] text-[#0a5b9c]"
                        }`}
                      >
                        {doc.type}
                      </span>
                    </div>

                    <h3
                      className="mt-2 text-[22px] font-bold tracking-[0.04em] text-[#07366f]"
                      style={{
                        fontFamily:
                          '"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif',
                      }}
                    >
                      {doc.title}
                    </h3>

                    <p className="mt-1 text-[12px] font-medium leading-[1.6] text-[#667d90]">
                      {doc.sub}
                    </p>

                    <div className="mt-3 flex items-center justify-between border-t border-dashed border-[#d7e3ec] pt-3">
                      <span className="text-[11px] font-bold tracking-[0.06em] text-[#174b78]">
                        ダウンロード
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07366f] text-[#efb83a] shadow-[0_6px_14px_rgba(7,54,111,0.16)] transition duration-300 group-hover:translate-y-1 group-hover:bg-[#0a4588]">
                        <DownloadIcon />
                      </span>
                    </div>
                  </div>
                </div>

                {/* HOVER LINE */}
                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#d9a62f] transition-all duration-500 group-hover:w-full" />
              </a>
            );
          })}
        </div>

        {/* NOTE */}
        <p className="mt-5 text-center text-[11px] font-medium tracking-[0.04em] text-[#70879a]">
          クリックするとファイルのダウンロードが開始されます。
        </p>
      </div>
    </section>
  );
}