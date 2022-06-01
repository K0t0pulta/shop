import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.mount('#app');
app.config.globalProperties.$filters = {
  numberFormat(value) {
    return Intl.NumberFormat().format(value);
  }
};
