import { render } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Home from '.'

describe('<Container/>', () => {
  it('should render a container', () => {
    const { container } = renderWithTheme(<Home />)
  })
})
