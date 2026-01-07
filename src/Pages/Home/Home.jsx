import { useLanguage } from "../../contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0B0F14] text-white">

      {/* Background Video */}
      <video
        src="./Home/animation_vedio.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ playbackRate: 1 }}
        onLoadedData={(e) => { e.target.playbackRate = 1; }}
        onError={(e) => console.log('Video error:', e)}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Subtle Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.22),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 flex items-center min-h-screen">
        <div className="max-w-3xl w-full">

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {t('heroTitle')} <br className="hidden sm:block" />
            <span className="block sm:inline">{t('heroSubtitle')}{" "}</span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t('heroHighlight')}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg sm:text-xl text-white/75 max-w-2xl">
            {t('heroDescription')}
          </p>

          {/* Feature Pills */}
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4 text-sm">
            {[
              t('pmsIntegrated'),
              t('available247'),
              t('multilingual'),
              t('designedForGroups'),
            ].map((item, i) => (
              <span
                key={i}
                className="px-3 sm:px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Email Input */}
          <div className="mt-8 sm:mt-10 flex flex-col gap-4 max-w-xl">
            <input
              type="email"
              placeholder={t('emailPlaceholder')}
              className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-full bg-black/40 border border-white/20 outline-none placeholder:text-white/40 text-sm sm:text-base"
            />
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition text-sm sm:text-base font-medium">
              {t('receiveTestNumber')}
            </button>
          </div>

          {/* Note */}
          <p className="mt-4 text-xs sm:text-sm text-white/50 max-w-lg">
            {t('noDemo')}
          </p>

          {/* Trusted By */}
          <div className="mt-12 sm:mt-14">
            <p className="text-xs sm:text-sm text-white/50 mb-4">
              {t('trustedBy')}
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 opacity-80">
              <img src="./Home/home1.jpg" className="h-8 sm:h-10 object-contain" alt="Partner 1" />
              <img src="./Home/home2.jpg" className="h-8 sm:h-10 object-contain" alt="Partner 2" />
              <img src="./Home/home3.jpg" className="h-8 sm:h-10 object-contain" alt="Partner 3" />
              <img src="./Home/home4.jpg" className="h-8 sm:h-10 object-contain" alt="Partner 4" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
