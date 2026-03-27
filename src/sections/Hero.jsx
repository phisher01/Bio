import { motion } from 'framer-motion'
import PrimaryButton from '../components/common/PrimaryButton'
import fallbackProfileImage from '../assets/profile.svg'
import { profileData } from '../data/profileData'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden px-4 pb-16 pt-10 md:pb-24 md:pt-20">
      <div className="hero-glow absolute -left-10 top-8 h-52 w-52 rounded-full md:h-72 md:w-72" />
      <div className="hero-glow absolute -right-8 bottom-0 h-60 w-60 rounded-full md:h-80 md:w-80" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="space-y-5"
        >
          <p className="inline-flex rounded-full border border-wedding-gold/35 bg-white/75 px-4 py-1 text-xs uppercase tracking-[0.26em] text-wedding-wood/80">
            Wedding Biodata
          </p>
          <h1 className="font-display text-4xl leading-tight text-wedding-wood md:text-6xl">
            {profileData.fullName}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-wedding-muted md:text-lg">{profileData.tagline}</p>

          <div className="flex flex-wrap gap-3 pt-2">
            <PrimaryButton href="#about">View Full Profile</PrimaryButton>
            <PrimaryButton href="#contact" variant="outline">
              Contact Family
            </PrimaryButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
          className="mx-auto w-full max-w-sm"
        >
          <div className="rounded-[2rem] border border-wedding-gold/30 bg-white p-3 shadow-soft">
            <img
              src={profileData.profileImage}
              alt="Profile placeholder"
              className="aspect-[4/5] w-full rounded-[1.7rem] object-cover"
              onError={(event) => {
                event.currentTarget.onerror = null
                event.currentTarget.src = fallbackProfileImage
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
