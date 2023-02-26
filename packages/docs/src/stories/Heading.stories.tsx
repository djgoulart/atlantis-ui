import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@atlantis-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    size: 'md',
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
    size: 'lg',
  },
}
