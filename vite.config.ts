import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ElementPlusUnplugin from 'unplugin-element-plus/vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Octo-Exam/',
  plugins: [vue(), ElementPlusUnplugin()],
  envPrefix: 'APP_',
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }]
  }
});
