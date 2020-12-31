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
          width="130"
          height="126"
          src="../assets/images/four_5_success.png"
        />
        <img
          v-if="content && content.pv === 'error'"
          width="130"
          height="126"
          src="../assets/images/four_5_error.png"
        />
        <img
          v-if="content && content.pv === 'down'"
          width="130"
          height="126"
          src="../assets/images/four_5_down.png"
        />
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "CommonFour_4_img",
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
      this.$router.push({ path: `/defail_four_5/${this.tag_index}` });
    }
  },
  computed: {
    content() {
      if (this.tags.length) {
        const value = this.tags.filter(val => {
          return val.tagname.split("KSD")[1] === this.tag_index;
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
// .shebei_5_1_1 {
//   position: absolute;
//   top: 530px;
//   left: 870px;
//   z-index: 21;
// }
// .shebei_5_2_1 {
//   position: absolute;
//   top: 500px;
//   left: 815px;
//   z-index: 21;
// }
// .shebei_5_3_1 {
//   position: absolute;
//   top: 470px;
//   left: 760px;
//   z-index: 21;
// }
$first_index: 3;
@for $i from 1 through $first_index {
  .shebei_5_1_#{$i} {
    position: absolute;
    top: 435px - $i * 41px;
    left: 700px + $i * 70px;
    z-index: 20 - $i;
  }
}

$first_index: 3;
@for $i from 1 through $first_index {
  .shebei_5_2_#{$i} {
    position: absolute;
    top: 380px - $i * 41px;
    left: 610px + $i * 70px;
    z-index: 20 - $i;
  }
}
$first_index: 5;
@for $i from 1 through $first_index {
  .shebei_5_3_#{$i} {
    position: absolute;
    top: 365px - $i * 41px;
    left: 455px + $i * 70px;
    z-index: 20 - $i;
  }
}
</style>
