import { createSelector } from 'reselect';

export const tagsSelector = createSelector(
  (state) => state.tags,
  (tags) => tags,
);

export const selectElement = (state, tagID) => tagsSelector(state)[tagID] || {};

export const selectParentID = (state, childID) => {
  const element = tagsSelector(state)[childID];

  return element && (element.parent || 'root');
};
