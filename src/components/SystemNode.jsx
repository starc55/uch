import { motion } from "framer-motion";

function SystemNode({ title, role, copy, delay, align = "left" }) {
  return (
    <motion.div
      className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-3.5 shadow-soft backdrop-blur-xl sm:p-4"
      initial={{ opacity: 0, scale: 0.92, y: 18 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      whileHover={{ y: -6, borderColor: "rgba(0, 209, 255, 0.4)" }}
    >
      <p
        className={`text-sm font-medium text-white ${
          align === "right" ? "text-right" : ""
        }`}
      >
        {title}
      </p>
      <p
        className={`mt-1 text-[11px] uppercase tracking-[0.22em] text-accent/85 ${
          align === "right" ? "text-right" : ""
        }`}
      >
        {role}
      </p>
      <p
        className={`mt-2.5 text-sm leading-6 text-white/56 ${
          align === "right" ? "text-right" : ""
        }`}
      >
        {copy}
      </p>
    </motion.div>
  );
}

export default SystemNode;
