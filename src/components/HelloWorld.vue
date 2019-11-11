<template>
  <div class="hello">
    <div class="hook" v-for="(item, index) in list" :key="index">
        <span>{{item.name}}</span>
        <hook :list="item.children" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'hook',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  text-align:center;
  .hook{
    margin-left:5px;
    .hello{
      margin-left:10px;
    }
  }
}
</style>
