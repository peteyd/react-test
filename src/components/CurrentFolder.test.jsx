import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import CurrentFolderContainer, { CurrentFolder } from 'components/CurrentFolder';
import configureStore from 'redux-mock-store';
import * as selectors from 'selectors/currentFolderSelector';

describe('Rendering the CurrentFolder component', () => {
  it('should render blank if the currentFolder is empty', () => {
    const wrapper = shallow(<CurrentFolder currentFolder={{}} />);

    expect(wrapper.find('.current-folder-name').text()).toEqual('');
    expect(wrapper.find('Connect(BackButton)').props().parentID).toBeUndefined();
    expect(wrapper.find('Connect(FolderContents)').length).toEqual(1);
  });

  it('should render the CurrentFolder', () => {
    const folder = {
      _id: 'folder_id',
      name: 'Folder Name',
      parent: 'parent_id',
    };

    const wrapper = shallow(<CurrentFolder currentFolder={folder} />);

    expect(wrapper.find('.current-folder-name').text()).toEqual('Folder Name');
    expect(wrapper.find('Connect(BackButton)').props().parentID).toEqual('parent_id');
  });
});

describe('Mapping state to props', () => {
  const store = configureStore()('fake store');

  beforeEach(() => {
    selectors.currentFolderSelector = sinon.stub();
  });

  it('should map dispatch to props with the appropriate actions', () => {
    selectors.currentFolderSelector.returns('fake folder object');

    const wrapper = shallow(<CurrentFolderContainer store={store} />);

    expect(wrapper.find('CurrentFolder').props().currentFolder).toEqual('fake folder object');
    expect(selectors.currentFolderSelector.callCount).toEqual(1);
    expect(selectors.currentFolderSelector.firstCall.args).toEqual(['fake store']);
  });
});
