import { motion } from "framer-motion";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      className="flex flex-col gap-5"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title text-balance">{title}</h2>
      <p className="section-copy">{description}</p>
    </motion.div>
  );
}

export default SectionHeading;
