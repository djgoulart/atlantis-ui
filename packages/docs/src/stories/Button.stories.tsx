import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@atlantis-ui/react'

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'Click me!',
    size: 'small',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
}
export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
