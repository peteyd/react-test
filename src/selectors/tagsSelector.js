import { createSelector } from 'reselect';

export const tagsSelector = createSelector(
  state => state.tags,
  tags => tags,
);

export const selectTag = (state, tagID) => {
  return tagsSelector(state)[tagID];
};

export const selectIsFolder = (state, tagID) => {
  const tag = selectTag(state, tagID);

  return tag && tag.isFolder;
};

export const selectParentID = (state, tagID) => {
  const tag = selectTag(state, tagID);

  return tag && (tag.parent || 'root');
};