import { motion } from 'framer-motion';
import { useState } from 'react';

function MagneticButton({
  children,
  className = '',
  onClick,
  type = 'button',
  loading = false,
}) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (event) => {
    if (loading) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 18;
    setOffset({ x, y });
  };

  const handleLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <motion.button
      type={type}
      className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-accent/30 bg-accent px-6 py-3 text-sm font-medium text-base transition-colors hover:border-accent/60 ${loading ? 'cursor-wait' : ''} ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      animate={offset}
      transition={{ type: 'spring', stiffness: 220, damping: 16, mass: 0.8 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-accent via-white to-accent opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
      <span className="relative flex items-center gap-3">
        {loading && (
          <span className="flex items-center gap-1.5">
            {[0, 1, 2].map((index) => (
              <motion.span
                key={index}
                className="h-1.5 w-1.5 rounded-full bg-base/85"
                animate={{ y: [0, -3, 0], opacity: [0.45, 1, 0.45] }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </span>
        )}
        <span>{children}</span>
      </span>
      {!loading && (
        <motion.span
          className="relative text-base"
          initial={false}
          animate={{ x: offset.x * 0.25 }}
          transition={{ type: 'spring', stiffness: 200, damping: 16 }}
        >
          ↗
        </motion.span>
      )}
    </motion.button>
  );
}

export default MagneticButton;
