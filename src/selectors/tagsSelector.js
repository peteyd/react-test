import { createSelector } from 'reselect';

export const tagsSelector = createSelector(
  state => state.tags,
  tags => tags,
);