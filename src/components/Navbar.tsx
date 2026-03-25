import { motion } from 'framer-motion';

const navItems = ['Services', 'Work', 'Process', 'Pricing'];

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="sticky top-4 z-50 mx-auto flex w-[min(1180px,calc(100%-1.5rem))] items-center justify-between rounded-full border border-white/70 bg-white/65 px-4 py-3 shadow-soft backdrop-blur-xl md:px-6"
    >
      <a href="#top" className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 font-display text-lg font-semibold text-white shadow-glow">
          C
        </span>
        <div>
          <p className="font-display text-base font-semibold tracking-tight text-slate-950">
            Coding-In
          </p>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-500">
            Digital Agency
          </p>
        </div>
      </a>

      <nav className="hidden items-center gap-7 md:flex">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-semibold text-slate-600 transition duration-300 hover:text-slate-950"
          >
            {item}
          </a>
        ))}
      </nav>

      <a
        href="#contact"
        className="rounded-full border border-slate-200 bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-slate-900"
      >
        Book a Call
      </a>
    </motion.header>
  );
}
