import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    border-bottom: 0.1rem solid ${theme.colors.lightGray};
    ${media.greaterThan('medium')`
      display: flex;

    `}
  `}
`

export const ItemContent = styled.div`
  display: flex;
  width: 100%;
`

export const ImageBox = styled.div`
  ${({ theme }) => css`
    flex-shrink: 0;
    margin-right: 1.2rem;
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
    border: 0.3rem solid ${theme.colors.white};
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
    ${media.greaterThan('medium')`
      margin-right: ${theme.spacings.xsmall};
      width: 16rem;
      height: 16rem;
    `};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    justify-content: center;
  `}
`
export const Header = styled.div``
export const Bottom = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    margin-top: ${theme.spacings.xxsmall};
  `};
`
export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      font-size: 5rem;
      line-height: 5rem;
    `};
  `}
`
export const TagBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.white};
    padding: 0.2rem ${theme.spacings.xxsmall};
    background-color: ${theme.colors.darkGray};
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    margin-right: ${theme.spacings.xxsmall};
  `}
`
export const Tag = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.white};

    & > svg {
      width: 2.2rem;
      height: 100%;
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`
