import reducer from 'reducers/tags';
import * as tags from 'actions/tags';
import { ROOT_FOLDER_ID } from 'constants/ids';

it('should return default state when action not recognized', () => {
  const state = reducer(undefined, { type: 'NOT_RECOGNIZED' });

  expect(state).toEqual({});
});

it('should return the given initial state when action not recognized', () => {
  const state = reducer('initial state', { type: 'NOT_RECOGNIZED' });

  expect(state).toEqual('initial state');
});

const root = {
  _id: ROOT_FOLDER_ID,
  name: 'Root Folder',
  isFolder: true,
};

it('should add a root folder', () => {
  const state = reducer(undefined, tags.init([]));

  expect(state).toEqual({
    [ROOT_FOLDER_ID]: root,
  });
});

it('should index the list of tag objects by id', () => {
  const folderA = {
    _id: '5ace4c99bfbcb25277a2e837',
    name: 'Folder A',
    parent: ROOT_FOLDER_ID,
    isFolder: true,
  };
  const tagA = {
    _id: '5ace4c9ebfbcb25277a2e838',
    parent: ROOT_FOLDER_ID,
    name: 'Tag A',
  };
  const tagList = [folderA, tagA];

  const state = reducer(undefined, tags.init(tagList));

  expect(state).toEqual({
    [ROOT_FOLDER_ID]: root,
    [folderA._id]: folderA,
    [tagA._id]: tagA,
  });
});

it('should set parent to root if null or undefined parent', () => {
  const tagA = {
    _id: '5ace4c9ebfbcb25277a2e838',
    name: 'Tag A',
    parent: null,
  };

  const tagB = {
    _id: '5ace4c99bfbcb25277a2e837',
    name: 'Folder A',
  };
  const tagList = [tagA, tagB];

  const state = reducer(undefined, tags.init(tagList));

  expect(state[tagA._id].parent).toEqual(ROOT_FOLDER_ID);
  expect(state[tagB._id].parent).toEqual(ROOT_FOLDER_ID);
  // should not update the original tag
  expect(tagA.parent).toBeNull();
  expect(tagB.parent).toBeUndefined();
});
