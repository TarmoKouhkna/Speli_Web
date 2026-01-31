import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    title: 'Individuaalne teraapia',
    description: 'Üks-ühele teraapia, et saavutada rohkem selgust, vabaneda koormavatest mustritest ja liikuda edasi omas tempos.',
    href: '/individuaalne-teraapia',
    cta: 'Loe lähemalt',
    image: '/individuaalne-teraapia.jpg',
  },
  {
    title: 'Ärevuse toetus',
    description: 'Spetsialiseeritud tugi, et ärevus oleks paremini hallatav ega domineeriks sinu igapäevaelu.',
    href: '/adhd-toetus',
    cta: 'Loe lähemalt',
    image: '/arevuse_toetus.jpg',
  },
  {
    title: 'Ressursid ja tööriistad',
    description: 'Praktilised teadmised ja lihtsad tööriistad, mis toetavad sind ka väljaspool teraapiaseansse.',
    href: '/ressursid',
    cta: 'Loe lähemalt',
    image: '/ressursid.jpg',
  },
]

export function Services() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-800 mb-12 text-center">
          Kuidas saame koos töötada
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {services.map((service) => (
            <article key={service.href} className="bg-warm rounded-xl p-6 md:p-8 border border-sage-200/60">
              {service.image && (
                <div className="relative w-full aspect-[4/3] mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              )}
              <h3 className="font-serif text-xl font-semibold text-sage-800 mb-4">
                {service.title}
              </h3>
              <p className="text-sage-700 leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="inline-block text-sage-700 font-medium border-b-2 border-sage-500 pb-1 hover:text-sage-800 hover:border-sage-700 transition-colors"
              >
                {service.cta} →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
