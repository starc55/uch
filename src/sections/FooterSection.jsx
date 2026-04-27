import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import SocialLink from '../components/SocialLink';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'X', href: 'https://x.com/' },
];

function FooterSection() {
  return (
    <footer className="relative">
      <div className="section-shell pt-10">
        <motion.div
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-soft sm:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,209,255,0.14),transparent_32%)]" />
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent" />

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <img
                  src={logo}
                  alt="UCH"
                  className="h-14 w-14 rounded-2xl border border-white/10 bg-white/[0.02] p-2 object-contain"
                />
                <div>
                  <p className="text-lg font-medium text-white">UCH</p>
                  <p className="text-sm text-white/46">Unified Coders Hub</p>
                </div>
              </div>

              <div className="max-w-2xl space-y-3">
                <h3 className="text-3xl leading-tight sm:text-4xl">
                  Systems that feel sharp before launch and stronger after it.
                </h3>
                <p className="max-w-xl text-sm leading-7 sm:text-base">
                  Product thinking, interface engineering, automation, and delivery discipline in
                  one compact team.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/20 px-4 py-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent/82">
                    Build Mode
                  </p>
                  <p className="mt-2 text-sm text-white/70">Concept to launch</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-black/20 px-4 py-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent/82">
                    Delivery
                  </p>
                  <p className="mt-2 text-sm text-white/70">Web, mobile, AI</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-black/20 px-4 py-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent/82">
                    Quality
                  </p>
                  <p className="mt-2 text-sm text-white/70">Minimal but powerful</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-8">
              <div className="rounded-[1.75rem] border border-accent/18 bg-accent/8 p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent/82">
                  Contact Channel
                </p>
                <p className="mt-3 text-xl text-white">hello@uch.dev</p>
                <p className="mt-2 text-sm leading-7 text-white/58">
                  Ready for product builds, redesigns, and automation systems.
                </p>
              </div>

              <div className="space-y-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/44">
                  Social Links
                </p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <SocialLink key={link.label} {...link} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
            <p>Designed for ambitious digital systems.</p>
            <p className="font-mono uppercase tracking-[0.26em] text-accent/80">Powered by UCH</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default FooterSection;
