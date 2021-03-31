<script lang="tsx">
import { ComponentsDscription } from '@/types/ComponentDescription'
import { defineComponent } from 'vue'
import describe from '@/components/describe.json'

const { routes: rs } = describe as ComponentsDscription
export default defineComponent({
  setup() {
    return () => {
      return (
        <ul class="mobile-home">
            {rs.map((r) => {
              return (
                <li>
                  <router-link to={r.path}>{r.name}</router-link>
                </li>
              )
            })}
        </ul>
      )
    }
  },
})
</script>

<style>

</style>
