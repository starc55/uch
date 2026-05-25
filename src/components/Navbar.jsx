import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo-optimized.png";
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar({ items, onNavigate, scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavigate = (id) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {menuOpen && (
          <motion.button
            type="button"
            aria-label="Close navigation menu"
            className="fixed inset-0 z-40 bg-black/55 backdrop-blur-md xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.header
        className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6"
        animate={{
          backdropFilter: scrolled || menuOpen ? "blur(16px)" : "blur(0px)",
          backgroundColor:
            scrolled || menuOpen
              ? "rgba(10, 10, 10, 0.72)"
              : "rgba(10, 10, 10, 0)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            className={`relative rounded-[1.75rem] border px-4 py-3 transition-all duration-300 sm:px-5 ${
              scrolled || menuOpen
                ? "border-white/10 bg-white/[0.04] shadow-glow"
                : "border-transparent"
            }`}
            animate={{
              boxShadow: menuOpen
                ? "0 0 0 1px rgba(255,255,255,0.05), 0 25px 60px rgba(0,0,0,0.45)"
                : "0 0 0 0 rgba(0,0,0,0)",
            }}
          >
            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                className="flex items-center gap-3"
                onClick={() => handleNavigate("hero")}
              >
                <img
                  src={logo}
                  alt="UCH"
                  decoding="async"
                  className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                />
                <div className="text-left">
                  <p className="text-sm font-medium text-white">UCH</p>
                  <p className="hidden text-xs uppercase tracking-[0.28em] text-white/45 sm:block">
                    Unified Coders Hub
                  </p>
                </div>
              </button>

              <div className="hidden items-center gap-3 xl:flex">
                <nav className="flex items-center gap-2">
                  {items.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleNavigate(item.id)}
                      className="whitespace-nowrap rounded-full px-4 py-2 text-sm text-white/64 transition hover:bg-white/[0.05] hover:text-white"
                    >
                      {t(`nav.items.${item.id}`)}
                    </button>
                  ))}
                </nav>
                <LanguageSwitcher />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleNavigate("contact")}
                  className="hidden rounded-full border border-accent/30 bg-accent/12 px-4 py-2 text-sm font-medium text-accent transition hover:border-accent/60 hover:bg-accent/18 sm:block"
                >
                  {t("nav.start")}
                </button>

                <button
                  type="button"
                  aria-expanded={menuOpen}
                  aria-label={
                    menuOpen ? "Close navigation menu" : "Open navigation menu"
                  }
                  onClick={() => setMenuOpen((current) => !current)}
                  className="group relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition hover:border-accent/35 hover:bg-accent/10 xl:hidden"
                >
                  <motion.span
                    className="absolute h-px w-5 bg-white"
                    animate={{
                      rotate: menuOpen ? 45 : 0,
                      y: menuOpen ? 0 : -6,
                    }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                  />
                  <motion.span
                    className="absolute h-px w-5 bg-white"
                    animate={{ opacity: menuOpen ? 0 : 1, x: menuOpen ? 8 : 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  />
                  <motion.span
                    className="absolute h-px w-5 bg-white"
                    animate={{
                      rotate: menuOpen ? -45 : 0,
                      y: menuOpen ? 0 : 6,
                    }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                  />
                </button>
              </div>
            </div>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  className="overflow-hidden xl:hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className="mt-5 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-4 shadow-soft"
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    exit={{ y: -10 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                  >
                    <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-accent/82">
                          {t("nav.mobileTitle")}
                        </p>
                        <p className="mt-1 text-sm text-white/58">
                          {t("nav.mobileDescription")}
                        </p>
                      </div>
                      <div className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_18px_rgba(0,209,255,0.9)]" />
                    </div>

                    <div className="mb-4">
                      <LanguageSwitcher compact />
                    </div>

                    <div className="space-y-2">
                      {items.map((item, index) => (
                        <motion.button
                          key={item.id}
                          type="button"
                          onClick={() => handleNavigate(item.id)}
                          className="flex w-full items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-left transition hover:border-accent/25 hover:bg-accent/10"
                          initial={{ opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{
                            duration: 0.25,
                            delay: index * 0.04,
                            ease: "easeOut",
                          }}
                        >
                          <span className="text-sm font-medium text-white">
                            {t(`nav.items.${item.id}`)}
                          </span>
                          <span className="font-mono text-xs text-white/36">
                            0{index + 1}
                          </span>
                        </motion.button>
                      ))}
                    </div>

                    <motion.button
                      type="button"
                      onClick={() => handleNavigate("contact")}
                      className="mt-4 flex w-full items-center justify-between rounded-2xl border border-accent/30 bg-accent/12 px-4 py-4 text-left"
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{
                        duration: 0.25,
                        delay: 0.18,
                        ease: "easeOut",
                      }}
                    >
                      <span className="text-sm font-medium text-accent">
                        {t("nav.start")}
                      </span>
                      <span className="text-accent">-&gt;</span>
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.header>
    </>
  );
}

export default Navbar;
