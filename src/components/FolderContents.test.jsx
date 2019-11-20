import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import FolderContentsContainer, { FolderContents } from 'components/FolderContents';
import configureStore from 'redux-mock-store';
import * as selectors from 'selectors/currentFolderContentsSelector';

describe('Rendering the contents', () => {
  it('should say the folder is empty if it has no content', () => {
    const noContent = {
      childFolderIDs: [],
      childTagIDs: [],
    };

    const wrapper = shallow(<FolderContents contents={noContent} />);

    expect(wrapper.text()).toEqual('This folder is empty');
  });

  it('should render the correct number of folders and tags with the given ids', () => {
    const contents = {
      childFolderIDs: ['111', '222'],
      childTagIDs: ['333', '444', '555'],
    };

    const wrapper = shallow(<FolderContents contents={contents} />);

    const folders = wrapper.find('Folders').dive().find('Connect(Folder)');
    const tags = wrapper.find('Tags').dive().find('Connect(Tag)');

    expect(folders.map((f) => f.props().folderID)).toEqual(contents.childFolderIDs);
    expect(tags.map((t) => t.props().tagID)).toEqual(contents.childTagIDs);
  });
});

describe('Map state to props', () => {
  let store;

  beforeEach(() => {
    store = configureStore()({});
    selectors.currentFolderContentsSelector = sinon.stub();
  });

  it('uses the correct selector to map to content', () => {
    selectors.currentFolderContentsSelector.returns('fake contents');

    const wrapper = shallow(<FolderContentsContainer store={store} />);

    expect(wrapper.find('FolderContents').props().contents).toEqual('fake contents');
  });
});
