import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'

export const metadata: Metadata = {
  title: 'Menas Issam — Data Science & AI Engineering',
  description:
    'Portfolio of Menas Issam — 4th-year Industrial Engineering student (Data Science & AI track) at ENP Alger. Building intelligent systems.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
    </>
  )
}
