import { BookBookmark } from '@styled-icons/boxicons-regular/BookBookmark'
import * as S from './styles'

export type ItemProps = {
  img: string
  title: string
  username: string
  total: number
}

const ProfileCard = ({ img, title, username, total }: ItemProps) => {
  return (
    <S.Wrapper>
      <S.ItemContent>
        <S.ImageBox>
          <img src={img} alt={title} />
        </S.ImageBox>

        <S.Content>
          <S.Header>
            <S.Title>{title}</S.Title>
          </S.Header>
          <S.Bottom>
            <S.TagBox>
              <S.Tag>{username}</S.Tag>
            </S.TagBox>
            <S.TagBox>
              <S.Tag>
                <BookBookmark />
                {total} repositories
              </S.Tag>
            </S.TagBox>
          </S.Bottom>
        </S.Content>
      </S.ItemContent>
    </S.Wrapper>
  )
}

export default ProfileCard
