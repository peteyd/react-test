import { selectedTagsSelector, isSelected } from 'selectors/selectedTagsSelector';

describe('selectedTagsSelector', () => {
  it('should return the selected tags', () => {
    const state = {
      selectedTags: 'fake selected tags',
    };

    const selected = selectedTagsSelector(state);

    expect(selected).toEqual('fake selected tags');
  });
});

describe('isSelected', () => {
  const state = {
    selectedTags: {
      112358: true,
      NOT_SELECTED: false,
    },
  };

  it('should return true if the given tagID is selected', () => {
    const selected = isSelected(state, '112358');

    expect(selected).toBe(true);
  });

  it('should return false if the given tagID is flagged as false', () => {
    const selected = isSelected(state, 'NOT_SELECTED');

    expect(selected).toBe(false);
  });

  it('should return false if the given tagID is not in the selected tags object', () => {
    const selected = isSelected(state, 'NOT_FOUND');

    expect(selected).toBe(false);
  });
});
