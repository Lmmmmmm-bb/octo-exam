import { MotionVariants } from '@vueuse/motion';

export const baseMotionConfig: MotionVariants = {
  initial: { opacity: 0, y: 100 },
  enter: { opacity: 1, y: 0 }
};
