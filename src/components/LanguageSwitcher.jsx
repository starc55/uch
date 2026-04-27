import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const languages = ["uz", "ru", "en"];

function getLanguageLabel(language, t) {
  if (language === "uz") {
    return t("common.uzbek");
  }

  if (language === "ru") {
    return t("common.russian");
  }

  return t("common.english");
}

function LanguageSwitcher({ compact = false }) {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    window.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      window.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, []);

  const currentLanguage = languages.includes(i18n.language)
    ? i18n.language
    : "uz";

  return (
    <div ref={containerRef} className={`relative ${compact ? "w-full" : ""}`}>
      <motion.button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className={`flex items-center justify-between gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4  text-left transition hover:border-accent/30 hover:bg-accent/10 ${
          compact ? "w-full" : "min-w-[9.5rem]"
        }`}
        whileTap={{ scale: 0.98 }}
      >
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/38">
            Lang
          </p>
          <p className="mt-1 text-sm font-medium text-white">
            {t(`nav.languages.${currentLanguage}`)}
          </p>
        </div>
        <motion.span
          className="text-accent"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          ▾
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className={`absolute z-[80] mt-3 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,12,16,0.98),rgba(8,10,14,0.96))] p-2 shadow-soft backdrop-blur-2xl ${
              compact ? "left-0 right-0" : "right-0 min-w-[11rem]"
            }`}
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {languages.map((language) => {
              const active = currentLanguage === language;

              return (
                <button
                  key={language}
                  type="button"
                  onClick={() => {
                    i18n.changeLanguage(language);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-[1.1rem] px-3 py-3 text-left transition ${
                    active
                      ? "bg-accent text-base"
                      : "text-white/72 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] opacity-70">
                      {t(`nav.languages.${language}`)}
                    </p>
                    <p className="mt-1 truncate text-sm font-medium">
                      {getLanguageLabel(language, t)}
                    </p>
                  </div>
                  {active && <span className="text-sm">✓</span>}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LanguageSwitcher;
