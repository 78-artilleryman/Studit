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
        <S.ProfileDepartment>코드잇 기수</S.ProfileDepartment>
      </S.ProfileInformation>
      <S.ProfileCTA to="/">프로필</S.ProfileCTA>
    </S.Profile>
  );
}
