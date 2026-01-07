import { useLanguage } from "../../contexts/LanguageContext";

export default function ExpansionStages() {
  const { t } = useLanguage();

  const stages = [
    {
      step: "01",
      title: t('immediateCoverage') || "Immediate coverage",
      desc:
        t('immediateCoverageDesc') ||
        "The AI acts like a call center. It only intervenes in missed calls, answers simple FAQs, and perfectly forwards complex queries to your team via email.",
      img: "./ExpansionStage/b1.avif",
    },
    {
      step: "02",
      title: t('directBookingEngine') || "Direct booking engine",
      desc:
        t('directBookingEngineDesc') ||
        "The AI is seamlessly integrated with your PMS. It can now not only accept missed calls but also convert inquiries in real-time into paid direct bookings and enter them error-free.",
      img: "./ExpansionStage/b2.avif",
    },
    {
      step: "03",
      title: t('phoneCenter') || "The phone center",
      desc:
        t('phoneCenterDesc') ||
        'The AI is the point of contact for all calls. It replaces your old "Press 1" menu, answers requests immediately, or intelligently directs the guest to the right contact person.',
      img: "./ExpansionStage/b3.avif",
    },
  ];

  return (
    <section className="bg-transparent py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20 backdrop-blur-sm"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* LABEL */}
        <p className="text-base sm:text-lg md:text-xl text-black/80 mb-3 md:mb-4 font-medium drop-shadow-sm">
          {t('expansionStages') || "Expansion stages"}
        </p>

        {/* HEADING */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-black/90 max-w-4xl mb-16 md:mb-20 lg:mb-24 drop-shadow-lg">
          {t('aiGrowsWithYou') || "Our AI grows with you – In 3 clear phases."}
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {stages.map((item, index) => (
            <div
              key={item.step}
              className="bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.5)] transition-all duration-500 transform hover:-translate-y-3 hover:scale-105"
            >
              {/* STEP */}
              <span
                className={`inline-block mb-4 md:mb-6 px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base rounded-lg font-medium drop-shadow-sm ${
                  index === 0
                    ? "bg-blue-500/20 text-blue-900 border border-blue-400/30"
                    : index === 1
                    ? "bg-green-500/20 text-green-900 border border-green-400/30"
                    : "bg-purple-500/20 text-purple-900 border border-purple-400/30"
                }`}
              >
                {item.step}
              </span>

              {/* TITLE */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black/90 mb-3 md:mb-4 drop-shadow-sm">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-black/80 leading-relaxed mb-6 md:mb-8 text-sm sm:text-base drop-shadow-sm">
                {item.desc}
              </p>

              {/* THIS MEANS FOR YOU */}
              <div className="flex items-center gap-3 text-black/80 mb-8 md:mb-10">
                <span className="text-sm md:text-base font-medium drop-shadow-sm">
                  {t('thisMeansForYou') || "This means for you"}
                </span>

                <span className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center text-sm md:text-base shadow-lg">
                  →
                </span>
              </div>

              {/* IMAGE (ADJUSTED ONLY) */}
              <div className="flex justify-center">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-white/30">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full max-w-[420px] sm:max-w-[460px] md:max-w-[500px] object-contain drop-shadow-xl"
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
