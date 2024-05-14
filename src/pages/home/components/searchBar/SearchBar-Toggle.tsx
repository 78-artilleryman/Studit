import * as S from './SearchBar-Toggle.style';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface SearchBarToggleContextProps {
  isOn: boolean;
  toggle: () => void;
}

interface SearchBarToggleContextValues extends PropsWithChildren {
  value: SearchBarToggleContextProps;
}

const SearchBarToggleContext = createContext<SearchBarToggleContextProps>({
  isOn: true,
  toggle: () => {},
});

export default function SearchBarToggle(props: SearchBarToggleContextValues) {
  const className = props.value.isOn ? 'open' : 'closed';

  return (
    <SearchBarToggleContext.Provider value={props.value}>
      <S.ToggleLayout className={className} onClick={props.value.toggle}>
        <S.ToggleRelative>{props.children}</S.ToggleRelative>
      </S.ToggleLayout>
    </SearchBarToggleContext.Provider>
  );
}

function useSearchBarToggle() {
  const context = useContext(SearchBarToggleContext);
  if (!context) throw new Error('SearchBarToggle Context에서 사용해주세요.');
  return context;
}

function Button() {
  const context = useSearchBarToggle();
  return <S.Button type="button"></S.Button>;
}

function Description() {
  const context = useSearchBarToggle();
  const description = context.isOn ? '검색바 활성화' : '검색바 비활성화';
  return <S.Description>{description}</S.Description>;
}

SearchBarToggle.Button = Button;
SearchBarToggle.Description = Description;
