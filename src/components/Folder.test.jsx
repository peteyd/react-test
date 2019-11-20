import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import FolderContainer, { Folder } from 'components/Folder';
import configureStore from 'redux-mock-store';
import * as selectors from 'selectors/tagsSelector';
import * as currentFolderID from 'actions/currentFolderID';

describe('Rendering the Folder component', () => {
  let folder = {
    _id: "112358",
    name: 'Folder 1',
  };

  it('should render the folder link with the given name', () => {
    const wrapper = shallow(<Folder folder={folder} />);
    const folderLink = wrapper.find('.folder-link');

    expect(folderLink.length).toEqual(1);
    expect(folderLink.find('.folder-name').text()).toEqual(folder.name);
  });

  it('should call the update callback with the folder id when clicked', () => {
    let updateSpy = sinon.spy();

    const wrapper = shallow(
      <Folder folder={folder} updateCurrentFolder={updateSpy} />
    );

    const folderLink = wrapper.find('.folder-link');

    folderLink.simulate('click');

    expect(updateSpy.calledOnce).toBe(true);
    expect(updateSpy.firstCall.args).toEqual([folder._id]);
  });
});

describe('Mapping dispatch and state to props', () => {
  const store = configureStore()('fake store');

  beforeEach(() => {
    store.dispatch = sinon.spy();
    selectors.selectElement = sinon.stub();
  });

  it('should map state to props with the correct selectors', () => {
    selectors.selectElement.returns('fake folder object');

    const wrapper = shallow(<FolderContainer store={store} folderID="112358" />);

    expect(wrapper.find('Folder').props().folder).toEqual('fake folder object');
    expect(selectors.selectElement.calledOnce).toBe(true);
    expect(selectors.selectElement.firstCall.args).toEqual(['fake store', '112358']);
  });

  it('should map dispatch to props with the appropriate actions', () => {
    const wrapper = shallow(<FolderContainer store={store} />);

    wrapper.find('Folder').props().updateCurrentFolder('112358');

    expect(store.dispatch.calledOnce).toBe(true);
    expect(store.dispatch.firstCall.args).toEqual([currentFolderID.update('112358')]);
  });
});