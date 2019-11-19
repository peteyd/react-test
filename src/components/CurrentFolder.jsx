import React from 'react';
import { connect } from 'react-redux';
import { currentFolderSelector } from 'selectors/currentFolderSelector';
import Link from 'components/Link';
import BackButton from 'components/BackButton';

const renderChildren = (children) => {
  return (children || []).map((child) => {
    return <Link tagID={child} key={child}/>
  });
};

export const CurrentFolder = (props) => {
  console.log(props.currentFolder);
  return (
    <div>
      <div className="back-button" style={{height: "30px"}}>
        <BackButton />
      </div>
      <div className="folder-name" style={{height: "30px"}}>
        {props.currentFolder.name}
      </div>
      <div className="folder-contents">
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