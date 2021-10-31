import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Item from '.'

const props = {
  id: '1',
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Andre Silveira',
  username: 'alsdede'
}

describe('<GameItem />', () => {
  it('should render the item', () => {
    renderWithTheme(<Item {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByText('alsdede')).toBeInTheDocument()
  })
})
