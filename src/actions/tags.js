export const init = (tags) => {
  return {
    type: 'INIT_TAGS',
    tags,
  };
};