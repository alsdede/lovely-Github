import * as S from './styles'

export type ItemProps = {
  img: string
  title: string
  username: string
}

const Item = ({ img, title, username }: ItemProps) => (
  <S.Wrapper>
    <S.ItemContent>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>

      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Username>{username}</S.Username>
      </S.Content>
    </S.ItemContent>
  </S.Wrapper>
)

export default Item
