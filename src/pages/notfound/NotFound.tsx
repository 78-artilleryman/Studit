import * as S from './NotFound.style';
function PageNotFound() {
  return (
    <S.Section>
      <S.Wrapper>
        <S.DescriptionWrapper>
          <S.Description>
            <strong>앗, 여기는 아무 것도 없어요!</strong>
            <br />
            정확한 주소를 입력하셨는지 확인하고, 다른 곳을 찾아보세요! 🙂
          </S.Description>
          <S.LinkTo to="/">스터디 보러가기</S.LinkTo>
        </S.DescriptionWrapper>
        <S.ImageContent>404</S.ImageContent>
      </S.Wrapper>
    </S.Section>
  );
}

export default PageNotFound;
