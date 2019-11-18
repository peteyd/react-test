import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as tagsActions from 'actions/tags';
import * as selectedTagsActions from 'actions/selectedTags';
import CurrentFolder from 'components/CurrentFolder';

export const TagPicker = (props) => {
  const { selectedTags, tags, dispatch } = props;

  useEffect(() => {
    dispatch(selectedTagsActions.init(selectedTags));
  }, [selectedTags, dispatch]);

  useEffect(() => {
    dispatch(tagsActions.init(tags));
  }, [tags, dispatch]);

  return <CurrentFolder />
};

export default connect(() => { return {} })(TagPicker);

