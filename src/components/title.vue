<template>
<div><ul>
  <router-link to="/shop">商品列表</router-link>
  <router-link to="/detail">商品详情</router-link>
</ul>
  <router-view></router-view>
</div>

</template>

<script>
    export default {
        name: "title"
    }
</script>

<style scoped>

</style>
