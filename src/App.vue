<template>
  <div id="app">
    <!--  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <div @click="setNewsApi">hello</div>
    </div>
    <router-view/> -->
    <div class='warpper'>
      <el-container>
        <el-header >Header</el-header>
        <el-container>
          <el-aside width="200px" style="background: green">Aside</el-aside>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  // data () {
  //   newsListShow: null
  // },
  methods: {
    setNewsApi () {
      this.$http.post('/news', 'type=top&key=123456').then(res => {
        this.newsListShow = res.data.data
        console.log(this.newsListShow)
      })
    }
  }
}
</script>

<style lang="stylus">
@import './assets/css/global.styl'

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
