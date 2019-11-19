import { createSelector } from 'reselect';

export const folderContentsSelector = createSelector(
  state => state.folderContents,
  folderContents => folderContents,
);