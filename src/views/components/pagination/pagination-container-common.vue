<template>
  <div class="pagination-container-common">
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageNum"
      :page-sizes="sizes"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    // 当前页页码
    pageNum: Number,
    // 当前页条目数
    pageSize: Number,
    // 每页显示个数选择器选项
    sizes: Number,
    // 条目总数
    total: Number
  },
  data () {
    return {
    }
  },
  methods: {
    handleSizeChange (val) {
      this.$emit('sizeChange', val)
    },
    handleCurrentChange (val) {
      this.$emit('curChange', val)
    }
  }
}
</script>

<style lang="stylus">
@import '../../../assets/css/global.styl'

.pagination-container-common {
  text-align: right;
  height: 50px;
  width: 100%;
  padding-top: 10px;
  padding-right: 16px;
  background: $color-bg-light-1;
  border-top: 1px solid #DBDBDB;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
}
</style>
