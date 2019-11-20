import { combineReducers } from 'redux';
import tags from 'reducers/tags';
import currentFolderID from 'reducers/currentFolderID';
import selectedTags from 'reducers/selectedTags';
import folderContents from 'reducers/folderContents';

export default combineReducers({
  tags,
  folderContents,
  currentFolderID,
  selectedTags,
});
