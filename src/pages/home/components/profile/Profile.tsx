import * as S from './Profile.style';

interface ProfileProps {
  username: string;
}

export default function Profile(props: ProfileProps) {
  return (
    <S.Profile>
      <S.ProfileImage></S.ProfileImage>
      <S.ProfileInformation>
        <S.ProfileUsername>{props.username}</S.ProfileUsername>
      </S.ProfileInformation>
    </S.Profile>
  );
}
