import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <div className="flex flex-row items-center  justify-center">
            <Logo className=" h-20 w-auto" />
            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
              Work Arena
            </h2>
          </div>
          <nav className="mt-10 text-sm" aria-label="nav">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} WorkArena. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
