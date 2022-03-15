import { createApp } from 'vue';
import App from './app/index.vue';
import router from './router';
import './index.scss';
import pinia from './store';
import { piniaPersist } from './store/persist';
import { ElLoading } from 'element-plus';

const app = createApp(App);

app.use(router);
app.use(pinia);
app.directive('loading', ElLoading.directive);
piniaPersist();

app.mount('#app');
