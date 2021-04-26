<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return () => (
        <div class="content">
            <router-view></router-view>
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
