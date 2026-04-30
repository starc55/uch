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
        aria-label={getLanguageLabel(currentLanguage, t)}
        className={`flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-left transition hover:border-accent/30 hover:bg-accent/10 ${
          compact ? "w-full" : "min-w-[6.5rem]"
        }`}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-accent">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="8.5" />
              <path d="M3.8 9.5h16.4" />
              <path d="M3.8 14.5h16.4" />
              <path d="M12 3.5c2.2 2.4 3.3 5.2 3.3 8.5S14.2 18 12 20.5" />
              <path d="M12 3.5c-2.2 2.4-3.3 5.2-3.3 8.5S9.8 18 12 20.5" />
            </svg>
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-white/72">
            {t(`nav.languages.${currentLanguage}`)}
          </span>
        </div>
        <motion.span
          className="text-white/52"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <svg
            viewBox="0 0 12 12"
            className="h-3 w-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M2.5 4.5 6 8l3.5-3.5" />
          </svg>
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className={`absolute z-[80] mt-3 overflow-hidden rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,12,16,0.98),rgba(8,10,14,0.96))] p-2 shadow-soft backdrop-blur-2xl ${
              compact ? "left-0 right-0" : "right-0 min-w-[10rem]"
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
                  className={`flex w-full items-center justify-between rounded-[1rem] px-3 py-2.5 text-left transition ${
                    active
                      ? "bg-accent/14 text-white"
                      : "text-white/72 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span
                      className={`flex h-8 min-w-8 items-center justify-center rounded-xl border text-[10px] font-mono uppercase tracking-[0.2em] ${
                        active
                          ? "border-accent/30 bg-accent/10 text-accent"
                          : "border-white/10 bg-white/[0.03] text-white/54"
                      }`}
                    >
                      {t(`nav.languages.${language}`)}
                    </span>
                    <p className="truncate text-sm font-medium">
                      {getLanguageLabel(language, t)}
                    </p>
                  </div>
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      active
                        ? "bg-accent shadow-[0_0_12px_rgba(0,209,255,0.85)]"
                        : "bg-white/18"
                    }`}
                  />
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
