import EventCard from './EventCard'

function EventList({ events, onSelectEvent }) {
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
  )
}

export default EventList
