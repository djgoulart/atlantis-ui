import { ElementRef, forwardRef } from 'react'
import { ComponentProps } from '../../types/component-props'
import { TextInputRoot } from './styles'

export type TextInputProps = ComponentProps<typeof TextInputRoot.Input> & {
  prefix?: string
}

export const TextInput = forwardRef<
  ElementRef<typeof TextInputRoot.Input>,
  TextInputProps
>(({ prefix, ...props }, ref) => {
  return (
    <TextInputRoot.Container>
      {!!prefix && <TextInputRoot.Prefix>{prefix}</TextInputRoot.Prefix>}

      <TextInputRoot.Input ref={ref} {...props} />
    </TextInputRoot.Container>
  )
})

TextInput.displayName = 'TextInput'
