import { UPDATE_CURRENT_FOLDER_ID } from 'actions/types';

export const update = (folderID) => ({
  type: UPDATE_CURRENT_FOLDER_ID,
  folderID,
});
