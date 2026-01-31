import Link from 'next/link'

export function About() {
  return (
    <section className="py-16 md:py-24 bg-warm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-800 mb-6">
          Tere! Mina olen Speli.
        </h2>
        <p className="text-sage-700 leading-relaxed mb-4">
          Töötan inimestega, kes tunnevad palju, mõtlevad sügavalt ja annavad endast sageli rohkem, kui tagasi saavad. Aitan sul paremini toime tulla stressi ja emotsioonidega ning luua elu, mis tundub tähendusrikas ja tasakaalus.
        </p>
        <p className="text-sage-700 leading-relaxed mb-8">
          Koos uurime, mis sind hetkel tagasi hoiab, ning leiame toimivad ja realistlikud strateegiad, mis sobivad just sinu elu ja närvisüsteemiga.
        </p>
        <Link
          href="/minust"
          className="inline-block text-sage-700 font-medium border-b-2 border-sage-500 pb-1 hover:text-sage-800 hover:border-sage-700 transition-colors"
        >
          Loe rohkem minu lähenemisest →
        </Link>
      </div>
    </section>
  )
}
