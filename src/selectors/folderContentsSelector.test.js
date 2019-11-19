import { folderContentsSelector } from 'selectors/folderContentsSelector';

it('should return the folder contents for all folders that have contents', () => {
  const state = {
    folderContents: 'fake folder contents',
  };

  const selected = folderContentsSelector(state);

  expect(selected).toEqual('fake folder contents');
});
