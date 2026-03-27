import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="mb-10 text-center md:mb-14"
    >
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.28em] text-wedding-wood/80">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 font-display text-3xl text-wedding-wood md:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-wedding-muted md:text-base">{subtitle}</p>
      ) : null}
    </motion.div>
  )
}
