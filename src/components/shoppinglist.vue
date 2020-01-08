<template>
<div>
  <ul>
<!--
    <li v-for="(item) in this.$store.state.todolist" :index="item.id"> {{item.name}}<router-link :to="`/detail/${item.id}`">详情</router-link><button @click="deletee(item.id)">删除</button></li>
-->
    <li v-for="(item) in this.$store.state.todolist" :index="item.id"> {{item.name}}<router-link :to="`/detail?id=${item.id}`">详情</router-link><button @click="deletee(item.id)">删除</button><button @click="pushshow(item.id)">push查看</button>
      <button @click="replaceshow(item.id)">replace查看</button></li>

  </ul>
  <div>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
    export default {
      name: "shoppinglist",
      props:["todolist"],
      methods:{
          /*deletee:function(index){
            this.$emit("deletee",index)
          }*/
          deletee:function(index){
            console.log(this)
            this.$store.dispatch("deletee",index)
          },
        /*pushshow:function(id){
            alert(id)
            this.$router.push('/detail/${id})
        },
        replaceshow:function(id){
            alert("r"+id)
        this.$router.replace(`/detail/${id}`)
        }*/
      }
    }
</script>

<style scoped>

</style>
