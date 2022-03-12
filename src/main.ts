import { createApp } from 'vue';
import App from './app/index.vue';
import router from './router';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from 'vue-query';
import './index.scss';

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(VueQueryPlugin);

app.mount('#app');
