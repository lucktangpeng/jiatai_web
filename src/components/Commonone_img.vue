<template>
  <div>
    <el-popover
      placement="top-start"
      width="100"
      trigger="hover"
      :content="content ? content[0].tagname.split('\\')[1] : ''"
    >
      <div
        @click="handleClick"
        slot="reference"
        :class="class_name"
        style="display: inline-block;"
      >
        <img
          v-if="status && status === 'success'"
          width="154"
          height="156"
          src="../assets/images/one_success.png"
        />
        <img
          v-if="status && status === 'error'"
          width="171"
          height="202"
          src="../assets/images/one_error.png"
        />
        <img
          v-if="status && status === 'down'"
          width="171"
          height="202"
          src="../assets/images/one_down.png"
        />
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "CommonOne_img",
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
      this.$router.push({ path: `/detail_one/${this.tag_index}` });
    }
  },
  computed: {
    content() {
      if (this.tags.length) {
        this.tags.forEach(val => {
          val.key = val.tagname.split("\\")[2];
          // val.tagname = val.tagname.split("\\")[1];
        });
        const value = this.tags.filter(val => {
          const tag = val.tagname.split("\\")[1];
          return tag.split("电阻炉_")[1] === this.tag_index;
        });
        return value;
      } else {
        return "";
      }
    },
    status() {
      let state = "";
      if (this.content) {
        this.tags.forEach(val => {
          if (val.key === "controlpower" && val.pv === 100) {
            state = "success";
          } else if (val.key === "controlpower" && val.pv === 0) {
            state = "down";
          } else if (val.key === "alarm" && val.pv === 300) {
            state = "error";
          }
        });
      }
      return state;
    }
    //     error () {
    //   this.tags.forEach(val => {
    //     if (val.key === 'alarm' && val.pv === 100) {
    //       return true
    //     }
    //   })
    // }
  }
};
</script>

<style lang="scss" scoped>
.dianzulu_1 {
  position: absolute;
  top: 350px;
  left: 610px;
  z-index: 21;
}
.dianzulu_2 {
  position: absolute;
  top: 200px;
  left: 890px;
  z-index: 21;
}
</style>
