import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blogi | Speli Kõuhkna',
  description: 'Artiklid stressi, ärevuse, ADHD ja enesehoiu kohta.',
}

const posts = [
  { title: 'Üle planeeritud ja ülekoormatud', date: '29. oktoober 2025', slug: 'ule-planeeritud' },
  { title: 'Täiskasvanu ADHD haldamine: holistlik raamistik', date: '28. oktoober 2025', slug: 'adhd-holistlik' },
  { title: 'Teadlikud armastuse avaldused', date: '30. mai 2023', slug: 'armastuse-avaldused' },
  { title: 'Kasulikke teadmisi ADHD ülekoormusest', date: '30. mai 2023', slug: 'adhd-ulekoormus' },
]

export default function BlogiPage() {
  return (
    <article className="py-16 md:py-24 bg-cream">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-sage-800 mb-4">
          Blogi
        </h1>
        <p className="text-sage-600 mb-12">
          Teadmised ja toetus, et elu tunduks hallitavam.
        </p>
        <ul className="space-y-8">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blogi/${post.slug}`} className="group block">
                <time className="text-sage-600 text-sm">{post.date}</time>
                <h2 className="font-semibold text-sage-800 group-hover:text-sage-700 text-lg mt-1">
                  {post.title}
                </h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
