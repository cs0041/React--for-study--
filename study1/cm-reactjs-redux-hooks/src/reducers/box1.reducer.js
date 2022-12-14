import { BOX1_ACTION_ADD } from "../Constants";

const initialState = {
  count1: 0
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case BOX1_ACTION_ADD:
      return { ...state, count1: state.count1 + 1 };
    default:
      return state;
  }
};
