import reducer from 'reducers/selectedTags';
import * as selectedTags from 'actions/selectedTags';

it('should return default state when action not recognized', () => {
  const state = reducer(undefined, { type: 'NOT_RECOGNIZED' });

  expect(state).toEqual({});
});

it('should return the given initial state when action not recognized', () => {
  const state = reducer('initial state', { type: 'NOT_RECOGNIZED' });

  expect(state).toEqual('initial state');
});

it('should initialize the selected tag object with an array of tag IDs', () => {
  const tagIDs = ['111', '222', '333'];
  const state = reducer(undefined, selectedTags.init(tagIDs));

  expect(state).toEqual({
    '111': true,
    '222': true,
    '333': true,
  });
});

it('should toggle an unselected tag to be selected', () => {
  const original = {
    '111': true,
    '333': true,
  };

  const startingState = { ...original };
  const state = reducer(startingState, selectedTags.toggle('222'));

  // Expect the original reference to be unchanged
  expect(startingState).toEqual(original);

  // Expect the returned state to be updated
  expect(state).toEqual({
    '111': true,
    '222': true,
    '333': true,
  });
});

it('should toggle a selected tag to be unselected', () => {
  const original = {
    '111': true,
    '222': true,
    '333': true,
  };

  const startingState = { ...original };
  const state = reducer(startingState, selectedTags.toggle('222'));

  // Expect the original reference to be unchanged
  expect(startingState).toEqual(original);

  // Expect the returned state to be updated
  expect(state).toEqual({
    '111': true,
    '333': true,
  });
});