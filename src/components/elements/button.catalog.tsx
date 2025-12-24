import { Catalog } from '@composify/react/renderer'

import { CatalogButton } from './button'
import { useState } from 'react'
import { cn } from '@/lib/utils'

type ButtonContents =
  | { asChild: true; slot: React.ReactNode; text?: never }
  | { asChild?: false; text: string; slot?: never }

interface AsChildCatalogPropertyProps {
  value?: ButtonContents
  onChange: (value: ButtonContents) => void
}

const AsChildCatalogProperty = ({ value, onChange }: AsChildCatalogPropertyProps) => {
  const [selected, setSelected] = useState<boolean>(value?.asChild ?? false)

  return (
    <div>
      <div className="PropertyControl_container--orientation-horizontal">
        <div className="PropertyControl_container PropertyControl_container--orientation-horizontal">
          <div className="PropertyControl_header PropertyControl_header--orientation-horizontal">
            <span className="PropertyControl_label">asChild</span>
          </div>
          <div className="Segment_segment PropertyControl_input">
            <button
              type="button"
              className={cn(
                'Segment_option Segment_option--size-sm',
                selected ? 'Segment_option--active' : '',
              )}
              onClick={() => setSelected(true)}
            >
              Yes
            </button>
            <button
              type="button"
              className={cn(
                'Segment_option Segment_option--size-sm',
                selected ? '' : 'Segment_option--active',
              )}
              onClick={() => setSelected(false)}
            >
              No
            </button>
          </div>
        </div>
      </div>
      {selected ? (
        <div className="PropertyControl_input">
          <div className="PropertyControlNode_container">
            <span
              data-composify-role="droppable"
              data-fullscreen="false"
              data-over="false"
              data-active="false"
              data-dragging="false"
              className="Droppable_droppable"
              onDrop={(event) =>
                onChange({ asChild: true, slot: event.dataTransfer.getData('text/plain') })
              }
            >
              <p className="Text_text PropertyControlNode_placeholder Text_text--size-xs Text_text--color-on-surface-variant">
                Drop here
              </p>
            </span>
          </div>
        </div>
      ) : (
        <div className="PropertyControl_input">
          <input
            className="Input_input"
            type="text"
            value={value?.text || ''}
            onChange={(event) => onChange({ asChild: false, text: event.target.value })}
          />
        </div>
      )}
    </div>
  )
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
      default: {
        asChild: false,
        text: 'Button',
      },
      render: (value, onChange) => {
        return (
          <AsChildCatalogProperty
            value={value as ButtonContents}
            onChange={onChange as (value: ButtonContents) => void}
          />
        )
      },
    },
  },
})
