import { APP_ACTION_ADD, APP_ACTION_REM, APP_ACTION_CLR } from "../Constants";

export const setStateToAdd = () => ({
  type: APP_ACTION_ADD
});

export const setStateToRem = () => ({
  type: APP_ACTION_REM
});

export const setStateToClr = payload => ({
  type: APP_ACTION_CLR,
  payload
});

export const add = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(setStateToAdd());
    }, 1000);
  };
};

export const remove = () => {
  return dispatch => {
    dispatch(setStateToRem());
  };
};

export const clear = payload => {
  return dispatch => {
    dispatch(setStateToClr(payload));
  };
};
