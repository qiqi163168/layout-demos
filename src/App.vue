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
        <el-header>
          <div class="header">
            <div class="header-left">
              <img src="@/assets/image/font/font-header.png" style="width: 32px; height:32px; background:yellow;">
              <div class="header-title">{{pageTitle}}</div>
            </div>
            <div class="header-right">
              <el-badge :value="alarmCount" class="header-badage"><img src="@/assets/image/font/font-header.png" style="width: 32px; height:32px; background:yellow;"></el-badge>
              <img src="@/assets/image/font/font-header.png" style="width: 32px; height:32px; background:yellow;">
              <img src="@/assets/image/font/font-header.png" style="width: 32px; height:32px; background:yellow;">
            </div>
          </div>
        </el-header>
        <el-container>
          <el-aside :width="manuWidth">
            <div class="aside-container">
              <div class="menu-control">
                <img v-if="!isCollapse" class="image right-float" @click="controlMenu" src="@/assets/image/font/font-header.png"/>
                <img class="image right-float" v-else @click="controlMenu" src="@/assets/image/font/font-header.png"/>
              </div>
              <!-- <el-radio-group v-model="isCollapse">
                <el-radio-button :label="false">展开</el-radio-button>
                <el-radio-button :label="true">收起</el-radio-button>
              </el-radio-group> -->
              <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                  </template>
                  <el-menu-item-group>
                    <span slot="title">分组一</span>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                  <i class="el-icon-document"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航四</span>
                </el-menu-item>
              </el-menu>
            </div>
          </el-aside>
          <el-main>
            <div class="main-container">这里是地图</div>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // newsListShow: null
      // 页面title
      pageTitle: '这里是页面的title',
      // 警报数量
      alarmCount: 12,
      // 菜单是否折叠
      isCollapse: true,
      manuWidth: 54
    }
  },
  watch: {
    isCollapse () {
      if (this.isCollapse === true) {
        this.manuWidth = 54
        document.getElementsByClassName('aside-container').style.width = '24px'
      } else {
        this.manuWidth = 200
        document.getElementsByClassName('aside-container').style.width = '170px'
      }
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    controlMenu () {
      this.isCollapse = !this.isCollapse
    },
    setNewsApi () {
      this.$http.post('/news', 'type=top&key=123456').then(res => {
        // this.newsListShow = {"code":"200","data":[{"del":"n","icon":"menu_map","id":11201,"menuName":"设备地图","menuType":"1","parentId":112,"sort":11201,"subMenus":[],"url":"/device-map","visualSystem":false},{"del":"n","icon":"menu_parking","id":11202,"menuName":"车场列表","menuType":"1","parentId":112,"sort":11202,"subMenus":[],"url":"/parking-list","visualSystem":false},{"del":"n","icon":"menu_device","id":11203,"menuName":"设备列表","menuType":"1","parentId":112,"sort":11203,"subMenus":[],"url":"/device-manage","visualSystem":false},{"del":"n","icon":"car_manage","id":11204,"menuName":"车流管理","menuType":"1","parentId":112,"sort":11204,"subMenus":[{"del":"n","icon":"","id":1120401,"menuName":"在场车辆记录","menuType":"1","parentId":11204,"sort":1120401,"subMenus":[],"url":"/real-park","visualSystem":false},{"del":"n","icon":"","id":1120402,"menuName":"历史出场纪录","menuType":"1","parentId":11204,"sort":1120402,"subMenus":[],"url":"/history-park","visualSystem":false}],"url":"","visualSystem":false},{"del":"n","icon":"menu_alarm","id":11205,"menuName":"报警管理","menuType":"1","parentId":112,"sort":11205,"subMenus":[{"del":"n","icon":"","id":1120501,"menuName":"实时报警","menuType":"1","parentId":11205,"sort":1120501,"subMenus":[],"url":"/real-alarm","visualSystem":false},{"del":"n","icon":"","id":1120502,"menuName":"历史报警","menuType":"1","parentId":11205,"sort":1120502,"subMenus":[],"url":"/history-alarm","visualSystem":false}],"url":"","visualSystem":false}],"message":"SUCCESS"}
        console.log(this.newsListShow)
      })
    }
  }
}
</script>

<style lang="stylus">
@import './assets/css/global.styl'

.main-container {
  background: pink;
  height: 100%;
  width: 100%;
}

.header {
  position: relative;
}

.header-left {
  position: absolute;
  left: 0px;
  height: 100%;
  // width: 200px;
  background: red;

  img {
    width: 32px;
    height:32px;
    background:yellow;
    float: left;
    margin-right: 20px;
  }

  .header-title {
    float: left;
    font-family: PingFangSC-Medium;
    font-size: 24px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: justify;
  }
}

.header-right {
  // background: blue;
  position: absolute;
  top: 0px;
  right: 0px;

  .el-badge {
    vertical-align: baseline !important;
  }

  img {
    margin-left: 12px;
  }

  .el-badge__content.is-fixed {
    top: 24px;
    right: 20px;
  }
}

.aside-container {
  padding: 20px 14px 20px 16px;

  img {
    width: 24px;
    height: 24px;
  }

  .menu-control {
    text-align: right;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 170px;
    min-height: 400px;
  }

  .el-submenu .el-menu-item {
    min-width: 170px;
  }

  .el-menu--collapse {
    width: 24px;
  }

  .el-tooltip {
    padding: 0px !important;
  }
}
</style>
