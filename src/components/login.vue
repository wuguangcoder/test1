<template>
    <div class="bod">
        <div class="loginForm">
        <form  id="forml"@submit.prevent="add">
        <p><input name="username" v-model="formobj.username" placeholder="用户名"/></p>
            <p><input name="password" type="password" v-model="formobj.password" placeholder="密码"/></p>
        <p><input value="登录" style="width:100%;" type="submit"></p></form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {data () {
      return {
        formobj: {
          username: '',
          password: ''
        },
        TOKEN_KEY: 'jwtToken',
        token: ''
      }
    },
    methods: {add () {
      var loginData = JSON.stringify(this.formobj)
      axios.post('/api/auth', loginData).then((data) => {
        this.token = data.data.token
        this.$emit('childByValue', this.token)
        this.setJwtToken(data.data.token)
      })
    },
    setJwtToken (token) {
      localStorage.setItem(this.TOKEN_KEY, JSON.stringify(token))
    }
}
    }
</script>

<style scoped>
</style>
