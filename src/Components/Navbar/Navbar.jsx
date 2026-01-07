import { useState } from "react";
import { FiMenu, FiX, FiGlobe } from "react-icons/fi";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <header
      className="fixed top-0 left-0 w-full z-50
      bg-black/95 backdrop-blur-md border-b border-gray-800 shadow-sm"
    >
      {/* DESKTOP HEADER */}
      <div className="hidden md:flex items-center justify-between px-8 py-4">

        {/* LEFT PILL */}
        <div className="flex items-center gap-8">

          {/* LOGO */}
          <a
            href="#home"
            className="flex items-center gap-2 font-bold text-xl text-white hover:text-blue-400 transition-colors"
          >
            <img
              src="./Logo/codycoai_logo.jpg"
              alt="Codyco"
              className="w-8 h-8 rounded-lg"
            />
            Codyco
          </a>

          {/* NAV LINKS */}
          <nav className="flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#features" className="hover:text-white transition-colors">{t('features')}</a>
            <a href="#about" className="hover:text-white transition-colors">{t('about')}</a>
          </nav>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4 text-sm font-medium">

          {/* LANGUAGE */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <FiGlobe size={18} />
              {language}
            </button>

            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden z-50 min-w-[80px]">
                {["EN", "HI"].map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLanguage(l);
                      setLangOpen(false);
                    }}
                    className="block px-4 py-3 text-left w-full text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-all">
            {t('login')}
          </button>

          <button className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium">
            {t('try')}
          </button>
        </div>
      </div>

      {/* MOBILE HEADER */}
      <div className="md:hidden px-4 py-3 flex items-center justify-between">
        {/* LOGO */}
        <a
          href="#home"
          className="flex items-center gap-2 font-bold text-xl text-white"
        >
          <img
            src="./Logo/codycoai_logo.jpg"
            alt="Codyco"
            className="w-8 h-8 rounded-lg"
          />
          <span>Codyco</span>
        </a>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-4 text-gray-300">

          {/* LANGUAGE */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              <FiGlobe size={18} />
              {language}
            </button>

            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden z-50 min-w-[80px]">
                {["EN", "HI"].map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLanguage(l);
                      setLangOpen(false);
                    }}
                    className="block px-4 py-3 w-full text-left text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* TOGGLE */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-300 hover:text-white transition-colors">
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          />

          <div
            className="fixed top-20 left-1/2 -translate-x-1/2
            w-[92%] max-w-sm
            bg-gray-800 border border-gray-700
            rounded-2xl z-50 shadow-xl p-6 md:hidden"
          >
            <nav className="flex flex-col gap-4 text-lg font-medium">
              <a onClick={() => setMenuOpen(false)} href="#home" className="text-gray-300 hover:text-white transition-colors py-2">
                {t('home')}
              </a>
              <a onClick={() => setMenuOpen(false)} href="#features" className="text-gray-300 hover:text-white transition-colors py-2">
                {t('features')}
              </a>
              <a onClick={() => setMenuOpen(false)} href="#about" className="text-gray-300 hover:text-white transition-colors py-2">
                {t('about')}
              </a>
              <a onClick={() => setMenuOpen(false)} href="#career" className="text-gray-300 hover:text-white transition-colors py-2">
                {t('career')}
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
