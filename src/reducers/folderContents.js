const folderContents = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_TAGS':
      return action.tags.reduce((accumulator, currentValue) => {
        const parentID = currentValue.parent || 'root';
        let parent = accumulator[parentID];

        if (!parent) {
          parent = accumulator[parentID] = {};
        }

        parent.childTags = parent.childTags || [];
        parent.childFolders = parent.childFolders || [];

        if (currentValue.isFolder) {
          parent.childFolders.push(currentValue._id);
        }
        else {
          parent.childTags.push(currentValue._id);
        }

        return accumulator;
      }, {});

    default:
      return state;
  }
};

export default folderContents;