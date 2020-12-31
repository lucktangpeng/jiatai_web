import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/index.scss";
Vue.config.productionTip = false;
Vue.use(ElementUI);
const {
  nameFilter,
  deviceStatus,
  OrderFilter,
  FullOrderFilter
} = require("./utils/index.js");
Vue.prototype.nameFilter = nameFilter;
Vue.prototype.deviceStatus = deviceStatus;
Vue.prototype.OrderFilter = OrderFilter;
Vue.prototype.FullOrderFilter = FullOrderFilter;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
