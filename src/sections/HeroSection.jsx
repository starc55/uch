import { motion } from 'framer-motion';
import AmbientGrid from '../components/AmbientGrid';
import MagneticButton from '../components/MagneticButton';

function HeroSection({ mousePosition, onPrimaryClick, onSecondaryClick }) {
  const parallaxX = (mousePosition.x - 0.5) * 28;
  const parallaxY = (mousePosition.y - 0.5) * 22;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <AmbientGrid mousePosition={mousePosition} />

      <div className="section-shell flex min-h-[calc(100vh-7rem)] flex-col justify-center">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.2fr)_24rem]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10 space-y-10"
          >
            <motion.div
              animate={{ x: parallaxX, y: parallaxY }}
              transition={{
                x: { type: 'spring', stiffness: 45, damping: 18 },
                y: { type: 'spring', stiffness: 45, damping: 18 },
              }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <span className="eyebrow">Premium engineering collective</span>
                <h1 className="max-w-4xl text-balance text-5xl leading-[0.9] sm:text-6xl lg:text-8xl">
                  We build systems, not just code.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-white/66 sm:text-xl">
                  UCH designs and ships high-performance digital products with the clarity of a
                  product studio and the rigor of a systems team.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <MagneticButton onClick={onPrimaryClick}>Launch a project</MagneticButton>
                <button
                  type="button"
                  onClick={onSecondaryClick}
                  className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/[0.06]"
                >
                  View selected systems
                  <span className="text-accent">01</span>
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ['04', 'Specialists in the core'],
                  ['12+', 'Products shipped end-to-end'],
                  ['99%', 'Intentional over feature clutter'],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-5 py-5 backdrop-blur-xl"
                  >
                    <p className="text-3xl text-white">{value}</p>
                    <p className="mt-2 text-sm leading-6 text-white/52">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="section-frame relative z-10 overflow-hidden p-6"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.18 }}
          >
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent" />
            <div className="space-y-8">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.26em] text-accent/82">Signal</p>
                  <p className="mt-2 text-sm text-white/72">Unified delivery stack</p>
                </div>
                <div className="h-3 w-3 animate-pulse rounded-full bg-accent shadow-[0_0_18px_rgba(0,209,255,0.9)]" />
              </div>

              <div className="space-y-4">
                {[
                  ['Architecture', 'Design systems, infrastructure thinking, performance budgets'],
                  ['Execution', 'Fast iterations with product-level craft across platforms'],
                  ['Automation', 'Workflow intelligence built into the product itself'],
                ].map(([title, copy]) => (
                  <div
                    key={title}
                    className="rounded-[1.5rem] border border-white/10 bg-black/25 px-4 py-4"
                  >
                    <p className="text-sm font-medium text-white">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-white/52">{copy}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.75rem] border border-accent/18 bg-accent/10 p-5">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent/84">Operating mode</p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between text-sm text-white/70">
                    <span>Discovery to launch</span>
                    <span>End-to-end</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-accent/60 to-accent" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
