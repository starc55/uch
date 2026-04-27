import { motion } from 'framer-motion';

function SystemNode({ title, role, className, delay }) {
  return (
    <motion.div
      className={`absolute rounded-3xl border border-white/10 bg-white/[0.04] px-4 py-4 shadow-soft backdrop-blur-xl ${className}`}
      initial={{ opacity: 0, scale: 0.88 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
      whileHover={{ y: -6, borderColor: 'rgba(0, 209, 255, 0.4)' }}
    >
      <p className="text-sm font-medium text-white">{title}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.24em] text-accent/85">{role}</p>
    </motion.div>
  );
}

export default SystemNode;
