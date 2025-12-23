import { Catalog } from '@composify/react/renderer'

import { CatalogButton, type ButtonContents } from './button'

interface AsChildCatalogPropertyProps {
  value?: ButtonContents
  onChange: (value: ButtonContents) => void
}

const AsChildCatalogProperty = ({ value, onChange }: AsChildCatalogPropertyProps) => {
  console.log(value, onChange)
  return 123
}

Catalog.register('Button', {
  component: CatalogButton,
  category: 'Elements',
  props: {
    variant: {
      label: 'Variant',
      type: 'select',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Destructive', value: 'destructive' },
        { label: 'Outline', value: 'outline' },
      ],
      default: 'default',
    },
    size: {
      label: 'Size',
      type: 'select',
      options: [
        { label: 'Small', value: 'sm' },
        { label: 'Medium', value: 'md' },
        { label: 'Large', value: 'lg' },
        { label: 'Icon', value: 'icon' },
      ],
      default: 'md',
    },
    contents: {
      label: 'Contents',
      type: 'custom',
      render: (value, onChange) => {
        return <AsChildCatalogProperty value={value} onChange={onChange} />
      },
    },
  },
})
