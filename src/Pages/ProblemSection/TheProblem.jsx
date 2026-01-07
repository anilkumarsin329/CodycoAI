import { FiUsers, FiGrid, FiStar, FiSettings, FiDollarSign } from "react-icons/fi";
import { useLanguage } from "../../contexts/LanguageContext";

export default function TheProblem() {
  const { t } = useLanguage();
  
  return (
    <section className="bg-transparent py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* TOP AI LOGOS */}
        <div className="text-center mb-6 text-sm text-gray-500">
          Get an AI summary about Codyco
        </div>

        <div className="flex flex-wrap items-start justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16 text-center text-xs text-gray-600">

          <div className="flex flex-col items-center">
            <img
              src="./TheProblems/Perplexity.png"
              className="h-5 sm:h-6 drop-shadow-lg hover:scale-110 transition-transform"
            />
            <p className="mt-2 leading-none">Perplexity</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="./TheProblems/Google AI.png"
              className="h-5 sm:h-6 drop-shadow-lg hover:scale-110 transition-transform"
            />
            <p className="mt-2 leading-none">Google AI</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="./TheProblems/chatgpt.svg"
              className="h-5 sm:h-6 drop-shadow-lg hover:scale-110 transition-transform"
            />
            <p className="mt-2 leading-none">ChatGPT</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="./TheProblems/claude.svg"
              className="h-5 sm:h-6 drop-shadow-lg hover:scale-110 transition-transform"
            />
            <p className="mt-2 leading-none">Claude</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="./TheProblems/grok.png"
              className="h-5 sm:h-6 drop-shadow-lg hover:scale-110 transition-transform"
            />
            <p className="mt-2 leading-none">Grok</p>
          </div>

        </div>

        {/* TITLE */}
        <p className="text-sm text-black/80 mb-3 font-medium drop-shadow-lg">{t('theProblem')}</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-black/90 mb-16 md:mb-24 max-w-4xl drop-shadow-2xl text-shadow-lg">
          {t('problemTitle')}
        </h2>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 items-start">

          {/* LEFT COLUMN */}
          <div className="space-y-8 md:space-y-12 lg:space-y-20">

            <div className="bg-white/5 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/10 hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.5)] transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">

              {/* ICON */}
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/10 mb-4">
                <FiUsers size={20} />
              </span>

              <h3 className="text-lg font-semibold text-black/90 mb-3 drop-shadow-lg">
                {t('staffLack')}
              </h3>
              <p className="text-black/80 leading-relaxed drop-shadow-md">
                {t('staffLackDesc')}
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/10 hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.5)] transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">

              {/* ICON */}
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/10 mb-4">
                <FiGrid size={20} />
              </span>

              <h3 className="text-lg font-semibold text-black/90 mb-3 drop-shadow-lg">
                {t('standardSolutions')}
              </h3>
              <p className="text-black/80 leading-relaxed drop-shadow-md">
                {t('standardSolutionsDesc')}
              </p>
            </div>

          </div>

          {/* MIDDLE COLUMN */}
          <div className="space-y-8 md:space-y-12 lg:space-y-20">

            <div className="bg-white/5 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/10 hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.5)] transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">

              {/* ICON */}
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/10 mb-4">
                <FiStar size={20} />
              </span>

              <h3 className="text-lg font-semibold text-black/90 mb-3 drop-shadow-lg">
                {t('poorAvailability')}
              </h3>
              <p className="text-black/80 leading-relaxed drop-shadow-md">
                {t('poorAvailabilityDesc')}
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/10 hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.5)] transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">

              {/* ICON */}
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/10 mb-4">
                <FiSettings size={20} />
              </span>

              <h3 className="text-lg font-semibold text-black/90 mb-3 drop-shadow-lg">
                {t('currentSolution')}
              </h3>
              <p className="text-black/80 leading-relaxed drop-shadow-md">
                {t('currentSolutionDesc')}
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="flex justify-center md:col-span-2 lg:col-span-1">
            <div className="w-full max-w-md min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[640px] bg-gradient-to-br from-blue-600/90 to-blue-800/90 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-[0_8px_32px_0_rgba(37,99,235,0.45)] border border-white/20 hover:shadow-[0_12px_40px_0_rgba(37,99,235,0.6)] transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 flex flex-col">

              {/* PUSH CONTENT TO BOTTOM */}
              <div className="mt-auto">

                {/* ICON */}
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/15 mb-4">
                  <FiDollarSign size={24} className="text-white" />
                </span>

                <h3 className="text-xl font-bold text-white mb-4 drop-shadow-lg">
                  {t('missedCalls')}
                </h3>

                <p className="text-white/90 leading-relaxed drop-shadow-md italic">
                  {t('missedCallsDesc')}
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}