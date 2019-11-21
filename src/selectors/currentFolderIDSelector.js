import { createSelector } from 'reselect';

export const currentFolderIDSelector = createSelector(
  (state) => state.currentFolderID,
  (currentFolderID) => currentFolderID,
);
