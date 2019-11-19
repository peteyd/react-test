import React from 'react';
import { connect } from 'react-redux';
import { selectIsFolder } from 'selectors/tagsSelector';
import Folder from 'components/Folder';
import Tag from 'components/Tag';

export const Link = (props) => {
  if (props.isFolder) {
    return <Folder tagID={props.tagID} />;
  }
  else {
    return <Tag tagID={props.tagID} />;
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    isFolder: selectIsFolder(state, ownProps.tagID),
  };
};

export default connect(mapStateToProps)(Link);