import SearchBar from '@pages/home/components/searchBar/SearchBar';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { db } from '@config/firebaseApp';
import { useFilter } from '@pages/home/context/FilterContext';
import { buildFirestoreQuery } from '@pages/home/service/Filter';
import { onSnapshot } from 'firebase/firestore';
import { Postdata } from '@pages/home/interface/Types';
import usePagination from './hooks/usePagination';
import PostList from '@pages/home/components/postLIst/PostList';
import FixedSearchBar from '@components/fixed-search-bar/FixedSearchBar';

import FilterStudy from './components/filter/FilterStudy';
import FilterPeriod from './components/filter/FilterPeriod';
import useSelect from './hooks/useSelect';
import TechnologyFilter from './components/technologyFilter/TechnologyFilter';
import useSearch from './hooks/useSearch';
import SearchBarToggle from './components/searchBar/SearchBar-Toggle';

const FilterLayout = styled.section`
  width: 1280px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
`;

const FilterControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InlineMessage = styled.p`
  width: 80%;
  font-size: 16px;
  text-align: center;
  margin: 30px auto;
`;

const PostLayout = styled.div`
  display: grid;
  grid-template: repeat(4, 1fr) / repeat(4, 1fr);
  gap: 20px;
  width: 1280px;
  margin: 0 auto;
`;

function Home() {
  const [postData, setPostData] = useState<Postdata[]>([]);

  const ref = useRef<HTMLDivElement | null>(null);

  const { filterState } = useFilter();
  const { studyType, period, technologys } = filterState;

  const { noMore } = usePagination(postData, setPostData, ref, {});

  useEffect(() => {
    const postsQuery = buildFirestoreQuery(db, studyType, period, technologys);
    const unsubscribe = onSnapshot(postsQuery, snapshot => {
      const data = snapshot.docs.map(doc => ({
        ...doc?.data(),
        id: doc?.id,
      }));

      setPostData(data as Postdata[]);
    });

    return () => unsubscribe();
  }, [studyType, period, technologys]);

  const { selectedItem: selectedStudyType, handleSelectChange: selectedStudyHandler } = useSelect();
  const { selectedItem: selectedPeriod, handleSelectChange: selectedPeriodHandler } = useSelect();
  const { searchValue, handleSearchChange, handleSubmit, handleSearchReset } = useSearch(setPostData);

  const [isOn, setIsOn] = useState(true);
  const toggle = () => setIsOn(prev => !prev);
  const value = { isOn, toggle };

  return (
    <>
      <FilterLayout>
        <FilterControl>
          <FilterStudy selectedItem={selectedStudyType} onSelectedItem={selectedStudyHandler} />
          <FilterPeriod selectedItem={selectedPeriod} onSelectedItem={selectedPeriodHandler} />
          <TechnologyFilter />
        </FilterControl>

        <SearchBar
          setPostData={setPostData}
          onSearchChange={handleSearchChange}
          searchValue={searchValue}
          onSubmit={handleSubmit}
          onSearchReset={handleSearchReset}
        />
      </FilterLayout>
      <PostLayout>
        <PostList postData={postData} />
      </PostLayout>
      {noMore && <InlineMessage>더이상 불러올 피드가 없어요</InlineMessage>}
      {isOn && (
        <FixedSearchBar
          renderFilterList={() => (
            <>
              <FilterStudy
                $position="top"
                $colorMode="white"
                selectedItem={selectedStudyType}
                onSelectedItem={selectedStudyHandler}
              />

              <FilterPeriod
                $position="top"
                $colorMode="white"
                selectedItem={selectedPeriod}
                onSelectedItem={selectedPeriodHandler}
              />

              <TechnologyFilter $position="top" $colorMode="white" />
            </>
          )}
          renderSearchBar={() => (
            <SearchBar
              setPostData={setPostData}
              $colorMode="white"
              onSearchChange={handleSearchChange}
              searchValue={searchValue}
              onSubmit={handleSubmit}
              onSearchReset={handleSearchReset}
            />
          )}
        />
      )}

      <SearchBarToggle value={value}>
        <SearchBarToggle.Description />
        <SearchBarToggle.Button />
      </SearchBarToggle>

      <div ref={ref}></div>
    </>
  );
}

export default Home;
