import Link from 'next/link'

const posts = [
  { title: 'Üle planeeritud ja ülekoormatud', date: '29. oktoober 2025', slug: 'ule-planeeritud' },
  { title: 'Täiskasvanu ADHD haldamine: holistlik raamistik', date: '28. oktoober 2025', slug: 'adhd-holistlik' },
  { title: 'Teadlikud armastuse avaldused', date: '30. mai 2023', slug: 'armastuse-avaldused' },
  { title: 'Kasulikke teadmisi ADHD ülekoormusest', date: '30. mai 2023', slug: 'adhd-ulekoormus' },
]

export function BlogPreview() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-sage-800 mb-12">
          Blogi
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogi/${post.slug}`}
              className="group block p-4 rounded-lg hover:bg-warm transition-colors border border-transparent hover:border-sage-200"
            >
              <time className="text-sage-600 text-sm block mb-2">{post.date}</time>
              <h3 className="font-medium text-sage-800 group-hover:text-sage-700 transition-colors">
                {post.title}
              </h3>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/blogi"
            className="inline-block text-sage-700 font-medium border-b-2 border-sage-500 pb-1 hover:text-sage-800 hover:border-sage-700 transition-colors"
          >
            Kõik postitused
          </Link>
        </div>
      </div>
    </section>
  )
}
