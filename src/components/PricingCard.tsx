import { motion } from 'framer-motion';

type PricingCardProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export function PricingCard({
  name,
  price,
  description,
  features,
  highlighted = false,
}: PricingCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`relative overflow-hidden rounded-[30px] border p-8 shadow-soft ${
        highlighted
          ? 'border-blue-200 bg-slate-950 text-white'
          : 'border-white/80 bg-white/80 text-slate-950'
      }`}
    >
      {highlighted ? (
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
      ) : null}

      <div className="flex items-center justify-between">
        <div>
          <p
            className={`text-xs font-bold uppercase tracking-[0.28em] ${
              highlighted ? 'text-blue-200' : 'text-slate-500'
            }`}
          >
            {name}
          </p>
          <p className="mt-4 font-display text-5xl font-semibold tracking-tight">{price}</p>
        </div>
        {highlighted ? (
          <span className="rounded-full border border-blue-400/30 bg-blue-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
            Most Popular
          </span>
        ) : null}
      </div>

      <p className={`mt-5 text-base leading-7 ${highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
        {description}
      </p>

      <div className="mt-8 space-y-3">
        {features.map((feature) => (
          <div key={feature} className="flex items-start gap-3">
            <span
              className={`mt-1 h-2.5 w-2.5 rounded-full ${
                highlighted ? 'bg-blue-300' : 'bg-blue-600'
              }`}
            />
            <span className={highlighted ? 'text-slate-200' : 'text-slate-700'}>{feature}</span>
          </div>
        ))}
      </div>

      <a
        href="#contact"
        className={`mt-10 inline-flex rounded-full px-6 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${
          highlighted
            ? 'bg-white text-slate-950 hover:bg-slate-100'
            : 'bg-slate-950 text-white hover:bg-slate-900'
        }`}
      >
        Start a Project
      </a>
    </motion.article>
  );
}
