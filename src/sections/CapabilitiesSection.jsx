import CapabilityCard from '../components/CapabilityCard';
import SectionHeading from '../components/SectionHeading';

const iconClassName = 'h-6 w-6';

const capabilities = [
  {
    title: 'Web Development',
    description:
      'Conversion-focused interfaces, scalable frontends, and resilient backend integrations built as cohesive product systems.',
    icon: (
      <svg viewBox="0 0 24 24" className={iconClassName} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 7H20M8 4L4 7L8 10M16 14L20 17L16 20M4 17H11" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Mobile Apps',
    description:
      'Native-feeling mobile products with design parity, thoughtful motion, and product logic aligned with real workflows.',
    icon: (
      <svg viewBox="0 0 24 24" className={iconClassName} fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="7" y="3.5" width="10" height="17" rx="2.5" />
        <path d="M10.5 6.5H13.5M11 17.5H13" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'AI Automation',
    description:
      'Internal tools and customer-facing flows powered by orchestration, agentic automation, and intelligent data handling.',
    icon: (
      <svg viewBox="0 0 24 24" className={iconClassName} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 4V7M12 17V20M4 12H7M17 12H20M6.5 6.5L8.6 8.6M15.4 15.4L17.5 17.5M17.5 6.5L15.4 8.6M8.6 15.4L6.5 17.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4.5" />
      </svg>
    ),
  },
  {
    title: 'UI/UX Engineering',
    description:
      'Design systems, motion, interaction architecture, and high-fidelity implementation shaped for clarity and longevity.',
    icon: (
      <svg viewBox="0 0 24 24" className={iconClassName} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4.5 19.5H19.5M7 15L10.5 6.5C10.9 5.5 12.3 5.5 12.7 6.5L16.2 15M8.2 12.5H15" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function CapabilitiesSection() {
  return (
    <section id="capabilities" className="relative">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <SectionHeading
            eyebrow="Capabilities"
            title="Engineering depth across the surfaces that matter most."
            description="We keep the stack sharp, the product intentional, and the implementation flexible enough to scale with the business."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {capabilities.map((capability, index) => (
              <CapabilityCard key={capability.title} {...capability} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CapabilitiesSection;
