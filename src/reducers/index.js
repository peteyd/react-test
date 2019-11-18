import { combineReducers } from 'redux';
import tags from 'reducers/tags';
import currentFolderID from 'reducers/currentFolderID';
import selectedTags from 'reducers/selectedTags';

export default combineReducers({
  tags,
  currentFolderID,
  selectedTags,
});