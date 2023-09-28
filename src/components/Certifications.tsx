import clsx from 'clsx'

import { Container } from '@/components/Container'

function SwirlyDoodle(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 281 40"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
      />
    </svg>
  )
}

function CheckIcon({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        'h-6 w-6 flex-none fill-current stroke-current',
        className,
      )}
      {...props}
    >
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        strokeWidth={0}
      />
      <circle
        cx={12}
        cy={12}
        r={8.25}
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  description,
  href,
  features,
  featured = false,
}: {
  name: string
  description: string
  href: string
  features: Array<string>
  featured?: boolean
}) {
  return (
    <section
      className={clsx(
        'flex flex-col rounded-3xl px-6 sm:px-8',
        featured ? 'order-first bg-blue-600/50 py-8 lg:order-none' : 'lg:py-8',
      )}
    >
      <p className="order-first font-display text-xl   tracking-tight text-white sm:text-2xl">
        {name}
      </p>
      <ul
        role="list"
        className={clsx(
          'order-last mt-10 flex flex-col gap-y-3 text-sm',
          featured ? 'text-white' : 'text-slate-200',
        )}
      >
        {features.map((feature, index) => (
          <li key={feature + index} className="flex">
            <CheckIcon className={featured ? 'text-white' : 'text-slate-400'} />
            <span className="ml-4">{feature}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function Certifications() {
  return (
    <section
      id="certifications"
      aria-label="Pricing"
      className="bg-slate-900 py-20 sm:py-32"
    >
      <Container>
        <div className="md:text-center">
          <h2 className="font-display text-4xl tracking-tight text-white sm:text-5xl">
            <span className="relative whitespace-nowrap">
              <SwirlyDoodle className="absolute left-0 top-1/2 h-[1em] w-full fill-blue-400" />
              <span className="relative">Work Arena's </span>
            </span>{' '}
            <span className="text-blue-400">Certifications</span>
          </h2>
          <p className="mt-4 text-xl text-slate-400">
            We help bussinesses to fulfill their missing jobs.
          </p>
        </div>
        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-2 xl:mx-0 xl:gap-x-8">
          <Plan
            name="Dutch association of temporary employment agencies"
            description="Good for anyone who is self-employed and just getting started."
            href="/register"
            features={[
              'Work Arena is a member of Algemene Bond Uitzendondernemingen (ABU), which represents the interests of temporary employment agencies in the Netherlands. Moreover, PRO HRM holds NEN-4400-1 certification, a national standard that sets requirements for Dutch payroll companies to ensure compliance with tax and social premium payments, and authorization to work in the Netherlands. This standard helps to minimize the risk of fines from the Tax Office and other government agencies for clients. ',

              'Work Arena also holds the SNA hallmark, indicating that it meets the requirements of the SNA scheme. The SNA standard is designed for Dutch and foreign companies in the Netherlands that provide labor and/or hire work. This hallmark helps to limit the risks of hirers of labor and principals of work.',

              'In addition, Work Arena has been awarded the SNA Quality mark and VRO Certificate. The VRO audits Work Arena twice a year based on the standards of NEN-4400-01, which sets strict quality requirements that a company must meet to protect its clients from fines or additional levies under the Dutch Chain Liability Act.',

              'Work Arena is an Approved Referent Labor Regular and Highly Skilled Migrants, a recognized partner for the IND. Listed in the Public Register of Recognized Referees, this status helps to place highly skilled migrants more quickly.',
            ]}
          />
          <Plan
            featured
            name="Safety and Health Checklist for Temporary Employment Organizations"
            description="Perfect for small / medium sized businesses."
            href="/register"
            features={[
              ' We at Work Arena are proud to hold the VCU certification, which stands for Safety and Health Checklist for Temporary Employment Organizations. It signifies our commitment to providing a safe and healthy working environment for our employees and clients. We work together with them to create a better safety culture.',

              'Our back office staff at Work Arena are all RSa or RPP certified by the NIRPA foundation. This means they are listed in the Register of Payroll Administrators or Register Payroll Professional and have the necessary diplomas. They also earn Continuing Education (PE) points annually to stay up to date with the skills and knowledge required to keep payroll administration running smoothly. All NIRPA registered professionals adhere to the Code of Conduct and Professionalism, which is the industry standard.',

              'To ensure the remittance of payroll tax and social premiums, we use a G-account. A G-account is a blocked account that gives you, the client, the assurance that you are indemnified from your liability for payment of wage tax and social premiums.',
            ]}
          />
        </div>
      </Container>
    </section>
  )
}
