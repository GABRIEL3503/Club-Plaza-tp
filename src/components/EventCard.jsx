import { CalendarDays, MapPin } from 'lucide-react'
import { formatDate, formatPrice } from '../utils/format'

function EventCard({ title, category, date, location, image, price, onView }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-pine-800 backdrop-blur">
          {category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold leading-snug text-pine-950">{title}</h3>

        <ul className="mt-3 space-y-1.5 text-sm text-pine-700/80">
        <li className="flex items-center gap-2">
  <CalendarDays className="h-4 w-4 shrink-0 text-blue-400" />
  <span className="capitalize">{formatDate(date)}</span>
</li>
<li className="flex items-center gap-2">
  <MapPin className="h-4 w-4 shrink-0 text-blue-400" />
  {location}
</li>
        </ul>

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span
            className={`font-display text-lg font-bold ${
              price === 0 ? 'text-pine-500' : 'text-pine-950'
            }`}
          >
            {formatPrice(price)}
          </span>
     <button
  type="button"
  onClick={onView}
  className="rounded-full bg-blue-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-800"
>
  Ver evento
</button>
        </div>
      </div>
    </article>
  )
}

export default EventCard
