<template>
  <div>
    <md-toolbar class="md-primary" md-elevation="2">
      <h3 class="md-title" style="flex: 1">Chat App Demo</h3>
      <div class="md-body2">{{getLoginState?'Logged in as: '+getUserName:'Not logged in'}}</div>
      <md-button v-if="getLoginState" @click="logOut">Log out</md-button>
    </md-toolbar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Navbar",
  methods: {
    ...mapActions(["logOut"])
  },
  computed: mapGetters(["getLoginState", "getUserName"])
};
</script>

