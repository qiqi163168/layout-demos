<template>
  <div class="table-lamp" id="table-lamp">
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      :height="tableHeight"
      :header-cell-style="{background:'#D9DADF', fontFamily: 'MicrosoftYaHei', fontSize: '13px', color: '#242424', letterSpacing: '0', textAlign: 'center', lineHeight: '14px !important', height: '40px', padding: '0px'}"
      :cell-style="{height: '40px', padding: '0px'}"
      stripe
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="30">
      </el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="address" label="地址" width="120" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="abc1" label="地址" width="120" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="abc2" label="地址" width="400" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="abc3" label="地址" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="abc4" label="地址" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="abc5" label="地址" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="abc6" label="地址" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="abc7" label="地址" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="abc8" label="地址" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="abc9" label="地址" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="abc10" label="地址" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="abc11" label="地址" show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['tableToggleHeight'],
  data () {
    return {
      // 为了固定滚动条，要设定高度
      tableHeight: '',
      // 浏览器高度
      clientHeight: '',
      // searchbox高度，因为会伸缩
      searchBoxHeight: '',
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        abc1: '上海市普陀区金沙江路 1518 弄',
        abc2: '上海市普陀区金沙江路 1518 弄',
        abc3: '上海市普陀区金沙江路 1518 弄',
        abc4: '123',
        abc5: '123',
        abc6: '123',
        abc7: '123',
        abc8: '123',
        abc9: '123',
        abc10: '上海市普陀区金沙江路 1518 弄',
        abc11: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  computed: {},
  created () {},
  mounted () {
    // 获取浏览器可视区域高度
    this.tableToggleChange()

    window.onresize = () => {
      this.tableToggleChange()
    }
  },
  watch: {
    tableToggleHeight () {
      this.tableToggleChange()
    }
  },
  methods: {
    tableToggleChange () {
      this.clientHeight = document.body.clientHeight
      this.searchBoxHeight = document.getElementById('search-warp').offsetHeight
      this.tableHeight = this.clientHeight - this.searchBoxHeight - 8 * 2 - 50 * 2
    }
  }
}
</script>

<style lang="stylus">
.table-lamp {
  height: 100%;
  overflow-x: auto;
  max-height: 100%;

  // table表头固定自适应高度，在标签内设置height=“100%"
  // table表头固定自适应宽度
  .el-table--scrollable-y .el-table__body-wrapper {
    width: 100%;
  }

  // 表头checkbox
  .el-table__header {
    .el-checkbox__inner {
      display: none;
    }
  }
  .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #3d7cff !important;
    border-color: #3d7cff !important;
  }

  // 表单斑马纹
  .el-table th, .el-table tr {
    background-color: #F2F2F2;
  }
  .el-table--striped .el-table__body tr.el-table__row--striped td {
    background: #E4E4E4 !important;
  }

  // 表单悬停
  .el-table--enable-row-hover .el-table__body tr:hover>td {
    background: #D4D4D4 !important;
  }

}
</style>
