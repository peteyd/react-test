export const update = (folderID) => {
  return {
    type: 'UPDATE_CURRENT_FOLDER_ID',
    folderID,
  };
};