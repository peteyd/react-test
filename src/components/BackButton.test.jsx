import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import BackButtonContainer, { BackButton } from 'components/BackButton';
import configureStore from 'redux-mock-store';
import * as currentFolderID from 'actions/currentFolderID';

describe('Rendering the BackButton component', () => {
  it('should return null if parentID does not exist', () => {
    const wrapper = shallow(<BackButton />);

    expect(wrapper.children().length).toEqual(0);
  });

  it('should render the button', () => {
    const wrapper = shallow(<BackButton parentID="parent_id" />);

    expect(wrapper.find('button').length).toEqual(1);
    expect(wrapper.find('button').text()).toEqual('Back');
  });

  it('should call the update callback with the parent id when clicked', () => {
    let updateSpy = sinon.spy();
    const wrapper = shallow(<BackButton parentID="parent_id" updateCurrentFolder={updateSpy} />);

    const button = wrapper.find('button');

    button.simulate('click');

    expect(updateSpy.callCount).toEqual(1);
    expect(updateSpy.firstCall.args).toEqual(['parent_id']);
  });
});

describe('Mapping dispatch props', () => {
  const store = configureStore()({});

  beforeEach(() => {
    store.dispatch = sinon.spy();
  });

  it('should map dispatch to props with the appropriate actions', () => {
    const wrapper = shallow(<BackButtonContainer store={store} />);

    wrapper.find('BackButton').props().updateCurrentFolder('112358');

    expect(store.dispatch.callCount).toEqual(1);
    expect(store.dispatch.firstCall.args).toEqual([currentFolderID.update('112358')]);
  });
});
