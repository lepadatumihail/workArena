'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { Container } from '@/components/Container'
import logistics from '@/images/primary/logistics.webp'
import warehouse from '@/images/primary/warehouse.webp'
import construction from '@/images/primary/construction.webp'
import construction2 from '@/images/primary/construction2.webp'

const features = [
  {
    title: 'Construction Project Management',
    description:
      'Streamline project workflows, from planning to execution, with our tailored construction management solutions.',
    image: construction,
  },
  {
    title: 'Inventory Management',
    description:
      'Efficiently monitor and control your warehouse stock, ensuring items are readily available when needed.',
    image: warehouse,
  },
  {
    title: 'Logistics Optimization',
    description:
      'Enhance your logistics operations for greater efficiency and cost-effectiveness, ensuring goods reach their destination promptly.',
    image: logistics,
  },
  {
    title: 'Tech Solutions for Seamless Operations',
    description:
      'Leverage cutting-edge technology to streamline processes, driving productivity and innovation within your industry.',
    image: construction2,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal',
  )

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-slate-700  pb-28 pt-20 sm:py-20"
    >
      {/* <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%] "
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      /> */}
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-5xl">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Global career opportunities await you
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Embark on an exciting and transformative international career
            journey with our comprehensive range of diverse job opportunities
            spanning various industries and roles.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-12 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6  lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0  sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                      )}
                    >
                      <h3>
                        <Tab
                          aria-label={feature.title}
                          className={clsx(
                            'font-display text-lg ui-not-focus-visible:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={true}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }} // Initial animation values
                      animate={{ opacity: 1, y: 0 }} // Animation values when tab is selected
                      exit={{ opacity: 0, y: -20 }} // Animation values when tab is deselected
                      transition={{ duration: 0.5 }} // Animation duration
                      className="mt-2" // Adjust this spacing as needed
                      key={feature.title}
                    >
                      <div className="relative sm:px-6 lg:hidden">
                        <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                        <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                          {feature.description}
                        </p>
                      </div>
                      <div className="relative z-50 mt-10 overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                        <Image
                          className="max-h-[600px] w-[28rem] object-cover sm:w-full"
                          src={feature.image}
                          alt=""
                          priority
                          sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 25rem"
                        />
                      </div>
                    </motion.div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
