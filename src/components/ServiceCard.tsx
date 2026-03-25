import { motion } from 'framer-motion';

type ServiceCardProps = {
  title: string;
  description: string;
  tags: string[];
};

export function ServiceCard({ title, description, tags }: ServiceCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-[28px] border border-white/80 bg-white/75 p-7 shadow-soft backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-indigo-500/0 transition duration-300 group-hover:from-blue-500/5 group-hover:to-indigo-500/10" />
      <div className="relative">
        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-xl font-semibold text-white shadow-glow">
          {title.slice(0, 1)}
        </div>
        <h3 className="font-display text-2xl font-semibold tracking-tight text-slate-950">
          {title}
        </h3>
        <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
