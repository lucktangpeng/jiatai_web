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
        ><img src="../assets/images/lianjieqi.png" width="100%" alt=""
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
const { lianjieqi_1_only } = require("../../api/index.js");
const { nameFilter } = require("../utils/index.js");
export default {
  name: "three_1",
  data() {
    return {
      list_1: [],
      list_2: [],
      list_3: [],
      list_4: [],
      filterList_1: [
        "status",
        "snm",
        "prd_no",
        "mono",
        "people",
        "plan_qty",
        "qty",
        "total_qty"
      ],
      filterList_2: [
        "takt",
        "time_crop_rate",
        "totaltime_run",
        "item_run",
        "totaltime_eqp",
        "item_eqp",
        "totaltime_alarm",
        "item_alarm"
      ],
      filterList_3: [
        "status",
        "snm",
        "prd_no",
        "mono",
        "people",
        "plan_qty",
        "qty",
        "total_qty"
      ],
      filterList_4: [
        "takt",
        "time_crop_rate",
        "totaltime_run",
        "item_run",
        "totaltime_eqp",
        "item_eqp",
        "totaltime_alarm",
        "item_alarm"
      ],
      unit: {
        // item_eqp: "小时",
        item_pump: "小时",
        item_warm: "小时",
        total_alarm: "小时",
        total_eqp: "小时",
        total_pump: "小时",
        total_warm: "小时",
        totalnum_alarm: "次",
        item_alarm: "小时",
        daynum_alarm: "次",
        total_qty: "个",
        item_run: "小时",
        plan_qty: "个",
        qty: "个",
        time_crop_rate: "%",
        // total_qty: "个",
        totaltime_alarm: "小时",
        totaltime_eqp: "小时",
        totaltime_run: "小时",
        item_eqp: "小时"
      }
    };
  },
  async mounted() {
    const { data } = await lianjieqi_1_only({ num: this.$route.params.id });

    data.data.forEach(val => {
      val.tagname = val.tagname.split("\\")[4];
      nameFilter(val);
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
    function OrderFilterThree(filterList, dataList, number) {
      const filterToList = [];
      const existent = [];

      filterList.forEach(val => {
        if (number) {
          val = val + "02";
        }
        for (let i in dataList) {
          if (dataList[i].tagname === val) {
            if (existent.indexOf(val) !== -1) {
              if (dataList[i].tagname.indexOf("02") !== -1) {
                return;
              } else {
                dataList[i].tagname = dataList[i].tagname + "02";
              }
            } else {
              existent.push(val);
              filterToList.push(dataList[i]);
            }
          }
        }
      });
      return filterToList;
    }
    this.list_1 = OrderFilterThree(this.filterList_1, data.data);
    this.list_2 = OrderFilterThree(this.filterList_2, data.data);
    this.list_3 = OrderFilterThree(this.filterList_3, data.data, 1);
    this.list_4 = OrderFilterThree(this.filterList_4, data.data, 1);
    console.log(this.list_1);
    // console.log(this.list_1);
    // this.list_1 = this.OrderFilter(this.filterList_1, data.data);
    // console.log(this.list_1);
    // this.list_2 = this.OrderFilter(this.filterList_2, data.data);
    // this.list_3 = this.OrderFilter(this.filterList_3, data.data);
    // this.list_4 = this.OrderFilter(this.filterList_4, data.data);
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
