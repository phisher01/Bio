import { motion } from 'framer-motion'
import SectionTitle from '../components/common/SectionTitle'
import { profileData } from '../data/profileData'

const showWhatsappButton = false

const contactItems = [
  { emoji: '📞', label: 'Contact Number', value: profileData.phone },
  { emoji: '✉️', label: 'Email Address', value: profileData.email },
  { emoji: '📍', label: 'Location', value: profileData.location + ', Haryana' },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-white/60 px-4 py-16 md:py-24">
      <div className="mx-auto w-full max-w-4xl">
        <SectionTitle
          eyebrow="Contact"
          title="Get in Touch"
          subtitle="Interested in connecting? Reach out for family introductions and further communication."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-wedding-gold/30 bg-white shadow-soft"
        >
          {/* Decorative top bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-wedding-gold/60 via-wedding-gold to-wedding-gold/60" />

          <div className="px-8 py-10 md:px-12 md:py-12">
            <div className="grid gap-5 md:grid-cols-3">
              {contactItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-wedding-gold/20 bg-wedding-cream/60 p-5"
                >
                  <div className="mb-3 text-2xl">{item.emoji}</div>
                  <p className="text-[11px] uppercase tracking-widest text-wedding-muted">{item.label}</p>
                  <p className="mt-1 font-semibold text-wedding-wood">{item.value}</p>
                </motion.div>
              ))}
            </div>

            {showWhatsappButton && (
              <div className="mt-8 flex justify-center">
                <a
                  href={`https://wa.me/${profileData.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-600 shadow-sm"
                >
                  <span>💬</span>
                  Chat on WhatsApp
                </a>
              </div>
            )}

            {/* Social links */}
            <div className="mt-8 flex items-center justify-center gap-4 border-t border-wedding-gold/15 pt-6">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-sm font-medium text-wedding-muted transition-colors hover:text-wedding-wood"
              >
                <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <span className="h-4 w-px bg-wedding-gold/30" />
              <a
                href={profileData.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-sm font-medium text-wedding-muted transition-colors hover:text-wedding-wood"
              >
                <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                Instagram
              </a>
            </div>

            {/* Warm note */}
            <p className="mt-6 text-center text-sm text-wedding-muted">
              We look forward to meaningful conversations. Please reach out with respect and sincerity. 🙏
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
