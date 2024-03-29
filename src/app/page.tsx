import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import EasyApplication from '@/components/NewSection'
import SectionList from '@/components/NewSection2'
import { Certifications } from '@/components/Certifications'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SecondaryFeatures />
        <CallToAction />
        <SectionList />
        <PrimaryFeatures />
        <EasyApplication />
        {/* <Testimonials /> */}
        <Certifications />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
