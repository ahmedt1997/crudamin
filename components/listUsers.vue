<template>
  <div class="row my-4">
    <div class="col-4" v-for="(user, index) in users" :key="index">
      <div class="card text-left my-2">
        <div class="card-body">
          <h4 class="card-title">{{ user.name }}</h4>
          <p class="card-text">{{ user.email }}</p>
          <button class="btn btn-danger btn-sm" @click="deleteUser(user.id)">
            Delete
          </button>
          <button class="btn btn-danger btn-sm" @click="update(user.id)">
            update
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    users: {
      type: Array,
      default: [],
    },
  },
  methods: {
    deleteUser(id) {
      this.$store.dispatch("deleteUser", id);
    },
    update(id) {
      this.$store.commit("setIsEdit", true);
      this.$nuxt.$emit(
        "dataUser",
        this.$store.state.users.find((item) => item.id == id)
      );
    },
  },
};
</script>
<style lang="">
</style>