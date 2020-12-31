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
          width="144"
          height="116"
          src="../assets/images/three_2_success.png"
        />
        <img
          v-if="content.pv === 'error'"
          width="144"
          height="116"
          src="../assets/images/three_2_error.png"
        />
        <img
          v-if="content.pv === 'down'"
          width="144"
          height="116"
          src="../assets/images/three_2_down.png"
        />
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "CommonThree_2_img",
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
      this.$router.push({ path: `/detail_three_2/${this.tag_index}` });
    }
  },
  computed: {
    content() {
      if (this.tags.length) {
        const value = this.tags.filter(val => {
          return val.tagname.split("连接器铆合机")[1] === this.tag_index;
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
// .shebei_2_2 {
//   position: absolute;
//   top: 600px;
//   left: 475px;
//   z-index: 19;
// }
$first_index: 8;
@for $i from 1 through $first_index {
  .shebei_2_#{$i} {
    position: absolute;
    top: 540px + $i * 50px;
    left: 100px + $i * 80px;
    z-index: 20 + $i;
  }
}
</style>
