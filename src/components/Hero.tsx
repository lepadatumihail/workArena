'use client'
import Image from 'next/image'

import { Button } from '@/components/Button'
import backgroundImage from '@/images/background-faqs.jpg'
import { motion } from 'framer-motion'
import { AddressBook, Strategy } from '@phosphor-icons/react'

export function Hero() {
  return (
    <section className="relative h-[90vh] overflow-hidden  bg-slate-50 md:h-[100vh]">
      <Image
        className=" absolute left-1/2 top-0 max-w-none -translate-y-20 translate-x-[-40%] opacity-50 "
        src={backgroundImage}
        alt="background"
        width={1558}
        height={946}
        unoptimized
      />

      <div className="relative pb-16 pt-60 text-center lg:pt-72">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="trans mx-auto max-w-sm font-display text-5xl font-medium tracking-tight text-slate-800 sm:max-w-7xl sm:text-7xl"
        >
          <span className="relative whitespace-nowrap text-green-600">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute left-0 top-2/3 h-[0.58em] w-full"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561 .828 27.778 .874 28.61c.07 1.214 .828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461 .108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654 .187 3.263 .157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327 .526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825 .399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627 .674-11.629 .54-42.371 2.494-46.696 2.967-2.359 .259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z"
                fill="transparent"
                stroke="gray"
                strokeWidth="1"
                strokeDasharray="4 1 2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5 }}
                exit={{ pathLength: 0, opacity: 0 }}
              />
              <motion.path
                d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561 .828 27.778 .874 28.61c.07 1.214 .828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461 .108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654 .187 3.263 .157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327 .526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825 .399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627 .674-11.629 .54-42.371 2.494-46.696 2.967-2.359 .259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z"
                stroke="none"
                initial={{ fill: 'rgb(248 250 252)' }}
                animate={{ fill: 'rgb(144 250 144)' }}
                transition={{ duration: 1, delay: 1.5 }} // Delay the fill animation
              />
            </svg>

            <span className="relative">
              {' '}
              Work Arena <br />
            </span>
          </span>{' '}
          International Job Offers
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mx-auto mt-6 max-w-sm text-lg tracking-tight text-slate-500 md:max-w-3xl"
        >
          Begin your global career journey with us. Uncover a range of job
          opportunities with hourly rates from{' '}
          <span className="text-xl font-semibold text-green-600">€13.50</span>{' '}
          to <span className="text-xl font-semibold text-green-600">€25</span>,
          tailored to your position and experience.
        </motion.p>
        <div className="mt-10 flex justify-center gap-x-6">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          >
            <Button href="/register" className="group">
              <Strategy
                size={22}
                className="transition-all group-hover:text-green-400"
              />
              <span className="mx-1 sm:mx-2">Start your career </span>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          >
            <Button href="/request" variant="outline" className="">
              <AddressBook size={22} />
              <span className="mx-1 sm:mx-2">I need employees </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
