export const state = () => ({
  users: [],
  isEdit: false,
});

export const mutations = {
  setUsers(state, payload) {
    state.users = payload;
  },
  setIsEdit(state, data) {
    state.isEdit = data;
  },
};
export const getters = {
  getUsers(state) {
    return state.users;
  },
};
export const actions = {
  async getUsers({ commit }, _) {
    await this.$axios.get("http://localhost:3001/users").then((res) => {
      commit("setUsers", res.data);
    });
  },
  async addUser(_, data) {
    await this.$axios.post("http://localhost:3001/users", data);
  },
  async updateUser(_, data) {
    await this.$axios.put(`http://localhost:3001/users/${data.id}`, data.data);
  },
  async deleteUser({ commit, state }, id) {
    await this.$axios
      .delete(`http://localhost:3001/users/${id}`)
      .then((res) => {
        console.log(state);
        commit(
          "setUsers",
          state.users.filter((user) => user.id != id)
        );
      });
  },
};
