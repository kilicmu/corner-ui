<script lang="tsx">
import { ref } from '@vue/runtime-core'
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
    &__screen{
      width: 375px;
      height: 667px;
    }
}
</style>
