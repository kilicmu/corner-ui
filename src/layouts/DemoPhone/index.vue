<script lang="tsx">
<<<<<<< HEAD
import { ref } from '@vue/runtime-core'
=======
import { nextTick, onMounted, onUnmounted, ref } from '@vue/runtime-core'
>>>>>>> dev
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const iframeRef = ref<any>(null)
    const flushCb = () => {
      const ifr = iframeRef?.value ?? window
      ifr.contentWindow.location.reload()
    }
<<<<<<< HEAD
    return () => {
      return (
        <div class="demo-phone">
            <div class="demo-phone__phone">
                <iframe
                class="demo-phone__screen"
                src="/mobile"
                name="phone"
                id="mobile-phone"
                ref={iframeRef}
                ></iframe>
                <div
                class="demo-phone__flush-btn"
                onClick={flushCb}
                ></div>
            </div>
        </div>
=======

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
       
>>>>>>> dev
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
<<<<<<< HEAD
    &__screen{
      width: 375px;
      height: 667px;
    }
=======
    width: 100%;
    height: 100%;
>>>>>>> dev
}
</style>
