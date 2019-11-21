/* eslint-disable no-param-reassign */

export const clickable = (element) => {
  element.click = () => {
    element.simulate('click');
  };

  return element;
};

// if used to change the value of inputs other than checkbox,
// would need to take the new value to change to and
// prepare an event to pass to simulate
export const changeable = (element) => {
  element.change = () => {
    element.simulate('change');
  };

  return element;
};
