<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {
    $route (to, from) {
      // 如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        // 设置动画名称
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
//转场动画
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  // 启用硬件加速
  will-change: transform;
  transition: all 400ms;
  position: fixed;
}
.slide-right-enter {
  // opacity: 0;
  transform: translate3d(-100%, 0, 0);
  transition-timing-function: linear;
}
.slide-right-leave-active {
  // opacity: 0;
  // 安卓手机上同时进行离开和进入会出现闪白现象，暂时不启用离开动画
  // transform: translate(100%, 0);
  // transition-timing-function:  cubic-bezier(0.5,0,1,1);
}
.slide-left-enter {
  // opacity: 0;
  transform: translate3d(100%, 0, 0);
  transition-timing-function: linear;
}
.slide-left-leave-active {
  // opacity: 0;
  // 安卓手机上同时进行离开和进入会出现闪白现象，暂时不启用离开动画
  // transition-timing-function:  cubic-bezier(0.5,0,1,1);
  // transform: translate(-100%, 0);
}
</style>
