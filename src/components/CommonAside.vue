<template>
  <div class="aside">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <!-- <el-menu-item index="/one">
        <i class="el-icon-menu"></i>
        <span slot="title">楼层一</span>
      </el-menu-item> -->
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>楼层一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/one">电阻炉</el-menu-item>
          <el-menu-item index="/dian">电控柜</el-menu-item>
          <!-- <el-menu-item index="1-2">自动机车间</el-menu-item> -->
        </el-menu-item-group>
      </el-submenu>
      <!-- <el-menu-item index="/">
        <i class="el-icon-document"></i>
        <span slot="title">楼层二</span>
      </el-menu-item> -->
      <el-menu-item index="/">
        <i class="el-icon-document"></i>
        <span slot="title">楼层二</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>楼层三</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/three">连接器</el-menu-item>
          <el-menu-item index="/three_chudian">配件车间</el-menu-item>
          <!-- <el-menu-item index="1-2">自动机车间</el-menu-item> -->
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/four">
        <i class="el-icon-document"></i>
        <span slot="title">楼层四</span>
      </el-menu-item>
      <el-menu-item index="/five">
        <i class="el-icon-document"></i>
        <span slot="title">楼层五</span>
      </el-menu-item>
      <el-menu-item index="/six">
        <i class="el-icon-document"></i>
        <span slot="title">楼层六</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "CommonAside",
  methods: {
    handleOpen() {},
    handleClose() {}
  }
};
</script>

<style lang="scss" scoped>
.aside {
  height: calc(100vh - 60px);
  padding-top: 70px;
  z-index: 10;
  overflow: hidden;
  background: url("../assets/images/aside.png");
  /deep/ .el-icon-arrow-down {
    &::before {
      content: none;
    }
  }
}
</style>
