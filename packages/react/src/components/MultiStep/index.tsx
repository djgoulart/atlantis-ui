import { ComponentProps } from '../../types/component-props'
import { Container, Label, Steps, Step } from './styles'

type Props = {
  size: number
  currentStep?: number
}

export const MultiStep = ({ size, currentStep = 1 }: Props) => {
  return (
    <Container>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, index) => index + 1).map((step) => {
          return <Step key={step} active={step <= currentStep} />
        })}
      </Steps>
    </Container>
  )
}

export type MultiStepProps = ComponentProps<typeof MultiStep>
