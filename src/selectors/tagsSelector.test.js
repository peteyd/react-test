import { tagsSelector, selectElement, selectParentID } from 'selectors/tagsSelector';

describe('tagsSelector', () => {
  it('should return the tags object', () => {
    const state = {
      tags: 'fake tags object',
    };

    const selected = tagsSelector(state);

    expect(selected).toEqual('fake tags object');
  });
});

describe('selectElement', () => {
  const state = {
    tags: {
      112358: 'fake tag object',
    },
  };

  it('should return empty object if the given ID is not found', () => {
    const selected = selectElement(state, 'NOT_FOUND');

    expect(selected).toEqual({});
  });

  it('should return an individual element from the index of tags', () => {
    const selected = selectElement(state, '112358');

    expect(selected).toEqual('fake tag object');
  });
});

describe('selectParentID', () => {
  const state = {
    tags: {
      1111: {
        parent: '1111_PARENT',
      },
      NO_PARENT: {},
    },
  };

  it('should select the parent ID with the child ID given', () => {
    const selected = selectParentID(state, '1111');

    expect(selected).toEqual('1111_PARENT');
  });

  it('should return root if the element with the given child ID has no parent', () => {
    const selected = selectParentID(state, 'NO_PARENT');

    expect(selected).toEqual('root');
  });

  it('should return undefined if no element with the given child ID exists', () => {
    const selected = selectParentID(state, 'NOT_FOUND');

    expect(selected).toBeUndefined();
  });
});
