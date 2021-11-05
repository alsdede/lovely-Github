import Link from 'next/link'

import { Container } from 'components/Container'

import RepositoryItem from 'components/RepositoryItem'

import * as S from './styles'

import ProfileCard from 'components/ProfileCard'

export type RepositoriesProps = {
  name: string
  description: string
}
export type ProfileProps = {
  id?: string
  username: string
  name: string
  avatar: string
  repositoriesTotal: number
  repositories: RepositoriesProps[]
}
const Profile = ({
  username,
  name,
  avatar,
  repositoriesTotal,
  repositories
}: ProfileProps) => {
  return (
    <section>
      <Container>
        <S.Header>
          <Link href={'/'} passHref>
            <S.BackButton>
              <div> HOME</div>
            </S.BackButton>
          </Link>
        </S.Header>
        <ProfileCard
          img={avatar}
          username={username}
          title={name}
          total={repositoriesTotal}
        />

        {repositories.map((item, index) => (
          <RepositoryItem
            key={index}
            description={item.description}
            title={item.name}
          />
        ))}
      </Container>
    </section>
  )
}
export default Profile
