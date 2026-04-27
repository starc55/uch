import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionHeading from "../components/SectionHeading";
import SystemNode from "../components/SystemNode";

function CoreSection() {
  const { t } = useTranslation();

  const nodes = [
    { key: "product", delay: 0.1, align: "left" },
    { key: "frontend", delay: 0.2, align: "right" },
    { key: "automation", delay: 0.3, align: "left" },
    { key: "platform", delay: 0.4, align: "right" },
  ];

  return (
    <section id="core" className="relative">
      <div className="section-shell">
        <div className="grid items-center gap-14 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <SectionHeading
            eyebrow={t("core.eyebrow")}
            title={t("core.title")}
            description={t("core.description")}
          />

          <div className="section-frame relative mx-auto w-full max-w-[36rem] overflow-hidden p-5 sm:p-6">
            <div className="absolute inset-0 bg-radial-accent opacity-70" />
            <div className="absolute inset-0 grid-surface opacity-20" />
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent" />

            <div className="relative">
              <div className="absolute left-1/2 top-1/2 hidden h-[1px] w-[60%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/12 to-transparent md:block" />
              <div className="absolute left-1/2 top-1/2 hidden h-[54%] w-[1px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-white/12 to-transparent md:block" />

              <div className="grid gap-3 md:grid-cols-[0.95fr_0.72fr_0.95fr] md:grid-rows-3 md:gap-4">
                <div className="md:col-start-1 md:row-start-1 md:self-end">
                  <SystemNode
                    title={t("core.nodes.product.title")}
                    role={t("core.nodes.product.role")}
                    copy={t("core.nodes.product.copy")}
                    delay={nodes[0].delay}
                    align={nodes[0].align}
                  />
                </div>

                <div className="md:col-start-3 md:row-start-1 md:self-end">
                  <SystemNode
                    title={t("core.nodes.frontend.title")}
                    role={t("core.nodes.frontend.role")}
                    copy={t("core.nodes.frontend.copy")}
                    delay={nodes[1].delay}
                    align={nodes[1].align}
                  />
                </div>

                <motion.div
                  className="relative flex min-h-[8.5rem] items-center justify-center md:col-start-2 md:row-start-2"
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <motion.div
                    className="absolute h-28 w-28 rounded-full border border-accent/20 sm:h-32 sm:w-32"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 18,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.div
                    className="absolute h-20 w-20 rounded-full border border-white/10 sm:h-24 sm:w-24"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <motion.div
                    className="absolute h-16 w-16 rounded-full bg-accent/14 blur-[40px] sm:h-20 sm:w-20"
                    animate={{
                      scale: [0.92, 1.08, 0.96],
                      opacity: [0.35, 0.7, 0.4],
                    }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-black/45 shadow-glow sm:h-16 sm:w-16">
                    <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent/84">
                      UCH
                    </span>
                  </div>
                </motion.div>

                <div className="md:col-start-1 md:row-start-3 md:self-start">
                  <SystemNode
                    title={t("core.nodes.automation.title")}
                    role={t("core.nodes.automation.role")}
                    copy={t("core.nodes.automation.copy")}
                    delay={nodes[2].delay}
                    align={nodes[2].align}
                  />
                </div>

                <div className="md:col-start-3 md:row-start-3 md:self-start">
                  <SystemNode
                    title={t("core.nodes.platform.title")}
                    role={t("core.nodes.platform.role")}
                    copy={t("core.nodes.platform.copy")}
                    delay={nodes[3].delay}
                    align={nodes[3].align}
                  />
                </div>
              </div>

              <motion.div
                className="mt-5 rounded-[1.4rem] border border-white/10 bg-black/18 px-4 py-4 text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent/82">
                  {t("core.centerEyebrow")}
                </p>
                <p className="mt-2 text-sm leading-7 text-white/60">
                  {t("core.centerDescription")}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreSection;
