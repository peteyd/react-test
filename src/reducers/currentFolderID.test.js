import reducer from 'reducers/currentFolderID';
import * as currentFolderID from 'actions/currentFolderID';
import { ROOT_FOLDER_ID } from 'constants/ids';

it('should return default state (root) when action not recognized', () => {
  const state = reducer(undefined, { type: 'NOT_RECOGNIZED' });

  expect(state).toEqual(ROOT_FOLDER_ID);
});

it('should return the given initial state when action not recognized', () => {
  const state = reducer('initial state', { type: 'NOT_RECOGNIZED' });

  expect(state).toEqual('initial state');
});

it('should return root when action has no folder id', () => {
  const state = reducer(undefined, currentFolderID.update());

  expect(state).toEqual(ROOT_FOLDER_ID);
});

it('should update the current folder ID', () => {
  const state = reducer(undefined, currentFolderID.update('222'));

  expect(state).toEqual('222');
});
