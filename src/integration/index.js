/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'reducers/index';
import TagPicker from 'components/TagPicker';

const store = createStore(rootReducer);

export const app = null;

export const initIntegration = ({ tags, selectedTags }) => mount(
  <Provider store={store}>
    <TagPicker tags={tags} selectedTags={selectedTags} />
  </Provider>,
);
