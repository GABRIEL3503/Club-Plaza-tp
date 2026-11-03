import { useState } from 'react'
import { Menu, X, User } from 'lucide-react'
import Logo from './Logo'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Favoritos', href: '#favoritos' },
]

function Header({ onNavigate }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-blue-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo onClick={onNavigate} />

        {/* Navegación escritorio */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={onNavigate}
              className="text-sm font-semibold text-slate-700 transition-colors hover:text-blue-200"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-blue-900 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800 shadow-sm"
          >
            <User className="h-4 w-4" />
            Iniciar sesión
          </button>
        </nav>

        {/* Botón menú mobile */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-blue-950 hover:bg-blue-50 md:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Navegación mobile */}
      {open && (
        <nav className="border-t border-blue-100 bg-white px-4 pb-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setOpen(false);
                onNavigate?.();
              }}
              className="block rounded-lg px-3 py-3 font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-900"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-blue-900 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
          >
            <User className="h-4 w-4" />
            Iniciar sesión
          </button>
        </nav>
      )}
    </header>
  )
}

export default Header
