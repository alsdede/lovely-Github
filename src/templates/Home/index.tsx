import { useState, useCallback } from 'react'
import Link from 'next/link'
import { Container } from 'components/Container'
import TextField from 'components/TextField'
import Button from 'components/Button'
import Item from 'components/Item'
import { Search } from '@styled-icons/boxicons-regular/Search'

import * as S from './styles'
import api from 'services/api'

type FieldErrors = {
  [key: string]: string
}

export type UsersPropsResponse = {
  id: number
  avatar_url: string
  login: string
  name: string
  public_repos: number
}
export type UsersProps = {
  id?: number
  avatar: string
  name: string
  username: string
  repos: number
}
const Home = () => {
  const [searchedRepository, setSearchedRepository] = useState<UsersProps>(
    {} as UsersProps
  )
  const [values, setValues] = useState({ search: '' })
  //const [formError, setFormError] = useState({})
  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }
  const handleSearch = useCallback(
    async (event: React.FormEvent) => {
      try {
        event.preventDefault()
        setFieldError({})
        setSearchedRepository({} as UsersProps)
        const response = await api.get(`/users/${values.search}`)
        const {
          id,
          avatar_url,
          login,
          name,
          public_repos
        }: UsersPropsResponse = response.data
        console.log('RESPONSE', response.data)
        setSearchedRepository({
          id,
          avatar: avatar_url,
          username: login,
          name,
          repos: public_repos
        })
      } catch (err) {
        setFieldError({ search: 'user not found' })
      }
    },
    [values.search]
  )

  return (
    <section>
      <Container>
        <S.Title>Github explorer</S.Title>
        <S.Form onSubmit={handleSearch}>
          <TextField
            name="search"
            placeholder="Search a github username"
            type="text"
            icon={<Search />}
            onInputChange={(v) => handleInput('search', v)}
            error={fieldError?.search}
          />
          <S.ButtonBox>
            <Button type="submit" size="medium">
              Search
            </Button>
          </S.ButtonBox>
        </S.Form>
        {searchedRepository.username && (
          <Link href={`/profile/${searchedRepository.username}`} passHref>
            <S.ItemBox>
              <Item
                img={searchedRepository.avatar}
                title={searchedRepository.name}
                username={searchedRepository.username}
              />
            </S.ItemBox>
          </Link>
        )}
      </Container>
    </section>
  )
}

export default Home
