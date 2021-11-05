import { fireEvent, render, screen } from '@testing-library/react'
import Item from 'components/Item'
import { renderWithTheme } from 'utils/tests/helpers'
import axios from 'axios'
import Home from '.'
const props = {
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Andre Silveira',
  username: 'alsdede'
}
jest.mock('components/Item', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Item" />
  }
}))
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
describe('<Container/>', () => {
  it('should render a Home', () => {
    renderWithTheme(<Home />)
  })
})
