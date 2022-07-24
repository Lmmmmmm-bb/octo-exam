import {
  createRouter,
  createWebHashHistory,
  createWebHistory
} from 'vue-router';
import { useTitle } from '@/common/hooks';
import { http } from '@/common/utils/http';
import { LoginCheckDataType, LoginCheckApi } from '@/services/login';
import { notSensitiveRoute } from './config';
import { RouterNameEnum } from './type';
import { routes } from './routes';
import { initUserConfig as getUserConfig } from '@/store';

const history = import.meta.env.DEV
  ? createWebHistory()
  : createWebHashHistory('/octo-exam/');

const router = createRouter({
  history,
  routes
});

router.beforeEach(async (next) => {
  if (!notSensitiveRoute.includes(next.name as RouterNameEnum)) {
    const config = getUserConfig();
    await http.postRequest<LoginCheckDataType>(LoginCheckApi, {
      ...config,
      userId: config.studentId || config.adminId
    });
  }
  useTitle(next.meta.title);
});

export default router;
