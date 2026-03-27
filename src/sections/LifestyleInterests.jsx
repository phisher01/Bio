import { motion } from 'framer-motion'
import SectionTitle from '../components/common/SectionTitle'
import { lifestyleData } from '../data/profileData'

const supportCards = [
  {
    emoji: '🥗',
    label: 'Food & Nutrition',
    items: lifestyleData.foodPreferences,
    color: 'from-lime-50 to-green-50',
    border: 'border-lime-200/50',
  },
  {
    emoji: '✨',
    label: 'Personality',
    items: lifestyleData.personalityTraits,
    color: 'from-purple-50 to-violet-50',
    border: 'border-purple-200/50',
  },
]

export default function LifestyleInterests() {
  return (
    <section id="lifestyle" className="bg-white/60 px-4 py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="Lifestyle"
          title="Lifestyle & Interests"
          subtitle="Discipline outside of work defines Rishi just as much as his engineering craft."
        />

        {/* Featured: Fitness hero card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative mb-6 overflow-hidden rounded-3xl border border-wedding-gold/30 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-8 shadow-soft md:p-10"
        >
          {/* Background decoration */}
          <div className="absolute -right-8 -top-8 text-[10rem] opacity-[0.07] select-none">🏋️</div>

          <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="inline-block rounded-full border border-orange-300/60 bg-white/70 px-3 py-1 text-[11px] uppercase tracking-widest text-orange-700">
                Fitness Focus
              </span>
              <h3 className="mt-3 font-display text-2xl text-wedding-wood md:text-3xl">
                Powerlifter &amp; Physique Builder
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-wedding-muted md:text-base">
                Rishi brings the same discipline he applies to engineering into the gym. Focused on explosive powerlifting movements, physique building, and sustained progress — fitness is not a hobby, it's a lifestyle.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {lifestyleData.hobbies.map((h) => (
                  <span
                    key={h}
                    className="rounded-full border border-orange-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-orange-800"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats mini column */}
            <div className="flex shrink-0 flex-row gap-4 md:flex-col">
              {[
                { icon: '🥇', label: 'Gold Medal', sub: 'Bench Press' },
                { icon: '💪', label: 'Powerlifting', sub: 'Explosive moves' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-wedding-gold/30 bg-white/80 px-4 py-3 text-center shadow-sm"
                >
                  <p className="text-2xl">{s.icon}</p>
                  <p className="mt-1 text-xs font-semibold text-wedding-wood">{s.label}</p>
                  <p className="text-[10px] text-wedding-muted">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured: Travel hero card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="relative mb-6 overflow-hidden rounded-3xl border border-sky-200/60 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 p-8 shadow-soft md:p-10"
        >
          <div className="absolute -right-8 -top-8 text-[10rem] opacity-[0.07] select-none">✈️</div>
          <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="inline-block rounded-full border border-sky-300/60 bg-white/70 px-3 py-1 text-[11px] uppercase tracking-widest text-sky-700">
                Travel & Exploration
              </span>
              <h3 className="mt-3 font-display text-2xl text-wedding-wood md:text-3xl">
                A Keen Explorer at Heart
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-wedding-muted md:text-base">
                Rishi has a genuine passion for discovering new places — from peaceful hill stations to vibrant cities. Travel, for him, is about experiences, perspectives, and memories that last a lifetime.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {lifestyleData.travelInterests.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-sky-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-sky-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex shrink-0 flex-row gap-4 md:flex-col">
              {[
                { icon: '🗺️', label: 'Explorer', sub: 'New places' },
                { icon: '🏔️', label: 'Hill stations', sub: 'Nature lover' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-sky-200/60 bg-white/80 px-4 py-3 text-center shadow-sm"
                >
                  <p className="text-2xl">{s.icon}</p>
                  <p className="mt-1 text-xs font-semibold text-wedding-wood">{s.label}</p>
                  <p className="text-[10px] text-wedding-muted">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Supporting cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {supportCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`rounded-3xl border bg-gradient-to-br ${card.color} ${card.border} p-6`}
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-2xl shadow-sm">
                {card.emoji}
              </div>
              <p className="mb-3 text-xs uppercase tracking-widest text-wedding-muted">{card.label}</p>
              <div className="flex flex-wrap gap-2">
                {card.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white bg-white/80 px-3 py-1 text-xs font-medium text-wedding-wood shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
