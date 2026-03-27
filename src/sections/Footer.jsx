import { profileData } from '../data/profileData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-wedding-gold/25 bg-wedding-cream px-4 py-6">
      <p className="text-center text-sm text-wedding-muted">
        {profileData.fullName} - {year}
      </p>
    </footer>
  )
}
