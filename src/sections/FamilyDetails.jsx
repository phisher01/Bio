import { motion } from 'framer-motion'
import SectionTitle from '../components/common/SectionTitle'
import { familyData } from '../data/profileData'

const familyMembers = [
  {
    emoji: '👔',
    name: 'Anil Kumar',
    relation: 'Father',
    role: 'Tailor · Home Shop',
    color: 'from-amber-50 to-orange-50',
    border: 'border-amber-200/60',
  },
  {
    emoji: '🏠',
    name: 'Kamlesh',
    relation: 'Mother',
    role: 'Homemaker',
    color: 'from-pink-50 to-rose-50',
    border: 'border-pink-200/60',
  },
  {
    emoji: '👦',
    name: 'Gagan Pratap Singh',
    relation: 'Younger Brother',
    role: 'Family',
    color: 'from-blue-50 to-sky-50',
    border: 'border-blue-200/60',
  },
  {
    emoji: '🎖️',
    name: 'Shri Ram Ji',
    relation: 'Grandfather',
    role: 'Retired Enforcement Officer · PF Dept, Gurugram',
    color: 'from-yellow-50 to-amber-50',
    border: 'border-yellow-300/60',
    featured: true,
  },
  {
    emoji: '⚖️',
    name: 'Santosh Kumar',
    relation: 'Uncle',
    role: 'Delhi High Court Advocate',
    color: 'from-emerald-50 to-teal-50',
    border: 'border-emerald-200/60',
  },
  {
    emoji: '⚖️',
    name: 'Laxmi',
    relation: 'Aunt',
    role: 'Delhi High Court Advocate',
    color: 'from-emerald-50 to-teal-50',
    border: 'border-emerald-200/60',
  },
]

export default function FamilyDetails() {
  return (
    <section id="family" className="px-4 py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="Family"
          title="Family Background"
          subtitle="A family built on honesty, hard work, and service — each member a story of dignity."
        />

        {/* Member cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {familyMembers.map((m, i) => (
            <motion.div
              key={m.name + m.relation}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' }}
              className={`group relative overflow-hidden rounded-3xl border bg-gradient-to-br ${m.color} ${m.border} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
            >
              {m.featured && (
                <span className="absolute right-4 top-4 rounded-full bg-wedding-gold/20 px-2 py-0.5 text-[10px] uppercase tracking-widest text-wedding-goldDark">
                  Revered
                </span>
              )}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70 text-3xl shadow-sm">
                {m.emoji}
              </div>
              <p className="text-[11px] uppercase tracking-widest text-wedding-muted">{m.relation}</p>
              <p className="mt-1 font-display text-xl text-wedding-wood">{m.name}</p>
              <p className="mt-1 text-xs leading-relaxed text-wedding-muted">{m.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Family values quote */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="relative mt-6 overflow-hidden rounded-3xl border border-wedding-gold/25 bg-white px-8 py-7 shadow-soft md:px-12"
        >
          <span className="absolute -right-2 -top-4 font-display text-[8rem] leading-none text-wedding-gold/8 select-none">
            "
          </span>
          <p className="relative max-w-3xl font-display text-lg leading-relaxed text-wedding-wood md:text-xl">
            {familyData.values}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
