import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export default function SolutionSection() {
  const { t } = useLanguage();

  const oldWorldText = {
    Guest: "I hate having to struggle through a menu only to end up on hold.",
    Receptionist: "The phone keeps ringing while guests are waiting at the desk.",
    "Hotel manager": "Missed calls mean lost bookings and bad reviews.",
  };

  const newWorldText = {
    Guest: "My call is answered immediately and my booking is confirmed.",
    Receptionist: "I can focus on guests instead of constantly answering calls.",
    "Hotel manager": "The phones are quiet. I know that 100% of the calls are answered professionally and bookings are written directly into the PMS.",
  };

  const [oldActive, setOldActive] = useState("Guest");
  const [newActive, setNewActive] = useState("Hotel manager");

  return (
    <section className="bg-transparent py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* LABEL */}
        <p className="text-base sm:text-lg md:text-xl text-black/80 mb-3 font-medium drop-shadow-sm">{t('theSolution') || 'The solution'}</p>

        {/* HEADING */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-black/90 max-w-4xl mb-16 md:mb-24 drop-shadow-lg">
          {t('solutionTitle') || 'With Phone AI'} <br className="hidden sm:block" />
          {t('solutionSubtitle') || 'from Call Chaos to Top Guest Experience.'}
        </h2>

        {/* OLD VS NEW */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 mb-24 md:mb-32 lg:mb-40">

          {/* ================= OLD WORLD ================= */}
          <div className="min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.5)] transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] h-full flex flex-col">
              
              <h3 className="text-lg sm:text-xl font-semibold text-black/90 mb-6 drop-shadow-sm">
                {t('oldWorld') || 'The old world'}
              </h3>

              <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 md:mb-8">
                {Object.keys(oldWorldText).map((role) => (
                  <span
                    key={role}
                    onMouseEnter={() => setOldActive(role)}
                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm cursor-pointer transition-all duration-300 border backdrop-blur-md
                      ${
                        oldActive === role
                          ? "bg-red-500/20 text-black/90 border-red-400/30 shadow-lg scale-105"
                          : "bg-white/20 text-black/80 border-white/30 hover:bg-red-400/15 hover:scale-102"
                      }
                    `}
                  >
                    {role}
                  </span>
                ))}
              </div>

              <p className="text-black/80 text-base sm:text-lg max-w-md mb-8 md:mb-10 min-h-[60px] sm:min-h-[72px] transition-all duration-300 drop-shadow-sm flex-grow">
                "{oldWorldText[oldActive]}"
              </p>

              <div className="mt-auto">
                <img
                  src="./Solution/The old world.avif"
                  alt="Old world"
                  className="rounded-2xl md:rounded-3xl w-full max-w-md shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>

          {/* ================= WITH CODYCO ================= */}
          <div className="min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
            <div className="bg-gradient-to-br from-blue-500/10 to-green-500/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-[0_8px_32px_0_rgba(59,130,246,0.37)] border border-blue-200/30 hover:shadow-[0_12px_40px_0_rgba(59,130,246,0.5)] transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] h-full flex flex-col">
              
              <h3 className="text-lg sm:text-xl font-semibold text-black/90 mb-6 drop-shadow-sm">
                {t('withCodyco') || 'With Codyco'}
              </h3>

              <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 md:mb-8">
                {Object.keys(newWorldText).map((role) => (
                  <span
                    key={role}
                    onMouseEnter={() => setNewActive(role)}
                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm cursor-pointer transition-all duration-300 border backdrop-blur-md
                      ${
                        newActive === role
                          ? "bg-green-500/20 text-black/90 border-green-400/30 shadow-lg scale-105"
                          : "bg-white/20 text-black/80 border-white/30 hover:bg-green-400/15 hover:scale-102"
                      }
                    `}
                  >
                    {role}
                  </span>
                ))}
              </div>

              <p className="text-black/80 text-base sm:text-lg max-w-md mb-8 md:mb-10 min-h-[60px] sm:min-h-[72px] transition-all duration-300 drop-shadow-sm flex-grow">
                "{newWorldText[newActive]}"
              </p>

              <div className="mt-auto">
                <img
                  src="./Solution/With Codyco.avif"
                  alt="With Codyco"
                  className="rounded-2xl md:rounded-3xl w-full max-w-md shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>

        </div>

        {/* ================= METRICS ================= */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-black/90 mb-12 md:mb-16 lg:mb-20 max-w-3xl drop-shadow-lg">
          {t('measurableResults') || 'Measurable results, usually after one week.'}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.5)] transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">
            <p className="text-xs sm:text-sm text-black/70 mb-3 font-medium drop-shadow-sm">{t('ensuringAvailability') || 'ensuring availability'}</p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-serif text-black/90 mb-4 md:mb-6 drop-shadow-lg">100%</p>
            <p className="text-black/80 text-xs sm:text-sm leading-relaxed drop-shadow-sm">
              {t('availabilityDesc') || 'No call and no booking opportunity will be lost anymore – whether at night, on weekends, or when the lines are busy.'}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.5)] transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">
            <p className="text-xs sm:text-sm text-black/70 mb-3 font-medium drop-shadow-sm">{t('moreDirectBookings') || 'More direct bookings'}</p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-serif text-black/90 mb-4 md:mb-6 drop-shadow-lg">30+</p>
            <p className="text-black/80 text-xs sm:text-sm leading-relaxed drop-shadow-sm">
              {t('bookingsDesc') || 'Nights on additional direct bookings per week and hotel through the automated acceptance of missed calls.'}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.5)] transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">
            <p className="text-xs sm:text-sm text-black/70 mb-3 font-medium drop-shadow-sm">{t('takeLoadOffTeam') || 'Take load of your team'}</p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-serif text-black/90 mb-4 md:mb-6 drop-shadow-lg">32%</p>
            <p className="text-black/80 text-xs sm:text-sm leading-relaxed drop-shadow-sm">
              {t('teamLoadDesc') || 'All inquiries are autonomously answered by the AI so your team can focus on guests on site.'}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.5)] transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">
            <p className="text-xs sm:text-sm text-black/70 mb-3 font-medium drop-shadow-sm">
              {t('increaseGuestSatisfaction') || 'Increase guest satisfaction'}
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-serif text-black/90 mb-4 md:mb-6 drop-shadow-lg">97%</p>
            <p className="text-black/80 text-xs sm:text-sm leading-relaxed drop-shadow-sm">
              {t('satisfactionDesc') || 'Satisfaction rate among callers who receive immediate assistance without being placed on hold.'}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}