import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import ElementPlusUnplugin from 'unplugin-element-plus/vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'APP_');

  return {
    base: env.APP_BASE_URL,
    plugins: [vue(), ElementPlusUnplugin({ useSource: true })],
    envDir: './env',
    envPrefix: 'APP_',
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, 'src') }]
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/common/styles/theme.scss" as *;`
        }
      }
    }
  };
});
