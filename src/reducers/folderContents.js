const initTags = (action) => {
  const initialState = action.tags.reduce((accumulator, currentValue) => {
    const parentID = currentValue.parent || 'root';
    let parent = accumulator[parentID];

    if (!parent) {
      accumulator[parentID] = {};
      parent = accumulator[parentID];
    }

    parent.childTags = parent.childTags || [];
    parent.childFolders = parent.childFolders || [];

    const childInfo = {
      _id: currentValue._id,
      name: currentValue.name,
    };

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
    case 'INIT_TAGS':
      return initTags(action);

    default:
      return state;
  }
};

export default folderContents;
