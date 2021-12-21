export const setOnLocalStorage = (key, value) => {
  return localStorage.setItem(key, value);
};

export const getFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};
