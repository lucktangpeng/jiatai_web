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
          width="186"
          height="129"
          src="../assets/images/four_3_success.png"
        />
        <img
          v-if="content && content.pv === 'error'"
          width="186"
          height="129"
          src="../assets/images/four_3_error.png"
        />
        <img
          v-if="content && content.pv === 'down'"
          width="186"
          height="129"
          src="../assets/images/four_3_down.png"
        />
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "CommonFour_2_img",
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
      this.$router.push({ path: `/defail_four_3/${this.tag_index}` });
    }
  },
  computed: {
    content() {
      if (this.tags.length) {
        const value = this.tags.filter(val => {
          return val.tagname.split("线号")[1] === this.tag_index;
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
// .shebei_1_1_1 {
//   position: absolute;
//   top: 900px;
//   left: 760px;
//   z-index: 21;
// }
// .shebei_1_1_2 {
//   position: absolute;
//   top: 865px;
//   left: 820px;
//   z-index: 20;
// }

// .shebei_2_1_1 {
//   position: absolute;
//   top: 700px;
//   left: 820px;
//   z-index: 10;
// }
// .shebei_2_1_2 {
//   position: absolute;
//   top: 670px;
//   left: 870px;
//   z-index: 9;
// }
.shebei_3_1_1 {
  position: absolute;
  top: 625px;
  left: 1085px;
  z-index: 15;
}
.shebei_3_1_2 {
  position: absolute;
  top: 162px;
  left: 1137px;
  z-index: 14;
}
// .shebei_3_2_1 {
//   position: absolute;
//   top: 620px;
//   left: 990px;
//   z-index: 8;
// }
// .shebei_6_1_1 {
//   position: absolute;
//   top: 665px;
//   left: 420px;
//   z-index: 20;
// }
// .shebei_6_1_2 {
//   position: absolute;
//   top: 600px;
//   left: 520px;
//   z-index: 20;
// }
// .shebei_1_2_1 {
//   position: absolute;
//   top: 825px;
//   left: 630px;
//   z-index: 20;
// }
// .shebei_1_2 {
//   position: absolute;
//   top: 800px;
//   left: 850px;
//   z-index: 20;
// }
// .shebei_1_3 {
//   position: absolute;
//   top: 750px;
//   left: 950px;
//   z-index: 19;
// }
// .shebei_1_3 {
//   position: absolute;
//   top: 680px;
//   left: 920px;
//   z-index: 19;
// }
// $first_index: 3;
// @for $i from 1 through $first_index {
//   .shebei_1_1_#{$i} {
//     position: absolute;
//     top: 935px - $i * 35px;
//     left: 700px + $i * 60px;
//     z-index: 20 - $i;
//   }
// }
// $first_index: 3;
// @for $i from 1 through $first_index {
//   .shebei_1_2_#{$i} {
//     position: absolute;
//     top: 860px - $i * 35px;
//     left: 570px + $i * 60px;
//     z-index: 20 - $i;
//   }
// }

// $first_index: 15;
// @for $i from 1 through $first_index {
//   .shebei_2_1_#{$i} {
//     position: absolute;
//     top: 750px - $i * 25px;
//     left: 790px + $i * 40px;
//     z-index: 20 - $i;
//   }
// }

// $first_index: 2;
// @for $i from 1 through $first_index {
//   .shebei_3_1_#{$i} {
//     position: absolute;
//     top: 712px - $i * 25px;
//     left: 1057px + $i * 44px;
//     z-index: 16 - $i;
//   }
// }
$first_index: 2;
@for $i from 1 through $first_index {
  .shebei_3_1_#{$i} {
    position: absolute;
    top: 679px - $i * 60px;
    left: 982px + $i * 105px;
    z-index: 16 - $i;
  }
}

$first_index: 2;
@for $i from 1 through $first_index {
  .shebei_3_2_#{$i} {
    position: absolute;
    top: 605px - $i * 60px;
    left: 850px + $i * 105px;
    z-index: 16 - $i;
  }
}

// $first_index: 3;
// @for $i from 1 through $first_index {
//   .shebei_6_1_#{$i} {
//     position: absolute;
//     top: 730px - $i * 60px;
//     left: 320px + $i * 105px;
//     z-index: 20 - $i;
//   }
// }
</style>
