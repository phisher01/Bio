import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../components/common/SectionTitle'
import { galleryImages } from '../data/profileData'

export default function PhotoGallery() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const total = galleryImages.length

  const go = useCallback((index) => {
    setDirection(index > current ? 1 : -1)
    setCurrent((index + total) % total)
  }, [current, total])

  const prev = () => go(current - 1)
  const next = useCallback(() => go(current + 1), [current, go])

  // Auto-play every 4s
  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

  const variants = {
    enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
  }

  return (
    <section id="gallery" className="px-4 py-14 md:py-20">
      <div className="mx-auto w-full max-w-3xl">
        <SectionTitle eyebrow="Memories" title="Photo Gallery" />

        {/* ── Main carousel ── */}
        <div className="relative overflow-hidden rounded-3xl border border-wedding-gold/25 bg-white p-2 shadow-soft">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                src={galleryImages[current].src}
                alt={galleryImages[current].alt}
                className="absolute inset-0 h-full w-full object-cover"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) next()
                  else if (info.offset.x > 60) prev()
                }}
              />
            </AnimatePresence>

            {/* Prev / Next arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-wedding-gold/30 bg-white/80 text-wedding-wood shadow-sm backdrop-blur-sm transition hover:bg-white"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-wedding-gold/30 bg-white/80 text-wedding-wood shadow-sm backdrop-blur-sm transition hover:bg-white"
              aria-label="Next"
            >
              ›
            </button>

            {/* Counter */}
            <div className="absolute bottom-3 right-3 rounded-full border border-wedding-gold/25 bg-white/80 px-3 py-1 text-[11px] font-medium text-wedding-wood backdrop-blur-sm">
              {current + 1} / {total}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="mt-3 flex items-center justify-center gap-1.5 pb-1">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-5 h-2 bg-wedding-gold'
                    : 'w-2 h-2 bg-wedding-gold/25 hover:bg-wedding-gold/50'
                }`}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── Thumbnail strip ── */}
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                i === current
                  ? 'border-wedding-gold shadow-sm scale-105'
                  : 'border-transparent opacity-60 hover:opacity-90'
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-14 w-20 object-cover"
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}
