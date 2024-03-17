import { combineReducers } from 'redux';
import postsReducers from './posts/postsReducers';

const rootReducer = combineReducers({
  post: postsReducers,
});

export default rootReducer;
