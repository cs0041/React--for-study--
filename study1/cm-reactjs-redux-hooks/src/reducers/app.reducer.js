import { APP_ACTION_ADD, APP_ACTION_REM, APP_ACTION_CLR } from "../Constants";

const initialState = {
  count: 0,
  account: { username: "admin", password: "1324" }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case APP_ACTION_ADD:
      return { ...state, count: state.count + 1 };
    case APP_ACTION_REM:
      return { ...state, count: state.count - 1 };
    case APP_ACTION_CLR:
      return { ...state, count: payload };
    default:
      return state;
  }
};
