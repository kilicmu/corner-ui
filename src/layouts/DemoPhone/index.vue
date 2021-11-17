<script lang="tsx">
import { nextTick, onMounted, onUnmounted, ref } from '@vue/runtime-core'
import { defineComponent } from 'vue'

export default defineComponent({
  setup(props, {expose}) {
    const iframeRef = ref<HTMLElement | undefined>()
    // const flushCb = () => {
    //   const ifr = iframeRef?.value ?? window
    //   ifr.contentWindow.location.reload()
    // }

    expose({
      iframeRef
    })
    return () => {
      return (
        <iframe
        src="/src/mobile/index-mobile.html"
        name="phone"
        id="mobile-phone"
        class="demo-phone"
        ref={iframeRef}
        ></iframe>
       
      )
    }
  },
})
</script>
<style lang="scss" scoped>
.demo-phone{
    --phone-width: 375px;
    --phone-heigth: 763px;
    top: 65px;
    background-color: white;
    box-shadow: 1px 1px 10px 0px rgba(128, 128, 128, 0.185);
    width: var(--phone-width);
    height: var(--phone-heigth);
}
</style>
