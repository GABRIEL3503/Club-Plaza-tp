import { ArrowRight } from 'lucide-react'

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-blue-950 text-white">
      {/* Recurso visual: Imagen fotográfica con superposición en degradé */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Frente_club3.jpg"
          alt="Actividad deportiva en el club"
          className="h-full w-full object-cover object-center opacity-60"
        />
        {/* Gradiente corregido: pasa de azul semitransparente (80%) a transparente */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950/80 via-blue-950/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-blue-100 backdrop-blur-sm ring-1 ring-white/20">
          Deportes y eventos para toda la comunidad
        </p>

        <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Encontrá tu próxima <span className="text-blue-400">actividad</span>
        </h1>

        <p className="mt-5 max-w-xl text-lg text-blue-100">
          Fútbol, básquet, vóley, natación, pádel, boxeo... todo en un solo lugar.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#eventos"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-blue-950 shadow-lg transition-colors hover:bg-blue-50"
          >
            Explorar eventos
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#categorias"
            className="inline-flex items-center rounded-full px-6 py-3 font-semibold text-white ring-1 ring-white/30 transition-colors hover:bg-white/10"
          >
            Ver categorías
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero
