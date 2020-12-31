<template>
  <el-container class="back">
    <el-header><common-header></common-header></el-header>
    <el-container>
      <el-aside width="100px"><common-aside></common-aside></el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonHeader from "../components/CommonHeader";
import CommonAside from "../components/CommonAside";
export default {
  name: "home",
  components: {
    CommonHeader,
    CommonAside
  }
};
</script>

<style lang="scss" scoped>
.back {
  background: url("../assets/images/back.png");
  background-size: cover;
}
</style>
