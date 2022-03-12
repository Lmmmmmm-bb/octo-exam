import { RouteLocationRaw } from 'vue-router';

export interface IBreadcrumnInfo {
  text: string;
  to?: string | RouteLocationRaw;
}
