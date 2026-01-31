import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Võta ühendust | Speli Kõuhkna',
  description: 'Broneeri esimene sessioon või küsi küsimus. Vastan 1–2 tööpäeva jooksul.',
}

export default function VotaUhendustPage() {
  return (
    <article className="py-16 md:py-24 bg-cream">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-sage-800 mb-8">
          Võta ühendust
        </h1>
        <p className="text-sage-700 leading-relaxed mb-8">
          Olen valmis kuulama sinu eesmärke ja küsimusi. Kirjuta mulle e-kiri või helista, vastan tavaliselt 1–2 tööpäeva jooksul.
        </p>
        <div className="space-y-6 text-sage-700">
          <div>
            <p className="font-medium text-sage-800">E-post</p>
            <a href="mailto:spelikouhkna@icloud.com" className="text-sage-600 hover:text-sage-800 underline">
              spelikouhkna@icloud.com
            </a>
          </div>
          <div>
            <p className="font-medium text-sage-800">Telefon</p>
            <a href="tel:+3725181174" className="text-sage-600 hover:text-sage-800 underline">
              +372 518 1174
            </a>
          </div>
          <div>
            <p className="font-medium text-sage-800">Asukoht</p>
            <p>Isiklikud sessioonid Harjumaal. Täpne aadress antakse broneerimisel.</p>
          </div>
        </div>
        <p className="mt-10 text-sm text-sage-600">
          Võrguteel sessioonid toimuvad turvalise videokõne platvormi kaudu kogu Eestis.
        </p>
      </div>
    </article>
  )
}
