<template>
  <div id="app">
    <!-- <md-toolbar class="md-primary"> -->
    <!-- <md-tabs class="md-primary navbar" md-sync-route>
      <md-tab id="tab-home" md-label="Home" to="/" exact></md-tab>
      <md-tab id="tab-chat" md-label="Chat" to="/chat"></md-tab>
    </md-tabs>-->
    <!-- </md-toolbar> -->
    <Navbar />
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: { Navbar }
};
</script>

<style>
#content {
  max-width: 1200px;
  margin: auto;
}
</style>
