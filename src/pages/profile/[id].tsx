import { GetServerSidePropsContext } from 'next'

import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

//template
import Profile from 'templates/Profile'

//Props
import { ProfileProps, RepositoriesProps } from 'templates/Profile'
import { UsersPropsResponse } from 'templates/Home'

//Service
import api from 'services/api'
const Index = (props: ProfileProps) => {
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
    const response2 = await api.get(`/users/${id}/repos?per_page=100`)
    const { name, avatar_url, login, public_repos }: UsersPropsResponse =
      response.data
    setProfile({
      avatar: avatar_url,
      username: login,
      name,
      repositoriesTotal: public_repos,
      repositories: response2.data
    })
  }, [id])

  //useEffect(() => {
  // loadRepositories()
  // loadUserProfile()
  // }, [loadRepositories, loadUserProfile])

  console.log(repositories)
  console.log(profile)

  if (router.isFallback) return null
  return <Profile {...props} />
}

export default Index

export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log('context', context)
  console.log('params', context.params)
  const response = await api.get(`/users/${context.params?.id}`)
  const response2 = await api.get(
    `/users/${context.params?.id}/repos?per_page=100`
  )
  const { name, avatar_url, login, public_repos }: UsersPropsResponse =
    response.data

  console.log('response', response.data)
  return {
    props: {
      username: login,
      name,
      avatar: avatar_url,
      repositoriesTotal: public_repos,
      repositories: response2.data
    } // will be passed to the page component as props
  }
}
