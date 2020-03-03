<template>
  <div class="container-map" id="container-map">this.is.map</div>
</template>

<script>

export default {
  components: {
  },
  props: {},
  data () {
    return {
      // 容器高度自适应
      clientHeight: '',
      containerHeight: '',
    }
  },
  computed: {},
  created () {},
  mounted () {
    // 容器高度自适应
    this.heightChange()
  
    window.onresize = () => {
      this.heightChange()
    }
  },
  watch: {},
  methods: {
    heightChange () {
      this.clientHeight = document.body.clientHeight
      this.containerHeight = this.clientHeight - 50 - 8 * 2
      document.getElementById('container-map').style.height = this.containerHeight + 'px'
    }
  }
}
</script>

<style lang="stylus">
.container-map {
  width: 100%;
  height: 100%;
  background: #f2f2f2;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  // background: red;
}
</style>
