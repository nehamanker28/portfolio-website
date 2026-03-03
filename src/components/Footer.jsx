function Footer({ data }) {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex w-[min(1100px,92%)] flex-col items-center justify-between gap-4 text-sm text-slate-400 sm:flex-row">
        <p>© {new Date().getFullYear()} {data.name}. Built with React + Tailwind.</p>
        <div className="flex items-center gap-4">
          <a href={data.socialLinks.github} target="_blank" rel="noreferrer" className="hover:text-cyan-200">GitHub</a>
          <a href={data.socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-200">LinkedIn</a>
          <a href={data.socialLinks.email} className="hover:text-cyan-200">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
