import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden min-h-[400px] md:min-h-[500px] bg-warm">
      {/* Background image: add your image as public/hero-bg.jpg */}
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(to bottom, rgb(30 21 65 / 0.4), rgb(255 255 255 / 0.1))',
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 [text-shadow:0px_4px_6px_rgba(0,0,0,0.6)]">
          Loo elu, mis tundub päriselt sinu oma.
        </h1>
        <p className="text-xl md:text-2xl text-[var(--warm)] mb-6 font-medium">
          Selgus. Tasakaal. Rohkem rahu.
        </p>
        <p className="text-[var(--warm)] text-sm md:text-base uppercase tracking-wider mb-10">
          Isiklik teraapia Harjumaal
        </p>
        <Link
          href="/vota-uhendust"
          className="inline-block bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary-600 transition-colors shadow-sm"
        >
          Olen valmis alustama
        </Link>
      </div>
    </section>
  )
}
