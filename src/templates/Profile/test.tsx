import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Profile, { ProfileProps } from '.'
import RepositoriesMock from './mock'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

const props: ProfileProps = {
  id: '1',
  username: 'alsdede',
  name: 'Andre silveira',
  avatar: 'https://source.unsplash.com/user/willianjusten/151x70',
  repositoriesTotal: 30,
  repositories: RepositoriesMock
}
jest.mock('components/ProfileCard', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Profile Card" />
  }
}))
jest.mock('components/RepositoryItem', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Repository Item" />
  }
}))
describe('<Container/>', () => {
  it('should render the template with components', () => {
    const { container } = renderWithTheme(<Profile {...props} />)

    expect(screen.getByTestId('Profile Card')).toBeInTheDocument()
    expect(screen.getAllByTestId('Repository Item')).toHaveLength(8)
  })

  it('should render the home link', () => {
    const { container } = renderWithTheme(<Profile {...props} />)

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
  })
})
