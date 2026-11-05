import {
  LayoutGrid,
  ShieldBan,
  SportShoe,
  Volleyball,
  Waves,
  Trophy,
  Dumbbell
} from 'lucide-react'

const icons = {
  LayoutGrid,
  ShieldBan,
  SportShoe,
  Volleyball,
  Waves,
  Trophy,
  Dumbbell
}
function CategoryCard({ name, icon, description, active, onSelect }) {
  const Icon = icons[icon] ?? LayoutGrid

  return (
    <button
      type="button"
      onClick={() => onSelect(name)}
      aria-pressed={active}
      className={`flex w-full items-center gap-3 rounded-2xl p-3 sm:p-4 xl:flex-col xl:items-start text-left ring-1 transition-all hover:-translate-y-0.5 hover:shadow-md ${
        active
  ? 'bg-[#164E63] text-[#FFFFF0] ring-[#164E63]'
  : 'bg-[#FFFFF0] text-[#164E63] ring-[#D8D5C4] hover:bg-[#F2F0DF] hover:ring-[#164E63]'
      }`}
    >
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
         active
  ? 'bg-[#FFFFF0] text-[#164E63]'
  : 'bg-[#E8E5D5] text-[#164E63]'
        }`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0">
        <span className="block font-display font-semibold leading-tight">{name}</span>
        <span className={`hidden text-sm leading-snug sm:block ${active ? 'text-[#FFFFF0]' : 'text-[#164E63]/70'}`}>
          {description}
        </span>
      </span>
    </button>
  )
}

export default CategoryCard
