// Isotipo + logotipo de Rumbo
function Logo({ light = false, onClick }) {
  return (
    <a 
      href="#inicio" 
      onClick={onClick} 
      className="flex items-center gap-2.5 group" 
      aria-label="Club Atlético Plaza Huincul, ir al inicio"
    >
      {/* Escudo del club */}
      <img
        src="/images/LogoCAPH.jpeg"
        alt="Escudo Club Atlético Plaza Huincul"
        className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
      />

      {/* Nombre del Club con tipografía en Azul / Blanco */}
      <span
        className={`font-display text-2xl font-extrabold tracking-tight transition-colors ${
          light ? 'text-white group-hover:text-blue-100' : 'text-blue-950 group-hover:text-blue-700'
        }`}
      >
        Club Atlético Plaza Huincul
      </span>
    </a>
  )
}

export default Logo