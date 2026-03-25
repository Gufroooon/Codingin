import { motion } from 'framer-motion';

const floatingCards = [
  {
    title: 'Product System',
    detail: 'Web platform architecture with motion-first UX.',
    className: 'top-3 right-6 md:top-8 md:right-10',
    accent: 'from-blue-500/20 to-cyan-400/10',
  },
  {
    title: 'Mobile Release',
    detail: 'iOS + Android launch flow with analytics instrumentation.',
    className: 'bottom-20 left-0 md:bottom-16 md:left-8',
    accent: 'from-indigo-500/20 to-sky-400/10',
  },
  {
    title: 'Growth Dashboard',
    detail: 'Real-time conversion and retention reporting.',
    className: 'bottom-0 right-4 md:right-12',
    accent: 'from-slate-900/10 to-indigo-500/10',
  },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-28 lg:pt-16"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(99,102,241,0.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,252,0.92))]" />
      <div className="absolute left-1/2 top-8 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-blue-700 shadow-soft backdrop-blur">
            Premium web and mobile engineering
          </div>

          <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[0.95] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Engineering Digital Experiences That Scale
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            We design and ship websites and mobile products that feel world-class on day
            one and stay robust as your business grows.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 px-7 py-4 text-sm font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(59,130,246,0.28)]"
            >
              Get Started
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-7 py-4 text-sm font-semibold text-slate-700 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-slate-950"
            >
              View Projects
            </a>
          </div>

          <div className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-slate-200/80 pt-8">
            {[
              ['48+', 'Products shipped'],
              ['12', 'Countries served'],
              ['99.2%', 'Client retention'],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-2xl font-semibold text-slate-950">{value}</p>
                <p className="mt-1 text-sm text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="relative mx-auto w-full max-w-[620px]"
        >
          <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-blue-500/20 via-indigo-400/10 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[36px] border border-white/80 bg-white/70 p-4 shadow-soft backdrop-blur-xl sm:p-6">
            <div className="rounded-[30px] border border-slate-200/10 bg-slate-950 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.28)]">
              <div className="flex items-center gap-2 pb-5">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                        launch stack
                      </p>
                      <p className="mt-2 font-display text-xl text-white">
                        Product Command Center
                      </p>
                    </div>
                    <div className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-200">
                      Live build
                    </div>
                  </div>
                  <div className="space-y-3 font-mono text-sm leading-7 text-slate-300">
                    <p>
                      <span className="text-blue-300">const</span> platform = {'{'}
                    </p>
                    <p className="pl-4">
                      surface: <span className="text-emerald-300">'web + mobile'</span>,
                    </p>
                    <p className="pl-4">
                      performance: <span className="text-emerald-300">'A+ Lighthouse'</span>,
                    </p>
                    <p className="pl-4">
                      conversion: <span className="text-emerald-300">'optimized'</span>,
                    </p>
                    <p>{'}'}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.26em] text-slate-400">
                      system health
                    </p>
                    <div className="mt-4 flex items-end gap-3">
                      <span className="font-display text-4xl text-white">99.98%</span>
                      <span className="pb-1 text-sm text-emerald-300">uptime</span>
                    </div>
                    <div className="mt-5 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-blue-400 to-indigo-400" />
                    </div>
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.26em] text-slate-400">
                      delivery velocity
                    </p>
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      {[68, 82, 94].map((height, index) => (
                        <div key={height} className="flex flex-col items-center gap-2">
                          <div
                            className="w-full rounded-t-2xl bg-gradient-to-t from-blue-500 to-indigo-400"
                            style={{ height: `${height}px`, opacity: 0.78 + index * 0.08 }}
                          />
                          <span className="text-xs text-slate-400">Q{index + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {floatingCards.map((card, index) => (
              <motion.div
                key={card.title}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5 + index,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                }}
                className={`absolute ${card.className} hidden max-w-[230px] rounded-[24px] border border-white/70 bg-gradient-to-br ${card.accent} p-4 shadow-soft backdrop-blur-xl md:block`}
              >
                <p className="font-display text-base font-semibold text-slate-900">{card.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{card.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
