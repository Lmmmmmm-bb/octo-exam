import { userConfigStorePersist, menuConfigStorePersist } from './index';

export const piniaPersist = () => {
  userConfigStorePersist();
  menuConfigStorePersist();
};
