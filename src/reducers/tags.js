const tags = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_TAGS':
      const tags = {
        root: {
          _id: 'root',
          name: 'root',
          isFolder: true,
        },
      };

      return action.tags.reduce((accumulator, currentValue) => {
        accumulator[currentValue._id] = {
          ...accumulator[currentValue._id],
          ...currentValue,
        };

        const parentID = currentValue.parent || 'root';
        let parent = accumulator[parentID];

        if (!parent) {
          parent = accumulator[currentValue.parent] = {};
        }

        parent.children = parent.children || [];
        parent.children.push(currentValue._id);

        return accumulator;
      }, tags);
    default:
      return state;
  }
};

export default tags;