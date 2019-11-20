import { tagsSelector, selectElement } from 'selectors/tagsSelector';

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
