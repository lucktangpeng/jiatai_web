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
          width="390"
          height="225"
          src="../assets/images/five_2_success.png"
        />

        <img
          v-if="content && content.pv === 'error'"
          width="390"
          height="225"
          src="../assets/images/five_2_error.png"
        />
        <img
          v-if="content && content.pv === 'down'"
          width="390"
          height="225"
          src="../assets/images/five_2_down.png"
        />
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "CommonFive_2_img",
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
      this.$router.push({ path: `/defail_five_2/${this.tag_index}` });
    }
  },
  computed: {
    content() {
      if (this.tags.length) {
        const value = this.tags.filter(val => {
          return val.tagname.split("自动流水机")[1] === this.tag_index;
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
  .shebei_2_1_#{$i} {
    position: absolute;
    top: 500px - $i * 75px;
    left: 890px + $i * 130px;
    z-index: 20 - $i;
  }
}
</style>
