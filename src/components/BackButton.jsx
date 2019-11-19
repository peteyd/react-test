import React from 'react';
import { connect } from 'react-redux';
import { selectParentID } from 'selectors/tagsSelector';
import { currentFolderIDSelector } from 'selectors/currentFolderIDSelector';
import * as currentFolderID from 'actions/currentFolderID';
import 'components/BackButton.scss';

const BackButton = (props) => {
  if (props.currentFolderID === 'root') {
    return null;
  }

  const onClick = (e) => {
    e.preventDefault();
    props.updateCurrentFolder(props.parentID);
  }
  return (
    <button className="back-button" onClick={onClick}> {"<"} Back</button>
  );
};

const mapStateToProps = (state) => {
  const currentFolderID = currentFolderIDSelector(state);

  return {
    parentID: selectParentID(state, currentFolderID),
    currentFolderID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentFolder: (folderID) => {
      dispatch(currentFolderID.update(folderID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BackButton);