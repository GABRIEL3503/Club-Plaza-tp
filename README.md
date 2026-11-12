# Club Atlético Plaza Huincul — Plataforma de eventos

Plataforma web de actividades y eventos deportivos del **Club Atlético Plaza Huincul** (Plaza Huincul, Neuquén): fútbol, básquet, vóley, natación, pádel y boxeo, todo en un solo lugar.

Proyecto integrador de **Programación Web Avanzada** — Facultad de Informática (UNCo). El repositorio se amplía en los siguientes trabajos prácticos.

## Integrantes

| Nombre            | Legajo    |
| ----------------- | --------- |
| Dario Stefanovic  | FAI-53732 |
| Tania Agüero      | FAI-5692  |
| Jorge Medina      | FAI-5713  |

## Tecnologías

- [React 19](https://react.dev/) (JSX, componentes, props, `useState`)
- [Vite](https://vite.dev/) como herramienta de build y servidor de desarrollo
- [Tailwind CSS v4](https://tailwindcss.com/) con el plugin `@tailwindcss/vite`
- [Lucide React](https://lucide.dev/) para íconos

## Identidad visual

| Elemento   | Definición                                            |
| ---------- | ----------------------------------------------------- |
| Nombre     | Club Atlético Plaza Huincul                           |
| Isotipo    | Escudo oficial del club (`public/favicon.svg`, `Logo.jsx`) |
| Escudo     | Azul escudo `#1B2562`                                 |
| Principal  | Azul primario `#1E3A8A`                               |
| Acento     | Celeste `#50A2FF`                                     |
| Fondo      | Gris claro `#F8FAFC`                                  |
| Tipografía | Outfit (títulos) · Inter (texto)                      |
| Íconos     | Lucide React                                          |

Los colores se aplican con la paleta de Tailwind CSS: azul primario (`blue-900`),
celeste de acento (`blue-400`) y fondo gris claro (`slate-50`). Las fuentes
están definidas como tokens en `src/index.css` (`@theme`).

Guía completa (logo, paleta, tipografía, íconos y estados de componentes): [docs/identidad-visual-club-plaza.pdf](docs/identidad-visual-club-plaza.pdf)

## Funcionalidades

- Pantalla principal con Header, Hero, Categorías, listado de eventos y Footer.
- Listado de eventos renderizado con `map()` a partir de `src/data/events.js`, con fotos reales de las instalaciones del club.
- Categorías por disciplina generadas dinámicamente desde `src/data/categories.js`: Fútbol, Básquet, Vóley, Natación, Pádel y Boxeo.
- Filtro por categoría (con opción **Todos**) y búsqueda por nombre en tiempo real, sin distinguir mayúsculas/minúsculas.
- Ambos filtros se combinan sobre un único listado derivado.
- Mensaje específico cuando no hay resultados.
- Vista de detalle de cada evento (**Ver evento**).
- Precios en pesos argentinos; los eventos sin costo se muestran como **Gratis**.
- Diseño responsive: 1 columna en mobile, 2 en tablet y 3 en escritorio.

## Estructura

```
docs/
└── identidad-visual-club-plaza.pdf   # guía de identidad visual

public/
└── images/                           # fotos de los eventos e instalaciones

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
│   ├── EventPage.jsx
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
cd <carpeta-del-repositorio>

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm run dev
```

La aplicación queda disponible en `http://localhost:5173`.



```