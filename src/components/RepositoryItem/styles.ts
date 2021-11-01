import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    border: 0.1rem solid ${theme.colors.lightGray};
    border-radius: ${theme.border.radius};
    margin-top: ${theme.spacings.small};
    ${media.greaterThan('medium')`
      display: flex;
    `}
  `}
`

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xxsmall};
    ${media.greaterThan('medium')`
      font-size: 2rem;
      line-height: 2rem;
    `};
  `}
`
export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    line-height: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacings.xxsmall};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xsmall};
      line-height: ${theme.font.sizes.small};
    `};
  `}
`
