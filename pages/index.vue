<template>
  <div class="container mx-auto">
    <Addform />
    <ListUsers :users="users" />
  </div>
</template>

<script>
import Addform from "../components/addform.vue";
import ListUsers from "../components/listUsers.vue";
import { mapGetters } from "vuex";
export default {
  name: "IndexPage",
  components: { Addform, ListUsers },
  computed: {
    ...mapGetters({ users: "getUsers" }),
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
};
</script>
