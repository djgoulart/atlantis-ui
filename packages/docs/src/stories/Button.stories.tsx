import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@atlantis-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    variant: 'primary',
    size: 'md',
    children: 'Send',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create',
  },
}
export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next step
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}
export const Medium: StoryObj<ButtonProps> = {
  args: {
    size: 'md',
  },
}
export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'lg',
  },
}
