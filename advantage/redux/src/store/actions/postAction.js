export const CHANGETITLE = "CHANGE_TITLE";
export const CHANGETEXT = "CHANGE_TEXT";

export const changeTitle = (payload) => {
  return {
    type: CHANGETITLE,
    payload: payload,
  };
};

export const changeText = (payload) => {
  return {
    type: CHANGETEXT,
    payload: payload,
  };
};
