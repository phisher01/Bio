import { profileData } from '../data/profileData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-wedding-gold/25 bg-wedding-cream px-4 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 text-center">
        <p className="font-display text-lg text-wedding-wood">{profileData.fullName}</p>
        <p className="text-xs text-wedding-muted">
          {profileData.profession} · {profileData.company} · {profileData.location}
        </p>
        <p className="mt-1 text-xs text-wedding-muted/60">© {year} · All rights reserved</p>
      </div>
    </footer>
  )
}
