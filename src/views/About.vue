<template>
  <div class="about">
    <v-header></v-header>
    <h1>This is an about page</h1>
    <div class="m-list-wrap">
      <p v-for="(item,index) in list" :key="index">{{item.num | formatNum}}</p>
    </div>
    <div>
      <div v-for="(item,index) in modeList" :key="index">
        <p>{{item}}</p>
        <input type="text" :inputmode="item" :placeholder="item" />
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/header'
export default {
  components: {
    vHeader: Header
  },
  data () {
    return {
      list: [],
      modeList: ['search', 'url', 'tel', 'email', 'decimal', 'numeric', 'none']
    }
  },
  filters: {
    formatNum (value, num = 2) {
      if (!value) {
        return `￥${value}`
      }
      const temValue = (parseFloat(value)).toFixed(num)
      return `￥${temValue}`
    }
  },
  created () {
    const temList = []
    for (let i = 0; i < 10; i++) {
      temList.push({
        num: Math.random() * 100 + 1
      })
    }
    this.list = Object.freeze(temList)
  }
}
</script>
<style lang="scss">
.about {
  background-color: bisque;
}
</style>
