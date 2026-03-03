import SectionHeading from './SectionHeading';

function SkillsSection({ data }) {
  return (
    <section id="skills" className="section" data-reveal>
      <div className="mx-auto w-[min(1100px,92%)]">
        <SectionHeading eyebrow="Skills" title="Core capabilities" description="Strong mobile foundations supported by architecture thinking and modern delivery workflows." />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-base font-semibold text-white">Proficiency</h3>
            <ul className="space-y-4">
              {data.skills.map((skill) => (
                <li key={skill.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-200">{skill.name}</span>
                    <span className="text-cyan-300">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                      style={{ width: `${skill.level}%` }}
                      role="meter"
                      aria-label={`${skill.name} proficiency`}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={skill.level}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-base font-semibold text-white">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {data.skillTags.map((tag) => (
                <span key={tag} className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
