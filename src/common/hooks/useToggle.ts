import { ref } from 'vue';

export const useToggle = (initActive = false) => {
  const isActive = ref(initActive);
  const onUnActive = () => (isActive.value = false);
  const onActive = () => (isActive.value = true);
  const onToggle = () => (isActive.value = !isActive.value);

  return {
    isActive,
    onToggle,
    onActive,
    onUnActive
  };
};
