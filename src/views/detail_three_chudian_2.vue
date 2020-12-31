<template>
  <div class="detail">
    <el-row :gutter="30">
      <el-col :span="8">
        <div class="back2" style="margin-bottom: 20px">
          <template>
            <div class="val_body" v-for="(item, index) in list_1" :key="index">
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
              :key="index + 1"
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
        ><img src="../assets/images/shuangjin.png" width="100%" alt=""
      /></el-col>
      <el-col :span="8"
        ><div class="back2" style="margin-bottom: 20px">
          <template>
            <div
              class="val_body"
              v-for="(item, index) in list_3"
              :key="index + 2"
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
              :key="index + 3"
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
const { shuangjin_only } = require("../../api/index.js");
export default {
  name: "detail",
  data() {
    return {
      list_1: [],
      list_2: [],
      list_3: [],
      list_4: [],
      filterList_1: ["state", "snm", "prd_no", "mono", "people", "name_index"],
      filterList_2: ["plan_qty", "qty", "total_qty", "takt", "time_crop_rate"],
      filterList_3: ["item_run", "totaltime_run", "item_eqp", "totaltime_eqp"],
      filterList_4: ["item_alarm", "totaltime_alarm"]
    };
  },
  async mounted() {
    const { data } = await shuangjin_only({ num: this.$route.params.id });

    data.data.forEach(val => {
      val.tagname = val.tagname.split("\\")[2];
      this.nameFilter(val);
    });
    this.list_1 = this.OrderFilter(this.filterList_1, data.data);
    this.list_2 = this.OrderFilter(this.filterList_2, data.data);
    this.list_3 = this.OrderFilter(this.filterList_3, data.data);
    this.list_4 = this.OrderFilter(this.filterList_4, data.data);
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
