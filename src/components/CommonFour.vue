<template>
  <div class="four">
    <div class="four_body">
      <common-img
        :tags="value"
        class_name="shebei_1_1_2"
        tag_index="368_5自动机1号"
      ></common-img>
      <common-img
        :tags="value"
        class_name="shebei_1_1_3"
        tag_index="368_5自动机2号"
      ></common-img>
      <common-img
        :tags="value"
        class_name="shebei_1_2_1"
        tag_index="688_6自动机1号"
      ></common-img>
      <common-img
        :tags="value"
        class_name="shebei_1_2_2"
        tag_index="688_6自动机2号"
      ></common-img>
      <common-img
        :tags="value"
        class_name="shebei_1_2_3"
        tag_index="688_6自动机3号"
      ></common-img>
      <common-img6
        :tags="value_6"
        class_name="shebei_6_1_1"
        tag_index="1_镭雕机"
        name="检验一线"
      ></common-img6>
      <common-img6
        :tags="value_6"
        class_name="shebei_6_1_2"
        tag_index="2_镭雕机"
        name="检验二线"
      ></common-img6>
      <!-- <common-img2
        :tags="value_2"
        class_name="shebei_2_1_1"
        tag_index="15"
      ></common-img2> -->
      <common-img2
        :tags="value_2"
        class_name="shebei_2_1_1"
        tag_index="14"
      ></common-img2>
      <common-img2
        :tags="value_2"
        class_name="shebei_2_1_2"
        tag_index="13"
      ></common-img2>
      <common-img2
        :tags="value_2"
        class_name="shebei_2_1_3"
        tag_index="12"
      ></common-img2>
      <common-img3
        :tags="value_2"
        class_name="shebei_3_1_1"
        tag_index="9"
      ></common-img3>
      <common-img3
        :tags="value_2"
        class_name="shebei_3_1_2"
        tag_index="11"
      ></common-img3>
      <common-img3
        :tags="value_2"
        class_name="shebei_3_2_1"
        tag_index="10"
      ></common-img3>
      <common-img3
        :tags="value_2"
        class_name="shebei_3_2_2"
        tag_index="12"
      ></common-img3>
      <common-img2
        :tags="value_2"
        class_name="shebei_2_1_7"
        tag_index="8"
      ></common-img2>
      <common-img2
        :tags="value_2"
        class_name="shebei_2_1_8"
        tag_index="7"
      ></common-img2>
      <common-img2
        :tags="value_2"
        class_name="shebei_2_1_9"
        tag_index="6"
      ></common-img2>
      <common-img2
        :tags="value_2"
        class_name="shebei_2_1_10"
        tag_index="5"
      ></common-img2>
      <common-img2
        :tags="value_2"
        class_name="shebei_2_1_11"
        tag_index="4"
      ></common-img2>
      <common-img2
        :tags="value_2"
        class_name="shebei_2_1_12"
        tag_index="3"
      ></common-img2>
      <common-img2
        :tags="value_2"
        class_name="shebei_2_1_13"
        tag_index="2"
      ></common-img2>
      <!-- <common-img2
        :tags="value_2"
        class_name="shebei_2_1_14"
        tag_index="1"
      ></common-img2> -->
      <!-- KSD368-5 自动装配线 -->
      <common-img4
        :tags="value_4"
        class_name="shebei_4_1_1"
        tag_index="368_5自动装配线1号"
      ></common-img4>
      <common-img4
        :tags="value_4"
        class_name="shebei_4_1_2"
        tag_index="368_5自动装配线2号"
      ></common-img4>
      <common-img4
        :tags="value_4"
        class_name="shebei_4_1_3"
        tag_index="368_5自动装配线3号"
      ></common-img4>
      <common-img5
        :tags="value_4"
        class_name="shebei_5_1_1"
        tag_index="368_5自动装配线6号"
      ></common-img5>
      <common-img5
        :tags="value_4"
        class_name="shebei_5_1_2"
        tag_index="368_5自动装配线4号"
      ></common-img5>
      <common-img5
        :tags="value_4"
        class_name="shebei_5_1_3"
        tag_index="368_5自动装配线5号"
      ></common-img5>
      <common-img5
        :tags="value_4"
        class_name="shebei_5_2_1"
        tag_index="368_5自动装配线9号"
      ></common-img5>
      <common-img5
        :tags="value_4"
        class_name="shebei_5_2_2"
        tag_index="368_5自动装配线7号"
      ></common-img5>
      <common-img5
        :tags="value_4"
        class_name="shebei_5_2_3"
        tag_index="368_5自动装配线8号"
      ></common-img5>
      <common-img5
        :tags="value_4"
        class_name="shebei_5_3_2"
        tag_index="688_K自动装配机"
      ></common-img5>
      <common-img5
        :tags="value_4"
        class_name="shebei_5_3_3"
        tag_index="368_5自动装配线10号"
      ></common-img5>
    </div>
  </div>
</template>

<script>
import {
  zhouxin_368_state,
  zhouxin_688_state,
  four_leidiao_state,
  four_zhizaoxian_state,
  zhuangpeixian_368_state,
} from "../../api/index";
import CommonImg from "./CommonFour_1_img";
import CommonImg2 from "./CommonFour_2_img";
import CommonImg3 from "./CommonFour_3_img";
import CommonImg4 from "./CommonFour_4_img";
import CommonImg5 from "./CommonFour_5_img";
import CommonImg6 from "./CommonFour_6_img";

export default {
  name: "CommonFour",
  data() {
    return {
      value: [],
      value_2: [],
      value_4: [],
      value_6: [],
    };
  },
  components: {
    CommonImg,
    CommonImg2,
    CommonImg3,
    CommonImg4,
    CommonImg5,
    CommonImg6,
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
      const [data_1, data_2] = await Promise.all([
        zhouxin_368_state(),
        zhouxin_688_state(),
      ]);
      const list = data_1.data.data.concat(data_2.data.data);
      list.forEach((val) => {
        val.tagname = val.tagname.split("\\")[2];
        console.log(val.tagname);
        console.log(val.pv);
        if (val.pv === 100 || val.pv === 200) {
          val.pv = "success";
        } else if (val.pv === 300) {
          val.pv = "error";
        } else {
          val.pv = "down";
        }
      });
      this.value = list;
    },
    async getValue_2() {
      const { data } = await four_zhizaoxian_state();
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
    async getValue_4() {
      const { data } = await zhuangpeixian_368_state();
      data.data.forEach((val) => {
        val.tagname = val.tagname.split("\\")[2];
        if (val.pv === 100 || val.pv === 200) {
          val.pv = "success";
        } else if (val.pv === 300) {
          val.pv = "error";
        } else {
          val.pv = "down";
        }
      });
      this.value_4 = data.data;
    },
    async getValue_6() {
      const { data } = await four_leidiao_state();
      data.data.forEach((val) => {
        val.tagname = val.tagname.split("\\")[2];
        if (val.pv === 200) {
          val.pv = "success";
        } else if (val.pv === 300) {
          val.pv = "error";
        } else {
          val.pv = "down";
        }
      });
      this.value_6 = data.data;
    },
    getAll() {
      this.getValue();
      this.getValue_2();
      this.getValue_4();
      this.getValue_6();
    },
  },
};
</script>

<style lang="scss" scoped>
.four {
  height: 100%;
  background: url("../assets/images/four_back.png");
  background-size: cover;
  .four_body {
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
