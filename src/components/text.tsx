import type { FC } from 'react'

type Props = {
  textAlign: 'left' | 'center' | 'right'
  children: string
}

export const Text: FC<Props> = ({ textAlign, children }) => <p style={{ textAlign }}>{children}</p>
