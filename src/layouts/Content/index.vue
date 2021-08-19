<script lang="tsx">
import { defineComponent, KeepAlive } from 'vue'

export default defineComponent({
  components:{KeepAlive},
  setup() {
    return () => (
        <div class="content">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
    )
  },
})
</script>
<style lang="scss" scoped>
.content {
    padding: 0 50px;
}
</style>
