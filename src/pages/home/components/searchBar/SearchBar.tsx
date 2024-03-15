import { RiSearchEyeLine } from 'react-icons/ri';
import * as S from './SearchBar.style';

function SearchBar() {
  return (
    <S.SearchBar>
      <S.Input placeholder="🔍 원하는 검색어로 스터디를 찾아보세요." />
      <S.Icon>
        <RiSearchEyeLine />
      </S.Icon>
    </S.SearchBar>
  );
}

export default SearchBar;
