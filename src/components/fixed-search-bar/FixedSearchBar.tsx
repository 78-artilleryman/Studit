import * as S from './FixedSearchBar.style';

interface FixedSearchBarProps {
  renderSearchBar: () => JSX.Element;
  renderFilterList: () => JSX.Element;
}

export default function FixedSearchBar(props: FixedSearchBarProps) {
  return (
    <S.FixedSearchBar>
      <S.FilterList>{props.renderFilterList()}</S.FilterList>
      {props.renderSearchBar()}
    </S.FixedSearchBar>
  );
}
