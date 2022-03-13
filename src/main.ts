import { createApp } from 'vue';
import App from './app/index.vue';
import router from './router';
import './index.scss';
import pinia from './store';
import { piniaPersist } from './store/persist';

const app = createApp(App);

app.use(router);
app.use(pinia);
piniaPersist();

app.mount('#app');
