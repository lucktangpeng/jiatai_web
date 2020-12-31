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
        ><img src="../assets/images/dianzulu.png" width="100%" alt=""
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
const { dianzulu_only } = require("../../api/index.js");
const { nameFilter } = require("../utils/index.js");
export default {
  name: "detail_one_1",
  data() {
    return {
      list_1: [],
      list_2: [],
      list_3: [],
      list_4: [],
      unit: {
        item_eqp: "小时",
        item_pump: "小时",
        item_warm: "小时",
        total_alarm: "小时",
        total_eqp: "小时",
        total_pump: "小时",
        total_warm: "小时",
        totalnum_alarm: "次",
        item_alarm: "小时",
        daynum_alarm: "次"
      },
      filterList_1: ["controlpower", "heaterpower", "alarm", "pumppower"],
      filterList_2: ["total_eqp", "total_pump", "item_eqp", "item_pump"],
      filterList_3: [
        "total_alarm",
        "totalnum_alarm",
        "daynum_alarm",
        "item_alarm"
      ],
      filterList_4: ["total_warm", "item_warm"]
    };
  },
  async mounted() {
    const { data } = await dianzulu_only({
      num: this.$route.params.id
    });

    data.data.forEach(val => {
      val.tagname = val.tagname.split("\\")[2];
      nameFilter(val);
      if (val.tagname === "heaterpower") {
        val.pv = val.pv === 0 ? "关闭" : "开启";
      }
      if (val.tagname === "alarm") {
        val.pv = val.pv === 0 ? "关闭" : "开启";
      }
      if (val.tagname === "controlpower") {
        val.pv = val.pv === 0 ? "关闭" : "开启";
      }
      if (val.tagname === "pumppower") {
        val.pv = val.pv === 0 ? "关闭" : "开启";
      }
    });
    this.list_1 = this.OrderFilter(this.filterList_1, data.data);
    this.list_2 = this.OrderFilter(this.filterList_2, data.data);
    this.list_3 = this.OrderFilter(this.filterList_3, data.data);
    this.list_4 = this.OrderFilter(this.filterList_4, data.data);
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
