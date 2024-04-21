import { RiSearchEyeLine } from 'react-icons/ri';
import { IoCloseCircleOutline } from 'react-icons/io5';
import * as S from './SearchBar.style';
import { ChangeEvent, KeyboardEvent, MouseEvent, useState } from 'react';
import { Postdata } from '@pages/home/interface/Types';
import { onSnapshot } from 'firebase/firestore';
import { performSearch } from '@pages/home/service/Search';

interface SearchBarProps {
  setPostData: any;
}

function SearchBar({ setPostData }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState<string>('');

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const searchHandler = () => {
    const postsQuery = performSearch(searchValue);

    const unsubscribe = onSnapshot(postsQuery, snapshot => {
      const data = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPostData(data as Postdata[]);
    });

    return () => unsubscribe();
  };

  const keySearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchHandler();
    }
  };

  const clickSearch = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    searchHandler();
  };

  const resetSearch = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSearchValue('');
  };

  return (
    <S.SearchBar onKeyDown={keySearch}>
      <S.Input placeholder="🔍 원하는 검색어로 스터디를 찾아보세요." onChange={inputHandler} value={searchValue} />
      {searchValue.trim().length > 0 ? (
        <S.Icon onClick={resetSearch}>
          <IoCloseCircleOutline />
        </S.Icon>
      ) : (
        <S.Icon onClick={clickSearch}>
          <RiSearchEyeLine />
        </S.Icon>
      )}
    </S.SearchBar>
  );
}

export default SearchBar;
