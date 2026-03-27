import { motion } from 'framer-motion'
import SectionTitle from '../components/common/SectionTitle'

const lifeCards = [
  {
    icon: '🏡',
    title: 'Family Oriented',
    desc: 'Deeply rooted in family values. Spends evenings with family and believes a home is built on respect and togetherness.',
    color: 'from-rose-50 to-pink-50',
    border: 'border-rose-200/50',
  },
  {
    icon: '💻',
    title: 'Professionally Settled',
    desc: "SDE-II at BharatPe — one of India's leading fintechs. Ambitious, stable, and continuously growing in his career.",
    color: 'from-blue-50 to-sky-50',
    border: 'border-blue-200/50',
  },
  {
    icon: '🏋️',
    title: 'Disciplined Lifestyle',
    desc: 'Gym every morning before work. A Gold Medalist in Bench Press — his discipline in fitness reflects his character in life.',
    color: 'from-amber-50 to-orange-50',
    border: 'border-amber-200/50',
  },
  {
    icon: '✈️',
    title: 'Loves to Explore',
    desc: 'A keen traveller who enjoys discovering new places. Believes shared experiences and adventures make a bond stronger.',
    color: 'from-teal-50 to-cyan-50',
    border: 'border-teal-200/50',
  },
]

export default function LifeCards() {
  return (
    <section className="px-4 pb-16 md:pb-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="Character"
          title="The Life He Leads"
          subtitle="Four things that define who Rishi is beyond his resume."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {lifeCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.09, duration: 0.4 }}
              className={`rounded-3xl border bg-gradient-to-br ${card.color} ${card.border} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-2xl shadow-sm">
                {card.icon}
              </div>
              <p className="font-display text-base font-semibold text-wedding-wood">{card.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-wedding-muted">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
