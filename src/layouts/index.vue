<script lang="tsx">
  import { defineComponent, onMounted, onUnmounted, ref } from "vue";
  import Header from "./Header/index.vue";
  import SideNav from "./SideNav/index.vue";
  import Content from "./Content/index.vue";
  import DemoPhone from "./DemoPhone/index.vue";
  import { useFix } from "./hooks";

  export default defineComponent({
    setup: () => {
      const { needFix, fixStyle } = useFix(60);
      return () => (
        <div class="container">
          <Header class="header" />
          <SideNav class="side-nav" />
          <Content class="content" />
          <DemoPhone
            style={{ ...fixStyle.value }}
            class={["demo-phone", needFix.value ? "demo-phone--fix" : ""]}
          />
        </div>
      );
    },
  });
</script>
<style lang="scss" scoped>
.container {
  overflow: auto;
  position: relative;
  min-width: 1280px;
  > .header {
    top: 0;
    right: 0;
    z-index: 2000;
    position: fixed;
  }

  > .side-nav {
    height: calc(100vh - 56px);
    top: 56px;
    position: fixed;
  }
  > .content {
    margin-top: 56px;
    padding: 8px 10px;
    margin-left: 300px;
    width: 764px;
    min-height: calc(100vh - 56px);
  }

  > .demo-phone {
    top: 120px;
    right: 20px;
    position: absolute;
  }
}
</style>
