import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    unit: {
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
      totaltime_alarm: "小时",
      totaltime_eqp: "小时",
      totaltime_run: "小时",
      item_eqp: "小时",
      num_1: "次",
      num_2: "次",
      num_3: "次",
      num_4: "次",
      runtime_1: "小时",
      runtime_2: "小时",
      runtime_3: "小时",
      runtime_4: "小时"
    },
    playStatus: false,
    playNumber: 3000
  },
  mutations: {
    playOpenOrClose(state) {
      state.playStatus = !state.playStatus;
    },
    editPlayNumber(state, number) {
      number = number * 1000;
      state.playNumber = number;
    }
  },
  actions: {},
  modules: {}
});
