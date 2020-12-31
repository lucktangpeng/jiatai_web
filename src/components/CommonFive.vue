<template>
  <div class="five">
    <div class="five_body">
      <common-img
        :tags="value"
        class_name="shebei_1_1_1"
        tag_index="1号"
      ></common-img>
      <common-img
        :tags="value"
        class_name="shebei_1_1_2"
        tag_index="2号"
      ></common-img>
      <common-img
        :tags="value"
        class_name="shebei_1_1_3"
        tag_index="3号"
      ></common-img>
      <common-img
        :tags="value"
        class_name="shebei_1_2_1"
        tag_index="4号"
      ></common-img>
      <common-img
        :tags="value"
        class_name="shebei_1_2_2"
        tag_index="5号"
      ></common-img>
      <common-img
        :tags="value"
        class_name="shebei_1_3_1"
        tag_index="6号"
      ></common-img>
      <common-img
        :tags="value"
        class_name="shebei_1_3_2"
        tag_index="6号"
      ></common-img>
      <common-img
        :tags="value"
        class_name="shebei_1_4_1"
        tag_index="7号"
      ></common-img>
      <common-img
        :tags="value"
        class_name="shebei_1_4_2"
        tag_index="8号"
      ></common-img>
      <common-img2
        :tags="value2"
        class_name="shebei_2_1_1"
        tag_index="1号"
      ></common-img2>
      <common-img2
        :tags="value2"
        class_name="shebei_2_1_2"
        tag_index="2号"
      ></common-img2>
      <common-img2
        :tags="value2"
        class_name="shebei_2_1_3"
        tag_index="3号"
      ></common-img2>
      <common-img3
        :tags="value3"
        class_name="shebei_1_1_1"
        tag_index="01"
      ></common-img3>
      <common-img3
        :tags="value3"
        class_name="shebei_1_1_2"
        tag_index="02"
      ></common-img3>
      <common-img3
        :tags="value3"
        class_name="shebei_1_1_3"
        tag_index="03"
      ></common-img3>
    </div>
  </div>
</template>

<script>
import { dianhan_state, liushui_state, luosiji_state } from "../../api/index";
import CommonImg from "./CommonFive_1_img";
import CommonImg2 from "./CommonFive_2_img";
import CommonImg3 from "./CommonFive_3_img";
export default {
  name: "CommonFive",
  data() {
    return {
      value: [],
      value2: [],
      value3: []
    };
  },
  created() {
    this.getValue();
    this.getValue2();
    this.getValue3();
  },
  methods: {
    async getValue() {
      const { data } = await dianhan_state();
      console.log(data);
      data.data.forEach(val => {
        val.tagname = val.tagname.split("\\")[2];
        this.deviceStatus(val);
      });
      this.value = data.data;
    },
    async getValue2() {
      const { data } = await liushui_state();
      console.log(data);
      data.data.forEach(val => {
        val.tagname = val.tagname.split("\\")[2];
        this.deviceStatus(val);
      });
      this.value2 = data.data;
    },
    async getValue3() {
      const { data } = await luosiji_state();
      data.data.forEach(val => {
        val.tagname = val.tagname.split("\\")[2];
        this.deviceStatus(val);
      });
      this.value3 = data.data;
    }
  },
  components: {
    CommonImg,
    CommonImg2,
    CommonImg3
  }
};
</script>

<style lang="scss" scoped>
.five {
  height: 100%;
  background: url("../assets/images/five_back.png");
  background-size: cover;
  .five_body {
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
