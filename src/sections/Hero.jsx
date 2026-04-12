import { motion } from 'framer-motion'
import PrimaryButton from '../components/common/PrimaryButton'
import fallbackProfileImage from '../assets/profile.svg'
import { profileData } from '../data/profileData'

const quickStats = [
  { value: 'BharatPe', label: 'Company' },
  { value: 'Gurugram', label: 'Location' },
  { value: profileData.dateOfBirth, label: 'DOB' },
  { value: "'21 Batch", label: 'Graduate' },
]


export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden px-4 pb-20 pt-10 md:pb-32 md:pt-20">
      <div className="hero-glow absolute -left-16 top-4 h-64 w-64 rounded-full md:h-96 md:w-96" />
      <div className="hero-glow absolute -right-10 bottom-0 h-72 w-72 rounded-full md:h-[28rem] md:w-[28rem]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">

        {/* ── Left ── */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="flex flex-col gap-6"
        >
          {/* Badge */}
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-wedding-gold/40 bg-white/80 px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-wedding-wood/80 shadow-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-wedding-gold" />
            Personal Biodata
          </span>

          {/* Name */}
          <div>
            <p className="font-body text-base text-wedding-muted">Hi, I'm</p>
            <h1 className="font-display text-5xl leading-[1.08] text-wedding-wood md:text-[4.5rem]">
              {profileData.fullName}
            </h1>
          </div>

          {/* Photo — mobile only, right after name */}
          <div className="md:hidden">
            <div className="relative mx-auto max-w-[18rem]">
              <div className="pointer-events-none absolute -inset-4 rounded-[2.6rem] border border-dashed border-wedding-gold/20" />
              <div className="rounded-[2rem] border border-wedding-gold/30 bg-white p-3 shadow-soft">
                <img
                  src={profileData.profileImage}
                  alt={profileData.fullName}
                  className="aspect-[4/5] w-full rounded-[1.7rem] object-cover"
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = fallbackProfileImage
                  }}
                />
              </div>
            </div>
          </div>

          {/* Role */}
          <p className="font-body text-lg text-wedding-muted md:text-xl">
            Software Engineer&nbsp;
            <span className="text-wedding-muted/50">at</span>&nbsp;
            <span className="relative inline-block font-display text-xl font-semibold text-wedding-wood md:text-2xl">
              BharatPe
              <span className="absolute -bottom-0.5 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-wedding-gold to-wedding-goldDark" />
            </span>
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 border-l-2 border-wedding-gold/30 pl-5">
            {quickStats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
              >
                <p className="font-display text-lg text-wedding-wood">{s.value}</p>
                <p className="text-[11px] uppercase tracking-widest text-wedding-muted">{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="#about">View Full Profile</PrimaryButton>
            <PrimaryButton href="#contact" variant="outline">Contact Family</PrimaryButton>
          </div>
        </motion.div>

        {/* ── Right — desktop only ── */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.12 }}
          className="mx-auto hidden w-full max-w-[22rem] md:block"
        >
          {/* Photo */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 rounded-[2.6rem] border border-dashed border-wedding-gold/20" />
            <div className="rounded-[2rem] border border-wedding-gold/30 bg-white p-3 shadow-soft">
              <img
                src={profileData.profileImage}
                alt={profileData.fullName}
                className="aspect-[4/5] w-full rounded-[1.7rem] object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null
                  e.currentTarget.src = fallbackProfileImage
                }}
              />
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  )
}
