import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Individuaalne teraapia | Speli Kõuhkna',
  description: 'Individuaalne toetus selguse, lahti pääsemise ja vabastamise saavutamiseks.',
}

export default function IndividuaalneTeraapiaPage() {
  return (
    <article className="py-16 md:py-24 bg-cream">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="relative w-full aspect-[4/3] mb-8 rounded-xl overflow-hidden">
          <Image
            src="/individuaalne-teraapia.jpg"
            alt="Individuaalne teraapia"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
            priority
          />
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-sage-800 mb-8">
          Individuaalne teraapia
        </h1>
        <div className="prose prose-sage max-w-none text-sage-700 space-y-6">
          <p>
            Individuaalne teraapia pakub sulle ühe-ühele toetust, et saavutada selgus, lahti pääseda ja vabastada end sellest, mis sind tagasi hoiab.
          </p>
          <p>
            Koos uurime su mõtteid, tunneteid ja käitumismustreid ning leiame strateegiad, mis sinu elu jaoks töötavad. Töötan soojalt, mitteotsustavalt ja tõenduspõhiselt.
          </p>
          <p>
            Sessioonid toimuvad nii isiklikult Tallinnas kui ka võrguteel. Esimesel sessioonil käsitleme sinu eesmärke ja ootusi ning lepime kokku edasise sammud.
          </p>
        </div>
        <div className="mt-12">
          <Link
            href="/vota-uhendust"
            className="inline-block bg-sage-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-sage-800 transition-colors"
          >
            Võta ühendust
          </Link>
        </div>
      </div>
    </article>
  )
}
