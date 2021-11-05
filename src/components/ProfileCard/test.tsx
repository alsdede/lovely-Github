import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ProfileCard from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Andre Silveira',
  username: 'alsdede',
  total: 9
}

describe('<ProfileCard />', () => {
  it('should render the ProfileCard', () => {
    renderWithTheme(<ProfileCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    //expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
    //  'src',
    //  props.img
    // )
    expect(screen.getByText('alsdede')).toBeInTheDocument()
  })
})
