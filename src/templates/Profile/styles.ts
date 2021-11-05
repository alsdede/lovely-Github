import styled, { css } from 'styled-components'

export const Header = styled.header`
  font-size: 2.5rem;
  text-decoration: none;
  > span {
    cursor: pointer;
  }
`
export const BackButton = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.white};
  `}
`
