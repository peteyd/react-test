import { createSelector } from 'reselect';
import { currentFolderIDSelector } from 'selectors/currentFolderIDSelector';
import { tagsSelector } from 'selectors/tagsSelector';
import { folderContentsSelector } from 'selectors/folderContentsSelector';

export const currentFolderSelector = createSelector(
  currentFolderIDSelector,
  tagsSelector,
  (currentFolderID, tags) => {
    return tags[currentFolderID];
  },
);

export const currentFolderContentSelector = createSelector(
  folderContentsSelector,
  currentFolderIDSelector,
  (folderContents, currentFolderID) => {
    return folderContents[currentFolderID] || { childFolders: [], childTags: [] };
  },
);