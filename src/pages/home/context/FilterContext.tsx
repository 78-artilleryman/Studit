import React, { Dispatch, ReactNode, SetStateAction, createContext, useCallback, useContext, useState } from 'react';

interface Props {
  children: ReactNode;
}

interface FilterStateType {
  studyType: string;
  period: string;
  technologys: string[];
}

interface FilterContextType {
  filterState: FilterStateType;
  setFilterState: Dispatch<SetStateAction<FilterStateType>>;
}

const initialFiterState: FilterStateType = {
  studyType: '전체',
  period: '전체',
  technologys: [],
};

const FilterContext = createContext<FilterContextType>({
  filterState: initialFiterState,
  setFilterState: () => {},
});

const FilterProvider = ({ children }: Props) => {
  const [filterState, setFilterState] = useState<FilterStateType>(initialFiterState);

  return <FilterContext.Provider value={{ filterState, setFilterState }}>{children}</FilterContext.Provider>;
};

const useFilter = () => {
  const context = useContext(FilterContext);
  const { filterState, setFilterState } = context;

  const onChangeFilter = useCallback(
    (id: string, selected: string) => {
      setFilterState(data => ({
        ...data,
        [id]: selected,
      }));
    },
    [setFilterState],
  );

  const onChagTechnologysFilter = useCallback(
    (technology: string) => {
      setFilterState(data => {
        const isAlreadyAdded = data.technologys.includes(technology);
        if (isAlreadyAdded) {
          // 기존 값이라면 제외하고 반환
          const filteredTechnologys = data.technologys.filter(item => item !== technology);
          return {
            ...data,
            technologys: filteredTechnologys,
          };
        } else {
          // 기존 값이 아니라면 추가
          return {
            ...data,
            technologys: [...data.technologys, technology],
          };
        }
      });
    },
    [setFilterState],
  );

  return { filterState, onChangeFilter, onChagTechnologysFilter };
};

export { FilterProvider, useFilter };
