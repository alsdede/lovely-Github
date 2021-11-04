import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container } from 'components/Container'
import TextField from 'components/TextField'
import RepositoryItem from 'components/RepositoryItem'
import { Search } from '@styled-icons/boxicons-regular/Search'
import Img from '../../../public/img/icon-512.png'
import * as S from './styles'
import { UsersPropsResponse } from 'templates/Home'
import ProfileCard from 'components/ProfileCard'
import api from 'services/api'

type RepositoriesPropsResponse = {
  name: string
  topics: string[]
  stargazers_count: number
  description: string
}
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
}
const Profile = () => {
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps)
  const [repositories, setRepositories] = useState<RepositoriesProps[]>([])
  const router = useRouter()
  const { id } = router.query

  const loadRepositories = useCallback(async () => {
    const response = await api.get(`/users/${id}/repos?per_page=100`)

    setRepositories(response.data)
  }, [id])

  const loadUserProfile = useCallback(async () => {
    const response = await api.get(`/users/${id}`)
    const { name, avatar_url, login, public_repos }: UsersPropsResponse =
      response.data
    setProfile({
      avatar: avatar_url,
      username: login,
      name,
      repositoriesTotal: public_repos
    })
  }, [id])

  useEffect(() => {
    loadRepositories()
    loadUserProfile()
  }, [loadRepositories, loadUserProfile])

  console.log(repositories)
  console.log(profile)
  return (
    <section>
      <Container>
        <ProfileCard
          img={profile.avatar}
          username={profile.username}
          title={profile.name}
          total={profile.repositoriesTotal}
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
