const currentFolder = (state = null, action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_FOLDER_ID':
      return action.folderID;

    default:
      return state;
  }
};

export default currentFolder;
