<template>
  <div class="g-sider-wrap">
    <Sider>
      <Menu :open-names="openNames" :active-name="activeName">
        <menu-com :route-list="routes" />
      </Menu>
    </Sider>
  </div>
</template>
<script>
import { routes } from '@/router'
import MenuCom from './menu'

export default {
  components: {
    MenuCom
  },
  data () {
    return {
      routes,
      openNames: [],
      activeName: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      console.log(this.$route)
      this.activeName = this.$route.path
      this.openNames = [this.$route.path]
    })
  }
}
</script>
<style lang="scss" scopde>
.g-sider-wrap {
}
</style>
