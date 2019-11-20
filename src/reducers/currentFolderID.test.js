import reducer from 'reducers/currentFolderID';
import * as currentFolderID from 'actions/currentFolderID';

it('should return default state when action not recognized', () => {
  const state = reducer(undefined, { type: 'NOT_RECOGNIZED' });

  expect(state).toEqual(null);
});

it('should return the given initial state when action not recognized', () => {
  const state = reducer('initial state', { type: 'NOT_RECOGNIZED' });

  expect(state).toEqual('initial state');
});

it('should update the current folder ID', () => {
  const state = reducer(undefined, currentFolderID.update('222'));

  expect(state).toEqual('222');
});
