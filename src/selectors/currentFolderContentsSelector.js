import { createSelector } from 'reselect';
import { currentFolderIDSelector } from 'selectors/currentFolderIDSelector';
import { folderContentsSelector } from 'selectors/folderContentsSelector';

export const currentFolderContentsSelector = createSelector(
  folderContentsSelector,
  currentFolderIDSelector,
  (folderContents, currentFolderID) => {
    const defaultContents = {
      childFolders: [],
      childTags: [],
    };

    const contents = folderContents[currentFolderID] || defaultContents;

    const byName = (a, b) => a.name.localeCompare(b.name);

    // copy the arrays to make sure we don't mutate the state when selecting from it
    const sortedChildFolders = [...contents.childFolders].sort(byName);
    const sortedChildTags = [...contents.childTags].sort(byName);

    return {
      childFolderIDs: sortedChildFolders.map(folder => folder._id),
      childTagIDs: sortedChildTags.map(tag => tag._id),
    };
  },
);
