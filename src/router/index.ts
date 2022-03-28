import {
  createRouter,
  createWebHashHistory,
  createWebHistory
} from 'vue-router';
import { useTitle } from '@/common/hooks';
import { LocalUserInfoKey } from '@/common/models/store-keys';
import { http } from '@/common/utils/http';
import { getLocalItem } from '@/common/utils/local-storage';
import { LoginCheckDataType, LoginCheckApi } from '@/services/login';
import { notSensitiveRoute } from './config';
import { RouterNameEnum } from './type';
import { routes } from './routes';

const history = import.meta.env.DEV
  ? createWebHistory()
  : createWebHashHistory('/Octo-Exam/');

const router = createRouter({
  history,
  routes
});

router.beforeEach(async (next) => {
  if (!notSensitiveRoute.includes(next.name as RouterNameEnum)) {
    const config = JSON.parse(getLocalItem(LocalUserInfoKey) || '{}');
    await http.postRequest<null, LoginCheckDataType>(LoginCheckApi, {
      ...config,
      userId: config.studentId || config.adminId
    });
  }
  useTitle(next.meta.title);
});

export default router;
