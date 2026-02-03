import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Ärevuse toetus | Speli Kõuhkna',
  description: 'Spetsialiseeritud tugi, et ärevus oleks paremini hallatav ega domineeriks sinu igapäevaelu.',
}

export default function ADHDToetusPage() {
  return (
    <article className="py-16 md:py-24 bg-cream">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="relative w-full aspect-[4/3] mb-8 rounded-xl overflow-hidden">
          <Image
            src="/arevuse_toetus.jpg"
            alt="Ärevuse toetus"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
            priority
          />
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-sage-800 mb-8">
          Ärevuse toetus
        </h1>
        <div className="prose prose-sage max-w-none text-sage-700 space-y-6">
          <p>
            Pakun spetsialiseeritud tuge, et ärevus oleks paremini hallatav ega domineeriks sinu igapäevaelu.
          </p>
          <p>
            Koos leiame praktilised strateegiad ja toetame vaimse tervise tasakaalu, toetudes tõenduspõhistele meetoditele ja kohastades lähenemist sinu vajadustele.
          </p>
        </div>
        <div className="mt-12">
          <Link
            href="/vota-uhendust"
            className="inline-block bg-sage-700 text-white px-6 py-3 rounded-full font-medium hover:bg-sage-800 transition-colors"
          >
            Võta ühendust
          </Link>
        </div>
      </div>
    </article>
  )
}
