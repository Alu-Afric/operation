<template>
  <div class="">
    <div class="container white">   
      <div class="row">
        
      
    <img alt="Vue logo" class="animated infinite pulse bounds-1" width="10%"  src="~/assets/img/fue.png">
       <p class="center" style="font-size : 30px">Future University in Egypt</p>

      <div class="row" >
        <div class="col s5" style="padding-top : 100px;">
          <el-input v-model="input.name" class="bounds-1" placeholder="Name" />
          <el-input v-model="input.email" class="bounds-1" placeholder="Email" />
   
          <el-input v-model="input.password" class="bounds-1" placeholder="Password" type="password" />
          <el-button style="margin-top : 5%; margin-left : 40%;" class="push-s4" @click="register">Register</el-button>

        </div>
       
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'Register',
  data() {
    return {
      input: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register() {
      const vm = this
      this.$axios({
        method: 'post',
        url: 'http://127.0.0.1:3000/models/users',
        data: vm.input
      }).then(response => {
        if (response.data === 'done') {
          this.$message({ type: 'success', message: 'Welcome' })
          vm.$router.push('/')
        }
      })
    }
  }
}
</script>
<style lang="css" scoped>
body{
}
</style>
