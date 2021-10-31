import { Container } from 'components/Container'
import TextField from 'components/TextField'
import { Search } from '@styled-icons/boxicons-regular/Search'
import * as S from './styles'

const Home = () => (
  <section>
    <Container>
      <TextField
        name="search"
        placeholder="Search a username"
        type="search"
        icon={<Search />}
      />
    </Container>
  </section>
)

export default Home
