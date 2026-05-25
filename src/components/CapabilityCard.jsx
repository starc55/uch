import { motion } from "framer-motion";

function CapabilityCard({ icon, title, description, tag, index }) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-[1.55rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-4 shadow-soft sm:p-5"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.01 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,209,255,0.14),transparent_36%)] opacity-70" />
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="absolute -right-10 top-10 h-24 w-24 rounded-full border border-white/6 opacity-60" />

      <div className="relative flex h-full flex-col justify-between gap-4">
        <div className="space-y-3.5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent shadow-glow">
              {icon}
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/26">
              0{index + 1}
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl">{title}</h3>
            <p className="text-sm leading-6 text-white/60">{description}</p>
          </div>
        </div>

        <div className="rounded-[1rem] border border-white/10 bg-black/18 px-3 py-2.5">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent/78">
            {tag}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default CapabilityCard;
