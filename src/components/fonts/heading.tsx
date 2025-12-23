import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const headingVariants = cva('m-0 text-foreground leading-tight tracking-tight', {
  variants: {
    size: {
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
    },
    weight: {
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    weight: 'bold',
    align: 'left',
  },
})

type Props = PropsWithChildren<
  {
    level: 1 | 2 | 3 | 4 | 5 | 6
  } & VariantProps<typeof headingVariants>
> &
  ComponentPropsWithoutRef<'h1'>

export function Heading({ level, size, weight, align, className, ...props }: Props) {
  const headingTags = {
    1: 'h1',
    2: 'h2',
    3: 'h3',
    4: 'h4',
    5: 'h5',
    6: 'h6',
  } as const

  const HeadingTag = headingTags[level]

  return (
    <HeadingTag className={cn(headingVariants({ size, weight, align, className }))} {...props} />
  )
}
