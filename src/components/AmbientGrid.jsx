import { motion } from 'framer-motion';

function AmbientGrid({ mousePosition }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-surface opacity-60 [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,209,255,0.12),transparent_38%)]" />

      <motion.div
        className="absolute inset-x-[-10%] top-[22%] h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
        animate={{ x: ['-4%', '4%', '-4%'] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute inset-y-[-10%] left-[28%] w-px bg-gradient-to-b from-transparent via-accent/45 to-transparent"
        animate={{ y: ['-3%', '3%', '-3%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute inset-y-[-15%] right-[22%] w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"
        animate={{ y: ['3%', '-3%', '3%'] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute h-72 w-72 rounded-full bg-accent/25 blur-[120px] sm:h-96 sm:w-96"
        animate={{
          left: `calc(${mousePosition.x * 100}% - 9rem)`,
          top: `calc(${mousePosition.y * 100}% - 9rem)`,
        }}
        transition={{ type: 'spring', stiffness: 78, damping: 14, mass: 0.7 }}
      />

      <motion.div
        className="absolute bottom-[-8%] left-[-10%] h-52 w-[55%] rotate-[-10deg] bg-[radial-gradient(circle_at_center,rgba(0,209,255,0.24),transparent_65%)] blur-[90px]"
        animate={{
          x: ['0%', '16%', '0%'],
          opacity: [0.24, 0.42, 0.24],
        }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute bottom-[10%] right-[12%] h-40 w-40 rounded-full border border-accent/25"
        animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.65, 0.3] }}
        transition={{ duration: 5.6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

export default AmbientGrid;
