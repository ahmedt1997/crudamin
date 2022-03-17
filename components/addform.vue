<template>
  <div>
    <form @submit.prevent="submitUser">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Name</label>
        <input
          type="name"
          class="form-control"
          :value="name"
          @change="setName"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          :value="email"
          @change="setEmail"
        />
      </div>
      <button
        type="submit"
        class="btn"
        :class="[$store.state.isEdit ? 'btn-success' : 'btn-primary']"
      >
        {{ $store.state.isEdit ? "Update" : "Addd" }}
      </button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      name: "",
      email: "",
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    setEmail(event) {
      this.email = event.target.value;
    },
    submitUser() {
      const data = {
        name: this.name,
        email: this.email,
      };
      let action = this.$store.state.isEdit
        ? this.$store.dispatch("updateUser", { id: this.id, data })
        : this.$store.dispatch("addUser", data);

      action.then((res) => {
        this.$store.dispatch("getUsers");
        this.name = "";
        this.email = "";
      });
    },
  },
  created() {
    this.$nuxt.$on("dataUser", (data) => {
      this.id = data.id;
      this.name = data.name;
      this.email = data.email;
    });
  },
};
</script>
<style scoped>
</style>