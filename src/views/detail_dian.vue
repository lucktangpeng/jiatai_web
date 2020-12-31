<template>
  <div class="detail">
    <el-row :gutter="30">
      <el-col :span="8">
        <div class="back2" style="margin-bottom: 20px">
          <template>
            <div
              class="val_body"
              v-for="(item, index) in list_1"
              :key="index + item.tagname"
            >
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
            <div
              class="val_body"
              v-for="(item, index) in list_2"
              :key="index + item.tagname"
            >
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
        ><img src="../assets/images/dian.png" width="100%" alt=""
      /></el-col>
      <el-col :span="8"
        ><div class="back2" style="margin-bottom: 20px">
          <template>
            <div
              class="val_body"
              v-for="(item, index) in list_3"
              :key="index + item.tagname"
            >
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
            <div
              class="val_body"
              v-for="(item, index) in list_4"
              :key="index + item.tagname"
            >
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
const { diankong_only } = require("../../api/index.js");
export default {
  name: "detail_five_1",
  data() {
    return {
      list_1: [],
      list_2: [],
      list_3: [],
      list_4: [],
      unit: {}
    };
  },
  async mounted() {
    const num = this.$route.params.id;
    const { data } = await diankong_only({ num });
    data.data.forEach(val => {
      val.tagname = val.tagname.split("\\")[2];
      // this.nameFilter(val);
      if (val.var_name.indexOf("电量") !== -1) {
        this.unit[val.tagname] = "KWH";
      } else if (val.var_name.indexOf("电压") !== -1) {
        this.unit[val.tagname] = "V";
      } else if (val.var_name.indexOf("电流") !== -1) {
        this.unit[val.tagname] = "A";
      } else if (val.var_name.indexOf("温度") !== -1) {
        this.unit[val.tagname] = "℃";
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
      padding-bottom: 5px;
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
