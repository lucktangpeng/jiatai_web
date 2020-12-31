<template>
  <div>
    <el-popover
      placement="top-start"
      width="100"
      trigger="hover"
      :content="content ? content.tagname : ''"
    >
      <div
        @click="handleClick"
        slot="reference"
        :class="class_name"
        style="display: inline-block;"
      >
        <img
          v-if="content.pv === 'success'"
          width="243"
          height="154"
          src="../assets/images/three_3_success.png"
        />
        <img
          v-if="content.pv === 'error'"
          width="243"
          height="154"
          src="../assets/images/three_3_error.png"
        />
        <img
          v-if="content.pv === 'down'"
          width="243"
          height="154"
          src="../assets/images/three_3_down.png"
        />
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "CommonThree_3_img",
  props: {
    tags: {
      type: Array
    },
    class_name: {
      type: String
    },
    tag_index: {
      type: String
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$router.push({ path: `/detail_three_3/${this.tag_index}` });
    }
  },
  computed: {
    content() {
      if (this.tags.length) {
        const value = this.tags.filter(val => {
          if (val.tagname.indexOf("KSD688_2组装机") !== -1) {
            return val.tagname.split("KSD688_2组装机")[1] === this.tag_index;
          }
          if (val.tagname.indexOf("KSD688_3组装机") !== -1) {
            return val.tagname.split("KSD688_3组装机")[1] === this.tag_index;
          }
          if (val.tagname.indexOf("KSD688_P组装机") !== -1) {
            return val.tagname.split("KSD688_P组装机")[1] === this.tag_index;
          }
        });
        return value[0];
      } else {
        return "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// .shebei_3_2 {
//   position: absolute;
//   top: 570px;
//   left: 720px;
//   z-index: 19;
// }
// .shebei_3_3 {
//   position: absolute;
//   top: 470px;
//   left: 920px;
//   z-index: 19;
// }
// .shebei_2_2 {
//   position: absolute;
//   top: 600px;
//   left: 475px;
//   z-index: 19;
// }
$first_index: 4;
@for $i from 1 through $first_index {
  .shebei_3_#{$i} {
    position: absolute;
    top: 730px - $i * 110px;
    left: 30px + $i * 230px;
    z-index: 20 + $i;
  }
}
</style>
