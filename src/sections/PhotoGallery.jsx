import { motion } from 'framer-motion'
import SectionTitle from '../components/common/SectionTitle'
import { galleryImages } from '../data/profileData'

export default function PhotoGallery() {
  return (
    <section id="gallery" className="px-4 py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="Memories"
          title="Photo Gallery"
          subtitle="A curated visual glimpse, using placeholders that can be replaced with personal photos."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.figure
              key={image.alt}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
              className="group overflow-hidden rounded-3xl border border-wedding-gold/25 bg-white p-2 shadow-soft"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-[4/3] w-full rounded-2xl object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
