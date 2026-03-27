import SectionTitle from '../components/common/SectionTitle'
import { profileData } from '../data/profileData'

const showWhatsappButton = false

export default function Contact() {
  return (
    <section id="contact" className="bg-white/70 px-4 py-14 md:py-20">
      <div className="mx-auto w-full max-w-4xl rounded-[2rem] border border-wedding-gold/30 bg-white px-6 py-10 shadow-soft md:px-12">
        <SectionTitle
          eyebrow="Contact"
          title="Contact Section"
          subtitle="For family introductions and further communication."
        />

        <div className="mx-auto mt-6 grid max-w-xl gap-4 text-sm text-wedding-muted md:text-base">
          <p>
            <span className="font-semibold text-wedding-wood">Contact Number:</span> {profileData.phone}
          </p>
          <p>
            <span className="font-semibold text-wedding-wood">Email:</span> {profileData.email}
          </p>
          {showWhatsappButton ? (
            <a
              href={`https://wa.me/${profileData.whatsapp.replace('+', '')}`}
              className="inline-flex w-fit rounded-full bg-wedding-gold px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-wedding-goldDark"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
          ) : null}
        </div>
      </div>
    </section>
  )
}
