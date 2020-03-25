const USER_KEY = "user";

export const user = () => {
  try {
    return JSON.parse(localStorage.getItem(USER_KEY));
  } catch (e) {
    return false;
  }
};

export const saveUser = user => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const destroyUser = () => {
  localStorage.removeItem(USER_KEY);
};

export const userToken = () => {
  return user().token;
};

export default { user, saveUser, destroyUser, userToken };
