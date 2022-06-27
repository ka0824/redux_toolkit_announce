export const IMMERCHANGETITLE = "IMMER_CHANGE_TITLE";
export const IMMERCHANGETEXT = "IMMER_CHANGE_TEXT";

export const immerChangeTitle = (payload) => {
  return {
    type: IMMERCHANGETITLE,
    payload: payload,
  };
};

export const immerChangeText = (payload) => {
  return {
    type: IMMERCHANGETEXT,
    payload: payload,
  };
};
