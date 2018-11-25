import { combineReducers } from 'redux';
import chapterList from './ChaptersListReducer';
import isPlaying from './PlayerPlayingReducer';
import isEngaged from './PlayerEngagedReducer';

export default combineReducers({
  isEngaged,
  isPlaying,
  //chapterList,
});
