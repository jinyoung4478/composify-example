import { Button } from '../ui/button'
import { Renderer, type Node } from '@composify/react/renderer'

type ButtonContents =
  | { asChild: true; slot: Node; text?: never }
  | { asChild?: false; text: string; slot?: never }

type CatalogButtonProps = {
  variant?: 'default' | 'destructive' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  contents: ButtonContents
}

function CatalogButton({ contents, ...props }: CatalogButtonProps) {
  if (contents.asChild) {
    return (
      <Button asChild {...props}>
        <Renderer source={contents.slot} />
      </Button>
    )
  }

  return <Button {...props}>{contents?.text}</Button>
}

export { CatalogButton, type CatalogButtonProps, type ButtonContents }
