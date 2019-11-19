import React from 'react';
import { connect } from 'react-redux';
import { currentFolderSelector } from 'selectors/currentFolderSelector';
import BackButton from 'components/BackButton';
import FolderContents from 'components/FolderContents';
import 'components/CurrentFolder.scss';

export const CurrentFolder = (props) => {
  return (
    <div className="current-folder">
      <div className="header">
        <div className="current-folder-name">{`{${props.currentFolder.name}}`}</div>
      </div>
      <div className="back-button-wrapper">
        <BackButton />
      </div>
      <FolderContents />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentFolder: currentFolderSelector(state),
  };
};

export default connect(mapStateToProps)(CurrentFolder);