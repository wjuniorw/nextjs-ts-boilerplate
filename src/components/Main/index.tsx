import * as S from './styles'

function Main() {
  return (
    <S.Wrapper>
      <S.Logo src='/favicon.png' alt='imagem Notebook com engrenagens' />
      <S.Title>Boilerplate Nextjs</S.Title>
      <S.Description>
        Boilerplate Nextjs com Typescript e Styled Components
      </S.Description>
      <S.Ilustration src='/favicon.png' />
    </S.Wrapper>
  )
}

export default Main
