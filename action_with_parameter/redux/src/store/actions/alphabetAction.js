export const CHANGEALPHABET = "CHANGE_ALPHABET";

export const changeAlphabet = (payload) => {
  return {
    type: CHANGEALPHABET,
    payload,
  };
};
