import { INIT_TAGS } from 'actions/types';
import { ROOT_FOLDER_ID } from 'constants/ids';

const initTags = (state, action) => {
  const tags = {
    [ROOT_FOLDER_ID]: {
      _id: ROOT_FOLDER_ID,
      name: 'Root Folder',
      isFolder: true,
    },
  };

  return action.tags.reduce((accumulator, currentValue) => {
    // copy the currentValue and set the parent to root if no parent
    accumulator[currentValue._id] = {
      ...currentValue,
      parent: currentValue.parent || tags.root._id,
    };

    return accumulator;
  }, tags);
};

const tags = (state = {}, action) => {
  switch (action.type) {
    case INIT_TAGS:
      return initTags(state, action);

    default:
      return state;
  }
};

export default tags;
