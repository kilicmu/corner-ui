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
    height: 100%;
    width: 100%;
    position: relative;
    &__phone{
        width: 30vh;
        height: 60vh;
        background: url("~@/assets/phone.png")  no-repeat;
        background-size: cover;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -60%);
        position: absolute;
        .demo-phone__screen{
            left: 2vh;
            top: 6.5vh;
            position: absolute;
            width: 26vh;
            height: 47vh;
            border: none;
        }
        .demo-phone__flush-btn {
            width: 4vh;
            height: 4vh;
            border-radius: 50%;
            left: 50%;
            bottom: 1vh;
            transform: translate(-50%, 0);
            position: absolute;
            background-color: rgba(182, 182, 182, 0.5);
            opacity: 0;
            cursor: pointer;
            transition: opacity .05s;
            &:active {
                opacity: 0.5;
            }
        }
    }
}
</style>
