// Isotipo + logotipo de Rumbo
function Logo({ light = false, onClick }) {
  return (
    <a href="#inicio" onClick={onClick} className="flex items-center gap-2.5" aria-label="Rumbo, ir al inicio">
      <svg viewBox="0 0 32 32" className="h-9 w-9" aria-hidden="true">
        <rect width="32" height="32" rx="8" className={light ? 'fill-pine-50' : 'fill-pine-800'} />
        <path
          d="M5 24 L13 10 L17 17 L20 13 L27 24 Z"
          className={light ? 'fill-pine-800' : 'fill-pine-50'}
        />
        <circle cx="23" cy="9" r="3" className="fill-ember-500" />
      </svg>
      <span
        className={`font-display text-2xl font-extrabold tracking-tight ${
          light ? 'text-white' : 'text-pine-900'
        }`}
      >
        rumbo
      </span>
    </a>
  )
}

export default Logo
