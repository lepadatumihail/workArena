import { Container } from './Container'

export default function EasyApplication() {
  return (
    <Container className="mx-0 max-w-none" style={{ padding: 0 }}>
      <div className="bg-white ">
        <div className="relative">
          <div className="mx-auto max-w-6xl">
            <div className="relative z-10  lg:w-full lg:max-w-2xl">
              <svg
                className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="0,0 90,0 50,100 0,100" />
              </svg>

              <div className="relative px-6 py-20 md:py-32 lg:px-8  lg:pr-0">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                  <div className="hidden sm:mb-10 sm:flex">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                      <p>Easy application</p>
                    </div>
                  </div>
                  <h1 className="font-display text-3xl font-medium leading-8  tracking-tight text-gray-900  sm:text-6xl">
                    Work Arena guides your journey
                  </h1>
                  <p className="text-md mt-6 leading-8 text-gray-600 sm:text-lg">
                    Discover a hassle-free job application experience with work
                    arena's expert guidance. Let us lead you through the journey
                    to your next opportunity effortlessly.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="/register"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Apply now <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="aspect-[3/2] w-full  object-cover lg:h-full"
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </Container>
  )
}
