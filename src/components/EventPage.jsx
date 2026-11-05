import { ArrowLeft, CalendarDays, Clock, MapPin } from 'lucide-react'
import { formatDate, formatPrice } from '../utils/format'

// Página de detalle del evento
function EventPage({ event, onBack }) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Botón Volver */}
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-blue-950 transition-colors hover:bg-blue-50"
      >
        <ArrowLeft className="h-4 w-4 text-blue-700" />
        Volver a eventos
      </button>

      {/* Tarjeta contenedora principal */}
      <div className="mt-4 overflow-hidden rounded-3xl bg-white shadow-xl ring-1 shadow-blue-950/5 ring-blue-100">
        <img
          src={event.image}
          alt={event.title}
          className="aspect-[16/7] w-full object-cover"
        />

        <div className="p-6 sm:p-10">
          {/* Badge de categoría */}
          <span className="inline-block rounded-full border border-blue-200/60 bg-blue-50 px-3.5 py-1 text-xs font-bold tracking-wider text-blue-800 uppercase">
            {event.category}
          </span>

          {/* Título y descripción */}
          <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
            {event.title}
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-slate-600">
            {event.description}
          </p>

          {/* Datos destacados (fecha, ubicación, precio) */}
          <ul className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-blue-100/80 py-4 text-sm font-medium text-slate-700">
            <li className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-blue-400" />
              <span className="capitalize">{formatDate(event.date)}</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span>{event.location}</span>
            </li>
            <li className="ml-auto rounded-xl border border-blue-200/80 bg-blue-50 px-3 py-1 font-display text-base font-extrabold text-blue-950 sm:ml-0">
              {formatPrice(event.price)}
            </li>
          </ul>

          {/* Banner "Próximamente más información" */}
          <div className="mt-8 flex flex-col items-center rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/50 px-6 py-10 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-500 ring-4 ring-blue-50">
              <Clock className="h-6 w-6" />
            </span>
            <h2 className="mt-4 font-display text-xl font-bold text-blue-950">
              Próximamente más información
            </h2>
            <p className="mt-1 max-w-sm text-sm leading-relaxed text-slate-600">
              Estamos preparando el detalle completo de este evento: recorrido, cronograma e inscripción.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventPage