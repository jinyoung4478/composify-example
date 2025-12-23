import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const bodyVariants = cva('m-0 text-foreground-variant', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    align: 'left',
  },
})

type Props = PropsWithChildren<VariantProps<typeof bodyVariants>> & ComponentPropsWithoutRef<'p'>

export function Body({ size, align, className, ...props }: Props) {
  return <p className={cn(bodyVariants({ size, align, className }))} {...props} />
}
