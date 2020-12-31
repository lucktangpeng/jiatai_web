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
          width="173"
          height="141"
          src="../assets/images/chudian_success.png"
        />
        <img
          v-if="content.pv === 'error'"
          width="173"
          height="141"
          src="../assets/images/chudian_error.png"
        />
        <img
          v-if="content.pv === 'down'"
          width="173"
          height="141"
          src="../assets/images/chudian_down.png"
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
      this.$router.push({ path: `/detail_three_chudian/${this.tag_index}` });
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
// .zidong_1_1 {
//   position: absolute;
//   top: 700px;
//   left: 620px;
//   z-index: 19;
// }
// .zidong_1_2 {
//   position: absolute;
//   top: 650px;
//   left: 720px;
//   z-index: 20;
// }

// .zidong_2_1 {
//   position: absolute;
//   top: 650px;
//   left: 540px;
//   z-index: 30;
// }
// .zidong_3_1 {
//   position: absolute;
//   top: 605px;
//   left: 460px;
//   z-index: 20;
// }
// .zidong_4_1 {
//   position: absolute;
//   top: 560px;
//   left: 380px;
//   z-index: 10;
// }
// .zidong_5_1 {
//   position: absolute;
//   top: 520px;
//   left: 1100px;
//   z-index: 50;
// }
$first_index: 6;
@for $i from 1 through $first_index {
  .zidong_1_#{$i} {
    position: absolute;
    // top: 930px - $i * 85px;
    // left: 690px + $i * 145px;
    top: 615px - $i * 55px;
    left: 775px + $i * 100px;
    z-index: 40 - $i;
  }
}
$first_index: 6;
@for $i from 1 through $first_index {
  .zidong_2_#{$i} {
    position: absolute;
    top: 540px - $i * 55px;
    left: 650px + $i * 100px;
    z-index: 30 - $i;
  }
}
$first_index: 6;
@for $i from 1 through $first_index {
  .zidong_3_#{$i} {
    position: absolute;
    top: 465px - $i * 55px;
    left: 525px + $i * 100px;
    z-index: 20 - $i;
  }
}
$first_index: 6;
@for $i from 1 through $first_index {
  .zidong_4_#{$i} {
    position: absolute;
    // top: 615px - $i * 85px;
    // left: 180px + $i * 145px;
    top: 390px - $i * 55px;
    left: 400px + $i * 100px;
    z-index: 10 - $i;
  }
}

$first_index: 6;
@for $i from 1 through $first_index {
  .zidong_5_#{$i} {
    position: absolute;
    top: 690px - $i * 55px;
    left: 900px + $i * 100px;
    z-index: 50 - $i;
  }
}
$first_index: 6;
@for $i from 1 through $first_index {
  .zidong_6_#{$i} {
    position: absolute;
    top: 765px - $i * 55px;
    left: 1025px + $i * 100px;
    z-index: 50 - $i;
  }
}
</style>
