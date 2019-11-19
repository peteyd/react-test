import { currentFolderSelector } from 'selectors/currentFolderSelector';

it('should return the current folder from the current folder id', () => {
  const state = {
    currentFolderID: '112358',
    tags: {
      '112358': 'current folder',
    },
  };

  const selected = currentFolderSelector(state);

  expect(selected).toEqual('current folder');
});

it('should return empty object if the current folder id is not found', () => {
  const state = {
    currentFolderID: 'NOT_FOUND',
    tags: {}
  };

  const selected = currentFolderSelector(state);

  expect(selected).toEqual({});
});