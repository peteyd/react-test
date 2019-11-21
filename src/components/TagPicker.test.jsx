import React, * as react from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import configureStore from 'redux-mock-store';
import TagPickerContainer from 'components/TagPicker';
import * as tagsActions from 'actions/tags';
import * as selectedTagsActions from 'actions/selectedTags';

describe('Initializing the redux store', () => {
  let store;

  beforeAll(() => {
    store = configureStore()({});

    // make sure useLayoutEffect immediately calls our callback
    react.useLayoutEffect = sinon.stub().callsFake((callback) => {
      callback();
    });

    shallow(
      <TagPickerContainer
        store={store}
        selectedTags="fake selected tags"
        tags="fake tags"
      />,
    ).find('TagPicker').dive(); // make sure the TagPicker is mounted
  });

  it('should call useLayoutEffect to intialize the store on mount', () => {
    expect(react.useLayoutEffect.callCount).toEqual(1);
    // no dependencies list means perform the callback only after mount
    expect(react.useLayoutEffect.firstCall.args.length).toEqual(1);
  });

  it('should dispatch both init actions', () => {
    expect(store.getActions()).toEqual([
      selectedTagsActions.init('fake selected tags'),
      tagsActions.init('fake tags'),
    ]);
  });
});
