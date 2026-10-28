import { ArrowLeft, CalendarDays, Clock, MapPin } from 'lucide-react'
import { formatDate, formatPrice } from '../utils/format'

// Página de detalle del evento (placeholder hasta el próximo TP)
function EventPage({ event, onBack }) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-pine-800 transition-colors hover:bg-sand-100"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver a eventos
      </button>

      <div className="mt-4 overflow-hidden rounded-3xl bg-white ring-1 ring-sand-200">
        <img src={event.image} alt={event.title} className="aspect-[16/7] w-full object-cover" />

        <div className="p-6 sm:p-10">
          <span className="rounded-full bg-pine-50 px-3 py-1 text-xs font-semibold text-pine-800">
            {event.category}
          </span>
          <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            {event.title}
          </h1>
          <p className="mt-3 text-lg text-pine-700/80">{event.description}</p>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-pine-800">
            <li className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-ember-500" />
              <span className="capitalize">{formatDate(event.date)}</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-ember-500" />
              {event.location}
            </li>
            <li className="font-display font-bold">{formatPrice(event.price)}</li>
          </ul>

          <div className="mt-8 flex flex-col items-center rounded-2xl border-2 border-dashed border-sand-200 bg-sand-50 px-6 py-10 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ember-100 text-ember-600">
              <Clock className="h-6 w-6" />
            </span>
            <h2 className="mt-4 font-display text-xl font-bold">Próximamente más información</h2>
            <p className="mt-1 max-w-sm text-pine-700/80">
              Estamos preparando el detalle completo de este evento: recorrido, cronograma e
              inscripción.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventPage
