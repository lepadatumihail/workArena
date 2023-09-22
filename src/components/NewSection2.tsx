import {
  ArrowPathRoundedSquareIcon,
  HomeIcon,
  PresentationChartBarIcon,
} from '@heroicons/react/20/solid'
import { Container } from './Container'

const features = [
  {
    name: 'Assistance',
    description:
      'Our dedicated team will lead you through every step of the process, ensuring a seamless experience.',

    icon: PresentationChartBarIcon,
  },
  {
    name: 'Comfortable Living Quarters',
    description:
      'Discover our selection of beautifully appointed living spaces conveniently located near your workplace.',

    icon: HomeIcon,
  },
  {
    name: 'Efficient Transportation',
    description:
      'Enjoy hassle-free commuting with our reliable transport services, designed to make your daily journey a breeze.',
    icon: ArrowPathRoundedSquareIcon,
  },
]

export default function SectionList() {
  return (
    <Container className="mx-0 max-w-none" style={{ padding: 0 }}>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  Apply faster
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Full process guidance
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We will guide you through the entire process. We also have
                  many nice living quarters close to your work and also provide
                  transport.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                          aria-hidden="true"
                        />
                        <p>{feature.name}</p>
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="flex items-start justify-start md:justify-end lg:order-first">
              <img
                src="https://images.unsplash.com/photo-1635350736475-c8cef4b21906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
                alt="Product screenshot"
                className="w-[28rem] max-w-none rounded-xl object-cover shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
