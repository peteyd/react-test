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

    store.dispatch = sinon.spy();

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
    // empty dependencies list means on mount
    expect(react.useLayoutEffect.firstCall.args.length).toEqual(1);
  });

  it('should dispatch both init actions', () => {
    expect(store.dispatch.callCount).toEqual(2);
    expect(store.dispatch.firstCall.args).toEqual([selectedTagsActions.init('fake selected tags')]);
    expect(store.dispatch.secondCall.args).toEqual([tagsActions.init('fake tags')]);
  });
});
