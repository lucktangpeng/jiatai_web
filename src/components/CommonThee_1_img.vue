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
          v-if="content && content.pv === 'success'"
          width="316"
          height="188"
          src="../assets/images/three_1_success.png"
        />
        <img
          v-if="content && content.pv === 'error'"
          width="316"
          height="188"
          src="../assets/images/three_1_error.png"
        />
        <img
          v-if="content && content.pv === 'down'"
          width="316"
          height="188"
          src="../assets/images/three_1_down.png"
        />
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "CommonThree_1_img",
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
      this.$router.push({ path: `/detail_three_1/${this.tag_index}` });
    }
  },
  computed: {
    content() {
      if (this.tags.length) {
        const value = this.tags.filter(val => {
          return val.tagname.split("连接器自动装配线")[1] === this.tag_index;
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
// .shebei_2_1 {
//   position: absolute;
//   top: 570px;
//   left: 420px;
//   z-index: 19;
// }
// .shebei_1_2 {
//   position: absolute;
//   top: 800px;
//   left: 850px;
//   z-index: 20;
// }
// .shebei_1_3 {
//   position: absolute;
//   top: 750px;
//   left: 950px;
//   z-index: 19;
// }
// .shebei_1_3 {
//   position: absolute;
//   top: 680px;
//   left: 920px;
//   z-index: 19;
// }
$first_index: 8;
@for $i from 1 through $first_index {
  .shebei_1_#{$i} {
    position: absolute;
    top: 880px - $i * 70px;
    left: 360px + $i * 130px;
    z-index: 20 - $i;
  }
}
</style>
