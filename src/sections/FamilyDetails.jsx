import { motion } from 'framer-motion'
import SectionTitle from '../components/common/SectionTitle'

const featuredMembers = [
  {
    emoji: '🎖️',
    name: 'Shri Ram Ji',
    relation: 'Grandfather',
    title: 'Enforcement Officer (Rtd)',
    org: 'E.P.F.O  Gurugram',
    desc: 'Shri Ram Ji had worked in EPFO, Gurugram. A man of principle and public service, he dedicated decades of his life enforcing provident fund regulations and ensuring justice for working-class citizens.',
    color: 'from-amber-50 via-yellow-50 to-orange-50',
    border: 'border-amber-300/50',
    badge: 'Government Service',
    badgeColor: 'bg-amber-100 text-amber-800',
  },
  {
    emoji: '🧵',
    name: 'Anil Kumar',
    relation: 'Father',
    title: 'Own Business',
    org: 'Faridabad',
    desc: 'He runs his own business in town with honesty, dedication, and relentless hard work. A self-made man whose commitment shaped the values Rishi carries today.',
    color: 'from-amber-50 via-orange-50 to-yellow-50',
    border: 'border-amber-200/60',
    badge: 'Self-Made Entrepreneur',
    badgeColor: 'bg-orange-100 text-orange-800',
  },
  {
    emoji: '👩',
    name: 'Kamlesh',
    relation: 'Mother',
    title: 'Homemaker',
    org: '',
    desc: 'A caring and grounded presence at home, shaping strong family values every day.',
    color: 'from-rose-50 via-pink-50 to-orange-50',
    border: 'border-rose-200/60',
    badge: 'Family Strength',
    badgeColor: 'bg-rose-100 text-rose-800',
  },
]

const coreFamily = [
  {
    emoji: '⚖️',
    name: 'Santosh Kumar',
    relation: 'Uncle · Delhi',
    title: 'Advocate, Delhi High Court',
    org: 'LLB, LLM, PhD · Delhi University',
    desc: 'Santosh Kumar is an advocate at the Delhi High Court and holds LLB, LLM, and PhD qualifications from Delhi University.',
    color: 'from-emerald-50 via-teal-50 to-cyan-50',
    border: 'border-emerald-300/50',
    badge: 'Delhi High Court',
    badgeColor: 'bg-emerald-100 text-emerald-800',
  },
  {
    emoji: '⚖️',
    name: 'Vijay Laxmi',
    relation: 'Aunt · Delhi',
    title: 'Advocate, Delhi High Court',
    org: 'M.A (English), LLB, LLM · Kurukshetra University',
    desc: 'Vijay Laxmi is an advocate who practices legal cases in the Delhi High Court and completed M.A (English) from Kurukshetra University, along with LLB and LLM degrees.',
    color: 'from-emerald-50 via-teal-50 to-cyan-50',
    border: 'border-emerald-300/50',
    badge: 'Delhi High Court',
    badgeColor: 'bg-emerald-100 text-emerald-800',
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
    badge: 'Engineer',
    badgeColor: 'bg-blue-100 text-blue-800',
  },
  {
    emoji: '🏠',
    name: 'Residential Address',
    relation: 'Home · Faridabad',
    title: 'H.no. 1113/6',
    org: 'Parwaitya Colony, NIT Faridabad, Haryana',
    desc: 'Family residence in Faridabad.',
    color: 'from-slate-50 via-zinc-50 to-stone-50',
    border: 'border-slate-200/70',
    badge: 'Address',
    badgeColor: 'bg-slate-100 text-slate-800',
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
                  {m.org ? (
                    <>
                      <span className="text-wedding-muted">·</span>
                      {m.name === 'Shri Ram Ji' ? (
                        <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800 ring-1 ring-amber-200">
                          {m.org}
                        </span>
                      ) : (
                        <span className="text-sm text-wedding-muted">{m.org}</span>
                      )}
                    </>
                  ) : null}
                </div>
                {m.name === 'Shri Ram Ji' ? (
                  <p className="mt-2 text-sm text-wedding-muted">Mobile: 9711337970</p>
                ) : null}
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
                {m.name === 'Santosh Kumar' || m.name === 'Vijay Laxmi' ? (
                  <div className="mt-2 space-y-1">
                    {m.org ? <p className="text-sm font-semibold text-wedding-wood">{m.org}</p> : null}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800 ring-1 ring-amber-200">
                        Advocate
                      </span>
                      <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200">
                        Delhi High Court
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                    <span className="text-sm font-semibold text-wedding-wood">{m.title}</span>
                    {m.org ? (
                      <>
                        <span className="text-wedding-muted">·</span>
                        <span className="text-sm text-wedding-muted">{m.org}</span>
                      </>
                    ) : null}
                  </div>
                )}
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
