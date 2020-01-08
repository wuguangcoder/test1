<template>
  <div class="hello">
    <my-component></my-component>
    <addtodo></addtodo>
    <!--<shoppinglist :todolist="this.$store.state.todolist" v-on:deletee="deletee"></shoppinglist>-->
    <shoppinglist></shoppinglist>
    <footer></footer>
  </div>
</template>

<script>
 // import titttle from "./title.vue"
  import foot from "./footer.vue"
  import addtodo from "./addtodo.vue"
  import shoppinglist from "./shoppinglist.vue"
export default {
  name: 'HelloWorld',
  components:{foot,addtodo,shoppinglist},
  data () {
    return {
     /* todolist:[{'name':"小明",'do':"吃饭",'checked':true,"id":"1"},
        {'name':"小刚",'do':"睡觉",'checked':true,"id":"2"},
        {'name':"小强",'do':"打豆豆",'checked':true,"id":"3"},
        {'name':"小张",'do':"吃饭",'checked':true,"id":"4"}]*/
    }
  },
  methods:{
   /* deletee: function(index) {
      for(var i=0;i<this.todolist.length;i++){
        if(this.todolist[i].id==index){
          this.todolist.splice(i,1)
        }
      }
    }*/
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
