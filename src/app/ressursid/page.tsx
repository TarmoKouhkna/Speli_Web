import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Ressursid ja tööriistad | Speli Kõuhkna',
  description: 'Teadmised ja toetus, et elu tunduks hallitavam.',
}

export default function RessursidPage() {
  return (
    <article className="py-16 md:py-24 bg-cream">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="relative w-full aspect-[4/3] mb-8 rounded-xl overflow-hidden">
          <Image
            src="/ressursid.jpg"
            alt="Ressursid ja tööriistad"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
            priority
          />
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-sage-800 mb-8">
          Ressursid ja tööriistad
        </h1>
        <div className="prose prose-sage max-w-none text-sage-700 space-y-6">
          <p>
            Minu blogis ja ressurssides jagan teadmisi ja praktilisi näpunäiteid, et elu tunduks hallitavam. See on hea koht nii alustamiseks kui ka töö tegemiseks väljaspool teraapia sessioone.
          </p>
          <p>
            Leiad artikleid stressi, ärevuse, ADHD ja enesehoiu kohta ning lihtsad tööriistad igapäevaelu toetamiseks.
          </p>
        </div>
        <div className="mt-12">
          <Link
            href="/blogi"
            className="inline-block bg-sage-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-sage-800 transition-colors"
          >
            Vaata blogi
          </Link>
        </div>
      </div>
    </article>
  )
}
