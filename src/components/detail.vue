<template>
  <div>
    <h1>{{$route.params.id}}</h1>
    <ul>
      <li>{{dtetailobj.id}}</li>
      <li>{{dtetailobj.do}}</li>
      <li>{{dtetailobj.name}}</li>
    </ul>
  </div>

</template>

<script>
    export default {
        name: "detail",
      data(){
          return{
            dtetailobj:{},
            mesagearr:[]
          }
      },
      mounted(){
          //const id=this.$route.params.id
        const id=this.$route.query.id
          this.mesagearr=this.$store.state.todolist
          this.dtetailobj=this.mesagearr.find(detail1 => detail1.id===id)
      },
      watch:{
          $route:function(value){
           // const id=value.params.id
            const id=value.query.id
            this.mesagearr=this.$store.state.todolist
            this.dtetailobj=this.mesagearr.find(detail1 => detail1.id===id)
          }
      }
    }
</script>

<style scoped>

</style>
