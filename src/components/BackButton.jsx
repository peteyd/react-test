import React from 'react';
import { connect } from 'react-redux';
import * as currentFolderID from 'actions/currentFolderID';
import 'components/BackButton.scss';

export const BackButton = (props) => {
  if (!props.parentID) {
    return null;
  }

  const onClick = () => {
    props.updateCurrentFolder(props.parentID);
  };

  return (
    <button className="back-button" onClick={onClick}>
      <img className="left-triangle" src={process.env.PUBLIC_URL + "/left-triangle.png"} alt=""/>
      Back
    </button>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentFolder: (folderID) => {
      dispatch(currentFolderID.update(folderID));
    },
  };
};

export default connect(undefined, mapDispatchToProps)(BackButton);