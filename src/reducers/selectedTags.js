const initSelectedTags = (action) => {
  const initialSelectedTags = action.tagIDs.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = true;
    return accumulator;
  }, {});

  return initialSelectedTags;
};

const toggleTag = (state, action) => {
  const updatedState = { ...state };

  if (updatedState[action.tagID]) {
    delete updatedState[action.tagID];
  } else {
    updatedState[action.tagID] = true;
  }

  return updatedState;
};

const selectedTags = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_SELECTED_TAGS':
      return initSelectedTags(action);

    case 'TOGGLE_TAG':
      return toggleTag(state, action);

    default:
      return state;
  }
};

export default selectedTags;
