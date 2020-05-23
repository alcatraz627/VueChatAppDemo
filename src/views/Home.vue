<template>
  <div class="parent">
    <div class="md-display-3">Demo Chat App</div>
    <br />
    <br />
    <div class="md-headline">Join the chat with your username</div>
    <br />
    <form novalidate class="md-layout" id="userNameLogin">
      <md-field>
        <label for="username">Username</label>
        <md-input name="username" id="username" />
        <md-button class="md-primary md-raised md-dense">Join</md-button>
      </md-field>
    </form>
  </div>
</template>

<style scoped>
.parent {
  margin: 50px 30px;
  text-align: center;
}

#userNameLogin {
  max-width: 400px;
  margin: auto;
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home"
};
</script>
