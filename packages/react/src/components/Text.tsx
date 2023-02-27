import { fontSizes } from '@atlantis-ui/tokens'

import { styled } from '../styles'
import { ComponentProps } from '../types/component-props'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray100',

  variants: {
    size: Object.keys(fontSizes).reduce<Record<string, { fontSize: string }>>(
      (acc, cur) => {
        acc[cur] = {
          fontSize: `$${cur}`,
        }
        return acc
      },
      {},
    ),
  },

  defaultVariants: {
    size: 'md',
  },
})

export type TextProps = ComponentProps<typeof Text>
Text.displayName = 'Text'
