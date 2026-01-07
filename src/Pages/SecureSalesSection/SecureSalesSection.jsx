import { FiCheck } from "react-icons/fi";
import { useLanguage } from "../../contexts/LanguageContext";

export default function SecureSalesSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-transparent py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-purple-900/90 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">

          {/* LEFT CARD */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/20 flex items-center justify-center min-h-[400px] sm:min-h-[450px] md:min-h-[520px] p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <img
                src="./SecureSales/Cardbig.avif"
                alt="Secure sales flow"
                className="max-w-[200px] sm:max-w-[250px] md:max-w-xs w-full h-auto drop-shadow-lg"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/90 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/10 px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">

            <p className="text-sm sm:text-base text-white/70 mb-4 md:mb-6 font-medium drop-shadow-sm">
              {t('fewerBookingsLose') || 'Fewer bookings lose'}
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight mb-6 md:mb-8 drop-shadow-lg">
              {t('secureSales') || 'Secure sales'} <br className="hidden sm:block" />
              {t('directlyOverPhone') || 'directly over the phone.'}
            </h2>

            <p className="text-base sm:text-lg font-semibold mb-3 md:mb-4 drop-shadow-sm">
              {t('endToEndBookings') || 'End-to-End bookings into the PMS'}
            </p>

            <p className="text-white/80 max-w-xl mb-8 md:mb-10 leading-relaxed text-sm sm:text-base drop-shadow-sm">
              {t('aiAcceptsReservations') || 'The AI accepts reservations, processes payments securely, and automatically and accurately records the booking in your PMS (Opera Cloud, Sihot, Apaleo). Your revenue is secured instantly.'}
            </p>

            {/* BRAND LOGOS */}
            <div className="flex items-center gap-4 sm:gap-6 mb-8 md:mb-10">
              <img src="./SecureSales/h1.avif" className="h-5 sm:h-6 opacity-80 hover:opacity-100 transition-opacity drop-shadow-md" />
              <img src="./SecureSales/h2.avif" className="h-5 sm:h-6 opacity-80 hover:opacity-100 transition-opacity drop-shadow-md" />
              <img src="./SecureSales/h1.avif" className="h-5 sm:h-6 opacity-80 hover:opacity-100 transition-opacity drop-shadow-md" />
            </div>

            {/* FEATURES WITH HOVER */}
            <div className="border-t border-white/20 pt-4 md:pt-6">

              <div className="group flex items-center gap-3 py-3 md:py-4 border-b border-white/10 cursor-pointer transition-all duration-300 hover:border-white/40 hover:bg-white/5 rounded-lg px-2 md:px-3">
                <div className="bg-white/10 backdrop-blur-md rounded-full p-1.5 group-hover:bg-green-500/20 transition-all duration-300">
                  <FiCheck className="opacity-70 group-hover:opacity-100 transition text-sm sm:text-base" />
                </div>
                <span className="text-white/80 group-hover:text-white transition text-sm sm:text-base drop-shadow-sm">
                  {t('intelligentCallForwarding') || 'Intelligent call forwarding'}
                </span>
              </div>

              <div className="group flex items-center gap-3 py-3 md:py-4 border-b border-white/10 cursor-pointer transition-all duration-300 hover:border-white/40 hover:bg-white/5 rounded-lg px-2 md:px-3">
                <div className="bg-white/10 backdrop-blur-md rounded-full p-1.5 group-hover:bg-green-500/20 transition-all duration-300">
                  <FiCheck className="opacity-70 group-hover:opacity-100 transition text-sm sm:text-base" />
                </div>
                <span className="text-white/80 group-hover:text-white transition text-sm sm:text-base drop-shadow-sm">
                  {t('answerStandardQuestions') || 'Answer standard questions'}
                </span>
              </div>

              <div className="group flex items-center gap-3 py-3 md:py-4 border-b border-white/10 cursor-pointer transition-all duration-300 hover:border-white/40 hover:bg-white/5 rounded-lg px-2 md:px-3">
                <div className="bg-white/10 backdrop-blur-md rounded-full p-1.5 group-hover:bg-green-500/20 transition-all duration-300">
                  <FiCheck className="opacity-70 group-hover:opacity-100 transition text-sm sm:text-base" />
                </div>
                <span className="text-white/80 group-hover:text-white transition text-sm sm:text-base drop-shadow-sm">
                  {t('intelligentCompleteTransfers') || 'Intelligent and complete transfers'}
                </span>
              </div>

              <div className="group flex items-center gap-3 py-3 md:py-4 cursor-pointer transition-all duration-300 hover:border-white/40 hover:bg-white/5 rounded-lg px-2 md:px-3">
                <div className="bg-white/10 backdrop-blur-md rounded-full p-1.5 group-hover:bg-green-500/20 transition-all duration-300">
                  <FiCheck className="opacity-70 group-hover:opacity-100 transition text-sm sm:text-base" />
                </div>
                <span className="text-white/80 group-hover:text-white transition text-sm sm:text-base drop-shadow-sm">
                  {t('enterpriseLevel') || 'Enterprise-Level: Secure & Brand-Compliant'}
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}