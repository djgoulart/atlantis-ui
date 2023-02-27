import { styled } from '../../styles'

const Container = styled('div', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',

  display: 'flex',
  alignItems: 'baseline',

  '&:has(textarea:focus)': {
    borderColor: '$green300',
  },

  '&:has(textarea:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

const Input = styled('textarea', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  backgroundColor: 'transparent',
  border: 0,
  width: '100%',
  minHeight: 80,
  resize: 'vertical',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export const TextAreaRoot = {
  Container,
  Input,
}
