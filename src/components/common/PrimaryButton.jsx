export default function PrimaryButton({ children, href, variant = 'solid' }) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wedding-gold'

  const variants = {
    solid: 'bg-wedding-gold text-white hover:bg-wedding-goldDark',
    outline:
      'border border-wedding-gold/60 bg-white/70 text-wedding-wood backdrop-blur hover:bg-white hover:border-wedding-gold',
  }

  return (
    <a href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </a>
  )
}
