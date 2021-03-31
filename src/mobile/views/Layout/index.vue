<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return () => {
      return (
        <div>
            <header></header>
            <router-view></router-view>
            <footer></footer>
        </div>
      )
    }
  },
})
</script>
