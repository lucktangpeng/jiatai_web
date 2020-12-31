<template>
  <div class="header">
    <el-button @click="ClickHandle">返回</el-button>
    <div>
      <el-button @click="ClickPlay">播放</el-button>
      <el-button @click="dialogFormVisible = true">配置</el-button>
    </div>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="播放间隔时间" :label-width="formLabelWidth">
          <el-input v-model="form.number" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="commitForm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "CommonHeader",
  data() {
    return {
      Inter: "",
      route_list: [
        "one",
        "dian",
        "home",
        "three",
        "chudian",
        "four",
        "five",
        "six"
      ],
      route_index: 0,
      dialogFormVisible: false,
      form: {
        number: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    ...mapMutations(["playOpenOrClose", "editPlayNumber"]),
    ClickHandle() {
      this.$router.back(-1);
    },
    ClickPlay() {
      this.playOpenOrClose();
      if (this.playStatus) {
        this.Inter = setInterval(() => {
          this.$router.push({ name: `${this.route_list[this.route_index]}` });
          this.route_index += 1;
          if (this.route_index === this.route_list.length) {
            this.route_index = 0;
          }
        }, this.playNumber);
      } else {
        clearInterval(this.Inter);
      }
    },
    commitForm() {
      this.editPlayNumber(this.form.number);
      this.dialogFormVisible = false;
      console.log(this.playNumber);
    }
  },
  computed: {
    ...mapState(["playStatus", "playNumber"])
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 100%;
  z-index: 1;
  background: url("../assets/images/top.png");
  background-size: 1920px 74px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /deep/ .el-dialog {
    width: 20%;
  }
}
.el-button {
  background: rgba(41, 171, 226, 0.8);
  color: #fff;
  border: none;
  &:hover {
    background: rgba(41, 171, 226, 0.4);
  }
  &:focus {
    background: rgba(41, 171, 226, 0.4);
  }
}
</style>
