import { combineReducers } from 'redux';
import ChaptersListReducer from './ChaptersListReducer';

export default combineReducers({
  chaptersList: ChaptersListReducer,
});
