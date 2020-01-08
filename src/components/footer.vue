<template>

</template>

<script>
  import axios from 'axios'
    export default {
        name: "footer",
      methods:{

      },
      mounted:function(){
          axios.get("api/").then(data=>{

          })
      }
    }
</script>

<style scoped>

</style>
