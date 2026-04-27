import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import SystemNode from '../components/SystemNode';

const nodes = [
  {
    title: 'Product Engineer',
    role: 'Interface logic',
    className: 'left-[2%] top-[12%] w-40 sm:left-[8%] sm:w-44',
    delay: 0.1,
  },
  {
    title: 'Frontend Architect',
    role: 'Design systems',
    className: 'right-[2%] top-[14%] w-40 text-right sm:right-[8%] sm:w-44',
    delay: 0.2,
  },
  {
    title: 'Automation Builder',
    role: 'AI workflows',
    className: 'left-[4%] bottom-[10%] w-40 sm:left-[10%] sm:w-44',
    delay: 0.3,
  },
  {
    title: 'Platform Engineer',
    role: 'Scale and delivery',
    className: 'right-[4%] bottom-[12%] w-40 text-right sm:right-[10%] sm:w-44',
    delay: 0.4,
  },
];

function CoreSection() {
  return (
    <section id="core" className="relative">
      <div className="section-shell">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <SectionHeading
            eyebrow="The Core"
            title="Four specialists operating as one product system."
            description="Each builder owns a discipline. Together, the team behaves like a coordinated engine: strategy, interface, automation, and platform all moving in sync."
          />

          <div className="section-frame relative mx-auto aspect-square w-full max-w-[40rem] overflow-hidden p-6 sm:p-10">
            <div className="absolute inset-0 bg-radial-accent opacity-80" />
            <div className="absolute inset-0 grid-surface opacity-40" />

            <div className="absolute left-1/2 top-1/2 h-[1px] w-[70%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/14 to-transparent" />
            <div className="absolute left-1/2 top-1/2 h-[70%] w-[1px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-white/14 to-transparent" />
            <div className="absolute left-[25%] top-[25%] h-[50%] w-[50%] rounded-full border border-accent/12" />
            <div className="absolute left-[12%] top-[12%] h-[76%] w-[76%] rounded-full border border-white/8" />

            {nodes.map((node) => (
              <SystemNode key={node.title} {...node} />
            ))}

            <motion.div
              className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[2rem] border border-accent/30 bg-black/45 shadow-glow backdrop-blur-xl sm:h-44 sm:w-44"
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.03 }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.34em] text-accent/84">UCH</p>
              <p className="mt-3 text-center text-lg leading-tight text-white/78">
                Unified
                <br />
                Coders Hub
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreSection;
