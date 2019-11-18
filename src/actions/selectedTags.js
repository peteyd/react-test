export const init = (tagIDs) => {
  return {
    type: 'INIT_SELECTED_TAGS',
    tagIDs,
  };
};

export const toggle = (tagID) => {
  return {
    type: 'TOGGLE_TAG',
    tagID,
  };
};