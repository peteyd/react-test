const initTags = (state, action) => {
  const tags = {
    root: {
      _id: 'root',
      name: 'Root Level',
      isFolder: true,
    },
  };

  return action.tags.reduce((accumulator, currentValue) => {
    accumulator[currentValue._id] = currentValue;
    return accumulator;
  }, tags);
};

const tags = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_TAGS':
      return initTags(state, action);

    default:
      return state;
  }
};

export default tags;
