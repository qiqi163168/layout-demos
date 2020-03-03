<template>
<div id="app" class="fill-vertical">
    <el-container class="fill-vertical">
        <!-- 顶部导航 -->
        <el-header class="header_pane flex-row" height="60px" style="justify-content: space-between;">
            <div><div class="title_img" style="width: 45px; height: 45px;"></div><div class="sys_title" style="vertical-align: top; margin-left: 20px">积水监测</div></div>
            <div class="top_bar_right" style="display: flex; align-items: center">
                <div class="icon" @click="goAlarm">
                    <el-badge :value="alarmCount"><div class="warning image"></div></el-badge>
                </div>
                <div class="icon" @click="tomain"><div class="home image"></div></div>
                <div class="icon"><div class="navi image"></div></div>
            </div>
        </el-header>

        <!-- 内容区 -->
        <el-container class="main-container">
            <el-aside ref="drawerMenu" width="250px" class="drawer">
                <!-- 侧边导航展现、隐藏按钮 -->
                <div class="drawer-open" @click="drawerClose();"><img v-if="isOpen" class="image" src="${ctx}/static/images/drawer_close.svg"/><img class="image" v-else src="${ctx}/static/images/drawer_open.svg"/></div>
                <!-- 侧边导航 -->
                <el-menu default-active="1-1" class="menuItemsPart">
                    <!-- 工单管理 -->
                    <router-link to="/device-map">
                        <el-menu-item index="1" class="menu-item">
                            <template slot="title">
                                <div class="link-menu-image menu_map"></div>
                                <span class="link-menu">设备地图</span>
                            </template>
                        </el-menu-item>
                    </router-link>
                    <!-- 设备列表 -->
                    <router-link to="/device-list">
                        <el-menu-item index="2" class="menu-item">
                            <template slot="title">
                                <div class="link-menu-image menu_device"></div>
                                <span class="link-menu">设备列表</span>
                            </template>
                        </el-menu-item>
                    </router-link>
                    <!-- 报警管理 -->
                    <el-submenu index="3" class="menu-item">
                        <template slot="title">
                            <div class="link-menu-image menu_alarm"></div>
                            <span class="link-menu">报警管理</span>
                        </template>
                        <router-link to="/alarm-current" class="sub-menu-link"><el-menu-item index="3-1" class="menu-subitem"><span class="link-item">实时报警</span></el-menu-item></router-link>
                        <router-link to="/alarm-history" class="sub-menu-link"><el-menu-item index="3-2" class="menu-subitem"><span class="link-item">历史报警</span></el-menu-item></router-link>
                    </el-submenu>
                    <!-- 数据分析 -->
                    <el-submenu index="4" class="menu-item">
                        <template slot="title">
                            <div class="link-menu-image menu-statistic"></div>
                            <span class="link-menu">数据分析</span>
                        </template>
                        <router-link to="/analysis-data" class="sub-menu-link"><el-menu-item index="4-1" class="menu-subitem"><span class="link-item">历史数据</span></el-menu-item></router-link>
                        <router-link to="/analysis-level" class="sub-menu-link"><el-menu-item index="4-2" class="menu-subitem"><span class="link-item">水位分析</span></el-menu-item></router-link>
                        <router-link to="/analysis-alarm" class="sub-menu-link"><el-menu-item index="4-2" class="menu-subitem"><span class="link-item">积水预警</span></el-menu-item></router-link>
                    </el-submenu>
                    <!-- 基础设置 -->
                    <router-link to="/setting">
                        <el-menu-item index="5" class="menu-item">
                            <template slot="title">
                                <div class="link-menu-image menu-setting"></div>
                                <span class="link-menu">基础设置</span>
                            </template>
                        </el-menu-item>
                    </router-link>
                </el-menu>
            </el-aside>

            <el-container class="content">
                <router-view></router-view>
            </el-container>
        </el-container>
    </el-container>
    <div style="height:60px;">
        <div class="footer">
            ©中电海康集团有限公司,All rights reserved.
        </div>
    </div>
</div>

</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  created () {},
  mounted () {},
  watch: {},
  methods: {}
}
</script>

<style lang="stylus" scoped>

</style>
