import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import RepositoryItem from '.'

const props = {
  id: '1',
  title: 'Andre Silveira',
  description: 'repository description'
}

describe('<RepositoryItem />', () => {
  it('should render the item', () => {
    renderWithTheme(<RepositoryItem {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByText('repository description')).toBeInTheDocument()
  })
})
