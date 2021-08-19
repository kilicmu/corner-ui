<script lang="tsx">
<<<<<<< HEAD
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return () => (
        <div class="content">
            <router-view></router-view>
=======
import { defineComponent, KeepAlive } from 'vue'

export default defineComponent({
  components:{KeepAlive},
  setup() {
    return () => (
        <div class="content">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
>>>>>>> dev
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
