import { createSelector } from 'reselect';

export const selectedTagsSelector = createSelector(
  state => state.selectedTags,
  selectedTags => selectedTags,
);

export const isSelected = (state, tagID) => {
  return selectedTagsSelector(state)[tagID];
};