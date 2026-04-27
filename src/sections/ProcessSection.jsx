import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionHeading from "../components/SectionHeading";
import TimelineStep from "../components/TimelineStep";

function ProcessSection() {
  const { t } = useTranslation();
  const steps = t("process.steps", { returnObjects: true });

  return (
    <section id="process" className="relative">
      <div className="section-shell">
        <div className="space-y-12">
          <SectionHeading
            eyebrow={t("process.eyebrow")}
            title={t("process.title")}
            description={t("process.description")}
          />

          <div className="relative">
            <motion.div
              className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-accent/0 via-accent/50 to-accent/0 md:block"
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {steps.map((step, index) => (
                <div key={step.title} className="relative">
                  {index < steps.length - 1 && (
                    <div className="absolute left-[calc(100%-1rem)] top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-r from-accent/70 to-transparent xl:block" />
                  )}
                  <TimelineStep step={step} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
