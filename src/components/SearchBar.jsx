import { Search, X } from 'lucide-react'

function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full sm:max-w-sm">
      {/* Icono de Lupa en tono azul institucional con opacidad */}
      <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-900/50" />
      
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar evento por nombre…"
        aria-label="Buscar evento por nombre"
        className="w-full rounded-full border border-blue-200 bg-white py-3 pl-12 pr-11 text-blue-950 placeholder:text-blue-900/40 focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all [&::-webkit-search-cancel-button]:hidden shadow-sm"
      />

      {/* Botón para limpiar búsqueda */}
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-blue-900/60 hover:bg-blue-50 hover:text-blue-900 transition-colors"
          aria-label="Limpiar búsqueda"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

export default SearchBar
