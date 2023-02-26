import { styled } from '../styles'
import { ComponentProps } from '../types/component-props'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  border: '1px solid $gray600',
  backgroundColor: '$gray800',
  color: '$white',
})

export type BoxProps = ComponentProps<typeof Box>
