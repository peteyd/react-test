import reducer from 'reducers/tags';
import * as tags from 'actions/tags';

it('should return default state when action not recognized', () => {
  const state = reducer(undefined, { type: 'NOT_RECOGNIZED' });

  expect(state).toEqual({});
});

it('should return the given initial state when action not recognized', () => {
  const state = reducer('initial state', { type: 'NOT_RECOGNIZED' });

  expect(state).toEqual('initial state');
});

const root = {
  _id: 'root',
  name: 'root',
  isFolder: true,
};

it('should add a root folder', () => {
  const state = reducer(undefined, tags.init([]));

  expect(state).toEqual({
    root,
  });
});

it('should index the list of tag objects by id and add them to the roots children if no parent', () => {
  const folderA = {
    '_id': '5ace4c99bfbcb25277a2e837',
    'name': 'Folder A',
  };
  const folderB = {
    '_id': '5ace4c9ebfbcb25277a2e838',
    'name': 'Folder B',
  };
  const tagList = [ folderA, folderB ];

  const state = reducer(undefined, tags.init(tagList));

  expect(state).toEqual({
    root: { ...root, children: [ folderA._id, folderB._id ] },
    [folderA._id]: folderA,
    [folderB._id]: folderB,
  });
});

it('should add the tags ID to their parents list of children', () => {
  const folderA = {
    '_id': '5ace4c99bfbcb25277a2e837',
    'name': 'Folder A',
  };
  const folderB = {
    '_id': '5ace4c9ebfbcb25277a2e838',
    'name': 'Folder B',
  };
  const folderA1 = {
    "_id": "5ace4cd4bfbcb25277a2e83e",
    "name": "Folder A.1",
    "parent": "5ace4c99bfbcb25277a2e837",
  };
  const folderA2 = {
    "_id": "5ace4cd8bfbcb25277a2e83f",
    "name": "Folder A.2",
    "parent": "5ace4c99bfbcb25277a2e837",
  };

  // Put one child before and one child after folderA to make sure the implementation is order agnostic
  const tagList = [ folderA1, folderA, folderA2, folderB ];

  const state = reducer(undefined, tags.init(tagList));

  expect(state[folderA._id]).toEqual({
    ...folderA,
    children: [
      folderA1._id,
      folderA2._id,
    ]
  });
});