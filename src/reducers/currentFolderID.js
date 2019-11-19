const currentFolder = (state = null, action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_FOLDER_ID':
      return action.tagID;

    default:
      return state;
  }
};

export default currentFolder;