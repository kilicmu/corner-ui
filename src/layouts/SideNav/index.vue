<script lang="tsx">
import { ComponentsDscription } from '@/types/ComponentDescription'
import { defineComponent, watch } from 'vue'
import { useRoute } from 'vue-router'
import describe from '@/common/describe.json'

const { route: rs } = describe as ComponentsDscription
export default defineComponent({
  setup() {
    const route = useRoute()
    watch(
      () => route.params,
      () => {
        console.log('r', route.name)
      },
    )
    return () => {
      return (
        <ul class="side-nav">
            {rs.map((r) => {
              const classes = [
                'side-nav__item',
                route.name === r.name ? 'side-nav__item--active' : '',
              ]
              return (
                <li class={classes}>
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
<style lang="scss" scoped>
.side-nav {
    padding: 0;
    margin: 0;
    height: 100%;
    overflow-y: scroll;
    &__item {
        width: 100%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        transition: background 1s;
        &--active {
            background-color: rgb(204, 230, 255);
        }
        a {
            width: 100%;
            height: 100%;
            display: block;
        }
    }
}
</style>
