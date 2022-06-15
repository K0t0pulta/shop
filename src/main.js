import { createApp, h } from 'vue';
import store from '@/store/store';
import router from './router';
import App from './App.vue';

const app = createApp({
  render: () => h(App)
})
  .use(router)
  .use(store);

app.mount('#app');

app.config.globalProperties.$filters = {
  numberFormat(value) {
    return Intl.NumberFormat().format(value);
  }
};
