import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import TimelineStep from '../components/TimelineStep';

const steps = [
  {
    number: '01',
    title: 'Idea',
    tag: 'Signal gathering',
    description:
      'We identify what the product must actually do, what users need immediately, and which constraints should shape the build from day one.',
  },
  {
    number: '02',
    title: 'Design',
    tag: 'Interface architecture',
    description:
      'We map flows, establish the visual system, and define interactions so the implementation carries clarity instead of noise.',
  },
  {
    number: '03',
    title: 'Build',
    tag: 'System execution',
    description:
      'The product is engineered with performance, scale, and maintainability in mind, not bolted on after visuals are approved.',
  },
  {
    number: '04',
    title: 'Launch',
    tag: 'Refinement loop',
    description:
      'We ship with confidence, monitor the signal, and keep the product responsive to real-world usage instead of static assumptions.',
  },
];

function ProcessSection() {
  return (
    <section id="process" className="relative">
      <div className="section-shell">
        <div className="space-y-12">
          <SectionHeading
            eyebrow="Process"
            title="A compact timeline that keeps velocity high and outcomes clear."
            description="The workflow is simple on purpose. We reduce friction between stages so ideas survive contact with production."
          />

          <div className="relative">
            <motion.div
              className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-accent/0 via-accent/50 to-accent/0 md:block"
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, ease: 'easeOut' }}
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
