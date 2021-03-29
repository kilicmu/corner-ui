<style lang="scss" scoped>
.header{
    height: 65px;
    width: 100%;
    background-color: rgb(255, 255, 255);
    padding: 10px 0;
    box-shadow: 1px 0px 0px 4px rgba(173, 173, 173, 0.5);
    &__icon {
      width: 45px;
      height: 45px;
      margin-left: 60px;
      line-height: 65px;
    }
}
</style>
<script lang="tsx">
import { defineComponent, onMounted } from '@vue/runtime-dom'
import { onUnmounted } from 'vue'
import logoSrc from '@/assets/corner-logo.png'

export default defineComponent({
  name: 'header',
  setup() {
    const srcollFn = (e: any) => {
      console.log(e)
    }
    onMounted(() => {
      document.addEventListener('DOMMouseScroll', srcollFn)
    })

    onUnmounted(() => {
      document.removeEventListener('DOMMouseScroll', srcollFn)
    })
    return () => (
        <div class="header">
            <img src={logoSrc} class="header__icon"></img>
        </div>
    )
  },
})
</script>
