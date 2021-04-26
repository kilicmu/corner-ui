<style lang="scss" scoped>
.header{
    height: 65px;
    width: 100%;
    background-color: rgb(255, 255, 255);
    padding: 10px 0;
    box-shadow: 1px 0px 6px 0px rgba(173, 173, 173, 0.5);
    animation: translate .5s;
    will-change: translate;
    &--hidden {
      translate: transformY(-100%);
    }
    &__icon {
      width: 45px;
      height: 45px;
      margin-left: 60px;
      line-height: 65px;
    }
}
</style>
<script lang="tsx">
import { defineComponent } from '@vue/runtime-dom'
import logoSrc from '@/assets/corner-logo.png'

export default defineComponent({
  name: 'header',
  setup() {
    return () => (
        <div class="header">
            <img src={logoSrc} class="header__icon"></img>
        </div>
    )
  },
})
</script>
