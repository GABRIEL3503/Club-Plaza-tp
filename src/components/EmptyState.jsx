import { SearchX } from 'lucide-react'

function EmptyState({ onReset }) {
  return (
    <div className="flex flex-col items-center rounded-3xl border-2 border-dashed border-blue-200 bg-white px-6 py-16 text-center shadow-sm">
      {/* Círculo contenedor del icono con resalte ámbar/dorado */}
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-600 ring-4 ring-amber-50">
        <SearchX className="h-7 w-7" />
      </span>

      {/* Título y descripción */}
      <h3 className="mt-4 font-display text-xl font-bold text-blue-950">
        No encontramos eventos
      </h3>
      <p className="mt-1 max-w-sm text-sm text-slate-600 leading-relaxed">
        Probá con otro nombre o elegí una categoría distinta.
      </p>

      {/* Botón para restablecer la búsqueda */}
      <button
        type="button"
        onClick={onReset}
        className="mt-6 rounded-full bg-blue-950 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-950/20 transition-all hover:bg-blue-900 hover:shadow-lg active:scale-95"
      >
        Limpiar filtros
      </button>
    </div>
  );
}

export default EmptyState
