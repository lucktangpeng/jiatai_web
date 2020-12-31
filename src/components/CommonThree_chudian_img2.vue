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
          width="154"
          height="125"
          src="../assets/images/chudian_2_success.png"
        />
        <img
          v-if="content.pv === 'error'"
          width="154"
          height="125"
          src="../assets/images/chudian_2_error.png"
        />
        <img
          v-if="content.pv === 'down'"
          width="154"
          height="125"
          src="../assets/images/chudian_2_down.png"
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
      type: Array,
    },
    class_name: {
      type: String,
    },
    tag_index: {
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$router.push({ path: `/detail_three_chudian_2/${this.tag_index}` });
    },
  },
  computed: {
    content() {
      if (this.tags.length) {
        const value = this.tags.filter((val) => {
          if (val.tagname.indexOf("双金分拣机") !== -1) {
            return val.tagname.split("双金分拣机")[1] === this.tag_index;
          } else {
            return val.tagname.split("自动铆合机")[1] === this.tag_index;
          }
        });
        return value[0];
      } else {
        return "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$first_index: 2;
@for $i from 1 through $first_index {
  .zidong_6_#{$i} {
    position: absolute;
    top: 700px - $i * 85px;
    left: 550px + $i * 145px;
    z-index: 50 - $i;
  }
}
</style>
