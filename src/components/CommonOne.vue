<template>
  <div class="one">
    <div class="one_body">
      <common-img
        :tags="value"
        class_name="dianzulu_1"
        tag_index="1"
      ></common-img>
      <common-img
        :tags="value"
        class_name="dianzulu_2"
        tag_index="2"
      ></common-img>
    </div>
  </div>
</template>

<script>
import { dianzulu_state } from "../../api/index";
import CommonImg from "../components/Commonone_img";
export default {
  name: "Common_one",
  data() {
    return {
      value: [],
      setInte: ""
    };
  },
  components: {
    CommonImg
  },
  async created() {
    const { data } = await dianzulu_state();
    this.value = data.data;
    this.setInte = setInterval(async () => {
      const { data } = await dianzulu_state();
      this.value = data.data;
    }, 20500);
  },
  destroyed() {
    clearInterval(this.setInte);
  }
};
</script>

<style lang="scss" scoped>
.one {
  height: 100%;
  background: url("../assets/images/back_one.png");
  background-size: cover;
  .one_body {
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
