import { currentFolderContentsSelector } from 'selectors/currentFolderContentsSelector';

// it('should return the current folder from the current folder id', () => {
//   const state = {
//     currentFolderID: '112358',
//     folderContents: {
//       '112358': 'fake folder contents',
//     },
//   };

//   const selected = currentFolderContentsSelector(state);

//   expect(selected).toEqual('fake folder contents');
// });

it('should return a default contents object if current folder ID has no contents', () => {
  const state = {
    currentFolderID: 'NOT_FOUND',
    folderContents: {},
  };

  const selected = currentFolderContentsSelector(state);

  expect(selected).toEqual({ childFolderIDs: [], childTagIDs: [] });
});

it('should return the child folder IDs and child tag IDs sorted by name', () => {
  const originalState = () => {
    return {
      currentFolderID: '112358',
      folderContents: {
        '112358': {
          childFolders: [
            { _id: '111', name: 'MMM' },
            { _id: '222', name: 'AAA' },
            { _id: '333', name: 'ZZZ' },
          ],
          childTags: [
            { _id: '777', name: 'ZZZ' },
            { _id: '888', name: 'MMM' },
            { _id: '999', name: 'AAA' },
          ],
        },
      },
    };
  };

  const state = originalState();

  const selected = currentFolderContentsSelector(state);

  expect(selected).toEqual({
    childFolderIDs: [ '222', '111', '333' ],
    childTagIDs: [ '999', '888', '777'],
  });

  // Make sure the original state has not been mutated
  expect(state).toEqual(originalState());
});