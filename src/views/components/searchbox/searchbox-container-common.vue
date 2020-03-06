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
      height: 52
    }
  },
  computed: {},
  created () {},
  mounted () {},
  watch: {},
  methods: {
    heightToggle () {
      let _height = this.height
      if (_height === 52) {
        document.getElementById('searchbox-container-common').style.height = '100%'
        this.height = 100
      } else {
        document.getElementById('searchbox-container-common').style.height = '52px'
        this.height = 52
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
  padding: 0px 16px 12px;
  background: pink;
  height: 52px;
}
</style>
