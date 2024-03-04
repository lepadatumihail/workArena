'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { Container } from '@/components/Container'
import logistics from '@/images/primary/logistics.webp'
import construction from '@/images/primary/construction2.webp'
import picking from '@/images/primary/picking.jpg'
import forklift from '@/images/primary/heftruck.jpg'

const features = [
  {
    title: 'Seasonal Harvest Worker',
    description:
      'Join our agricultural team for the summer and engage in picking fruits and vegetables. Work in the great outdoors and contribute to the farm-to-table process, ensuring fresh produce reaches customers.',
    image: picking,
  },
  {
    title: 'Logistics Warehouse Order Picker',
    description:
      'Be part of our dynamic warehouse team, where you will pick and prepare orders for shipment. This role requires attention to detail and the ability to work efficiently in a fast-paced environment.',
    image: logistics,
  },
  {
    title: 'Forklift Operator',
    description:
      'Operate forklifts to move pallets and large shipments within the warehouse. This role is crucial for maintaining inventory organization and assisting with loading and unloading delivery trucks.',
    image: forklift,
  },
  {
    title: 'Construction Site',
    description:
      'Join our team of painters, carpenters, welders, plasterers, masons, and cleanup crews on house building projects and outdoor construction sites. Assist in site prep, material handling, and tool operation, gaining hands-on experience across various construction disciplines.',
    image: construction,
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
      className="relative overflow-hidden   pb-28 pt-20 sm:py-20"
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
          <h2 className="font-display text-3xl tracking-tight  sm:text-4xl md:text-6xl">
            Global career opportunities awaits
          </h2>
          <p className="mt-4 text-lg tracking-tight text-gray-500">
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
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:py-5',
                        selectedIndex === featureIndex
                          ? 'bg-slate-700'
                          : 'hover:bg-gray-100',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg ui-not-focus-visible:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-green-400'
                              : '',
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
                            : 'text-gray-500',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels aria-label="Tab Panels" className="lg:col-span-7">
                {features.map((feature, index) => (
                  <Tab.Panel key={feature.title} unmount={true}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }} // Initial animation values
                      animate={{ opacity: 1, y: 0 }} // Animation values when tab is selected
                      exit={{ opacity: 0, y: -20 }} // Animation values when tab is deselected
                      transition={{ duration: 0.5 }} // Animation duration
                      className="mt-2 cursor-pointer" // Adjust this spacing as needed
                    >
                      <div className="relative sm:px-6 lg:hidden">
                        <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                        <p className="relative mx-auto max-w-2xl text-base  sm:text-center">
                          {feature.description}
                        </p>
                      </div>
                      <div className="relative z-50 mt-10 overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-gray-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                        <Image
                          className="max-h-[650px] w-[28rem] object-cover sm:w-full"
                          src={feature.image}
                          alt=""
                          priority={true}
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
