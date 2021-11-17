<template>
  <nav class="side-nav">
    <ul>
      <li
        v-for="desc in describe"
        :key="desc.name"
        :class="[
          'side-nav__item',
          route.name === desc.name ? 'side-nav__item--active' : '',
        ]"
        :style="{ left: 0 }"
        @click="() => router.push(desc.path)"
      >
        {{ desc.name }}
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
  import { defineProps } from "vue";
  import { useRoute, useRouter } from "vue-router";
  // @ts-ignore
  import describe from "@component-describe";

  export default {
    setup() {
      const router = useRouter();
      const route = useRoute();

      return {
        router,
        route,
        describe
      }
    },
  };
</script>


<style lang="scss" scoped>
.side-nav {
  --side-nav-width: 275px;
  --side-nav-item-height: 46px;
  --side-nav-item-font-size: 16px;
  height: 100%;
  overflow-y: scroll;
  width: var(--side-nav-width);
  display: fixed;
  & > ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  &__item {
    height: var(--side-nav-item-height);
    line-height: var(--side-nav-item-height);
    font-size: var(--side-nav-item-font-size);
    font-weight: bolder;
    text-align: center;
    cursor: pointer;
    color: rgb(141, 141, 141);
    position: relative;

    &::after {
      content: "";
      transform-origin: center;
      transition: transform 0.4s;
      transform: scaleY(0);
    }
    &--active {
      background-color: rgb(191, 219, 255);
      color: rgb(255, 255, 255);
      transition: all 0.4s;
      &::after {
        content: "";
        top: 0;
        right: 0;
        width: 4px;
        height: 100%;
        background: rgb(91, 162, 255);
        transform: scaleY(1);
        border-radius: 2px;
        position: absolute;
      }
    }
  }
}
</style>
