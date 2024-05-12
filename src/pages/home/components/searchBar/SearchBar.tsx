import { RiSearchEyeLine } from 'react-icons/ri';
import { IoCloseCircleOutline } from 'react-icons/io5';
import * as S from './SearchBar.style';
import { ChangeEvent, FormEvent } from 'react';

interface SearchBarProps {
  setPostData: any;
  $colorMode?: 'black' | 'white';
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onSearchReset: () => void;
}

function SearchBar({ $colorMode = 'black', onSearchReset, onSearchChange, onSubmit, searchValue }: SearchBarProps) {
  return (
    <S.SearchBar onSubmit={onSubmit} $colorMode={$colorMode}>
      <S.Input
        placeholder="🔍 원하는 검색어로 스터디를 찾아보세요."
        onChange={onSearchChange}
        value={searchValue}
        $colorMode={$colorMode}
      />
      {searchValue.trim().length > 0 ? (
        <S.Icon onClick={onSearchReset} type="button">
          <IoCloseCircleOutline />
        </S.Icon>
      ) : (
        <S.Icon>
          <RiSearchEyeLine />
        </S.Icon>
      )}
    </S.SearchBar>
  );
}

export default SearchBar;
