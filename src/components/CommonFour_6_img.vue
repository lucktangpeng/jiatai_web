<template>
  <div>
    <el-popover
      placement="top-start"
      width="100"
      trigger="hover"
      :content="name ? name : content.tagname"
    >
      <div
        @click="handleClick"
        slot="reference"
        :class="class_name"
        style="display: inline-block;"
      >
        <img
          v-if="content && content.pv === 'success'"
          width="179"
          height="118"
          src="../assets/images/four_6_success.png"
        />
        <img
          v-if="content && content.pv === 'error'"
          width="179"
          height="118"
          src="../assets/images/four_6_error.png"
        />
        <img
          v-if="content && content.pv === 'down'"
          width="179"
          height="118"
          src="../assets/images/four_6_down.png"
        />
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "CommonFour_6_img",
  props: {
    tags: {
      type: Array
    },
    class_name: {
      type: String
    },
    tag_index: {
      type: String
    },
    name: {
      type: String
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$router.push({ path: `/defail_four_6/${this.tag_index}` });
    }
  },
  computed: {
    content() {
      if (this.tags.length) {
        const value = this.tags.filter(val => {
          return val.tagname.split("线")[1] === this.tag_index;
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
$first_index: 3;
@for $i from 1 through $first_index {
  .shebei_6_1_#{$i} {
    position: absolute;
    top: 710px - $i * 65px;
    left: 40px + $i * 120px;
    z-index: 20 - $i;
  }
}
</style>
