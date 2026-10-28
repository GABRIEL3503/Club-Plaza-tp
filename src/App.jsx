import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CategoryList from './components/CategoryList'
import SearchBar from './components/SearchBar'
import EventList from './components/EventList'
import EmptyState from './components/EmptyState'
import EventPage from './components/EventPage'
import Footer from './components/Footer'
import events from './data/events'
import categories from './data/categories'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [search, setSearch] = useState('')
  // Evento abierto en la página de detalle (null = pantalla principal)
  const [selectedEvent, setSelectedEvent] = useState(null)

  // Un único listado derivado: se aplican ambos filtros sobre el array original
  const query = search.trim().toLowerCase()
  const filteredEvents = events.filter((event) => {
    const matchesCategory = selectedCategory === 'Todos' || event.category === selectedCategory
    const matchesSearch = event.title.toLowerCase().includes(query)
    return matchesCategory && matchesSearch
  })

  const resetFilters = () => {
    setSelectedCategory('Todos')
    setSearch('')
  }

  const openEvent = (event) => {
    setSelectedEvent(event)
    window.scrollTo(0, 0)
  }

  const closeEvent = () => {
    setSelectedEvent(null)
    window.scrollTo(0, 0)
  }

  if (selectedEvent) {
    return (
      <>
        <Header onNavigate={() => setSelectedEvent(null)} />
        <main>
          <EventPage event={selectedEvent} onBack={closeEvent} />
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header onNavigate={() => setSelectedEvent(null)} />
      <main>
        <Hero />

        <CategoryList
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <section id="eventos" className="mx-auto max-w-7xl scroll-mt-20 px-4 pt-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Próximos eventos
              </h2>
              <p className="mt-1 text-pine-700/80">
                {filteredEvents.length} {filteredEvents.length === 1 ? 'evento' : 'eventos'}
                {selectedCategory !== 'Todos' && (
                  <> en <span className="font-semibold text-pine-800">{selectedCategory}</span></>
                )}
              </p>
            </div>
            <SearchBar value={search} onChange={setSearch} />
          </div>

          {filteredEvents.length > 0 ? (
            <EventList events={filteredEvents} onSelectEvent={openEvent} />
          ) : (
            <EmptyState onReset={resetFilters} />
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
