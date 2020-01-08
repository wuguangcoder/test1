<template>
  <div>
    <p><label for="name">姓名</label><input id='name' v-model="name"/></p>
    <p><label for="job">工作</label><input id="job" v-model="job"></p>
    <p><label for="card">工号</label><input id='card'v-model="gonghao"><button @click="add()">添加</button></p>

  </div>
</template>

<script>
  import {mapActions} from "vuex";
    export default {

        name: "productdetail",
        data(){
          return{
            name:"1",
            job:"1",
            gonghao:"123456"
          }
      },
        methods:{
      add:function(){
      var dataa={
        name:this.name,
        do:this.job,
        id:this.gonghao,
        checked:false
      }
      this.$store.dispatch("add",dataa)
    }
  }

  }

</script>

<style scoped>

</style>
