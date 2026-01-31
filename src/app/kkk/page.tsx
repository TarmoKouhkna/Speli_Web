import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Korduma kippuvad küsimused | Speli Kõuhkna',
  description: 'Vastused sagedasematele küsimustele teraapia, seansside ja broneerimise kohta.',
}

const faqs = [
  {
    q: 'Kuidas teraapiaseanss toimub?',
    a: 'Seanss kestab tavaliselt 50–60 minutit. Kohtume kas Tallinnas kabinetis või veebis videokõne teel. Esimesel korral räägime sinu eesmärkidest ja sellest, kuidas saaksin sind toetada.',
  },
  {
    q: 'Kui kaua teraapia kestab?',
    a: 'See sõltub sinu vajadustest. Mõne jaoks piisab lühemast perioodist, teised eelistavad pikemat koostööd. Arutame seda jooksvalt ja paindlikult.',
  },
  {
    q: 'Kas veebiteraapia on sama tõhus kui kohapealne?',
    a: 'Uuringute põhjal võib veebiteraapia olla sama tõhus kui kontaktkohtumine. Oluline on privaatsus, rahulik keskkond ja toimiv internetiühendus.',
  },
  {
    q: 'Kuidas saan esimese aja broneerida?',
    a: 'Võta ühendust e-posti või telefoni teel lehelt „Võta ühendust“. Vastan tavaliselt 1–2 tööpäeva jooksul.',
  },
  {
    q: 'Kas töötad ka noortega?',
    a: 'Jah, pakun tuge ka teismelistele ärevuse teemadel. Vanemate kaasamine lepitakse kokku individuaalselt.',
  },
]

export default function KKKPage() {
  return (
    <article className="py-16 md:py-24 bg-cream">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-sage-800 mb-4">
          Korduma kippuvad küsimused
        </h1>
        <p className="text-sage-600 mb-12">
          Siit leiad vastused levinumatele küsimustele. Kui miski jääb segaseks, kirjuta julgelt.
        </p>
        <dl className="space-y-10">
          {faqs.map((faq) => (
            <div key={faq.q}>
              <dt className="font-semibold text-sage-800 text-lg mb-2">{faq.q}</dt>
              <dd className="text-sage-700 leading-relaxed">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  )
}
