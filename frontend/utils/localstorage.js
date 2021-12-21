export const setOnLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const getFromLocalStorage = (key) => {
  if (typeof window !== 'undefined') return localStorage?.getItem(key);
};
