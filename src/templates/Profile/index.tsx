import { Container } from 'components/Container'
import { Grid } from 'components/Grid'
import TextField from 'components/TextField'
import RepositoryItem from 'components/RepositoryItem'
import { Search } from '@styled-icons/boxicons-regular/Search'
import Img from '../../../public/img/icon-512.png'
import * as S from './styles'
import ProfileCard from 'components/ProfileCard'

const List = [1, 2, 3, 4, 5, 6]
const Profile = () => (
  <section>
    <Container>
      <ProfileCard
        img="https://source.unsplash.com/user/willianjusten/151x70"
        username="alsdede"
        title="Andre Silveira"
        total="78"
      />
      {List.map((item, index) => (
        <RepositoryItem key={index} username="alsdede" title="Andre Silveira" />
      ))}
    </Container>
  </section>
)

export default Profile
