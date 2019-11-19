export const update = (tagID) => {
  return {
    type: 'UPDATE_CURRENT_FOLDER_ID',
    tagID,
  };
};