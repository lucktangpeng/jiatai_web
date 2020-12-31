<template>
  <div class="main">
    <!-- <img src="../assets/images/sucess.png" alt="" /> -->

    <div class="shebei_body">
      <common-img
        v-if="value"
        :tag="value"
        tag_index="30"
        class_name="shebei_1"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="29"
        class_name="shebei_8"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="28"
        class_name="shebei_9"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="27"
        class_name="shebei_10"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="26"
        class_name="shebei_11"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="25"
        class_name="shebei_12"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="24"
        class_name="shebei_13"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="23"
        class_name="shebei_14"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="22"
        class_name="shebei_15"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="21"
        class_name="shebei_16"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="20"
        class_name="shebei_17"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="19"
        class_name="shebei_18"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="18"
        class_name="shebei_two_1"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="17"
        class_name="shebei_two_2"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="16"
        class_name="shebei_two_3"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="15"
        class_name="shebei_two_4"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="14"
        class_name="shebei_two_5"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="13"
        class_name="shebei_two_6"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="12"
        class_name="shebei_two_7"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="11"
        class_name="shebei_two_8"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="10"
        class_name="shebei_two_9"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="09"
        class_name="shebei_two_10"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="08"
        class_name="shebei_two_11"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="07"
        class_name="shebei_two_12"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="06"
        class_name="shebei_two_13"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="05"
        class_name="shebei_two_14"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="04"
        class_name="shebei_two_15"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="03"
        class_name="shebei_two_16"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="02"
        class_name="shebei_two_17"
        :img_url="img_url"
      ></common-img>
      <common-img
        v-if="value"
        :tag="value"
        tag_index="01"
        class_name="shebei_two_18"
        :img_url="img_url"
      ></common-img>
    </div>
  </div>
</template>

<script>
const path = require("path");
import CommonImg from "./CommonZhuImg.vue";
import { zhusu_state } from "../../api/index";
export default {
  name: "CommonMain",
  data() {
    return {
      value: "",
      setInte: "",
    };
  },
  components: {
    CommonImg,
  },
  created() {
    this.getValue();
    this.setInte = setInterval(this.getValue, 25000);
  },
  destroyed() {
    clearInterval(this.setInte);
  },
  methods: {
    async getValue() {
      const { data } = await zhusu_state();
      data.data.forEach((val) => {
        // 格式化tagname字段
        val.tagname = val.tagname.split("\\")[2];
        // 格式化pv字段
        if (val.pv === 9 || val.pv === 5 || val.pv === 16) {
          val.pv = "success";
        } else if (val.pv === 0 || val.pv === 3 || val.pv === 16) {
          val.pv = "down";
        }
      });
      this.value = data.data;
    },
  },
  computed: {
    img_url() {
      const img_status = {
        success: path.resolve(__dirname, "../assets/images/sucess.png"),
        error: path.resolve(__dirname, "../assets/images/error.png"),
        down: path.resolve(__dirname, "../assets/images/down.png"),
      };
      return img_status;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  background: url("../assets/images/two.png");
  background-size: cover;

  .shebei_body {
    // background: violet;
    height: 100%;
    width: 100%;
    $first_index: 18;
    @for $i from 1 through $first_index {
      .shebei_#{$i} {
        position: absolute;
        top: 755px - $i * 35px;
        left: 208px + $i * 62px;
        z-index: 20 - $i;
      }
    }
    .shebei_0 {
      position: absolute;
      top: 720px;
      left: 270px;
      z-index: 20;
    }
    .shebei_two_0 {
      position: absolute;
      top: 805px;
      left: 400px;
      z-index: 20;
    }
    // .shebei_two_1 {
    //   position: absolute;
    //   top: 772px;
    //   left: 460px;
    //   z-index: 19;
    // }
    @for $i from 1 through $first_index {
      .shebei_two_#{$i} {
        position: absolute;
        top: 805px - $i * 34px;
        left: 400px + $i * 58px;
        z-index: 20 - $i;
      }
    }
    // .shebei_two_1 {
    //   position: absolute;
    //   top: 765px;
    //   left: 470px;
    //   z-index: 19;
    // }
    // .shebei_2 {
    //   position: absolute;
    //   top: 685px;
    //   left: 330px;
    //   z-index: 19;
    // }
    // .shebei_3 {
    //   position: absolute;
    //   top: 650px;

    //   left: 390px;
    //   z-index: 18;
    // }
  }
}
</style>
