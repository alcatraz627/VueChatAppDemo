<template>
  <div id="app">
    <!-- <md-toolbar class="md-primary"> -->
    <md-tabs class="md-primary navbar" md-sync-route>
      <md-tab id="tab-home" md-label="Home" to="/" exact></md-tab>
      <md-tab id="tab-chat" md-label="Chat" to="/chat"></md-tab>
    </md-tabs>
    <!-- </md-toolbar> -->
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
</script>

<style>
#content {
  max-width: 1200px;
  margin: auto;
}
.navbar {
  height: 5vh;
}
</style>
