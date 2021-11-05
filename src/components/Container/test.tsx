import theme from '../../styles/theme'
import { renderWithTheme } from '../../utils/tests/helpers'
import { Container } from '.'

describe('<Container/>', () => {
  it('should render a container', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Github</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 108rem;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10rem;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div
        class="c0"
      >
        <span>
          Github
        </span>
      </div>
    `)
  })
})
