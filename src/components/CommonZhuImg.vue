<template>
  <el-popover placement="top-start" trigger="hover" :content="tags.tagname">
    <div :class="class_name" slot="reference" style="display: inline-block;">
      <img
        v-if="tags && tags.pv === 'success'"
        width="198"
        height="115"
        src="../assets/images/sucess.png"
        @click="handleClick"
      />
      <img
        v-if="tags && tags.pv === 'down'"
        width="198"
        height="115"
        src="../assets/images/down.png"
        @click="handleClick"
      />
    </div>
  </el-popover>
</template>

<script>
export default {
  name: "ZhuImg",
  props: {
    tag: {
      type: Array
    },
    class_name: {
      type: String,
      default: ""
    },
    tag_index: {
      type: String,
      default: ""
    },
    status: {
      type: String
    }
  },
  data() {
    return {
      tags: {}
    };
  },
  methods: {
    handleClick() {
      this.$router.push({ path: `/detail/${this.tag_index}` });
    },
    zhusu() {
      const filterValue = this.tag.filter(val => {
        if (this.status === "lianjieqi_2") {
          return val.tagname.split("连接器铆合机")[1] === this.tag_index;
        } else {
          return val.tagname.split("注塑机")[1] === this.tag_index;
        }
      });
      this.tags = filterValue[0];
    }
  },
  mounted() {
    this.zhusu();
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
$first_index: 18;
@for $i from 1 through $first_index {
  .shebei_#{$i} {
    position: absolute;
    top: 755px - $i * 38px;
    left: 208px + $i * 65px;
    z-index: 20 - $i;
  }
}

// .shebei_two_1 {
//   position: absolute;
//   top: 765px;
//   left: 470px;
//   z-index: 19;
// }
// .shebei_two_1 {
//   position: absolute;
//   top: 839px;
//   left: 458px;
//   z-index: 19;
// }

@for $i from 1 through $first_index {
  .shebei_two_#{$i} {
    position: absolute;
    top: 873px - $i * 38px;
    left: 400px + $i * 65px;
    z-index: 20 - $i;
  }
}
</style>
