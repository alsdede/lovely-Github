import * as S from './styles'

export type ItemProps = {
  title: string
  description: string
}

const RepositoryItem = ({ title, description }: ItemProps) => (
  <S.Wrapper>
    <S.ItemContent>
      <S.Title>{title}</S.Title>
      <S.Description>repository description</S.Description>
    </S.ItemContent>
  </S.Wrapper>
)

export default RepositoryItem
