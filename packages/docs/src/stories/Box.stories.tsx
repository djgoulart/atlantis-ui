import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@atlantis-ui/react'

export default {
  title: 'Layout/Box',
  component: Box,

  args: {
    children: (
      <>
        <span>Im inside a box!</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
