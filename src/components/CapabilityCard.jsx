import { motion } from 'framer-motion';

function CapabilityCard({ icon, title, description, index }) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 shadow-soft"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.01 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 transition duration-500 group-hover:from-accent/12 group-hover:to-transparent" />
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative flex flex-col gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent shadow-glow">
          {icon}
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl">{title}</h3>
          <p className="text-sm leading-7 text-white/58">{description}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default CapabilityCard;
