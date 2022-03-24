import 'vue-router';
import { RouterNameEnum } from './router/type';

declare module 'vue-router' {
  interface RouteMeta {
    title: string;
    activeMenu: RouterNameEnum;
  }
}
