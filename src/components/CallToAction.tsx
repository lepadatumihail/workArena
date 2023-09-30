'use client'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'
import { ArrowArcRight, Plus } from '@phosphor-icons/react'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-12 sm:py-16"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-2xl tracking-tight text-white sm:text-4xl">
            Begin Your International Career Journey Today!
          </h2>
          <p className="text-md mt-4 tracking-tight text-slate-200 sm:text-lg">
            Take charge of your career journey with Work Arena and embark on the
            path to success.
          </p>
          <Button href="/register" color="white" className="mt-10">
            Apply for a job now
            <ArrowArcRight size={22} className="ml-2" />
          </Button>
        </div>
      </Container>
    </section>
  )
}
