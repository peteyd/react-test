/* eslint-disable no-param-reassign */
export const clickable = (element) => {
  element.click = () => {
    element.simulate('click');
  };

  return element;
};

export const changeable = (element) => {
  element.change = () => {
    element.simulate('change');
  };

  return element;
};
