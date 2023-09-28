//@ts-nocheck
'use client'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { ScrollReveal, useScrollInView } from '@/config/useScroll'

export function Container({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return <div>{children}</div>
}
