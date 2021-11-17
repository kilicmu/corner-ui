<script lang="tsx">
import { defineComponent, KeepAlive } from 'vue'

export default defineComponent({
  components:{KeepAlive},
  setup() {
    return () => (
        <article class="content">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </article>
    )
  },
})
</script>
<style lang="scss" scoped>
.content {
    width: 100%;
    padding: 0 30px;
}
</style>
