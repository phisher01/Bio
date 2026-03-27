import { motion } from 'framer-motion'

export default function InfoCard({ title, children }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="rounded-3xl border border-wedding-gold/20 bg-white p-6 shadow-soft"
    >
      <h3 className="mb-3 font-display text-xl text-wedding-wood">{title}</h3>
      <div className="space-y-2 text-sm leading-relaxed text-wedding-muted md:text-base">{children}</div>
    </motion.article>
  )
}
