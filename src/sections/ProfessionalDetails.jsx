import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import SectionTitle from '../components/common/SectionTitle'
import { professionalData, profileData } from '../data/profileData'

const educationTimeline = [
  {
    icon: '💻',
    title: 'SDE-II · BharatPe',
    sub: 'Automation Engineer · Gurugram',
    tag: 'Present',
    highlight: true,
  },
  {
    icon: '💼',
    title: 'Software Engineer · MobiKwik',
    sub: 'Gurugram — Fintech engineering',
    tag: 'Previous',
  },
  {
    icon: '🎓',
    title: 'B.Tech – Information Technology',
    sub: 'JC Bose University of Science & Technology YMCA, Faridabad, Haryana',
    tag: '2021',
  },
  {
    icon: '🏫',
    title: 'Vidya Mandir',
    sub: 'Sector-15A, Faridabad · CBSE',
    tag: 'Schooling',
  },
]


export default function ProfessionalDetails() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    let thumbnailShown = false

    const showThumbnail = () => {
      video.currentTime = 27
      thumbnailShown = true
    }

    const resetBeforePlay = (e) => {
      if (thumbnailShown) {
        e.preventDefault()
        video.currentTime = 0
        thumbnailShown = false
        video.play()
      }
    }

    video.addEventListener('loadedmetadata', showThumbnail)
    video.addEventListener('play', resetBeforePlay, { once: true })
    return () => {
      video.removeEventListener('loadedmetadata', showThumbnail)
      video.removeEventListener('play', resetBeforePlay)
    }
  }, [])

  return (
    <section id="professional" className="bg-white/60 px-4 py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="Career"
          title="Professional Details"
          subtitle="From classroom to cutting-edge engineering — Rishi's professional journey at a glance."
        />

        <div className="grid gap-6 lg:grid-cols-3">

          {/* ── Education Timeline ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-wedding-gold/20 bg-white p-6 shadow-soft"
          >
            <h3 className="mb-5 font-display text-xl text-wedding-wood">Education &amp; Journey</h3>
            <div className="relative space-y-0">
              {educationTimeline.map((step, i) => (
                <div key={step.title} className="relative flex gap-4">
                  {/* Vertical line */}
                  {i < educationTimeline.length - 1 && (
                    <div className="absolute left-5 top-10 h-full w-px bg-wedding-gold/20" />
                  )}
                  <div
                    className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-lg ${
                      step.highlight
                        ? 'bg-wedding-gold text-white shadow-sm'
                        : 'bg-wedding-cream'
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div className="pb-6">
                    <span className="mb-1 inline-block rounded-full bg-wedding-cream px-2 py-0.5 text-[10px] uppercase tracking-widest text-wedding-muted">
                      {step.tag}
                    </span>
                    <p className={`text-sm font-semibold leading-snug ${step.highlight ? 'text-wedding-gold' : 'text-wedding-wood'}`}>
                      {step.title}
                    </p>
                    <p className="mt-0.5 text-xs text-wedding-muted">{step.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Col 2: Achievement + Currently At ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="flex flex-col gap-4"
          >
            {professionalData.achievements.map((ach) => (
              <div
                key={ach.title}
                className="overflow-hidden rounded-3xl border border-wedding-gold/30 bg-gradient-to-br from-amber-50 via-white to-yellow-50 shadow-soft"
              >
                <div className="relative p-5 pb-3">
                  <div className="absolute -right-4 -top-4 text-[5rem] opacity-[0.07] select-none">🥇</div>
                  <span className="inline-block rounded-full bg-wedding-gold/15 px-3 py-1 text-[10px] uppercase tracking-widest text-wedding-goldDark">
                    🏆 Achievement
                  </span>
                  <p className="mt-2 font-display text-lg leading-snug text-wedding-wood">{ach.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-wedding-muted">{ach.description}</p>
                </div>
                <div className="mx-4 mb-4 overflow-hidden rounded-2xl border border-wedding-gold/20">
                  <video
                    ref={videoRef}
                    src={ach.videoSrc}
                    controls
                    playsInline
                    preload="metadata"
                    className="aspect-video w-full object-cover"
                  >
                    Your browser does not support video.
                  </video>
                </div>
              </div>
            ))}

            <div className="rounded-3xl border border-wedding-gold/20 bg-white p-5 shadow-soft">
              <span className="inline-block rounded-full bg-green-50 px-3 py-1 text-[10px] uppercase tracking-widest text-green-700">
                Currently at
              </span>
              <p className="mt-2 font-display text-xl text-wedding-wood">{profileData.company}</p>
              <p className="mt-0.5 text-xs text-wedding-muted">{profileData.location}</p>
              <div className="mt-3 h-px w-full bg-wedding-gold/15" />
              <p className="mt-3 text-xs leading-relaxed text-wedding-muted">
                {professionalData.projects[0].description}
              </p>
            </div>
          </motion.div>

          {/* ── Col 3: Core Skills ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="rounded-3xl border border-wedding-gold/20 bg-white p-6 shadow-soft"
          >
            <h3 className="mb-2 font-display text-xl text-wedding-wood">Core Skills</h3>
            <p className="mb-5 text-xs text-wedding-muted">Key technical &amp; engineering capabilities</p>
            <div className="space-y-2">
              {professionalData.skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  className="flex items-center gap-3 border-l-2 border-wedding-gold/40 pl-3"
                >
                  <span className="text-sm font-medium text-wedding-wood">{skill}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 space-y-3 border-t border-wedding-gold/15 pt-5">
              {professionalData.workExperience.map((item) => (
                <div key={item.company} className="flex items-start gap-2.5">
                  <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${item.status === 'current' ? 'bg-wedding-gold' : 'bg-wedding-muted/40'}`} />
                  <div className="flex flex-1 items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-semibold text-wedding-wood">{item.company}</p>
                      <p className="text-[11px] text-wedding-muted">{item.role}</p>
                      <p className="text-[10px] text-wedding-muted/70">📍 {item.location}</p>
                    </div>
                    <span className={`mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${item.status === 'current' ? 'bg-green-50 text-green-700' : 'bg-wedding-cream text-wedding-muted'}`}>
                      {item.status === 'current' ? 'Current' : 'Previous'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
