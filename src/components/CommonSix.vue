<template>
  <div class="six">
    <div class="six_body">
      <common-img
        v-if="value"
        :tags="value"
        tag_index="四工位水壶寿命测试机"
        class_name="shebei_1_1"
      ></common-img>
      <common-img
        v-if="value"
        :tags="value"
        tag_index="六工位水壶寿命测试机2"
        class_name="shebei_2_2"
      ></common-img>
      <common-img
        v-if="value"
        :tags="value"
        tag_index="三工位水壶寿命测试机"
        class_name="shebei_2_3"
      ></common-img>
    </div>
  </div>
</template>

<script>
import { shuihu_state } from "../../api/index";
import CommonImg from "./CommonSix_img";
export default {
  name: "Common_six",
  data() {
    return {
      value: "",
      setInter: ""
    };
  },
  components: {
    CommonImg
  },
  created() {
    this.getValue();
    this.setInter = setInterval(this.getValue, 25000);
  },
  destroyed() {
    clearInterval(this.setInter);
  },
  methods: {
    async getValue() {
      const { data } = await shuihu_state();
      data.data.forEach(val => {
        val.tagname = val.tagname.split("\\")[2];
      });
      this.value = data.data;
    }
  }
};
</script>

<style lang="scss" scoped>
.six {
  height: 100%;
  background: url("../assets/images/back_six.png");
  background-size: cover;
  .six_body {
    height: 100%;
    width: 100%;
    // .shebei_2_1 {
    //   position: absolute;
    //   top: 765px;
    //   left: 470px;
    //   z-index: 19;
    // }
  }
}
</style>
