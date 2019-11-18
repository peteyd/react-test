import React from 'react';
import { connect } from 'react-redux';
import { currentFolderSelector } from 'selectors/currentFolderSelector';

const renderChildren = (children) => {
  return (children || []).map((child) => {
    return <div>{child}</div>
  })
}

export const CurrentFolder = (props) => {
  console.log(props.currentFolder);
  return (
    <div>
      <div className="folder-name">
        {props.currentFolder.name}
      </div>
      <div className="children">
        { renderChildren(props.currentFolder.children) }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentFolder: currentFolderSelector(state) || {},
  };
};

export default connect(mapStateToProps)(CurrentFolder);