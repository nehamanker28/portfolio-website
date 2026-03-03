import SectionHeading from './SectionHeading';

function ExperienceSection({ experience }) {
  return (
    <section id="experience" className="section" data-reveal>
      <div className="mx-auto w-[min(1100px,92%)]">
        <SectionHeading eyebrow="Experience" title="Career timeline" description="From implementation to architecture leadership across product-focused teams." />
        <ol className="relative space-y-6 border-l border-white/15 pl-6">
          {experience.map((item) => (
            <li key={`${item.title}-${item.period}`} className="relative rounded-2xl border border-white/10 bg-white/5 p-5">
              <span className="absolute -left-[31px] top-6 h-3 w-3 rounded-full bg-cyan-300" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">{item.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-slate-300">{item.company}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.summary}</p>
              <ul className="mt-3 space-y-1 text-sm text-slate-300">
                {item.highlights.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ExperienceSection;
