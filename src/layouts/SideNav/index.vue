<<<<<<< HEAD
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
=======
<template>
  <ul class="side-nav">
    <li
      v-for="desc in describe"
      :key="desc.name"
      :class="[
        'side-nav__item',
        route.name === desc.name ? 'side-nav__item--active' : ''
      ]"
      @click="() => router.push(desc.path)"
    >{{desc.name}}</li>
  </ul>
</template>

<script lang="ts" setup>
import { useRoute,useRouter } from 'vue-router'
// @ts-ignore
import describe from '@component-describe'
// import { useRoutersTrigger } from '../../plugin/RoutersBatcher'


const router = useRouter()
const route = useRoute()
</script>


>>>>>>> dev
<style lang="scss" scoped>
.side-nav {
    padding: 0;
    margin: 0;
    height: 100%;
    overflow-y: scroll;
    &__item {
<<<<<<< HEAD
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
=======
      width: 100%;
      height: 64px;
      line-height: 64px;
      font-size: 18px;
      font-weight: bolder;
      text-align: center;
      cursor: pointer;
      color: gray;
      position: relative;
      
      &::after {
        content: '';
        transform-origin: center;
        transition: transform .4s;
        transform: scaleY(0)
      }
      &--active {
        background-color: rgb(163, 203, 255);
        color: white;
        transition: all .4s;
        &::after {
          content: '';
          top: 0;
          right: 0;
          width: 8px;
          height: 100%;
          background: rgb(42, 134, 255);
          transform: scaleY(1);
          position: absolute;
        }
      }
>>>>>>> dev
    }
}
</style>
