import { motion } from 'framer-motion'
import SectionTitle from '../components/common/SectionTitle'
import { profileData, lifestyleData } from '../data/profileData'

const detailCards = [
  {
    icon: '🎓',
    label: 'Education',
    value: 'B.Tech – Information Technology',
    sub: 'JC Bose YMCA, Faridabad · 2021',
  },
  {
    icon: '💼',
    label: 'Profession',
    value: 'SDE-II · ' + profileData.profession,
    sub: profileData.company + ', Gurugram',
  },
  {
    icon: '📍',
    label: 'Location',
    value: profileData.location,
    sub: 'Haryana, India',
  },
  {
    icon: '🏫',
    label: 'School',
    value: 'Vidya Mandir',
    sub: 'Sector-15A, Faridabad · CBSE',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.09, duration: 0.4, ease: 'easeOut' } }),
}

export default function AboutMe() {
  return (
    <section id="about" className="px-4 py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="About"
          title="About Me"
          subtitle="Engineer by profession, powerlifter by passion — here's a glimpse of who Rishi is."
        />

        {/* Intro quote block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="relative mb-10 overflow-hidden rounded-3xl border border-wedding-gold/25 bg-white px-8 py-8 shadow-soft md:px-12 md:py-10"
        >
          {/* Decorative quote mark */}
          <span className="absolute -left-2 -top-4 font-display text-[9rem] leading-none text-wedding-gold/10 select-none">
            "
          </span>
          <p className="relative max-w-3xl font-display text-xl leading-relaxed text-wedding-wood md:text-2xl">
            {profileData.intro}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {lifestyleData.personalityTraits.map((trait) => (
              <span
                key={trait}
                className="rounded-full border border-wedding-gold/35 bg-wedding-cream px-3 py-1 text-xs font-medium text-wedding-wood"
              >
                {trait}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Detail cards grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {detailCards.map((card, i) => (
            <motion.div
              key={card.label}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group rounded-3xl border border-wedding-gold/20 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-wedding-gold/40"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-wedding-cream text-2xl">
                {card.icon}
              </div>
              <p className="text-[11px] uppercase tracking-widest text-wedding-muted">{card.label}</p>
              <p className="mt-1 font-display text-lg leading-snug text-wedding-wood">{card.value}</p>
              <p className="mt-0.5 text-xs text-wedding-muted">{card.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Hobbies strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-6 rounded-3xl border border-wedding-gold/20 bg-white/60 px-6 py-5"
        >
          <p className="mb-3 text-xs uppercase tracking-widest text-wedding-muted">Interests &amp; Hobbies</p>
          <div className="flex flex-wrap gap-2">
            {lifestyleData.hobbies.concat(lifestyleData.travelInterests).map((item) => (
              <span
                key={item}
                className="rounded-full border border-wedding-gold/30 bg-wedding-cream px-3 py-1.5 text-xs font-medium text-wedding-wood"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
