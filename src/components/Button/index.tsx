import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large' | 'fullWidth'
} & ButtonTypes

const Button = ({ children, size = 'medium', ...props }: ButtonProps) => (
  <S.Wrapper size={size} {...props}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
