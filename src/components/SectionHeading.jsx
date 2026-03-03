function SectionHeading({ eyebrow, title, description }) {
  return (
    <header className="mb-8 sm:mb-10">
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/90">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
          {description}
        </p>
      )}
    </header>
  );
}

export default SectionHeading;
