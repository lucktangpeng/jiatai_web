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
          width="133"
          height="99"
          src="../assets/images/five_1_success.png"
        />

        <img
          v-if="content && content.pv === 'error'"
          width="133"
          height="99"
          src="../assets/images/five_1_error.png"
        />
        <img
          v-if="content && content.pv === 'down'"
          width="133"
          height="99"
          src="../assets/images/five_1_down.png"
        />
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "CommonFive_1_img",
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
      this.$router.push({ path: `/defail_five_1/${this.tag_index}` });
    }
  },
  computed: {
    content() {
      if (this.tags.length) {
        const value = this.tags.filter(val => {
          return val.tagname.split("自动点焊机")[1] === this.tag_index;
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
    top: 520px - $i * 60px;
    left: 390px + $i * 105px;
    z-index: 20 - $i;
  }
}
// $first_index: 3;
// @for $i from 1 through $first_index {
//   .shebei_1_2_#{$i} {
//     position: absolute;
//     top: 700px - $i * 75px;
//     left: 270px + $i * 130px;
//     z-index: 20 - $i;
//   }
// }
$first_index: 3;
@for $i from 1 through $first_index {
  .shebei_1_2_#{$i} {
    position: absolute;
    top: 750px - $i * 75px;
    left: 470px + $i * 130px;
    z-index: 20 - $i;
  }
}

// +50  +200

// $first_index: 3;
// @for $i from 1 through $first_index {
//   .shebei_1_3_#{$i} {
//     position: absolute;
//     top: 780px - $i * 75px;
//     left: 400px + $i * 130px;
//     z-index: 20 - $i;
//   }
// }
$first_index: 3;
@for $i from 1 through $first_index {
  .shebei_1_3_#{$i} {
    position: absolute;
    top: 830px - $i * 75px;
    left: 600px + $i * 130px;
    z-index: 20 - $i;
  }
}

$first_index: 3;
@for $i from 1 through $first_index {
  .shebei_1_4_#{$i} {
    position: absolute;
    top: 910px - $i * 75px;
    left: 730px + $i * 130px;
    z-index: 20 - $i;
  }
}

// $first_index: 3;
// @for $i from 1 through $first_index {
//   .shebei_1_3_#{$i} {
//     position: absolute;
//     top: 940px - $i * 65px;
//     left: 230px + $i * 110px;
//     z-index: 20 - $i;
//   }
// }
</style>
