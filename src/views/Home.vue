<template>
  <div class="parent">
    <div class="md-display-3">Demo Chat App</div>
    <br />
    <div class="md-headline">Join the chat with your username</div>
    <br />
    <br />
    <br />
    <form novalidate class="md-layout" id="userNameLogin" v-on:submit.prevent="onLogin">
      <md-field>
        <label for="username">Username</label>
        <md-input name="username" id="username" v-model="username" />
        <md-button
          class="md-primary md-raised md-dense"
          type="submit"
          v-bind:disabled="username==''"
        >Join</md-button>
      </md-field>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  data: () => ({ username: "" }),
  computed: mapGetters(["getLoginState"]),
  methods: {
    ...mapActions(["logIn"]),
    onLogin(e) {
      // Check if the username is nonempty before logging in
      if (this.username.trim() != "") this.logIn(this.username);
    }
  },
  created() {
    // Redirect to chat screen if user is logged in
    if (this.getLoginState) this.$router.replace("/chat");
  }
};
</script>

<style scoped>
.parent {
  margin: 50px 30px;
  padding: 150px 0;
  text-align: center;
}

#userNameLogin {
  max-width: 400px;
  margin: auto;
}
</style>