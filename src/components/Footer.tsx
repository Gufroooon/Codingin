export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight text-slate-950">
            Coding-In
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
            Premium digital agency for ambitious brands building modern websites and mobile
            applications.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm font-semibold text-slate-500">
          <a href="#services" className="transition hover:text-slate-950">
            Services
          </a>
          <a href="#work" className="transition hover:text-slate-950">
            Work
          </a>
          <a href="#pricing" className="transition hover:text-slate-950">
            Pricing
          </a>
          <a href="#contact" className="transition hover:text-slate-950">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
