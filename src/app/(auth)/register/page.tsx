import Link from 'next/link'

import { Button } from '@/components/Button'
import { Label, SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import { type Metadata } from 'next'
import { useId } from 'react'

export const metadata: Metadata = {
  title: 'Start your carreer with Work Arena.',
  description: 'Apply for your dream job today!',
}

export default function Register() {
  return (
    <SlimLayout>
      <div className="flex flex-row items-center gap-4">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
        <h2 className=" text-lg font-semibold text-gray-800  md:text-xl">
          Apply for a job with Work Arena
        </h2>
      </div>
      <p className="text-md mt-6 text-gray-600">
        Tell us your requirements, and let us find the perfect fit for your
        skills and talent.
      </p>
      {/* <p className="mt-2 text-sm text-gray-700">
        Already registered?{' '}
        <Link
          href="/login"
          className="font-medium text-green-600 hover:underline"
        >
          Sign in
        </Link>{' '}
        to your account.
      </p> */}

      <form
        action="https://getform.io/f/606a2996-49cd-456e-9315-cecf391726ad"
        method="POST"
        className="mt-10 grid h-full grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2"
      >
        <TextField
          label="First name"
          name="first_name"
          type="text"
          autoComplete="given-name"
          placeholder="Jon"
          required
        />
        <TextField
          label="Last name"
          name="last_name"
          placeholder="Doe"
          type="text"
          autoComplete="family-name"
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
        <TextField
          className="col-span-full"
          label="Phone number"
          name="phone"
          type="tel"
          placeholder="+31 323 323 11"
          autoComplete="tel"
          required
        />

        <div className="col-span-full">
          <Label id={useId()}>
            Choose a date and time when we should contact you back
          </Label>
          <input
            id={useId()}
            type="datetime-local"
            autoComplete="bday"
            className="block w-full appearance-none rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-green-500 focus:bg-white focus:outline-none focus:ring-green-500 sm:text-sm
          "
            name="appointment_date"
            aria-label="date-time"
          />
        </div>

        <SelectField
          className="col-span-full"
          label="What job would you prefer?"
          name="job_preference"
        >
          <option>Barista</option>
          <option>Construction</option>
          <option>Logistics</option>
          <option>Any</option>
        </SelectField>
        <TextField
          className="col-span-full"
          label="Every person is unique and we wil give you the best options possible. Please list any preferences below (optional)"
          name="extra"
          type="text"
          placeholder="Part-time only because..."
        />
        <div className="col-span-full self-center pb-6">
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              Sign up <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </SlimLayout>
  )
}
