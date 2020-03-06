<template>
  <div class="container-common">
    <div class="search-wrap" id="search-warp">
      <searchbox-container-common @tableHeightChange="tableHeightChange"></searchbox-container-common>
    </div>
    <div class="table-wrap">
      <table-lamp :tableToggleHeight="tableToggleHeight"></table-lamp>
    </div>
    <div class="pagination-wrap">
      <pagination-container-common :pageNum="pageNum" :pageSize="pageSize" :sizes="sizes" :total="total" />
    </div>
  </div>
</template>

<script>
import searchboxContainerCommon from '@/views/components/searchbox/searchbox-container-common'
import tableLamp from '@/views/components/table/table-lamp'
import paginationContainerCommon from '@/views/components/pagination/pagination-container-common'

export default {
  components: {
    'searchbox-container-common': searchboxContainerCommon,
    'table-lamp': tableLamp,
    'pagination-container-common': paginationContainerCommon
  },
  props: {},
  data () {
    return {
      // 默认值是，searchbox没有展开的高度值
      tableToggleHeight: 50,
      // pagination
      sizes: [100, 200, 300, 400],
      pageSize: 100,
      total: 100,
      pageNum: 1
    }
  },
  computed: {},
  created () {},
  mounted () {},
  watch: {},
  methods: {
    tableHeightChange (val) {
      this.tableToggleHeight = val
    }
  }
}
</script>

<style lang="stylus">
.container-common {
  width: 100%;
  height: 100%;
  background: #f2f2f2;
  border-radius: 6px;
  display: flex;
  flex-direction: column;

  .search-warp {
    background: #f2f2f2;
    
  }
  .table-wrap {
    margin: 0 16px 0;
    height: 100%;
    background: #f2f2f2;
  }
  // 用 sticky footer
  .pagination-wrap {
    width: 100%;
    height: 50px;
    flex: 0 0 auto;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }
}
</style>
