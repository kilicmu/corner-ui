<style lang="scss" scoped>
.header {
  --header-height: 56px;
  height: var(--header-height);
  width: 100%;
  background-color: rgb(255, 255, 255);
  padding: 10px 0;
  box-shadow: 1px 0px 6px 0px rgba(173, 173, 173, 0.5);
  animation: translate 0.5s;
  will-change: translate;
  display: flex;
  flex-direction: column;
  &--hidden {
    translate: transformY(-100%);
  }
  &__icon {
    width: calc(var(--header-height) - 20px);
    height: calc(var(--header-height) - 20px);
    margin-left: 60px;
    line-height: 65px;
    cursor: pointer;
  }
}
</style>
<script lang="tsx">
import { defineComponent } from "@vue/runtime-dom";
import logoSrc from "@/assets/corner-logo.png";

export default defineComponent({
  name: "header",
  setup() {
    return () => (
      <header class="header">
        <img src={logoSrc} class="header__icon" onClick={() => {location.reload()}}></img>
      </header>
    );
  },
});
</script>
