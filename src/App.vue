<template>
  <div id="app">
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
html {
  overflow: hidden;
}
body {
  background: #fafafa;
}
#content {
  max-width: 1200px;
  margin: auto;
  background: #fff;
}
</style>
