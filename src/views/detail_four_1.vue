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
        ><img src="../assets/images/machine.png" width="100%" alt=""
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
const { zhouxin_368_only, zhouxin_688_only } = require("../../api/index.js");
export default {
  name: "detail_four_1",
  data() {
    return {
      list_1: [],
      list_2: [],
      list_3: [],
      list_4: [],
      filterList_1: ["state", "snm", "prd_no", "mono", "people"],
      filterList_2: ["plan_qty", "qty", "total_qty", "takt", "time_crop_rate"],
      filterList_3: ["item_run", "totaltime_run", "item_eqp", "totaltime_eqp"],
      filterList_4: ["item_alarm", "totaltime_alarm"]
    };
  },
  async mounted() {
    let value = "";
    if (this.$route.params.id.indexOf("368_5自动机") !== -1) {
      const num = this.$route.params.id.split("368_5自动机")[1].split("")[0];
      const { data } = await zhouxin_368_only({ num: num });
      value = data;
    } else if (this.$route.params.id.indexOf("688_6自动机") !== -1) {
      const num = this.$route.params.id.split("688_6自动机")[1].split("")[0];
      const { data } = await zhouxin_688_only({ num: num });
      value = data;
    }

    value.data.forEach(val => {
      val.tagname = val.tagname.split("\\")[3];
      this.nameFilter(val);
    });
    this.list_1 = this.OrderFilter(this.filterList_1, value.data);
    this.list_2 = this.OrderFilter(this.filterList_2, value.data);
    this.list_3 = this.OrderFilter(this.filterList_3, value.data);
    this.list_4 = this.OrderFilter(this.filterList_4, value.data);
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
