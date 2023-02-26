import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@atlantis-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/djgoulart.png',
    alt: 'Diego Goulart',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const Fallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: 'Diego Goulart',
  },
}
