<template>
  <div class="three">
    <div class="three_body">
      <common-img2
        :tags="value"
        class_name="shebei_2_1"
        tag_index="1"
        tag_content="连接器铆合1"
      ></common-img2>
      <common-img2
        :tags="value"
        class_name="shebei_2_2"
        tag_index="2"
        tag_content="连接器铆合1"
      ></common-img2>
      <common-img2
        :tags="value"
        class_name="shebei_2_3"
        tag_index="3"
        tag_content="连接器铆合1"
      ></common-img2>
      <common-img2
        :tags="value"
        class_name="shebei_2_4"
        tag_index="4"
        tag_content="连接器铆合1"
      ></common-img2>
      <common-img2
        :tags="value"
        class_name="shebei_2_5"
        tag_index="5"
        tag_content="连接器铆合1"
      ></common-img2>
      <common-img2
        :tags="value"
        class_name="shebei_2_6"
        tag_index="6"
        tag_content="连接器铆合1"
      ></common-img2>
      <common-img2
        :tags="value"
        class_name="shebei_2_7"
        tag_index="7"
        tag_content="连接器铆合1"
      ></common-img2>
      <!-- 连接器自动装配线 -->
      <common-img1
        :tags="value_1"
        class_name="shebei_1_2"
        tag_index="02"
      ></common-img1>
      <common-img1
        :tags="value_1"
        class_name="shebei_1_3"
        tag_index="03"
      ></common-img1>
      <common-img1
        :tags="value_1"
        class_name="shebei_1_4"
        tag_index="04"
      ></common-img1>
      <common-img1
        :tags="value_1"
        class_name="shebei_1_5"
        tag_index="05"
      ></common-img1>
      <common-img1
        :tags="value_1"
        class_name="shebei_1_6"
        tag_index="06"
      ></common-img1>
      <common-img1
        :tags="value_1"
        class_name="shebei_1_7"
        tag_index="07"
      ></common-img1>
      <common-img1
        :tags="value_1"
        class_name="shebei_1_8"
        tag_index="08"
      ></common-img1>
      <!-- KSD688 -->
      <!-- <common-img3
        :tags="value_2"
        class_name="shebei_3_2"
        tag_index="01"
      ></common-img3> -->
      <common-img3
        :tags="value_2"
        class_name="shebei_3_3"
        tag_index="02"
      ></common-img3>
      <common-img3
        :tags="value_2"
        class_name="shebei_3_4"
        tag_index="03"
      ></common-img3>
      <common-img4
        :tags="leidiao"
        class_name="shebei_4_1"
        tag_index="1"
      ></common-img4>
    </div>
  </div>
</template>

<script>
import {
  lianjieqi_2_state,
  lianjieqi_1_state,
  lianjieqi_3_state,
  three_leidiao_state,
} from "../../api/index";
import CommonImg1 from "./CommonThee_1_img";
import CommonImg2 from "./CommonThee_2_img";
import CommonImg3 from "./CommonThee_3_img";
import CommonImg4 from "./CommonThee_4_img";
export default {
  name: "CommonThree",
  data() {
    return {
      value: [],
      value_1: [],
      value_2: [],
      leidiao: [],
      setInte: "",
    };
  },
  components: {
    CommonImg2,
    CommonImg1,
    CommonImg3,
    CommonImg4,
  },
  created() {
    this.getAll();
    this.setInte = setInterval(this.getAll, 25000);
  },
  destroyed() {
    clearInterval(this.setInte);
  },
  methods: {
    async getValue() {
      const { data } = await lianjieqi_2_state();
      data.data.forEach((val) => {
        val.tagname = val.tagname.split("\\")[2];
        if (val.pv === 100) {
          val.pv = "success";
        } else if (val.pv === 300) {
          val.pv = "error";
        } else {
          val.pv = "down";
        }
      });
      this.value = data.data;
    },
    async getValue_1() {
      const { data } = await lianjieqi_1_state();
      data.data.forEach((val) => {
        val.tagname = val.tagname.split("\\")[2];
        if (val.pv === 100) {
          val.pv = "success";
        } else if (val.pv === 300) {
          val.pv = "error";
        } else {
          val.pv = "down";
        }
      });
      this.value_1 = data.data;
    },
    async getValue_3() {
      const { data } = await lianjieqi_3_state();
      data.data.forEach((val) => {
        val.tagname = val.tagname.split("\\")[2];
        if (val.pv === 100) {
          val.pv = "success";
        } else if (val.pv === 300) {
          val.pv = "error";
        } else {
          val.pv = "down";
        }
      });
      this.value_2 = data.data;
    },
    async getleidiao() {
      const { data } = await three_leidiao_state();
      console.log(data.data);
      data.data.forEach((val) => {
        val.tagname = val.tagname.split("\\")[1];
        if (val.pv === 100) {
          val.pv = "success";
        } else if (val.pv === 300) {
          val.pv = "error";
        } else {
          val.pv = "down";
        }
      });
      this.leidiao = data.data;
    },
    getAll() {
      this.getValue();
      this.getValue_1();
      this.getValue_3();
      this.getleidiao();
    },
    // getTag(num) {
    //   const value = this.value.filter(val => {
    //     return val.tagname.split("连接器铆合机")[1] === num;
    //   });
    //   return value[0].tagname;
    // }
  },
};
</script>

<style lang="scss" scoped>
.three {
  height: 100%;
  background: url("../assets/images/three_back.png");
  background-size: cover;
  .three_body {
    height: 100%;
    width: 100%;
    .shebei_2_1 {
      position: absolute;
      top: 765px;
      left: 470px;
      z-index: 19;
    }
  }
}
</style>
