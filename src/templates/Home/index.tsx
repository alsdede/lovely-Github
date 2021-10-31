import { Container } from 'components/Container'
import TextField from 'components/TextField'
import Item from 'components/Item'
import { Search } from '@styled-icons/boxicons-regular/Search'
import Img from '../../../public/img/icon-512.png'
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

      <Item
        img="https://source.unsplash.com/user/willianjusten/151x70"
        username="alsdede"
        title="Andre Silveira"
      />
      <Item
        img="https://source.unsplash.com/user/willianjusten/151x70"
        username="alsdede"
        title="Andre Silveira"
      />
      <Item
        img="https://source.unsplash.com/user/willianjusten/151x70"
        username="alsdede"
        title="Andre Silveira"
      />
    </Container>
  </section>
)

export default Home
