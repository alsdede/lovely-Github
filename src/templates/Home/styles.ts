import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    margin-top: ${theme.spacings.large};
  `}
`

export const ButtonBox = styled.div`
  margin-left: 2rem;
`

export const ItemBox = styled.div`
  text-decoration: none;
  cursor: pointer;
`
export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    line-height: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      font-size: 8rem;
      line-height: 8rem;
    `};
  `}
`
