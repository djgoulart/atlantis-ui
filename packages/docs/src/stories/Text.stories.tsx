import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@atlantis-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ullam, magnam velit expedita impedit libero, dolorum animi non, sint explicabo voluptate. Sed, nobis quos. Officia harum vitae porro illo beatae.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const Bold: StoryObj<TextProps> = {
  args: {
    as: 'strong',
  },
}
