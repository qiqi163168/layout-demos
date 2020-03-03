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
        <!-- header 部分 -->
        <el-header>
          <div class="header">
            <div class="header-left">
              <img src="@/assets/image/font/font-header.png" style="width: 32px; height:32px;">
              <div class="header-title">{{pageTitle}}</div>
            </div>
            <div class="header-right">
              <el-badge :value="alarmCount" class="header-badage"><img src="@/assets/image/font/font-header.png" style="width: 32px; height:32px;"></el-badge>
              <img src="@/assets/image/font/font-header.png" style="width: 32px; height:32px;">
              <img src="@/assets/image/font/font-header.png" style="width: 32px; height:32px;">
            </div>
          </div>
        </el-header>
        <!-- 侧边导航与主体部分 -->
        <el-container>
          <!-- 侧边导航部分 -->
          <el-aside :width="menuWidth">
            <div class="aside-container">
              <div class="menu-control" >
                <img v-if="!isCollapse" class="image right-float" @click="controlMenu" src="@/assets/image/font/font-header.png"/>
                <img class="image right-float" v-else @click="controlMenu" src="@/assets/image/font/font-header.png"/>
              </div>
              <el-menu default-active="1-1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                :collapse="isCollapse"
                text-color="#979AB3"
                active-text-color="#FFFFFF"
                :default-openeds="['1','2','3','4','5','6']">

                <router-link to="/test1">
                  <el-menu-item index="1" class="no-submenu">
                    <i class="icon-nav icon-nav-01"></i>
                    <span slot="title">导航一</span>
                  </el-menu-item>
                </router-link>

                <el-submenu index="2">
                  <template slot="title">
                    <div class="icon-nav icon-nav-02"></div>
                    <span slot="title">导航二</span>
                  </template>
                  <router-link to="/test2"><el-menu-item index="2-1"><div class="icon-nav-small icon-nav-small-02"></div>选项1</el-menu-item></router-link>
                  <el-menu-item index="2-2"><div class="icon-nav-small icon-nav-small-02"></div>选项2</el-menu-item>
                </el-submenu>

                <el-submenu index="3">
                  <template slot="title">
                    <div class="icon-nav icon-nav-03"></div>
                    <span slot="title">导航三</span>
                  </template>
                  <el-menu-item index="3-1"><div class="icon-nav-small icon-nav-small-03"></div>选项1</el-menu-item>
                  <el-menu-item index="3-2"><div class="icon-nav-small icon-nav-small-03"></div>选项2</el-menu-item>
                </el-submenu>

                <el-submenu index="4">
                  <template slot="title">
                    <div class="icon-nav icon-nav-04"></div>
                    <span slot="title">导航四</span>
                  </template>
                  <el-menu-item index="4-1"><div class="icon-nav-small icon-nav-small-04"></div>选项1</el-menu-item>
                  <el-menu-item index="4-2"><div class="icon-nav-small icon-nav-small-04"></div>选项2</el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                  <template slot="title">
                    <div class="icon-nav icon-nav-05"></div>
                    <span slot="title">导航四</span>
                  </template>
                  <el-menu-item index="5-1"><div class="icon-nav-small icon-nav-small-05"></div>选项1</el-menu-item>
                  <el-menu-item index="5-2"><div class="icon-nav-small icon-nav-small-05"></div>选项2</el-menu-item>
                </el-submenu>
                <el-submenu index="6">
                  <template slot="title">
                    <div class="icon-nav icon-nav-06"></div>
                    <span slot="title">导航四</span>
                  </template>
                  <el-menu-item index="6-1"><div class="icon-nav-small icon-nav-small-06"></div>选项1</el-menu-item>
                  <el-menu-item index="6-2"><div class="icon-nav-small icon-nav-small-06"></div>选项2</el-menu-item>
                </el-submenu>
              </el-menu>
            </div>
          </el-aside>

          <!-- 主体部分 -->
          <el-main>
            <div class="main-container">
              <router-view></router-view>
            </div>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
import containerCommon from '@/views/components/container/container-common'

export default {
  components: {
    'container-common': containerCommon
  },
  data () {
    return {
      // newsListShow: null
      // 页面title
      pageTitle: '这里是页面的title',
      // 警报数量
      alarmCount: 12,
      // 菜单是否折叠
      isCollapse: false,
      menuWidth: 54,
      // 菜单高度控制
      clientHeight: '',
      menuHeight: ''
    }
  },
  mounted () {
    // // 获取浏览器可视区域高度
    // this.clientHeight = document.body.clientHeight
    // this.menuHeight = this.clientHeight - 50
    // document.getElementById('menuHeight').style.height = this.menuHeight + 'px'
    // window.onresize = () => {
    //   this.clientHeight = document.body.clientHeight
    //   this.menuHeight = this.clientHeight - 50
    //   document.getElementById('menuHeight').style.height = this.menuHeight + 'px'
    // }
  },
  watch: {
    isCollapse () {
      if (this.isCollapse === true) {
        this.manuWidth = 54
        document.getElementsByClassName('aside-container').style.width = '54px'
      } else {
        this.manuWidth = 200
        document.getElementsByClassName('aside-container').style.width = '200px'
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

// header部分
.header {
  position: relative;

  .header-left {
    position: absolute;
    left: 0px;
    height: 100%;
    // width: 200px;

    img {
      width: 32px;
      height:32px;
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
}

// 左侧菜单
.aside-container {
  padding: 20px 0 20px 0;

  img {
    width: 24px;
    height: 24px;
    margin-left: 14px;
    margin-right: 16px;
  }

  .no-submenu.el-menu-item {
    padding: 0 !important;
    height: 48px;
    line-height: 48px;
    background: #2b324e;
    text-align: left;

    .el-tooltip {
      padding: 0 !important;
    }
  }

  .el-menu {
    border: none;
  }

  .menu-control {
    text-align: right;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }

  .el-submenu {
    background: $color-bg-dark;
  }

  .el-submenu .el-menu-item {
    min-width: 200px;
    height: 48px;
    line-height: 48px;
  }

  .el-menu .el-menu--inline {
    background: $color-bg-middle;
  }

  .el-submenu__title:focus, .el-submenu__title:hover {
    background-color: #2b324e;
    color: #ffffff !important;
  }
  .el-menu-item:focus, .el-menu-item:hover{
    background-color: #454b6d;
    color: #ffffff !important;
  }
  .el-menu-item:focus {
    background: #3D7CFF;
  }
  .el-submenu.is-active .el-submenu__title {
    color: #ffffff !important;
  }
  .el-menu-item.is-active {
    background: #3D7CFF !important;
  }

  .el-menu--collapse {
    width: 54px;

    li {
      height: 40px;
      line-height: 40px;
    }

    a {
      li {
        height: 40px !important;
        line-height: 40px !important;
      }
    }
  }

  .el-submenu__title {
    padding: 0px !important;
    height: 48px;
    line-height: 48px;
  }

  // 一级icon图片类
  .icon-nav {
    width: 24px;
    height: 24px;
    display: inline-block;
    margin-right: 8px;
    margin-left: 14px;
  }
  // 未展开前icon
  .icon-nav-01 {
    background-image: url('./assets/image/font/menu-icon.png');
  }
  .icon-nav-02 {
    background-image: url('./assets/image/font/menu-icon.png');
  }
  .icon-nav-03 {
    background-image: url('./assets/image/font/menu-icon.png');
  }
  .icon-nav-04 {
    background-image: url('./assets/image/font/menu-icon.png');
  }
  .icon-nav-05 {
    background-image: url('./assets/image/font/menu-icon.png');
  }
  .icon-nav-06 {
    background-image: url('./assets/image/font/menu-icon.png');
  }
  // 展开后icon
  .is-active.is-opened {
    .icon-nav-01 {
      background-image: url('./assets/image/font/menu-icon-is-active.png');
    }
    .icon-nav-02 {
      background-image: url('./assets/image/font/menu-icon-is-active.png');
    }
    .icon-nav-03 {
      background-image: url('./assets/image/font/menu-icon-is-active.png');
    }
    .icon-nav-04 {
      background-image: url('./assets/image/font/menu-icon-is-active.png');
    }
    .icon-nav-05 {
      background-image: url('./assets/image/font/menu-icon-is-active.png');
    }
    .icon-nav-06 {
      background-image: url('./assets/image/font/menu-icon-is-active.png');
    }
  }

  // 二级icon图片类
  .icon-nav-small {
    width: 18px;
    height: 18px;
    display: inline-block;
    margin-right: 8px;
  }

  .icon-nav-small-01 {
    background-image: url('./assets/image/font/menu-icon-small.png');
  }
  .icon-nav-small-02 {
    background-image: url('./assets/image/font/menu-icon-small.png');
  }
  .icon-nav-small-03 {
    background-image: url('./assets/image/font/menu-icon-small.png');
  }
  .icon-nav-small-04 {
    background-image: url('./assets/image/font/menu-icon-small.png');
  }
  .icon-nav-small-05 {
    background-image: url('./assets/image/font/menu-icon-small.png');
  }
  .icon-nav-small-06 {
    background-image: url('./assets/image/font/menu-icon-small.png');
  }

  .el-menu-item.is-active {
    .icon-nav-small-01 {
      background-image: url('./assets/image/font/menu-icon-small-is-active.png');
    }
    .icon-nav-small-02 {
      background-image: url('./assets/image/font/menu-icon-small-is-active.png');
    }
    .icon-nav-small-03 {
      background-image: url('./assets/image/font/menu-icon-small-is-active.png');
    }
    .icon-nav-small-04 {
      background-image: url('./assets/image/font/menu-icon-small-is-active.png');
    }
    .icon-nav-small-05 {
      background-image: url('./assets/image/font/menu-icon-small-is-active.png');
    }
    .icon-nav-small-06 {
      background-image: url('./assets/image/font/menu-icon-small-is-active.png');
    }
  }
}

// 左侧菜单 popup
.el-menu--popup-right-start {
  margin-left: 3px !important;
  margin-right: 0px !important;
  min-width: 120px !important;
}

.el-menu--popup {
  padding: 0 !important;

  li.el-menu-item {
    height: 42px;
    line-height: 18px;
    padding: 12px 0 12px 8px !important;
    background: $color-bg-middle;
  }
}

// 主体部分
.main-container {
  background: $color-bg-dark;
  border-radius: 6px;
  width: 100%;
  height: 100%;
}
</style>
