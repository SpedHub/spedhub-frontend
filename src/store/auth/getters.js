export default {
  currentUser(state) {
    return state.user;
  },
  loggedIn(state) {
    return !!state.user;
  }
};
