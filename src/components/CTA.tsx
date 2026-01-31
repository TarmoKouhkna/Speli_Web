import Link from 'next/link'

export function CTA() {
  return (
    <section className="py-16 md:py-24 bg-warm">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-800 mb-6">
          Valmis esimeseks sammuks?
        </h2>
        <p className="text-sage-700 leading-relaxed mb-8 text-lg">
          Kui tunned end ülekoormatuna, stressis või justkui kinni olevat ning soovid rohkem rahu, selgust ja enesekindlust, oled oodatud ühendust võtma.
        </p>
        <Link
          href="/vota-uhendust"
          className="inline-block bg-sage-700 text-white px-8 py-4 rounded-lg font-medium hover:bg-sage-800 transition-colors shadow-sm"
        >
          Võta ühendust
        </Link>
      </div>
    </section>
  )
}
