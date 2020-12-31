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
          width="149"
          height="107"
          src="../assets/images/four_1_success.png"
        />

        <img
          v-if="content && content.pv === 'error'"
          width="149"
          height="107"
          src="../assets/images/four_1_error.png"
        />
        <img
          v-if="content && content.pv === 'down'"
          width="149"
          height="107"
          src="../assets/images/four_1_down.png"
        />
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "CommonFour_1_img",
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
      this.$router.push({ path: `/defail_four_1/${this.tag_index}` });
    }
  },
  computed: {
    content() {
      if (this.tags.length) {
        const value = this.tags.filter(val => {
          return val.tagname.split("轴芯")[1] === this.tag_index;
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
  .shebei_1_1_#{$i} {
    position: absolute;
    top: 1035px - $i * 65px;
    left: 390px + $i * 110px;
    z-index: 20 - $i;
  }
}
$first_index: 3;
@for $i from 1 through $first_index {
  .shebei_1_2_#{$i} {
    position: absolute;
    top: 940px - $i * 65px;
    left: 230px + $i * 110px;
    z-index: 20 - $i;
  }
}
</style>
