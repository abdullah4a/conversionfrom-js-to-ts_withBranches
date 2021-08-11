import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/* eslint-disable */
Vue.config.productionTip = false;
Vue.filter("Capt", function (val: any) {
  if (!val) {
    return val;
  }
});
Vue.filter("Dollars", function (val: any) {
  if (!val) return "No Salary";
  else return (val = val / 164.59);
});
Vue.filter("SaveSentenceCase", function (val: any) {
  if (!val) return "";
  else {
    val = val.toString();
    return val.charAt(0).toUpperCase() + val.slice(1);
  }
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
