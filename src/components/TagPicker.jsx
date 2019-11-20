import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import * as tagsActions from 'actions/tags';
import * as selectedTagsActions from 'actions/selectedTags';
import CurrentFolder from 'components/CurrentFolder';

export const TagPicker = (props) => {
  const { selectedTags, tags, dispatch } = props;

  useLayoutEffect(() => {
    dispatch(selectedTagsActions.init(selectedTags));
    dispatch(tagsActions.init(tags));
  });

  return <CurrentFolder />;
};

export default connect()(TagPicker);
