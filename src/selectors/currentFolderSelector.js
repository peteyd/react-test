import { createSelector } from 'reselect';
import { currentFolderIDSelector } from 'selectors/currentFolderIDSelector';
import { tagsSelector } from 'selectors/tagsSelector';

export const currentFolderSelector = createSelector(
  currentFolderIDSelector,
  tagsSelector,
  (currentFolderID, tags) => {
    return tags[currentFolderID] || {};
  },
);