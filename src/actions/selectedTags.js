export const init = (tagIDs) => ({
  type: 'INIT_SELECTED_TAGS',
  tagIDs,
});

export const toggle = (tagID) => ({
  type: 'TOGGLE_TAG',
  tagID,
});
