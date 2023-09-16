import Image from 'next/image'

import backgroundImage from '@/images/background-auth.jpg'

export function SlimLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative flex min-h-full justify-center md:px-12 lg:px-0 ">
        <div className="md:flex-0 round-xl relative z-10 flex flex-1 flex-col bg-gray-100 px-4 py-10 shadow-2xl sm:justify-center lg:mx-72">
          <main className="mx-auto w-full max-w-md ">{children}</main>
        </div>
        <div className="hidden sm:contents ">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={backgroundImage}
            alt=""
            unoptimized
          />
        </div>
      </div>
    </>
  )
}
