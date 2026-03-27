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

            {/* Warm note */}
            <p className="mt-8 text-center text-sm text-wedding-muted">
              We look forward to meaningful conversations. Please reach out with respect and sincerity. 🙏
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
