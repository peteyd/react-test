import { currentFolderIDSelector } from 'selectors/currentFolderIDSelector';

it('should return the current folder id', () => {
  const state = {
    currentFolderID: '112358',
  };

  const selected = currentFolderIDSelector(state);

  expect(selected).toEqual('112358');
});
