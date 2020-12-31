<template>
  <div class="dian">
    <div class="dian_body">
      <common-img class_name="dian_1" tag_index="315KVA_1楼"></common-img>
      <common-img class_name="dian_2" tag_index="630KVA_1楼"></common-img>
      <common-img class_name="dian_3" tag_index="_2楼"></common-img>
      <common-img class_name="dian_4" tag_index="_3楼"></common-img>
      <common-img class_name="dian_5" tag_index="_4楼"></common-img>
      <common-img class_name="dian_6" tag_index="_5楼"></common-img>
    </div>
  </div>
</template>

<script>
import CommonImg from "./CommonDianImg";
export default {
  name: "CommonDian",
  components: {
    CommonImg
  }
};
</script>

<style lang="scss" scoped>
.dian {
  height: 100%;
  background: url("../assets/images/dian_back.png");
  background-size: cover;
  .dian_body {
    height: 100%;
    width: 100%;
  }
}
</style>
