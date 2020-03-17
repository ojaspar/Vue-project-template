export default {
  // custom actions
  customActions: ({ commit }, params) => {
    commit('append', params);
  }
};
