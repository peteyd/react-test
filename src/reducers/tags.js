import { INIT_TAGS } from 'actions/types';
import { ROOT_FOLDER_ID } from 'constants/ids';

const initTags = (action) => {
  // create a root folder for the top level folders/tags to be under
  const initialTags = {
    [ROOT_FOLDER_ID]: {
      _id: ROOT_FOLDER_ID,
      name: 'Root Folder',
      isFolder: true,
    },
  };

  action.tags.reduce((accumulator, currentValue) => {
    // copy the currentValue and set the parent to root if no parent
    accumulator[currentValue._id] = {
      ...currentValue,
      parent: currentValue.parent || initialTags.root._id,
    };

    return accumulator;
  }, initialTags);

  return initialTags;
};

const tags = (state = {}, action) => {
  switch (action.type) {
    case INIT_TAGS:
      return initTags(action);

    default:
      return state;
  }
};

export default tags;
