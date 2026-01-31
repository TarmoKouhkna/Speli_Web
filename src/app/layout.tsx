import type { Metadata } from 'next'
import { DM_Sans, Lora } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const lora = Lora({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'Speli Kõuhkna | Psühholoogiline nõustamine Harjumaal',
  description: 'Psühhoteraapia täiskasvanutele ja noortele. Toetus ärevuse, stressi ja trauma korral. Vastuvõtud Harjumaal.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="et" className={`${dmSans.variable} ${lora.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream font-sans antialiased text-sage-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
