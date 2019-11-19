import React from 'react';
import { connect } from 'react-redux';
import { currentFolderSelector, currentFolderContentSelector } from 'selectors/currentFolderSelector';
import Folder from 'components/Folder';
import Tag from 'components/Tag';
import BackButton from 'components/BackButton';
import 'components/CurrentFolder.scss';

const Folders = (props) => {
  return (
    <div className="child-folders">{
      props.folders.map((folder) => {
        return <Folder tagID={folder} key={folder} />;
      })}
    </div>
  );
};

const Tags = (props) => {
  return (
    <div className="child-tags">{
      props.tags.map((tag) => {
        return <Tag tagID={tag} key={tag} />;
      })}
    </div>
  );
};

export const CurrentFolder = (props) => {
  return (
    <div className="current-folder">
      <div className="header">
        <div className="folder-name">{`{${props.currentFolder.name}}`}</div>
      </div>
      <div className="back-button-wrapper">
        <BackButton />
      </div>
      <div className="folder-contents">
        <Folders folders={ props.contents.childFolders } />
        <div className="content-divider" />
        <Tags tags={ props.contents.childTags } />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentFolder: currentFolderSelector(state) || {},
    contents: currentFolderContentSelector(state) || {},
  };
};

export default connect(mapStateToProps)(CurrentFolder);