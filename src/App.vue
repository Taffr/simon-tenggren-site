<template>
<!-- Icon CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">

  <header>
    <div class="app">
      <div>
        <NavigationBar/>
      </div>
    </div>
  </header>
  <div class="routerViewContainer"> 
    <RouterView/>
  </div>
</template>
<script lang="ts">
import NavigationBar from './components/NavigationBar.vue';
import { RouterView } from 'vue-router';
export default {
  name: 'App',
  components : {NavigationBar, RouterView},
};
</script>

<style scoped>
.routerViewContainer {
  position: relative;
  top: 15vh;
  margin: 2rem;
}
</style>