<template>
  <div class="chudian">
    <div class="chudian_body">
      <chudian-img
        :tags="value"
        class_name="zidong_1_1"
        tag_index="01"
      ></chudian-img>
      <chudian-img
        :tags="value"
        class_name="zidong_1_2"
        tag_index="02"
      ></chudian-img>
      <chudian-img
        :tags="value"
        class_name="zidong_1_3"
        tag_index="03"
      ></chudian-img>
      <chudian-img
        :tags="value"
        class_name="zidong_1_4"
        tag_index="04"
      ></chudian-img>
      <chudian-img
        :tags="value"
        class_name="zidong_1_5"
        tag_index="05"
      ></chudian-img>
      <chudian-img
        :tags="value"
        class_name="zidong_1_6"
        tag_index="06"
      ></chudian-img>
      <chudian-img
        :tags="value"
        class_name="zidong_2_6"
        tag_index="07"
      ></chudian-img>
      <chudian-img
        :tags="value"
        class_name="zidong_2_5"
        tag_index="08"
      ></chudian-img>
      <chudian-img
        :tags="value"
        class_name="zidong_2_4"
        tag_index="09"
      ></chudian-img>
      <chudian-img
        :tags="value"
        class_name="zidong_2_3"
        tag_index="10"
      ></chudian-img>
      <chudian-img
        :tags="value"
        class_name="zidong_2_2"
        tag_index="11"
      ></chudian-img>
      <chudian-img
        :tags="value"
        class_name="zidong_2_1"
        tag_index="12"
      ></chudian-img>
      <chudian-img
        :tags="value"
        class_name="zidong_3_6"
        tag_index="13"
      ></chudian-img>
      <chudian-img
        :tags="value"
        class_name="zidong_3_5"
        tag_index="14"
      ></chudian-img>
      <chudian-img
        :tags="value"
        class_name="zidong_3_4"
        tag_index="15"
      ></chudian-img>
      <chudian-img
        :tags="value"
        class_name="zidong_3_3"
        tag_index="16"
      ></chudian-img>
      <chudian-img
        :tags="value"
        class_name="zidong_3_2"
        tag_index="17"
      ></chudian-img>
      <chudian-img
        :tags="value"
        class_name="zidong_3_1"
        tag_index="18"
      ></chudian-img>
      <chudian-img
        :tags="value"
        class_name="zidong_4_6"
        tag_index="19"
      ></chudian-img>
      <chudian-img
        :tags="value"
        class_name="zidong_4_5"
        tag_index="20"
      ></chudian-img>
      <chudian-img
        :tags="value"
        class_name="zidong_4_4"
        tag_index="21"
      ></chudian-img>
      <chudian-img
        :tags="value"
        class_name="zidong_4_3"
        tag_index="22"
      ></chudian-img>
      <chudian-img
        :tags="value"
        class_name="zidong_4_2"
        tag_index="23"
      ></chudian-img>
      <chudian-img
        :tags="value"
        class_name="zidong_4_1"
        tag_index="24"
      ></chudian-img>
      <!-- <chudian-img
        :tags="value"
        class_name="zidong_4_1"
        tag_index="25"
      ></chudian-img> -->
      <chudian-img
        :tags="value"
        class_name="zidong_5_4"
        tag_index="25"
      ></chudian-img>
      <chudian-img
        :tags="value"
        class_name="zidong_5_5"
        tag_index="26"
      ></chudian-img>
      <chudian-img
        :tags="value"
        class_name="zidong_6_4"
        tag_index="27"
      ></chudian-img>
      <chudian-img
        :tags="value"
        class_name="zidong_6_5"
        tag_index="28"
      ></chudian-img>
      <chudian-img2
        :tags="value2"
        class_name="zidong_6_1"
        tag_index="1"
      ></chudian-img2>
      <!-- <chudian-img
        :tags="value"
        class_name="zidong_5_3"
        tag_index="1"
      ></chudian-img> -->
      <chudian-img3
        :tags="value3"
        class_name="dianjiao_1_1"
        tag_index="01"
      ></chudian-img3>
      <chudian-img3
        :tags="value3"
        class_name="dianjiao_1_2"
        tag_index="02"
      ></chudian-img3>
      <chudian-img3
        :tags="value3"
        class_name="dianjiao_1_3"
        tag_index="03"
      ></chudian-img3>
      <chudian-img3
        :tags="value3"
        class_name="dianjiao_2_1"
        tag_index="04"
      ></chudian-img3>
      <chudian-img3
        :tags="value3"
        class_name="dianjiao_2_2"
        tag_index="05"
      ></chudian-img3>
      <chudian-img3
        :tags="value3"
        class_name="dianjiao_2_3"
        tag_index="06"
      ></chudian-img3>
    </div>
  </div>
</template>

<script>
import ChudianImg from "./CommonThree_chudian_img";
import ChudianImg2 from "./CommonThree_chudian_img2";
import ChudianImg3 from "./CommonThree_chudian_img3";
import { zidong_state, shuangjin_state, dianjiao_state } from "../../api/index";
export default {
  name: "Three_chudian",
  data() {
    return {
      value: [],
      value2: [],
      value3: [],
      setInte: "",
    };
  },
  components: {
    ChudianImg,
    ChudianImg2,
    ChudianImg3,
  },
  methods: {
    async getValue() {
      const { data } = await zidong_state();
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
    async getValue2() {
      const { data } = await shuangjin_state();
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
      this.value2 = data.data;
    },
    async getValue3() {
      const { data } = await dianjiao_state();
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
      this.value3 = data.data;
    },
    getAll() {
      this.getValue();
      this.getValue2();
      this.getValue3();
    },
  },

  mounted() {
    this.getAll();
    this.setInte = setInterval(this.getAll, 25000);
  },
  destroyed() {
    clearInterval(this.setInte);
  },
};
</script>

<style lang="scss" scoped>
.chudian {
  height: 100%;
  background: url("../assets/images/chudian_back.png");
  background-size: cover;
  .chudian_body {
    height: 100%;
    width: 100%;
  }
}
</style>
