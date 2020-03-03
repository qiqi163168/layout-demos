<template>
  <div id="searchbox-container-common">
    <ul @click="heightToggle">
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      height: 50
    }
  },
  computed: {},
  created () {},
  mounted () {},
  watch: {},
  methods: {
    heightToggle () {
      let _height = this.height
      if (_height === 50) {
        document.getElementById('searchbox-container-common').style.height = '100px'
        this.height = 100
      } else {
        document.getElementById('searchbox-container-common').style.height = '50px'
        this.height = 50
      }
      // 重新计算tableHeight
      this.tableHeightChange()
    },
    // 重新计算tableHeight，不然会另外撑开一个滚动条
    tableHeightChange () {
      this.$emit('tableHeightChange', this.height)
    }
  }
}
</script>

<style lang="stylus">
#searchbox-container-common {
  height: 50px;
}
</style>
