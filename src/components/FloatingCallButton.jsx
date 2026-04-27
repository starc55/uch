import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { siteConfig } from "../config/site";

function FloatingCallButton() {
  const { t } = useTranslation();

  return (
    <motion.a
      href={siteConfig.contactPhoneHref}
      aria-label={`Call ${siteConfig.contactPhoneDisplay}`}
      className="group fixed bottom-5 right-5 z-[65] sm:bottom-6 sm:right-6"
      initial={{ opacity: 0, y: 26, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative">
        <motion.span
          className="absolute inset-[-10px] rounded-full border border-accent/25"
          animate={{ scale: [1, 1.14, 1], opacity: [0.18, 0.5, 0.18] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute inset-[-20px] rounded-full border border-accent/12"
          animate={{ scale: [1, 1.22, 1], opacity: [0.08, 0.25, 0.08] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="relative flex h-14 w-14 items-center overflow-hidden rounded-full border border-accent/25 bg-[linear-gradient(180deg,rgba(11,18,24,0.96),rgba(9,14,18,0.92))] shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-[width,transform] duration-500 ease-out md:group-hover:w-[15.5rem]"
          animate={{
            y: [0, -6, 0],
            boxShadow: [
              "0 20px 60px rgba(0,0,0,0.45)",
              "0 22px 70px rgba(0,209,255,0.18)",
              "0 20px 60px rgba(0,0,0,0.45)",
            ],
          }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,rgba(0,209,255,0.14),transparent_40%)] opacity-70" />
          <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent opacity-80" />

          <motion.span
            className="relative ml-[3px] flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/12 text-accent"
            animate={{ rotate: [0, -10, 0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                d="M7.8 4.5H5.6C4.72 4.5 4 5.22 4 6.1C4 13.22 9.78 19 16.9 19C17.78 19 18.5 18.28 18.5 17.4V15.2C18.5 14.64 18.12 14.15 17.58 14.01L14.55 13.25C14.08 13.13 13.58 13.27 13.24 13.62L12.11 14.75C9.93 13.64 8.36 12.07 7.25 9.89L8.38 8.76C8.73 8.42 8.87 7.92 8.75 7.45L7.99 4.42C7.85 3.88 7.36 3.5 6.8 3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.span>

          <div className="pointer-events-none absolute left-[4.4rem] hidden min-w-[9.5rem] pr-4 opacity-0 transition-all duration-400 ease-out md:block md:translate-x-3 md:group-hover:translate-x-0 md:group-hover:opacity-100">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent/80">
              {t("phone.label")}
            </p>
            <p className="mt-1 whitespace-nowrap text-sm font-medium text-white/90">
              {siteConfig.contactPhoneDisplay}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.a>
  );
}

export default FloatingCallButton;
