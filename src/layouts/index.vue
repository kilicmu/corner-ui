<script lang="tsx">
import { defineComponent } from '@vue/runtime-dom'
import Header from './Header/index.vue'
import SideNav from './SideNav/index.vue'
import Content from './Content/index.vue'
import DemoPhone from './DemoPhone/index.vue'

export default defineComponent({
  name: 'layout',
  setup: () => {
    return () => (
        <div class="layout">
            <header class="layout__header">
                <Header />
            </header>
            <div class="layout__main">
                <nav class="layout__side-nav">
                    <SideNav />
                </nav>
                <article class="layout__content">
                    <Content />
                </article>
                <div class="layout__demo-phone">
                    <DemoPhone/>
                </div>
            </div>
        </div>
    )
  },
})
</script>
<style lang="scss" scoped>
   $header-height: 65px;
   .layout{
       min-width: 1306px;
       &__header {
           top: 0;
           left: 0;
           right: 0;
           height: $header-height;
       }
       &__main {
           height: calc(100vh - #{$header-height});
           display: flex;
           .layout__side-nav{
               flex: 4;
           }
           .layout__content{
               overflow-y: scroll;
               flex: 14;
               &::-webkit-scrollbar {
                   width:8px;
                   background-color:#3d3d3d;
               }
               ::-webkit-scrollbar-thumb{
                   background-color:rgb(0, 0, 0);
               }
           }
           .layout__demo-phone{
               min-width: 375px;
               flex: 6;
           }
       }
   }
</style>
