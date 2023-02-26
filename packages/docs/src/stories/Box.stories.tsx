import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@atlantis-ui/react'

export default {
  title: 'Layout/Box',
  component: Box,

  args: {
    children: (
      <>
        <Text>Im inside a box!</Text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
