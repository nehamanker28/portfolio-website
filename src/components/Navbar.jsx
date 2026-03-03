function Navbar({ name }) {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-lg">
      <div className="mx-auto flex h-16 w-[min(1100px,92%)] items-center justify-between">
        <a href="#hero" className="text-sm font-bold tracking-[0.16em] text-white sm:text-base">
          {name.toUpperCase()}
        </a>
        <nav aria-label="Primary navigation" className="hidden gap-5 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
