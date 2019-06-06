<template>
  <div class="home">
    <v-header></v-header>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/header'
export default {
  name: 'home',
  components: {
    HelloWorld,
    vHeader: Header
  }
}
</script>
<style lang="scss">
.home {
  background-color: #fff;
}
</style>
