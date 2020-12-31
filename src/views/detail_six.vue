<template>
  <div class="detail">
    <el-row :gutter="30">
      <el-col :span="8">
        <div class="back2" style="margin-bottom: 20px">
          <template>
            <div class="val_body" v-for="item in list_1" :key="item.tagname">
              <div class="name">{{ item.var_name }}</div>
              <div class="value">
                {{ item.pv }}
                <div>{{ unit[item.tagname] }}</div>
              </div>
            </div>
          </template>
        </div>
        <div class="back2">
          <template>
            <div class="val_body" v-for="item in list_2" :key="item.tagname">
              <div class="name">{{ item.var_name }}</div>
              <div class="value">
                {{ item.pv }}
                <div>{{ unit[item.tagname] }}</div>
              </div>
            </div>
          </template>
        </div>
      </el-col>
      <el-col :span="8" class="back1"
        ><img src="../assets/images/shuihu.png" width="100%" alt=""
      /></el-col>
      <el-col :span="8"
        ><div class="back2" style="margin-bottom: 20px">
          <template>
            <div class="val_body" v-for="item in list_3" :key="item.tagname">
              <div class="name">{{ item.var_name }}</div>
              <div class="value">
                {{ item.pv }}
                <div>{{ unit[item.tagname] }}</div>
              </div>
            </div>
          </template>
        </div>
        <div class="back2">
          <template>
            <div class="val_body" v-for="item in list_4" :key="item.tagname">
              <div class="name">{{ item.var_name }}</div>
              <div class="value">
                {{ item.pv }}
                <div>{{ unit[item.tagname] }}</div>
              </div>
            </div>
          </template>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
const { shuihu_only } = require("../../api/index.js");
export default {
  name: "detail_six",
  data() {
    return {
      list_1: [],
      list_2: [],
      list_3: [],
      list_4: []
    };
  },
  async mounted() {
    const { data } = await shuihu_only({
      num: this.$route.params.id
    });

    data.data.forEach(val => {
      val.tagname = val.tagname.split("\\")[3];
      if (
        val.tagname === "state_1" ||
        val.tagname === "state_2" ||
        val.tagname === "state_3" ||
        val.tagname === "state_4"
      ) {
        val.pv = val.pv === 0 ? "关闭" : "开启";
      }
    });
    const bs = data.data.length / 4;
    for (let i in data.data) {
      if (i <= bs) {
        this.list_1.push(data.data[i]);
      } else if (i <= 2 * bs) {
        this.list_2.push(data.data[i]);
      } else if (i <= 3 * bs) {
        this.list_3.push(data.data[i]);
      } else if (i <= 4 * bs) {
        this.list_4.push(data.data[i]);
      }
    }
  },
  computed: {
    ...mapState(["unit"])
  }
};
</script>

<style lang="scss" scoped>
.detail {
  padding: 20px 50px 0 50px;
  .back2 {
    height: 400px;
    background: url("../assets/images/detail_back1.png");
    background-size: 100% 400px;
    padding: 20px;
    .val_body {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      color: white;
      .name {
      }
      .value {
        width: 170px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .back1 {
    height: 820px;
    background: url("../assets/images/detail_back2.png");
    background-size: 100% 820px;
    display: flex;
    align-items: center;
  }
}
</style>
