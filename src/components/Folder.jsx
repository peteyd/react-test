import React from 'react';
import { connect } from 'react-redux';
import { selectTag } from 'selectors/tagsSelector';
import * as currentFolderID from 'actions/currentFolderID';

const Folder = (props) => {
  const onClick = (e) => {
    e.preventDefault();
    props.updateCurrentFolder(props.tagID);
  };

  return (
    <div>
      <a href="#" className="folder-link" onClick={onClick}>{props.tag.name}</a>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    tag: selectTag(state, ownProps.tagID),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentFolder: (tagID) => {
      dispatch(currentFolderID.update(tagID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Folder);