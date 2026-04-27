import PortfolioCard from '../components/PortfolioCard';
import SectionHeading from '../components/SectionHeading';
import works from '../data/works.json';

function PortfolioSection() {
  return (
    <section id="portfolio" className="relative">
      <div className="section-shell">
        <div className="space-y-12">
          <SectionHeading
            eyebrow="Selected Systems"
            title="Work designed to stay clean as the portfolio grows."
            description="Each project now comes from a dedicated JSON source, while the card layout stays tighter, more balanced, and easier to scan across desktop and mobile."
          />

          <div className="grid gap-5 lg:grid-cols-12">
            {works.map((project) => (
              <PortfolioCard
                key={project.id}
                project={project}
                className={project.layout}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
