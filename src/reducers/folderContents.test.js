import reducer from 'reducers/folderContents';
import * as tags from 'actions/tags';

it('should return default state when action not recognized', () => {
  const state = reducer(undefined, { type: 'NOT_RECOGNIZED' });

  expect(state).toEqual({});
});

it('should return the given initial state when action not recognized', () => {
  const state = reducer('initial state', { type: 'NOT_RECOGNIZED' });

  expect(state).toEqual('initial state');
});

it('should map top level tag and folder IDs as children of the root', () => {
  const folderA = {
    '_id': '5ace4c99bfbcb25277a2e837',
    'name': 'Folder A',
    'isFolder': true,
  };
  const tagA = {
    '_id': '5ace4c9ebfbcb25277a2e838',
    'name': 'Tag A',
  };
  const tagList = [ folderA, tagA ];

  const state = reducer(undefined, tags.init(tagList));

  expect(state).toEqual({
    'root': {
      childFolders: [ folderA._id ],
      childTags: [ tagA._id ],
    },
  });
});

it('should map child tag and folder IDs as children of their parent ID', () => {
  const folderA = {
    '_id': '5ace4c99bfbcb25277a2e837',
    'name': 'Folder A',
    'isFolder': true,
  };
  const folderB = {
    '_id': '5ace4c9ebfbcb25277a2e838',
    'name': 'Folder B',
    'isFolder': true,
  };
  const folderA1 = {
    "_id": "5ace4cd4bfbcb25277a2e83e",
    "name": "Folder A.1",
    "parent": "5ace4c99bfbcb25277a2e837",
    'isFolder': true,
  };
  const tagA1 = {
    "_id": "5ace4cd8bfbcb25277a2e83f",
    "name": "Tag A.1",
    "parent": "5ace4c99bfbcb25277a2e837",
  };

  // Put one child before and one child after folderA to make sure the implementation is order agnostic
  const tagList = [ folderA1, folderA, tagA1, folderB ];

  const state = reducer(undefined, tags.init(tagList));

  expect(state[folderA._id]).toEqual({
    childFolders: [
      folderA1._id,
    ],
    childTags: [
      tagA1._id,
    ],
  });

  expect(state[folderB._id]).toBeUndefined();
});