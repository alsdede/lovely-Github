import styled, { css } from 'styled-components'
import BackgroundImage from 'assets/icon-512.png'
export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    margin-top: 10rem;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);

}
  `}
`
