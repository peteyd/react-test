import React from 'react';
import { connect } from 'react-redux';
import { currentFolderContentsSelector } from 'selectors/currentFolderContentsSelector'
import Folder from 'components/Folder';
import Tag from 'components/Tag';
import 'components/FolderContents.scss';

const Folders = (props) => {
  return (
    <div className="child-folders">{
      props.folderIDs.map((folderID) => {
        return <Folder folderID={folderID} key={folderID} />;
      })}
    </div>
  );
};

const Tags = (props) => {
  return (
    <div className="child-tags">{
      props.tagIDs.map((tagID) => {
        return <Tag tagID={tagID} key={tagID} />;
      })}
    </div>
  );
};

export const CurrentFolder = (props) => {
  const totalChildren = props.contents.childFolderIDs.length + props.contents.childTagIDs.length;

  if (totalChildren === 0) {
    return (
      <div className="empty-folder">
        This folder is empty
      </div>
    );
  }

  return (
    <div className="folder-contents">
      <Folders folderIDs={ props.contents.childFolderIDs } />
      <Tags tagIDs={ props.contents.childTagIDs } />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contents: currentFolderContentsSelector(state),
  };
};

export default connect(mapStateToProps)(CurrentFolder);