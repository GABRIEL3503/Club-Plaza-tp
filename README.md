# Club Plaza — Eventos outdoor en la Patagonia

**Club Plaza** es una plataforma web para publicar y descubrir eventos deportivos y de aire libre en la Patagonia: carreras de montaña, rally de mountain bike, travesías, escalada, deportes de agua y nieve.

Proyecto integrador de **Programación Web Avanzada** — TP N.º 3 (React + Tailwind CSS). El repositorio se amplía en los siguientes trabajos prácticos.

## Integrantes

- [Nombre Apellido]
- [Nombre Apellido]
- [Nombre Apellido]

## Tecnologías

- [React 19](https://react.dev/) (JSX, componentes, props, `useState`)
- [Vite](https://vite.dev/) como herramienta de build y servidor de desarrollo
- [Tailwind CSS v4](https://tailwindcss.com/) con el plugin `@tailwindcss/vite`
- [Lucide React](https://lucide.dev/) para íconos

## Identidad visual

| Elemento   | Definición                                                 |
| ---------- | ---------------------------------------------------------- |
| Nombre     | Club Plaza                                                      |
| Isotipo    | Cordillera con sol (`public/favicon.svg`, `Logo.jsx`)      |
| Principal  | Verde bosque `#164731`                                     |
| Acento     | Naranja atardecer `#F57A1F`                                |
| Fondo      | Arena `#FAF8F4`                                            |
| Tipografía | Outfit (títulos) · Inter (texto)                           |

Los colores y fuentes están definidos como tokens en `src/index.css` (`@theme`).

## Funcionalidades

- Pantalla principal con Header, Hero, Categorías, listado de eventos y Footer.
- Listado de eventos renderizado con `map()` a partir de `src/data/events.js`.
- Categorías generadas dinámicamente desde `src/data/categories.js`.
- Filtro por categoría (con opción **Todos**) y búsqueda por nombre en tiempo real, sin distinguir mayúsculas/minúsculas.
- Ambos filtros se combinan sobre un único listado derivado.
- Mensaje específico cuando no hay resultados.
- Diseño responsive: 1 columna en mobile, 2 en tablet y 3 en escritorio.

## Estructura

```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Logo.jsx
│   ├── CategoryList.jsx
│   ├── CategoryCard.jsx
│   ├── SearchBar.jsx
│   ├── EventList.jsx
│   ├── EventCard.jsx
│   ├── EmptyState.jsx
│   └── Footer.jsx
├── data/
│   ├── categories.js
│   └── events.js
├── utils/
│   └── format.js
├── App.jsx
├── index.css
└── main.jsx
```

## Instrucciones de ejecución

Requisitos: Node.js 20 o superior.

```bash
# 1. Clonar el repositorio
git clone <url-del-repositorio>
cd rumbo

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm run dev
```

La aplicación queda disponible en `http://localhost:5173`.

Otros scripts:

```bash
npm run build     # build de producción en /dist
npm run preview   # sirve el build localmente
```
