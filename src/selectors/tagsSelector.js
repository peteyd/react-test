import { createSelector } from 'reselect';

export const tagsSelector = createSelector(
  (state) => state.tags,
  (tags) => tags,
);

export const selectElement = (state, tagID) => tagsSelector(state)[tagID] || {};
