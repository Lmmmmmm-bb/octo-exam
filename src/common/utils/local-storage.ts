export const setLocalItem = (key: string, value: string) =>
  localStorage.setItem(key, value);

export const getLocalItem = (key: string) => {
  return localStorage.getItem(key);
};

export const removeLocalItem = (key: string) => {
  const val = localStorage.getItem(key);
  localStorage.removeItem(key);
  return val;
};

export const clearLocal = () => localStorage.clear();
