<script lang="tsx">
<<<<<<< HEAD
import { ComponentsDscription } from '@/types/ComponentDescription'
import { defineComponent } from 'vue'
import describe from '@/common/describe.json'

const { route: rs } = describe as ComponentsDscription
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
=======
import { defineComponent } from 'vue'
// @ts-ignore
import describe from '@component-describe'
import { useRouter } from 'vue-router'



export default defineComponent({
  setup() {
    const router = useRouter()
    const clickHandler = (path: string) => {
      console.log(router)
      router && router.push(path)
    }
    return () => {
      return (
        <ul class="mobile-home">
            {
              describe.map(({name, path}: {name: string, path: string}) => {
                return (
                  <li 
                    onClick={() => clickHandler(path)}
                    class={['mobile-home__nav-item']}
                  >
                    {name}
                  </li>
                )
              })
            }
>>>>>>> dev
        </ul>
      )
    }
  },
})
</script>
<<<<<<< HEAD
=======

<style lang="scss" scoped>
.mobile-home {
  margin: 0;
  padding: 0 10px;
  &__nav-item {
    --item-height: 26px;
    width: 100%;
    height: var(--item-height);
    border-radius: calc(var(--item-height) / 2);
    background: rgb(209, 209, 209);
    list-style: none;
    margin: 10px 0;
    padding: 6px 0;
    color: rgb(95, 95, 95);
    box-shadow: 2px 2px 1px 1px rgba(131, 131, 131, 0.5);
    font-weight: bolder;
    text-align: center;
    user-select: none;
    &:active {
      background: rgb(138, 138, 138);
      color: white;
    }
  }
}
</style>
>>>>>>> dev
