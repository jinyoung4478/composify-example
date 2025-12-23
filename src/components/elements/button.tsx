import { Button } from '../ui/button'

type ButtonContents =
  | { asChild: true; slot: React.ReactNode; text?: never }
  | { asChild?: false; text: string; slot?: never }

type CatalogButtonProps = {
  variant?: 'default' | 'destructive' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  contents?: ButtonContents
}

function CatalogButton({ contents, ...props }: CatalogButtonProps) {
  if (contents?.asChild) {
    return (
      <Button asChild {...props}>
        {contents?.slot}
      </Button>
    )
  }

  return <Button {...props}>{contents?.text}</Button>
}

export { CatalogButton, type CatalogButtonProps, type ButtonContents }
