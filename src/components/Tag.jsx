import React from 'react';
import { connect } from 'react-redux';
import { selectElement } from 'selectors/tagsSelector';
import { isSelected } from 'selectors/selectedTagsSelector';
import * as selectedTags from 'actions/selectedTags';
import 'components/Tag.scss';

const Tag = (props) => {
  const onChange = () => {
    props.toggleTag(props.tag._id);
  };

  return (
    <div className="tag-checkbox">
      <input type="checkbox" name={props.tag._id} onChange={onChange} checked={props.isSelected}/>
      <label htmlFor={props.tag._id}>{props.tag.name}</label>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    tag: selectElement(state, ownProps.tagID),
    isSelected: isSelected(state, ownProps.tagID),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTag: (tagID) => {
      dispatch(selectedTags.toggle(tagID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tag);