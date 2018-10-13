<template>
  <div> {{ name }} </div>
</template>

<script>
export default {
  name: 'Posts',
  asyncData(context) {
    return {
      name: context.route.params.id
    }
  },
  data() {
    return {
      name: null,
      age: 123,
      fac: 'cs',
      sayHelloMsg: null
    }
  },
  mounted() {
    const vm = this
    this.$axios({
      method: 'get',
      url: 'https://myapi.dev/api/sayhello'
    }).then(res => {
      vm.sayHelloMsg = res.data
    })
  },
  methods: {
    sayHello() {
      console.log(`my name is ${this.name} and my age is ${this.age}`)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
