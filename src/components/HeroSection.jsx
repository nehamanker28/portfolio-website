function HeroSection({ data }) {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.18),transparent_35%),radial-gradient(circle_at_20%_40%,rgba(34,197,94,0.14),transparent_30%)]" />
      <div className="relative mx-auto w-[min(1100px,92%)] py-20 sm:py-24 lg:py-28">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/90">Portfolio</p>
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          {data.role}
        </h1>
        <p className="mt-4 text-lg font-medium text-cyan-200 sm:text-xl">{data.subtitle}</p>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">{data.heroDescription}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
            View Projects
          </a>
          <a href="#contact" className="rounded-lg border border-cyan-300/60 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10">
            Contact Me
          </a>
          <a href={data.resumeLink} className="rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/40 hover:bg-white/5">
            Download Resume
          </a>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {data.stats.map((item) => (
            <li key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-bold text-white">{item.value}</p>
              <p className="text-xs uppercase tracking-[0.16em] text-slate-300">{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HeroSection;
