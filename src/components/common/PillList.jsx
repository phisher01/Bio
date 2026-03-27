export default function PillList({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-wedding-gold/35 bg-wedding-cream px-3 py-1 text-xs font-medium text-wedding-wood"
        >
          {item}
        </span>
      ))}
    </div>
  )
}
