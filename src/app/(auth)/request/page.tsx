import Link from 'next/link'

import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Employees Request',
}

export default function Login() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-10 text-3xl font-semibold text-gray-900 sm:mt-14">
        Employee Request Form
      </h2>
      <p className="text-md mt-2 text-gray-700">
        Tell us your requirements, and let us find the perfect fit for your
        team.
      </p>
      <form
        action="https://getform.io/f/606a2996-49cd-456e-9315-cecf391726ad"
        method="POST"
        className="mt-10 grid grid-cols-1 gap-y-8"
      >
        <TextField
          label="Company name"
          placeholder="Worka Arena.."
          name="company_name"
          type="text"
          required
        />
        <TextField
          label="Contact person's full name"
          name="name"
          type="text"
          required
          placeholder="John Doe"
        />

        <TextField
          className="col-span-full"
          label="Phone number"
          name="phone"
          type="tel"
          placeholder="+31 323 323 11"
          autoComplete="tel"
          required
        />
        <TextField
          className="col-span-full"
          label="Email address"
          name="email"
          placeholder="info@workarena.nl"
          type="email"
          autoComplete="email"
          required
        />
        <div>
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              Request <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </SlimLayout>
  )
}
