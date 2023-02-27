import { ElementRef, forwardRef } from 'react'
import { ComponentProps } from '../../types/component-props'
import { TextAreaRoot } from './styles'

export type TextAreaProps = ComponentProps<typeof TextAreaRoot.Input>

export const TextArea = forwardRef<
  ElementRef<typeof TextAreaRoot.Input>,
  TextAreaProps
>(({ prefix, ...props }, ref) => {
  return (
    <TextAreaRoot.Container>
      <TextAreaRoot.Input ref={ref} {...props} />
    </TextAreaRoot.Container>
  )
})

TextArea.displayName = 'TextArea'
