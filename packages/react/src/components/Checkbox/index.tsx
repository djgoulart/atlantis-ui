import { Check } from 'phosphor-react'
import { ComponentProps } from '../../types/component-props'
import { Container, Indicator } from './styles'

export const Checkbox = () => {
  return (
    <Container>
      <Indicator>
        <Check weight="bold" />
      </Indicator>
    </Container>
  )
}

export type CheckboxProps = ComponentProps<typeof Checkbox>
