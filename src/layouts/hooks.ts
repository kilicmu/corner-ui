import { onMounted, onUnmounted, ref } from "vue";

export const useFix = (remainDistance: number) => {
  const needFix = ref<boolean>(false);
  const fixStyle = ref<Record<string, string>>({})
  const _defaultFixStyle = {}
  const _fixedFixStyle = {
      position: 'fixed',
      top: `${remainDistance}px`,
  }
  const scrollHandler = () => {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    if (top >= 60) {
      needFix.value = true
      fixStyle.value = _fixedFixStyle
    } else {
      needFix.value = false;
      fixStyle.value = _defaultFixStyle
    }
  };
  onMounted(() => {
    window.addEventListener("scroll", scrollHandler);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", scrollHandler);
  });

  return {
    needFix,
    fixStyle
  };
};
