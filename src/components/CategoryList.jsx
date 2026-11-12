
import CategoryCard from './CategoryCard'

function CategoryList({ categories, selected, onSelect }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">

      <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
        Categorías
      </h2>

      <p className="mt-1 text-pine-700/80">
        Elegí una disciplina para filtrar los eventos.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7">

        <CategoryCard
          name="Todos"
          icon="LayoutGrid"
          description="Todas las disciplinas"
          active={selected === 'Todos'}
          onSelect={onSelect}
        />

        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            name={category.id}
            icon={category.icon}
            description={category.description}
            active={selected === category.id}
            onSelect={onSelect}
          />
        ))}

      </div>
    </section>
  )
}

export default CategoryList
