import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionHeading from "../components/SectionHeading";
import SocialLink from "../components/SocialLink";
import { developerSocialLinks } from "../data/developerSocialLinks";

function DevelopersSection() {
  const { t } = useTranslation();
  const members = t("developers.members", { returnObjects: true });

  return (
    <section id="developers" className="relative">
      <div className="section-shell">
        <div className="space-y-10">
          <SectionHeading
            eyebrow={t("developers.eyebrow")}
            title={t("developers.title")}
            description={t("developers.description")}
          />

          <div className="section-frame relative overflow-hidden p-5 sm:p-6">
            <div className="absolute inset-0 grid-surface opacity-20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,209,255,0.16),transparent_36%)]" />
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent" />

            <div className="relative mb-4 flex flex-col gap-4 rounded-[1.4rem] border border-white/10 bg-black/20 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent/82">
                  {t("developers.roster")}
                </p>
                <p className="mt-2 text-sm text-white/62">
                  {t("developers.rosterTitle")}
                </p>
              </div>
              <p className="rounded-full border border-accent/20 bg-accent/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-accent/82">
                {t("developers.verified")}
              </p>
            </div>

            <div className="relative grid gap-4">
              {members.map((member, index) => (
                <motion.article
                  key={member.name}
                  className="grid gap-6 rounded-[1.6rem] border border-white/10 bg-[linear-gradient(110deg,rgba(255,255,255,0.055),rgba(0,209,255,0.04))] p-5 sm:p-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.28 }}
                  transition={{
                    duration: 0.48,
                    delay: index * 0.06,
                    ease: "easeOut",
                  }}
                >
                  <div className="flex gap-4 sm:gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent/22 bg-accent/10 font-mono text-sm tracking-[0.16em] text-accent shadow-glow">
                      {member.initials}
                    </div>
                    <div>
                      <h3 className="text-2xl leading-tight text-white">
                        {member.name}
                      </h3>
                      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-accent/80">
                        {member.role}
                      </p>
                      <p className="mt-4 max-w-md text-sm leading-6 text-white/60">
                        {member.bio}
                      </p>
                      {developerSocialLinks[member.initials]?.length ? (
                        <div className="mt-5">
                          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                            {t("developers.socials")}
                          </p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {developerSocialLinks[member.initials].map(
                              (link) => (
                                <SocialLink
                                  key={link.href ?? link.link}
                                  {...link}
                                  compact
                                />
                              )
                            )}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.88fr)]">
                    <div className="rounded-[1.2rem] border border-white/8 bg-black/20 p-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                        {t("developers.experience")}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-white/72">
                        {member.experience}
                      </p>
                      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                        {t("developers.projects")}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {member.projects.map((project) => (
                          <span
                            key={project}
                            className="rounded-full border border-accent/18 bg-accent/10 px-3 py-1.5 text-xs text-accent/88"
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.2rem] border border-white/8 bg-black/20 p-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                        {t("developers.skills")}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {member.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/72"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DevelopersSection;
