import SectionHeading from './SectionHeading';

function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="section" data-reveal>
      <div className="mx-auto w-[min(1100px,92%)]">
        <SectionHeading eyebrow="Projects" title="Selected work" description="Representative projects aligned with mobile product delivery, architecture, and business impact." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/[0.07]">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">{project.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li key={item} className="rounded-md bg-slate-800/80 px-2 py-1 text-[11px] font-medium text-slate-200">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex gap-3 text-sm">
                <a href={project.github} target="_blank" rel="noreferrer" className="rounded-md border border-white/20 px-3 py-2 text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200">
                  GitHub
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" className="rounded-md border border-cyan-300/60 px-3 py-2 text-cyan-200 transition hover:bg-cyan-300/10">
                  Live
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
