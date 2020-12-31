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
          src="../assets/images/four_4_success.png"
        />
        <img
          v-if="content && content.pv === 'error'"
          width="130"
          height="126"
          src="../assets/images/four_4_error.png"
        />
        <img
          v-if="content && content.pv === 'down'"
          width="130"
          height="126"
          src="../assets/images/four_4_down.png"
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
      this.$router.push({ path: `/defail_four_4/${this.tag_index}` });
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
// .shebei_4_1_1 {
//   position: absolute;
//   top: 550px;
//   left: 620px;
//   z-index: 21;
// }
$first_index: 15;
@for $i from 1 through $first_index {
  .shebei_4_1_#{$i} {
    position: absolute;
    top: 525px - $i * 41px;
    left: 378px + $i * 70px;
    z-index: 30 - $i;
  }
}
</style>
