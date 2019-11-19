import React from 'react';
import { connect } from 'react-redux';
import { selectTag } from 'selectors/tagsSelector';
import * as currentFolderID from 'actions/currentFolderID';
import 'components/Folder.scss';

const Folder = (props) => {
  const onClick = (e) => {
    e.preventDefault();
    props.updateCurrentFolder(props.tagID);
  };

  return (
    <a onClick={onClick}>
      <div className="folder-link">
        {props.tag.name}
      </div>
    </a>
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