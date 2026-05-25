import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo-optimized.png";

function AppLoader() {
  const { t } = useTranslation();

  return (
    <motion.div
      className="fixed inset-0 z-[120] overflow-hidden bg-[#040608]"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,209,255,0.2),transparent_28%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.06),transparent_35%)]" />
      <div className="absolute inset-0 grid-surface opacity-35 [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10"
        animate={{ rotate: 360, scale: [0.96, 1.02, 0.98] }}
        transition={{
          rotate: { duration: 18, repeat: Infinity, ease: "linear" },
          scale: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8"
        animate={{ rotate: -360 }}
        transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/18 blur-[120px]"
        animate={{ opacity: [0.35, 0.75, 0.4], scale: [0.9, 1.1, 0.95] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.div
          className="relative mb-8 flex h-32 w-32 items-center justify-center rounded-[2.2rem] border border-white/10 bg-white/[0.04] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_30px_120px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:h-36 sm:w-36"
          initial={{ scale: 0.82, opacity: 0, y: 12 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute inset-0 rounded-[2.2rem] border border-accent/18"
            animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.75, 0.18] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-x-2 top-0 h-12 rounded-t-[1.8rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.18),transparent)] opacity-60"
            animate={{ opacity: [0.35, 0.7, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src={logo}
            alt="UCH logo"
            className="relative h-16 w-16 object-contain sm:h-20 sm:w-20"
            animate={{ y: [0, -4, 0], rotate: [0, 1.5, 0, -1.5, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.p
          className="font-mono text-[11px] uppercase tracking-[0.42em] text-accent/82"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
        >
          {t("loader.brand")}
        </motion.p>

        <motion.h1
          className="mt-5 max-w-3xl text-balance text-3xl leading-tight text-white sm:text-4xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease: "easeOut" }}
        >
          {t("loader.title")}
        </motion.h1>

        <motion.p
          className="mt-4 max-w-xl text-sm leading-7 text-white/56 sm:text-base"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.26, ease: "easeOut" }}
        >
          {t("loader.description")}
        </motion.p>

        <div className="mt-8 flex items-center gap-2">
          {[0, 1, 2].map((index) => (
            <motion.span
              key={index}
              className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_18px_rgba(0,209,255,0.5)]"
              animate={{
                y: [0, -7, 0],
                opacity: [0.35, 1, 0.35],
                scale: [0.92, 1.15, 0.92],
              }}
              transition={{
                duration: 0.95,
                delay: index * 0.12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <motion.div
          className="mt-7 h-px w-40 bg-gradient-to-r from-transparent via-accent/75 to-transparent"
          animate={{ scaleX: [0.72, 1, 0.72], opacity: [0.45, 0.9, 0.45] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}

export default AppLoader;
