import { motion } from "framer-motion";

function CapabilityCard({ icon, title, description, tag, index }) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-soft"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.01 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,209,255,0.14),transparent_36%)] opacity-70" />
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="absolute -right-10 top-10 h-28 w-28 rounded-full border border-white/6 opacity-60" />

      <div className="relative flex h-full flex-col justify-between gap-8">
        <div className="space-y-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent shadow-glow">
              {icon}
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/26">
              0{index + 1}
            </span>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl">{title}</h3>
            <p className="text-sm leading-7 text-white/60">{description}</p>
          </div>
        </div>

        <div className="rounded-[1.25rem] border border-white/10 bg-black/18 px-4 py-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent/78">
            {tag}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default CapabilityCard;
