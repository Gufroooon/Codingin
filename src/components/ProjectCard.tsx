import { motion } from 'framer-motion';

type ProjectCardProps = {
  title: string;
  category: string;
  summary: string;
  palette: string;
};

export function ProjectCard({ title, category, summary, palette }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group overflow-hidden rounded-[32px] border border-white/80 bg-white shadow-soft"
    >
      <div className={`relative h-72 overflow-hidden bg-gradient-to-br ${palette} p-8`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_45%)]" />
        <div className="absolute right-8 top-8 h-24 w-24 rounded-[28px] border border-white/25 bg-white/15 backdrop-blur-xl" />
        <div className="absolute bottom-10 left-8 right-8 rounded-[28px] border border-white/30 bg-slate-950/65 p-5 shadow-2xl backdrop-blur-xl">
          <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.28em] text-slate-300">
            <span>{category}</span>
            <span>Featured</span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[55, 90, 70].map((height) => (
              <div key={height} className="rounded-2xl bg-white/8 p-3">
                <div className="rounded-xl bg-white/10" style={{ height }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-8">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-700">{category}</p>
        <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-950">
          {title}
        </h3>
        <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">{summary}</p>
      </div>
    </motion.article>
  );
}
