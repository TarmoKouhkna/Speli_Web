import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Minust | Speli Kõuhkna',
  description: 'Tutvu psühholoogilise nõustaja Speli Kõuhkna tausta ja teraapilise lähenemisega.',
}

export default function MinustPage() {
  return (
    <article className="py-16 md:py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="min-w-0 md:order-1 order-2">
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-sage-800 mb-8">
              Minust
            </h1>
            <div className="prose prose-sage max-w-none text-sage-700 space-y-6">
              <p>
                Tere! Mina olen Speli Kõuhkna – psühholoogiline nõustaja, kes töötab täiskasvanute ja noortega, ärevuse, stressi ja trauma teemadel.
              </p>
              <p>
                Minu kliendid on sageli tundlikud, sügavalt mõtlevad ja hoolivad inimesed, kes on pikalt püüdnud ise hakkama saada. Teraapias loome ruumi, kus ei pea enam üksi pingutama.
              </p>
              <p>
                Minu lähenemine on soe, toetav ja mittehindav, toetudes samal ajal tõenduspõhistele meetoditele. Koos leiame viise, mis päriselt sinu elu toetavad.
              </p>
              <p>
                Vastuvõtte teen nii Harjumaal kohapeal kui ka veebis üle Eesti. Kui tunned, et nüüd on õige aeg, oled oodatud ühendust võtma.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full md:w-[380px] shrink-0 md:order-2 order-1 aspect-square max-w-[300px] max-h-[300px] md:max-w-none md:max-h-none mx-auto md:mx-0">
            <Image
              src="/speli.jpeg"
              alt="Speli Kõuhkna"
              width={360}
              height={360}
              className="rounded-full object-cover w-full h-full aspect-square"
              style={{ width: '100%', height: '100%', maxWidth: 'none', maxHeight: 'none' }}
            />
          </div>
        </div>
      </div>
    </article>
  )
}
