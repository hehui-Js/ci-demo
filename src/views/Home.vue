<template>
  <div class="home">
    <v-header></v-header>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <a href="weixin://" style="background: #01d00e">打开微信</a>
    <div>
      <h2>Vuex:</h2>
      <p>count:{{$store.getters.getCount}}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/header'
import { setInterval } from 'timers'
export default {
  name: 'home',
  components: {
    HelloWorld,
    vHeader: Header
  },
  mounted () {
    this.setCountLoop()
  },
  methods: {
    setCountLoop () {
      setInterval(() => {
        // this.$store.dispatch('setCount', 1)
      }, 1000)
      this.$store.dispatch('setCount', 1)
    }
  }
}
</script>
<style lang="scss">
.home {
  background-color: #fff;
}
</style>
