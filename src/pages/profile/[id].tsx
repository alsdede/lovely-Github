import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'

//template
import Profile from 'templates/Profile'

//Props
import { ProfileProps } from 'templates/Profile'
import { UsersPropsResponse } from 'templates/Home'

//Service
import api from 'services/api'
const Index = (props: ProfileProps) => {
  const router = useRouter()
  const { id } = router.query

  if (router.isFallback) return null
  return <Profile {...props} />
}

export default Index

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const response = await api.get(`/users/${context.params?.id}`)
  const response2 = await api.get(
    `/users/${context.params?.id}/repos?per_page=100`
  )
  const { name, avatar_url, login, public_repos }: UsersPropsResponse =
    response.data

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
