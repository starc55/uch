import { useTranslation } from "react-i18next";
import CapabilityCard from "../components/CapabilityCard";
import SectionHeading from "../components/SectionHeading";

const iconClassName = "h-6 w-6";

const capabilityIcons = {
  web: (
    <svg
      viewBox="0 0 24 24"
      className={iconClassName}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        d="M4 7H20M8 4L4 7L8 10M16 14L20 17L16 20M4 17H11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  mobile: (
    <svg
      viewBox="0 0 24 24"
      className={iconClassName}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="7" y="3.5" width="10" height="17" rx="2.5" />
      <path d="M10.5 6.5H13.5M11 17.5H13" strokeLinecap="round" />
    </svg>
  ),
  ai: (
    <svg
      viewBox="0 0 24 24"
      className={iconClassName}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        d="M12 4V7M12 17V20M4 12H7M17 12H20M6.5 6.5L8.6 8.6M15.4 15.4L17.5 17.5M17.5 6.5L15.4 8.6M8.6 15.4L6.5 17.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="4.5" />
    </svg>
  ),
  ui: (
    <svg
      viewBox="0 0 24 24"
      className={iconClassName}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        d="M4.5 19.5H19.5M7 15L10.5 6.5C10.9 5.5 12.3 5.5 12.7 6.5L16.2 15M8.2 12.5H15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

const capabilityKeys = ["web", "mobile", "ai", "ui"];

function CapabilitiesSection() {
  const { t } = useTranslation();
  const featureList = t("capabilities.featureList", { returnObjects: true });

  const capabilities = capabilityKeys.map((key) => ({
    icon: capabilityIcons[key],
    title: t(`capabilities.items.${key}.title`),
    description: t(`capabilities.items.${key}.description`),
    tag: t(`capabilities.items.${key}.tag`),
  }));

  return (
    <section id="capabilities" className="relative">
      <div className="section-shell">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
          <div className="section-frame relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,209,255,0.14),transparent_34%)]" />
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent" />

            <div className="relative space-y-8">
              <SectionHeading
                eyebrow={t("capabilities.eyebrow")}
                title={t("capabilities.title")}
                description={t("capabilities.description")}
              />

              <div className="rounded-[1.75rem] border border-white/10 bg-black/18 p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent/82">
                  {t("capabilities.featureEyebrow")}
                </p>
                <h3 className="mt-4 text-2xl leading-tight text-white">
                  {t("capabilities.featureTitle")}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/58">
                  {t("capabilities.featureDescription")}
                </p>

                <div className="mt-5 space-y-3">
                  {featureList.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4"
                    >
                      <span className="mt-0.5 font-mono text-xs uppercase tracking-[0.24em] text-accent/82">
                        0{index + 1}
                      </span>
                      <p className="text-sm leading-7 text-white/68">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {capabilities.map((capability, index) => (
              <CapabilityCard
                key={capability.title}
                {...capability}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CapabilitiesSection;
