<script lang="tsx">
import {
  defineComponent,
} from '@vue/runtime-dom'
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
                <article class="layout__right" >
                    <div class="layout__content">
                        <Content />
                    </div>
                    <div class="layout__phone" >
                        <DemoPhone/>
                    </div>
                </article>

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
           .layout__right{
               overflow-y: overlay;
               flex: 20;
               position:relative;
               .layout__content {
                   width: 55vw;
                   display: inline-block;

               }
               .layout__phone {
                   width: 375px;
                   height: 667px;
                   top: 95px;
                   right: 4vw;
                   position: fixed;
               }
           }

       }
   }
</style>
