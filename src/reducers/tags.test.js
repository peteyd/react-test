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
  name: 'Root Level',
  isFolder: true,
};

it('should add a root folder', () => {
  const state = reducer(undefined, tags.init([]));

  expect(state).toEqual({
    root,
  });
});

it('should index the list of tag objects by id', () => {
  const folderA = {
    _id: '5ace4c99bfbcb25277a2e837',
    name: 'Folder A',
    isFolder: true,
  };
  const tagA = {
    _id: '5ace4c9ebfbcb25277a2e838',
    name: 'Tag A',
  };
  const tagList = [folderA, tagA];

  const state = reducer(undefined, tags.init(tagList));

  expect(state).toEqual({
    root,
    [folderA._id]: folderA,
    [tagA._id]: tagA,
  });
});
