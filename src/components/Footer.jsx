import Logo from './Logo'

function Footer() {
  return (
    <footer className="mt-24 border-t border-blue-900 bg-blue-950 text-blue-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between lg:px-8">
        
        {/* Identidad / Logo y descripción */}
        <div className="max-w-sm">
          <Logo light />
          <p className="mt-4 text-sm text-blue-200/90 leading-relaxed">
            Plataforma oficial del Club Atlético Plaza Huincul. Conocé nuestras actividades, deportes y servicios para toda la comunidad.
          </p>
        </div>

        {/* Columnas de navegación */}
        <div className="grid grid-cols-2 gap-10 text-sm">
          <div>
            <h4 className="font-display font-bold uppercase tracking-wider text-white">Explorar</h4>
            <ul className="mt-3 space-y-2 text-blue-200">
              <li>
                <a href="#inicio" className="transition-colors hover:text-white hover:underline">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#eventos" className="transition-colors hover:text-white hover:underline">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#categorias" className="transition-colors hover:text-white hover:underline">
                  Categorías
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-wider text-white">Organizadores</h4>
            <ul className="mt-3 space-y-2 text-blue-200">
              <li>
                <a href="#" className="transition-colors hover:text-white hover:underline">
                  Publicar evento
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white hover:underline">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Pie inferior / Copyright */}
      <div className="border-t border-white/10 bg-blue-950/50">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-blue-200/70 sm:px-6 lg:px-8">
          © 2026 CAPH (Programación Web Avanzada)
        </p>
      </div>
    </footer>
  );
}

export default Footer
