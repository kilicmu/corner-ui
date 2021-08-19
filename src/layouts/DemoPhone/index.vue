<script lang="tsx">
import { nextTick, onMounted, onUnmounted, ref } from '@vue/runtime-core'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const iframeRef = ref<any>(null)
    const flushCb = () => {
      const ifr = iframeRef?.value ?? window
      ifr.contentWindow.location.reload()
    }

    return () => {
      return (
        <iframe
        src="/src/mobile/index-mobile.html"
        name="phone"
        id="mobile-phone"
        class="demo-phone"
        ref={iframeRef}
        style={{height: '100%', width: '100%'}}
        ></iframe>
       
      )
    }
  },
})
</script>
<style lang="scss" scoped>
.demo-phone{
    top: 65px;
    background-color: white;
    box-shadow: 1px 1px 10px 0px rgba(128, 128, 128, 0.185);
    width: 100%;
    height: 100%;
}
</style>
