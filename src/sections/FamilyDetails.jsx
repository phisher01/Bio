import { motion } from 'framer-motion'
import SectionTitle from '../components/common/SectionTitle'

const featuredMembers = [
  {
    emoji: '🎖️',
    name: 'Shri Ram Ji',
    relation: 'Grandfather',
    title: 'Retired EPFO Officer',
    org: 'Worked at EPFO, Gurugram',
    desc: 'Shri Ram Ji had worked in EPFO, Gurugram. A man of principle and public service, he dedicated decades of his life enforcing provident fund regulations and ensuring justice for working-class citizens.',
    color: 'from-amber-50 via-yellow-50 to-orange-50',
    border: 'border-amber-300/50',
    badge: 'Government Service',
    badgeColor: 'bg-amber-100 text-amber-800',
  },
  {
    emoji: '⚖️',
    name: 'Santosh Kumar & Vijay Laxmi',
    relation: 'Uncle & Aunt · Delhi',
    title: 'Professor (Law Faculty, DU) & Legal Professional',
    org: 'University of Delhi · Legal Academia & Practice',
    desc: 'Santosh Kumar is a Professor in the Law Faculty at DU and holds LLB, LLM, and PhD qualifications. Vijay Laxmi is an advocate who practices legal cases in the Delhi High Court and holds LLB and LLM degrees. Together, they reflect the family\'s strong foundation in legal education and excellence.',
    color: 'from-emerald-50 via-teal-50 to-cyan-50',
    border: 'border-emerald-300/50',
    badge: 'Law Faculty, DU',
    badgeColor: 'bg-emerald-100 text-emerald-800',
  },
]

const coreFamily = [
  {
    emoji: '🧵',
    name: 'Anil Kumar',
    relation: 'Father',
    title: 'Proprietor',
    org: 'Business Owner · Faridabad',
    desc: 'He runs his own business in town with honesty, dedication, and relentless hard work. A self-made man whose commitment shaped the values Rishi carries today.',
    color: 'from-amber-50 via-orange-50 to-yellow-50',
    border: 'border-amber-200/60',
    badge: 'Self-Made Entrepreneur',
    badgeColor: 'bg-orange-100 text-orange-800',
  },
  {
    emoji: '👨‍💻',
    name: 'Gagan Pratap Singh',
    relation: 'Younger Brother',
    title: 'Software Developer',
    org: 'Hobfit',
    desc: 'B.Tech in Computer Engineering from JC Bose University YMCA, Faridabad. Both brothers chose the engineering path, reflecting a family culture of ambition and education.',
    color: 'from-blue-50 via-sky-50 to-indigo-50',
    border: 'border-blue-200/60',
    badge: 'Engineer · Like Rishi',
    badgeColor: 'bg-blue-100 text-blue-800',
  },
]

export default function FamilyDetails() {
  return (
    <section id="family" className="px-4 py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl space-y-6">

        <SectionTitle
          eyebrow="Family"
          title="Family Background"
          subtitle="Rooted in service, justice, and honest hard work — a family that stands for something."
        />

        {/* ── Featured: Grandfather + Uncle & Aunt ── */}
        <div className="grid gap-5 md:grid-cols-2">
          {featuredMembers.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-3xl border bg-gradient-to-br ${m.color} ${m.border} p-7 shadow-soft`}
            >
              {/* Watermark emoji */}
              <div className="absolute -right-4 -top-4 text-[7rem] opacity-[0.06] select-none">{m.emoji}</div>

              <div className="relative">
                {/* Badge */}
                <span className={`inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest ${m.badgeColor}`}>
                  {m.badge}
                </span>

                {/* Relation + Name */}
                <p className="mt-4 text-[11px] uppercase tracking-widest text-wedding-muted">{m.relation}</p>
                <h3 className="mt-1 font-display text-2xl text-wedding-wood">{m.name}</h3>

                {/* Title + Org */}
                <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                  <span className="text-sm font-semibold text-wedding-wood">{m.title}</span>
                  <span className="text-wedding-muted">·</span>
                  <span className="text-sm text-wedding-muted">{m.org}</span>
                </div>

                {/* Divider */}
                <div className="my-4 h-px w-full bg-wedding-gold/15" />

                {/* Description */}
                <p className="text-sm leading-relaxed text-wedding-muted">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Father + Brother ── */}
        <div className="grid gap-5 md:grid-cols-2">
          {coreFamily.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-3xl border bg-gradient-to-br ${m.color} ${m.border} p-7 shadow-soft`}
            >
              <div className="absolute -right-4 -top-4 text-[7rem] opacity-[0.06] select-none">{m.emoji}</div>
              <div className="relative">
                <span className={`inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest ${m.badgeColor}`}>
                  {m.badge}
                </span>
                <p className="mt-4 text-[11px] uppercase tracking-widest text-wedding-muted">{m.relation}</p>
                <h3 className="mt-1 font-display text-2xl text-wedding-wood">{m.name}</h3>
                <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                  <span className="text-sm font-semibold text-wedding-wood">{m.title}</span>
                  <span className="text-wedding-muted">·</span>
                  <span className="text-sm text-wedding-muted">{m.org}</span>
                </div>
                <div className="my-4 h-px w-full bg-wedding-gold/15" />
                <p className="text-sm leading-relaxed text-wedding-muted">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Values quote ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-3xl border border-wedding-gold/25 bg-white px-8 py-8 shadow-soft md:px-12"
        >
          <span className="absolute -right-2 -top-4 font-display text-[8rem] leading-none text-wedding-gold/8 select-none">"</span>
          <p className="relative max-w-3xl font-display text-lg leading-relaxed text-wedding-wood md:text-xl">
            A family where a grandfather served with integrity in government service, uncle and aunt uphold justice at the Delhi High Court, and a father built his livelihood with honest hands — these roots run deep in Rishi.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
