import { UPDATE_CURRENT_FOLDER_ID } from 'actions/types';
import { ROOT_FOLDER_ID } from 'constants/ids';

const currentFolder = (state = ROOT_FOLDER_ID, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_FOLDER_ID:
      return action.folderID || ROOT_FOLDER_ID;

    default:
      return state;
  }
};

export default currentFolder;
