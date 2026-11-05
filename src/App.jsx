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
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [search, setSearch] = useState('');
  // Evento abierto en la página de detalle (null = pantalla principal)
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Un único listado derivado: se aplican ambos filtros sobre el array original
  const query = search.trim().toLowerCase();
  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      selectedCategory === 'Todos' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const resetFilters = () => {
    setSelectedCategory('Todos');
    setSearch('');
  };

  const openEvent = (event) => {
    setSelectedEvent(event);
    window.scrollTo(0, 0);
  };

  const closeEvent = () => {
    setSelectedEvent(null);
    window.scrollTo(0, 0);
  };

  // Vista de detalle del evento
  if (selectedEvent) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
        <Header onNavigate={() => setSelectedEvent(null)} />
        <main className="flex-grow">
          <EventPage event={selectedEvent} onBack={closeEvent} />
        </main>
        <Footer />
      </div>
    );
  }

  // Vista principal de la aplicación
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Header onNavigate={() => setSelectedEvent(null)} />
      
      <main className="flex-grow pb-16">
        <Hero />

        {/* Sección de navegación por Categorías */}
        <section id="categorias" className="bg-white border-b border-blue-100 py-6">
          <CategoryList
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </section>

        {/* Sección principal de Eventos */}
        <section
          id="eventos"
          className="mx-auto max-w-7xl scroll-mt-20 px-4 pt-12 sm:px-6 lg:px-8"
        >
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-blue-100/80 pb-6">
            <div>
              <h2 className="font-display text-2xl font-black tracking-tight text-blue-950 sm:text-3xl">
                Próximos eventos
              </h2>
              <p className="mt-1 text-sm font-medium text-slate-600">
                {filteredEvents.length}{' '}
                {filteredEvents.length === 1 ? 'evento' : 'eventos'}
                {selectedCategory !== 'Todos' && (
                  <>
                    {' '}en{' '}
                    <span className="font-bold text-blue-900 underline decoration-blue-300">
                      {selectedCategory}
                    </span>
                  </>
                )}
              </p>
            </div>

            <SearchBar value={search} onChange={setSearch} />
          </div>

          {/* Listado de eventos o Estado vacío */}
          {filteredEvents.length > 0 ? (
            <EventList events={filteredEvents} onSelectEvent={openEvent} />
          ) : (
            <EmptyState onReset={resetFilters} />
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App
