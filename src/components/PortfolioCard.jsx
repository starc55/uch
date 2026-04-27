import { motion } from 'framer-motion';

function getDomainLabel(url) {
  try {
    return new URL(url).hostname.replace('www.', '');
  } catch {
    return url;
  }
}

function PortfolioCard({ project, className = '' }) {
  const liveDomain = getDomainLabel(project.liveUrl);
  const repoDomain = getDomainLabel(project.repoUrl);

  return (
    <motion.article
      className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-soft ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,209,255,0.12),transparent_38%)] opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_32%)] opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full min-h-[20rem] flex-col">
        <div className="relative overflow-hidden rounded-t-[2rem] border-b border-white/10 bg-[#060b0f]">
          <img
            src={project.asset}
            alt={project.name}
            className="h-52 w-full object-cover object-center transition duration-700 group-hover:scale-[1.03] sm:h-60 lg:h-64"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent" />
          <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-3">
            <span className="inline-flex rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs uppercase tracking-[0.26em] text-white/78 backdrop-blur-md">
              {project.category}
            </span>
            <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs text-accent/84">
              {project.year}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between gap-6 p-5 sm:p-6">
          <div className="space-y-5">
            <div className="space-y-3">
              <h3 className="max-w-xl text-2xl leading-tight sm:text-3xl">{project.name}</h3>
              <p className="max-w-2xl text-sm leading-7 text-white/68">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/12 bg-black/25 px-3 py-1 text-xs font-medium text-white/72"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.25rem] border border-accent/20 bg-accent/10 px-4 py-4 transition hover:border-accent/40 hover:bg-accent/14"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent/80">
                      Live Preview
                    </span>
                    <p className="mt-2 text-sm text-white/74">{liveDomain}</p>
                  </div>
                  <span className="text-accent">↗</span>
                </div>
              </a>

              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 py-4 transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/48">
                      Source Code
                    </span>
                    <p className="mt-2 text-sm text-white/74">{repoDomain}</p>
                  </div>
                  <span className="text-white/58">→</span>
                </div>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="flex items-center justify-between gap-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/42">
                Managed from works.json
              </p>
              <p className="text-sm text-white/52">{project.stack.length} technologies</p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default PortfolioCard;
