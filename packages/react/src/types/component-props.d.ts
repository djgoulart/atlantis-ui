import { ComponentProps as CP } from '@stitches/react'
import { ElementType } from 'react'

declare type ComponentProps<T> = CP<T> & {
  as?: ElementType
}

export { ComponentProps }
