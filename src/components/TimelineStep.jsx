import { motion } from 'framer-motion';

function TimelineStep({ step, index }) {
  return (
    <motion.div
      className="relative flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 text-sm font-medium text-accent shadow-glow">
          {step.number}
        </div>
        <div>
          <h3 className="text-2xl">{step.title}</h3>
          <p className="mt-1 text-sm uppercase tracking-[0.24em] text-white/42">{step.tag}</p>
        </div>
      </div>
      <p className="text-sm leading-7 text-white/62">{step.description}</p>
    </motion.div>
  );
}

export default TimelineStep;
