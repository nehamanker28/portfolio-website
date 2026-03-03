import SectionHeading from './SectionHeading';

function AboutSection({ data }) {
  return (
    <section id="about" className="section" data-reveal>
      <div className="mx-auto w-[min(1100px,92%)]">
        <SectionHeading eyebrow="About" title="Engineering ideas into reliable mobile products" />
        <div className="grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:grid-cols-[1.3fr_1fr]">
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{data.about}</p>
          <div className="rounded-xl border border-cyan-300/30 bg-slate-900/70 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">Focus Areas</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>• React Native architecture and reusable module design</li>
              <li>• iOS quality and release readiness</li>
              <li>• Scalable system design for mobile ecosystems</li>
              <li>• AI-powered product exploration</li>
            </ul>
            <p className="mt-4 text-sm font-semibold text-white">Targeting senior opportunities in Dubai.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
