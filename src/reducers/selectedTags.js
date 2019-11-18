const selectedTags = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_SELECTED_TAGS':
      return action.tagIDs.reduce((accumulator, currentValue) => {
        accumulator[currentValue] = true;
        return accumulator;
      }, {});

    case 'TOGGLE_TAG':
      let updatedState = { ...state };

      if (updatedState[action.tagID]) {
        delete updatedState[action.tagID];
      }
      else {
        updatedState[action.tagID] = true;
      }

      return updatedState;

    default:
      return state;
  }
};

export default selectedTags;