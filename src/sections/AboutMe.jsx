import { motion } from 'framer-motion'
import SectionTitle from '../components/common/SectionTitle'
import fallbackProfileImage from '../assets/profile.svg'
import { profileData } from '../data/profileData'

export default function AboutMe() {
  return (
    <section id="about" className="px-4 py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl">

        <SectionTitle
          eyebrow="Profile"
          title="Rishi Pratap Singh"
          subtitle="A glimpse into who he is — his values, his career, and the life he's building."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-wedding-gold/25 bg-white p-8 shadow-soft md:p-10"
        >
          <span className="absolute -left-1 -top-6 font-display text-[8rem] leading-none text-wedding-gold/10 select-none">"</span>
          <p className="relative font-display text-xl leading-relaxed text-wedding-wood md:text-[1.35rem]">
            I'm a software engineer who finds the same joy in solving a complex system problem as in lifting heavy at the gym. I come from a grounded, hard-working family and carry those values into everything I do — my career, my relationships, and how I show up every day.
          </p>
          <div className="mt-5 flex items-center gap-3 border-t border-wedding-gold/15 pt-4">
            <img
              src={profileData.profileImage}
              alt={profileData.fullName}
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackProfileImage }}
              className="h-10 w-10 rounded-full object-cover border border-wedding-gold/30"
            />
            <div>
              <p className="text-xs font-semibold text-wedding-wood">Rishi Pratap Singh</p>
              <p className="text-[11px] text-wedding-muted">Gurugram · BharatPe</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
