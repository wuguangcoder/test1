<template>
  <div id="app">
     <helloword v-if="!sa" ></helloword>
     <login v-else></login>
  </div>
</template>

<script>
  import helloword from './components/HelloWorld.vue'
  import login from './components/login.vue'
export default {
  name: 'App',
  components:{helloword,login},
  data(){
    return {
      sa:JSON.parse(window.localStorage.getItem('jwtToken'))
    }
  }
}
</script>

<style>
#app {

}
</style>
