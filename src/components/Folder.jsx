import React from 'react';
import { connect } from 'react-redux';
import { selectElement } from 'selectors/tagsSelector';
import * as currentFolderID from 'actions/currentFolderID';
import 'components/Folder.scss';

const Folder = (props) => {
  const onClick = (e) => {
    e.preventDefault();
    props.updateCurrentFolder(props.folderID);
  };

  return (
    <div className="folder-link" onClick={onClick}>
      {props.folder.name}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    folder: selectElement(state, ownProps.folderID),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentFolder: (folderID) => {
      dispatch(currentFolderID.update(folderID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Folder);