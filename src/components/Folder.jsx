import React from 'react';
import { connect } from 'react-redux';
import { selectElement } from 'selectors/tagsSelector';
import * as currentFolderID from 'actions/currentFolderID';
import 'components/Folder.scss';

export const Folder = (props) => {
  const onClick = () => {
    props.updateCurrentFolder(props.folder._id);
  };

  return (
    <div
      className="folder-link content-element"
      onClick={onClick}
      onKeyPress={onClick}
      role="button"
      tabIndex={0}
    >
      <img className="folder-icon" src={`${process.env.PUBLIC_URL}/folder.png`} alt="" />
      <span className="folder-name">{props.folder.name}</span>
      <img className="right-chevron" src={`${process.env.PUBLIC_URL}/right-chevron.png`} alt="" />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  folder: selectElement(state, ownProps.folderID),
});

const mapDispatchToProps = (dispatch) => ({
  updateCurrentFolder: (folderID) => {
    dispatch(currentFolderID.update(folderID));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Folder);
