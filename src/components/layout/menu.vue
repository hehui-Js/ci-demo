<template>
  <div>
    <template v-for="(item,index) in routeList">
      <Submenu v-if="item.children && item.children.length" :key="index" :name="item.path">
        <template slot="title">
          <Icon :type="item.meta.icon" />
          {{item.meta.title}}
        </template>
        <menu-item :route-list="item.children" />
      </Submenu>
      <template v-else>
        <MenuItem :to="item.path" :name="item.path" :key="index">
          <Icon :type="item.meta.icon" />
          {{item.meta.title}}
        </MenuItem>
      </template>
    </template>
  </div>
</template>
<script>
export default {
  name: 'menuItem',
  props: {
    routeList: {
      type: Array,
      default: () => []
    }
  }
}
</script>
