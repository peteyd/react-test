import { currentFolderIDSelector } from 'selectors/currentFolderIDSelector';

it('should return the current folder id', () => {
  const state = {
    currentFolderID: '112358',
  };

  const selected = currentFolderIDSelector(state);

  expect(selected).toEqual('112358');
});

it('should return root if no current folder id', () => {
  const selected = currentFolderIDSelector({});

  expect(selected).toEqual('root');
});
