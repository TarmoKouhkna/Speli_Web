import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const posts: Record<string, { title: string; date: string; content: string }> = {
  'ule-planeeritud': {
    title: 'Üle planeeritud ja ülekoormatud',
    date: '29. oktoober 2025',
    content: 'Kui kalender on täis ja meeled üle koormatud, võib elu tunduda juhitamatu. Siin on mõned lihtsad sammud: prioriteedi seadmine, „ei“ ütlemine ja puhkeaeg endale. Väike ruum hingata võib muuta palju.',
  },
  'adhd-holistlik': {
    title: 'Täiskasvanu ADHD haldamine: holistlik raamistik',
    date: '28. oktoober 2025',
    content: 'ADHD haldamine täiskasvanuna hõlmab mitte ainult tähelepanu, vaid une, toitumise, liikumise ja emotsioonide tasakaalu. Vaatan holistlikku raamistikku ja praktilisi samme igapäeva toetamiseks.',
  },
  'armastuse-avaldused': {
    title: 'Teadlikud armastuse avaldused',
    date: '30. mai 2023',
    content: 'Väikesed teadlikud teod — enda või lähedaste suhtes — loovad sidet ja tähendust. Jagasin mõned ideed, kuidas igapäevaselt armastust avaldada.',
  },
  'adhd-ulekoormus': {
    title: 'Kasulikke teadmisi ADHD ülekoormusest',
    date: '30. mai 2023',
    content: 'ADHD ülekoormus võib tulla kiiresti: liiga palju stiimuleid, nõudlusi või emotsioone. Siin on märgid, mida jälgida, ja strateegiad, kuidas ennetada või leevendada ülekoormust.',
  },
}

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  if (!post) return { title: 'Postitus ei leitud' }
  return { title: `${post.title} | Speli Kõuhkna` }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = posts[slug]
  if (!post) notFound()

  return (
    <article className="py-16 md:py-24 bg-cream">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <Link href="/blogi" className="text-sage-600 hover:text-sage-800 text-sm mb-6 inline-block">
          ← Tagasi blogisse
        </Link>
        <time className="text-sage-600 text-sm block mb-2">{post.date}</time>
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-sage-800 mb-8">
          {post.title}
        </h1>
        <div className="prose prose-sage max-w-none text-sage-700">
          <p>{post.content}</p>
        </div>
      </div>
    </article>
  )
}
