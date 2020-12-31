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
        <img width="280" height="289" src="../assets/images/dian_success.png" />
      </div>
    </el-popover>
  </div>
</template>

<script>
import { diankong_only } from "../../api/index";
export default {
  name: "CommonDian_img",
  props: {
    class_name: {
      type: String
    },
    tag_index: {
      type: String
    }
  },
  data() {
    return {
      tags: []
      // value: []
    };
  },
  created() {
    this.getValue();
  },
  methods: {
    handleClick() {
      this.$router.push({ path: `/detail_dian/${this.tag_index}` });
    },
    async getValue() {
      const { data } = await diankong_only({ num: this.tag_index });
      data.data.forEach(val => {
        val.tagname = val.tagname.split("\\")[1];
      });
      this.tags = data.data;
    }
  },
  computed: {
    content() {
      if (this.tags.length) {
        const value = this.tags.filter(val => {
          return val.tagname.split("配电柜")[1] === this.tag_index;
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
$first_index: 6;
@for $i from 1 through $first_index {
  .dian_#{$i} {
    position: absolute;
    top: 215px + $i * 85px;
    left: 370px + $i * 130px;
    z-index: 20 + $i;
  }
}
// .dian_1 {
//     position: absolute;
//     top: 300px;
//     left: 500px;
//     z-index: 20;
// }
// .dian_2 {
//     position: absolute;
//     top: 385px;
//     left: 630px;
//     z-index: 21;
// }
</style>
