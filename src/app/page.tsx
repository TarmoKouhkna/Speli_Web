import Link from 'next/link'
import { Hero } from '@/components/Hero'
import { Intro } from '@/components/Intro'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { CTA } from '@/components/CTA'
import { BlogPreview } from '@/components/BlogPreview'

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <About />
      <Services />
      <CTA />
      <BlogPreview />
    </>
  )
}
