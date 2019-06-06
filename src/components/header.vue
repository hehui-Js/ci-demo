<template>
  <div class="m-header">
    <div class="left" @click="handleBack">返回</div>
    <div class="title">头部信息</div>
  </div>
</template>
<script>
export default {
  methods: {
    handleBack () {
      this.$store.dispatch('setTransition', 'turn-off')
      this.$router.back(-1)
    }
  }
}
</script>
