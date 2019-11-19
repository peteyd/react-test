import React from 'react';
import { connect } from 'react-redux';
import { selectTag } from 'selectors/tagsSelector';
import { isSelected } from 'selectors/selectedTagsSelector';
import * as selectedTags from 'actions/selectedTags';

const Tag = (props) => {
  const onChange = () => {
    props.dispatch(selectedTags.toggle(props.tag._id));
  };

  console.log(props);
  return (
    <div className="tag-checkbox">
      <input type="checkbox" name={props.tag._id} onChange={onChange} checked={props.isSelected}/>
      <label htmlFor={props.tag._id}>{props.tag.name}</label>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    tag: selectTag(state, ownProps.tagID),
    isSelected: isSelected(state, ownProps.tagID),
  };
};

export default connect(mapStateToProps)(Tag);