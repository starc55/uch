import { useTranslation } from "react-i18next";
import PortfolioCard from "../components/PortfolioCard";
import SectionHeading from "../components/SectionHeading";
import works from "../data/works.json";

function PortfolioSection() {
  const { t } = useTranslation();

  const localizedWorks = works.map((project) => ({
    ...project,
    name: t(`portfolio.items.${project.id}.name`),
    category: t(`portfolio.items.${project.id}.category`),
    description: t(`portfolio.items.${project.id}.description`),
  }));

  return (
    <section id="portfolio" className="relative">
      <div className="section-shell">
        <div className="space-y-12">
          <SectionHeading
            eyebrow={t("portfolio.eyebrow")}
            title={t("portfolio.title")}
            description={t("portfolio.description")}
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {localizedWorks.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
