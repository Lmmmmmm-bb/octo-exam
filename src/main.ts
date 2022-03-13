import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PiniaPersistPlugin from 'pinia-plugin-persist';
import App from './app/index.vue';
import router from './router';
import './index.scss';

const app = createApp(App);

app.use(router);
app.use(createPinia().use(PiniaPersistPlugin));

app.mount('#app');
