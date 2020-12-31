<template>
  <div>
    <el-popover
      placement="top-start"
      width="100"
      trigger="hover"
      :content="content ? content[0].tagname : ''"
    >
      <div
        @click="handleClick"
        slot="reference"
        :class="class_name"
        style="display: inline-block;"
      >
        <img
          v-if="status && status === 'success'"
          width="390"
          height="259"
          src="../assets/images/six_success.png"
        />
        <img
          v-if="status && status === 'error'"
          width="390"
          height="259"
          src="../assets/images/six_error.png"
        />
        <img
          v-if="status && status === 'down'"
          width="390"
          height="259"
          src="../assets/images/six_down.png"
        />
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "CommonSix_img",
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
      this.$router.push({ path: `/defail_six/${this.tag_index}` });
    }
  },
  computed: {
    content() {
      if (this.tags.length) {
        const value = this.tags.filter(val => {
          return val.tagname === this.tag_index;
        });
        return value;
      } else {
        return "";
      }
    },
    status() {
      let state = "down";
      if (this.content.every(e => e.pv === 200)) {
        state = "success";
      } else if (this.content.some(e => e.pv === 100)) {
        state = "error";
      }
      return state;
    }
  }
};
</script>

<style lang="scss" scoped>
.shebei_1_1 {
  position: absolute;
  top: 550px;
  left: 560px;
  z-index: 21;
}

// .shebei_2_1 {
//   position: absolute;
//   top: 680px;
//   left: 750px;
//   z-index: 21;
// }
// .shebei_2_2 {
//   position: absolute;
//   top: 600px;
//   left: 900px;
//   z-index: 21;
// }

$first_index: 3;
@for $i from 1 through $first_index {
  .shebei_2_#{$i} {
    position: absolute;
    top: 760px - $i * 100px;
    left: 500px + $i * 170px;
    z-index: 20 - $i;
  }
}

$first_index: 3;
@for $i from 1 through $first_index {
  .shebei_1_#{$i} {
    position: absolute;
    top: 600px - $i * 80px;
    left: 110px + $i * 150px;
    z-index: 20 - $i;
  }
}
// .shebei_1_1_2 {
//   position: absolute;
//   top: 865px;
//   left: 820px;
//   z-index: 20;
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

// $first_index: 3;
// @for $i from 1 through $first_index {
//   .shebei_6_1_#{$i} {
//     position: absolute;
//     top: 730px - $i * 65px;
//     left: 320px + $i * 100px;
//     z-index: 20 - $i;
//   }
// }
</style>
