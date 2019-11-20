import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import TagContainer, { Tag } from 'components/Tag';
import configureStore from 'redux-mock-store';
import * as tagsSelector from 'selectors/tagsSelector';
import * as selectedTagsSelector from 'selectors/selectedTagsSelector';
import * as selectedTags from 'actions/selectedTags';

describe('Rendering the Tag component', () => {
  let tag = {
    _id: "112358",
    name: 'Tag 1',
  };

  it('should render the tag with the checkbox and given name', () => {
    const wrapper = shallow(<Tag tag={tag} />);
    const tagWrapper = wrapper.find('.tag-checkbox');

    expect(tagWrapper.length).toEqual(1);
    expect(tagWrapper.find('input[type="checkbox"]').length).toEqual(1);
    expect(tagWrapper.find('label').text()).toEqual(tag.name);
  });

  it('should call the toggle callback with the tag id when clicked', () => {
    let toggleSpy = sinon.spy();

    const wrapper = shallow(<Tag tag={tag} toggleTag={toggleSpy} />);
    const tagCheckbox = wrapper.find('input[type="checkbox"]');

    tagCheckbox.simulate('change');

    expect(toggleSpy.callCount).toEqual(1);
    expect(toggleSpy.firstCall.args).toEqual([tag._id]);
  });
});

describe('Mapping dispatch and state to props', () => {
  const store = configureStore()('fake store');

  beforeEach(() => {
    store.dispatch = sinon.spy();
    tagsSelector.selectElement = sinon.stub();
    selectedTagsSelector.isSelected = sinon.stub();
  });

  describe('Map state to props', () => {
    let wrapper;

    beforeEach(() => {
      tagsSelector.selectElement.returns('fake tag object');
      selectedTagsSelector.isSelected.returns(true);

      wrapper = shallow(<TagContainer store={store} tagID="112358" />);
    });

    it('should map the selectors return value to props', () => {
      expect(wrapper.find('Tag').props().tag).toEqual('fake tag object');
      expect(wrapper.find('Tag').props().isSelected).toBe(true);
    });

    it('should call the selectElement selector correctly', () => {
      expect(tagsSelector.selectElement.callCount).toEqual(1);
      expect(tagsSelector.selectElement.firstCall.args).toEqual(['fake store', '112358']);
    });

    it('should call the isSelected selector correctly', () => {
      expect(selectedTagsSelector.isSelected.callCount).toEqual(1);
      expect(selectedTagsSelector.isSelected.firstCall.args).toEqual(['fake store', '112358']);
    });
  });

  describe('Map dispatch to props', () => {
    it('should map dispatch to props with the appropriate actions', () => {
      const wrapper = shallow(<TagContainer store={store} />);

      wrapper.find('Tag').props().toggleTag('112358');

      expect(store.dispatch.callCount).toEqual(1);
      expect(store.dispatch.firstCall.args).toEqual([selectedTags.toggle('112358')]);
    });
  });
});