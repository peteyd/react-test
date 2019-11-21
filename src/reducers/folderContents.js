import { INIT_TAGS } from 'actions/types';
import { ROOT_FOLDER_ID } from 'constants/ids';

// build a mapping of parent IDs to their children's IDs
// include the child ID and the child name (for sorting later)
const initTags = (action) => {
  const initialState = action.tags.reduce((accumulator, currentValue) => {
    // default the parentID to root so we can distinguish between the actual root
    // and the defined tags/folders that have no parent
    const parentID = currentValue.parent || ROOT_FOLDER_ID;
    let parent = accumulator[parentID];

    if (!parent) {
      accumulator[parentID] = {};
      parent = accumulator[parentID];
    }

    parent.childTags = parent.childTags || [];
    parent.childFolders = parent.childFolders || [];

    // include the name so we can sort by name later
    const childInfo = {
      _id: currentValue._id,
      name: currentValue.name,
    };

    // assign the current value to either the parent's folders or tags
    if (currentValue.isFolder) {
      parent.childFolders.push(childInfo);
    } else {
      parent.childTags.push(childInfo);
    }

    return accumulator;
  }, {});

  return initialState;
};

const folderContents = (state = {}, action) => {
  switch (action.type) {
    case INIT_TAGS:
      return initTags(action);

    default:
      return state;
  }
};

export default folderContents;
