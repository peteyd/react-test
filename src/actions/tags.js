import { INIT_TAGS } from 'actions/types';

export const init = (tags) => ({
  type: INIT_TAGS,
  tags,
});
