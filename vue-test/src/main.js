//vueをインポート
import Vue from "vue";

//'./App.vue'をインポート
import App from "./App.vue";

import router from './router'
//true の場合の方が開発者向けのメッセージがコンソール
Vue.config.productionTip = false;

//vueインスタンスを作成
new Vue({
  router,

  //"./App.vue"をレンダリング
  render: h => h(App)
}).$mount("#app");
