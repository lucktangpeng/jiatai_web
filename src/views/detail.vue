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
        ><img src="../assets/images/injection.png" width="100%" alt=""
      /></el-col>
      <el-col :span="8"
        ><div class="back2" style="margin-bottom: 20px">
          <template>
            <div
              class="val_body"
              style="pdding-bottom: 10px"
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
const { zhusu_only } = require("../../api/index.js");
const { nameFilter } = require("../utils/index.js");
// const _ = require("lodash");
export default {
  name: "detail",
  data() {
    return {
      filter_list_1: [
        "state",
        "snm",
        "prd_no",
        "people",
        "md_no",
        "md_name",
        "cavity",
        "mono",
        "plan_qty",
        "item_current_qty",
        "qty",
        "process_rate",
        "item_finish"
      ],
      filter_list_2: [
        "modal_sun",
        "theoretical_cycle",
        "modal_period",
        "yield",
        "total_rejects",
        "starving",
        "keep_warm",
        "oil_temperature",
        "temperature_one",
        "temperature_two",
        "temperature_three",
        "temperature_four",
        "temperature_five",
        "robot_error"
      ],
      filter_list_3: [
        "over_efficiency",
        "time_crop_rate",
        "performance_rate",
        "current_rate",
        "modal_run_time",
        "modal_end_time",
        "refroidir",
        "end_time",
        "item_eqp",
        "open_nolocated",
        "ejection_nolocated",
        "set_time",
        "start_time",
        // "motor_temperror",
        "close_nolocated"
        // "heater_error",
        // "coolpressure_low",
        // "airpressure_low",
      ],
      filter_list_4: [
        "current_time",
        "model_switchposition",
        "modal_save_time",
        "modal_tension_time",
        "modal_height_tension_time",
        "off_modal_time",
        "model_opentime",
        "modal_ejection_time",
        "model_shootpressure",
        "model_moniposition",
        "model_startposition",
        "model_finalposition",
        "modal_shoot_out",
        "thrust_position",
        "modal_demould",
        "reinsurance_time",
        "modal_pressure"
      ],
      list_1: [],
      list_2: [],
      list_3: [],
      list_4: [],
      filterTotest: [],
      unit_no: [
        "total_rejects",
        "airpressure_low",
        "bksedoor_noclosed",
        "coolpressure_low",
        "current_rate",
        "current_time",
        "heater_error",
        "item_eqp",
        "item_rejects",
        "keep_warm",
        // a013不知道是啥
        // "md_no",
        "modal_save_time",
        "modal_sun",
        "model_finalposition",
        "model_moniposition",
        "motor_temperror",
        "plan_qty",
        "rest",
        "sedoor_noclosed",
        "start_time",
        "starving",
        "thrust_position",
        "yield",
        "keep_warm"
      ],
      teshu: [
        "close_nolocated",
        "ejection_nolocated",
        "open_nolocated",
        // a013不知道是啥 摸具代号
        "md_no",
        // 货品代号
        "prd_no",
        // 机械手失败
        "robot_error",
        // 货品简称
        "snm",
        // 设备状态
        "state"
      ],
      unit: {
        cavity: "只",
        end_time: "小时",
        item_finish: "小时",
        modal_end_time: "小时",
        item_eqp: "小时",
        modal_shoot_out: "秒",
        model_opentime: "秒",
        qty: "只",
        // set_time: ''
        temperature_one: "℃",
        total_rejects: "个",
        airpressure_low: "空",
        item_current_qty: "只",
        modal_demould: "秒",
        modal_ejection_time: "秒",
        modal_height_tension_time: "秒",
        modal_period: "秒",
        modal_pressure: "bar",
        modal_run_time: "小时",
        modal_tension_time: "秒",
        model_shootpressure: "bar",
        model_startposition: "厘米",
        model_switchposition: "厘米",
        model_moniposition: "厘米",
        off_modal_time: "秒",
        oil_temperature: "℃",
        over_efficiency: "%",
        performance_rate: "%",
        process_rate: "%",
        refroidir: "秒",
        reinsurance_time: "秒",
        temperature_five: "℃",
        temperature_four: "℃",
        temperature_three: "℃",
        temperature_two: "℃",
        keep_warm: "℃",
        theoretical_cycle: "秒",
        time_crop_rate: "%"
      }
    };
  },
  async mounted() {
    const { data } = await zhusu_only({ num: this.$route.params.id });

    data.data.forEach(val => {
      val.tagname = val.tagname.split("\\")[3];
      nameFilter(val);
      if (val.tagname === "state") {
        if (val.pv === 9 || val.pv === 5 || val.pv === 16) {
          val.pv = "开机";
        } else {
          val.pv = "关机";
        }
        // val.var_name = "";
      }
    });
    for (let i in data.data) {
      if (this.unit_no.indexOf(data.data[i].tagname) !== -1) {
        data.data.splice(i, 1);
      }
    }
    this.list_1 = this.OrderFilter(this.filter_list_1, data.data);
    this.list_2 = this.OrderFilter(this.filter_list_2, data.data);
    this.list_3 = this.OrderFilter(this.filter_list_3, data.data);
    this.list_4 = this.OrderFilter(this.filter_list_4, data.data);
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
