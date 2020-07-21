import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "./plugins/element.js";

Vue.prototype.axios = axios;
Vue.config.productionTip = false;

import { Row, Button } from "element-ui";
Vue.use(Row);
Vue.use(Button);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
