import SectionHeading from './SectionHeading';

function ContactSection({ data }) {
  return (
    <section id="contact" className="section" data-reveal>
      <div className="mx-auto grid w-[min(1100px,92%)] gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionHeading eyebrow="Contact" title="Let’s build impactful products together" description="Open to senior mobile engineering opportunities in Dubai and global remote collaborations." />
          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              <span className="font-semibold text-slate-200">Email:</span> {data.email}
            </li>
            <li>
              <span className="font-semibold text-slate-200">Phone:</span> {data.phone}
            </li>
            <li>
              <span className="font-semibold text-slate-200">Location:</span> {data.location}
            </li>
          </ul>
        </div>

        <form className="rounded-2xl border border-white/10 bg-white/5 p-6" action="https://formspree.io/f/your-form-id" method="POST">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-200" htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required className="mb-4 w-full rounded-lg border border-white/20 bg-slate-900/80 px-3 py-2 text-sm text-white outline-none ring-cyan-300/70 transition focus:ring" type="text" />

          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-200" htmlFor="email">
            Email
          </label>
          <input id="email" name="email" required className="mb-4 w-full rounded-lg border border-white/20 bg-slate-900/80 px-3 py-2 text-sm text-white outline-none ring-cyan-300/70 transition focus:ring" type="email" />

          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-200" htmlFor="message">
            Message
          </label>
          <textarea id="message" name="message" required rows={5} className="mb-5 w-full rounded-lg border border-white/20 bg-slate-900/80 px-3 py-2 text-sm text-white outline-none ring-cyan-300/70 transition focus:ring" />

          <button type="submit" className="w-full rounded-lg bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
            Send Message
          </button>
          <p className="mt-3 text-xs text-slate-400">Replace Formspree endpoint in this form to receive messages in your inbox.</p>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
