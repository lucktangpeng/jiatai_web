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
          src="../assets/images/four_6_success.png"
        />
        <img
          v-if="content.pv === 'error'"
          width="243"
          height="154"
          src="../assets/images/four_6_error.png"
        />
        <img
          v-if="content.pv === 'down'"
          width="243"
          height="154"
          src="../assets/images/four_6_down.png"
        />
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "CommonThree_4_img",
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
      this.$router.push({ path: `/detail_three_4/${this.tag_index}` });
    }
  },
  computed: {
    content() {
      if (this.tags.length) {
        const value = this.tags.filter(val => {
          return val.tagname.split("线1_镭雕机")[1] === this.tag_index;
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
$first_index: 4;
@for $i from 1 through $first_index {
  .shebei_4_#{$i} {
    position: absolute;
    top: 280px - $i * 110px;
    left: 1300px + $i * 230px;
    z-index: 20 + $i;
  }
}
</style>
