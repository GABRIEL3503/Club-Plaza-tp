import EventCard from './EventCard'

function EventList({ events = [], onSelectEvent }) {
  // Manejo de estado vacío dentro de la misma grilla o contenedor
  if (events.length === 0) {
    return (
      <div className="mx-auto my-8 max-w-md rounded-3xl border border-blue-100 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-700">
          🔍
        </div>
        <h3 className="font-display text-lg font-bold text-blue-950">
          No se encontraron eventos
        </h3>
        <p className="mt-1 text-sm text-slate-500">
          Intenta ajustar los filtros de categoría o el campo de búsqueda para ver más resultados.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard
          key={event.id}
          title={event.title}
          category={event.category}
          date={event.date}
          location={event.location}
          image={event.image}
          price={event.price}
          onView={() => onSelectEvent(event)}
        />
      ))}
    </div>
  );
}

export default EventList
