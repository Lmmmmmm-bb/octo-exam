import { createApp } from 'vue';
import { ElLoading } from 'element-plus';
import App from './app/index.vue';
import router from './router';
import './index.scss';
import pinia from './store';
import { piniaPersist } from './store/persist';
import { i18n } from './locales';

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(i18n);
app.directive('loading', ElLoading.directive);
piniaPersist();

app.mount('#app');
