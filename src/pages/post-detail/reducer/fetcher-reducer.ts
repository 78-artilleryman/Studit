export interface FetcherState {
  data: any;
  isLoading: boolean;
  hasError: boolean | null;
}

enum FetcherActionType {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

type ActionType = { type: keyof typeof FetcherActionType; data?: any; message?: any };

type HttpReducerMappingType = {
  [key in FetcherActionType]: (state: FetcherState, action: ActionType) => FetcherState;
};

const httpReducerMapping: HttpReducerMappingType = {
  [FetcherActionType.PENDING]: (state: FetcherState) => ({ ...state, isLoading: true }),
  [FetcherActionType.SUCCESS]: (state: FetcherState, action) => ({ ...state, data: action.data, isLoading: false }),
  [FetcherActionType.ERROR]: (state: FetcherState, action) => ({
    ...state,
    isLoading: false,
    hasError: action.message,
  }),
};

export const fetcherActionType = {
  PENDING: FetcherActionType.PENDING,
  SUCCESS: FetcherActionType.SUCCESS,
  ERROR: FetcherActionType.ERROR,
};

export const fetcherReducer = (state: FetcherState, action: ActionType) =>
  httpReducerMapping[action.type](state, action) || state;

export const initialFetcherState = {
  data: null,
  isLoading: true,
  hasError: null,
};
