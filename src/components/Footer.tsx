import Link from 'next/link'

const specialties = [
  'Täiskasvanud',
  'Teismelised',
  'Ärevus ja stress',
  'Trauma',
]

export function Footer() {
  return (
    <footer className="bg-sage-800 text-sage-200 py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-center text-xs uppercase tracking-wider text-sage-400 mb-4">Spetsialiseerumised</p>
        <p className="text-center text-sm mb-6">
          {specialties.join(' · ')}
        </p>
        <p className="text-center text-sm leading-relaxed max-w-2xl mx-auto">
          Psühhoteraapia täiskasvanutele ning noortele, ärevuse ja trauma teemadel ja ärevuse toetuseks. Vastuvõtud Harjumaal.
        </p>
        <div className="mt-6 flex justify-center gap-6 text-sm">
          <Link href="/minust" className="hover:text-white transition-colors">Minust</Link>
          <Link href="/vota-uhendust" className="hover:text-white transition-colors">Võta ühendust</Link>
          <Link href="/blogi" className="hover:text-white transition-colors">Blogi</Link>
        </div>
      </div>
    </footer>
  )
}
