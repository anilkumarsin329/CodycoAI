import { useState } from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { t } = useLanguage();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    toast.success("Subscribed successfully!");
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="./Logo/codycoai_logo.jpg"
                alt="Codyco"
                className="w-6 sm:w-7 h-6 sm:h-7"
              />
              <span className="text-lg font-semibold text-white">
                Codyco
              </span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              {t('footerDescription')}
            </p>

            {/* Social icons */}
            <div className="flex gap-4 text-lg">
              <a
                href="#"
                className="hover:text-white hover:scale-110 transition duration-200"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="hover:text-white hover:scale-110 transition duration-200"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="hover:text-white hover:scale-110 transition duration-200"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                className="hover:text-white hover:scale-110 transition duration-200"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* PRODUCT */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              {t('product')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-white transition duration-200">
                  {t('features')}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition duration-200">
                  {t('about')}
                </a>
              </li>
              <li>
                <a href="#career" className="hover:text-white transition duration-200">
                  {t('career')}
                </a>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              {t('legal')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#privacy" className="hover:text-white transition duration-200">
                  {t('dataPrivacy')}
                </a>
              </li>
              <li>
                <a href="#imprint" className="hover:text-white transition duration-200">
                  {t('imprint')}
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition duration-200">
                  {t('termsConditions')}
                </a>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-sm font-semibold text-white mb-4">
              {t('newsletter')}
            </h4>

            <p className="text-sm text-gray-400 mb-4">
              {t('newsletterDesc')}
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('yourEmail')}
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
              />
              <button
                type="submit"
                className="px-4 sm:px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium text-sm whitespace-nowrap"
              >
                {t('subscribe')}
              </button>
            </form>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-gray-400 gap-2">
          <p>© Codyco GmbH {new Date().getFullYear()}</p>
          <p className="text-center sm:text-right">
            {t('builtFor')}
          </p>
        </div>
      </div>
    </footer>
  );
}
