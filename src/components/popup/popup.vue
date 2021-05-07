<template>
    <div :class="bem()">
        <cr-overlay :show="show" @click="onClose"></cr-overlay>
        <div
            ref="outer"
            :class="bem('container', [direction, { show }])"
        >
            <header :class="bem('header')">
              <div :class="bem('header-left')">
                <slot name="header-left"></slot>
              </div>
              <div :class="bem('header-center')">
                <slot name="header-center"></slot>
              </div>
              <div :class="bem('header-right')">
                <slot name="header-right"></slot>
              </div>
            </header>
            <article :class="bem('content')">
                <slot></slot>
            </article>
        </div>
    </div>
</template>

<script lang="ts">
import {
  defineEmit,
  defineProps,
  onBeforeUnmount,
  onMounted,
  PropType, ref, toRefs
} from 'vue'
import overlay from '@components/overlay'
import icon from '@components/icon'
import { createNamespace } from '@utils/create'
import { notNagative } from '@/utils/validate/argument'
import { device } from "@utils/dynamic/values"
import { BaseDirection, isBaseDirection } from "@utils/validate/direction"
import { _touchstart, _touchmove, _touchend } from "./methods"


const [createComponent, bem] = createNamespace('popup')

type PopupDirection = 'left' | 'right' | 'bottom' | 'top'
// type Height<T> = T extends 'bottom' | 'top' ? string : null

export default createComponent({
  name: 'popup',
  props: {
    height: {
      type: Object as PropType<string | number>,
      default: device().height / 2,
      validator: notNagative
    },
    'close-icon': {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    show: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    direction: {
      type: String as PropType<PopupDirection>,
      default: 'bottom',
      validator: isBaseDirection
    },
  },
  components: {
    'cr-icon': icon,
    'cr-overlay': overlay,
  },
  emits: defineEmit<{
    'update:show': (prev: boolean) => void
    'on-cancel': (e: MouseEvent) => void,
  }>(),

  setup(props, { slots, emit }) {
    // refs
    const {
      direction
    } = toRefs(props)
    const outer = ref<HTMLElement | undefined>()

    // life cirlces
    onMounted(() => {
      if(!outer || !outer.value) return;
      const el = outer.value
      el.addEventListener('touchstart', touchstart)
      el.addEventListener('touchmove', touchmove)
      el.addEventListener('touchend', touchend)
    })
    onBeforeUnmount(() => {
      if(!outer || !outer.value) return
      const el = outer.value
      el.addEventListener('touchstart', touchstart)
      el.addEventListener('touchmove', touchmove)
      el.addEventListener('touchend', touchend)
    })

    // methods
    const touchstart = (e: TouchEvent) => _touchstart(e, direction.value as BaseDirection, emit)
    const touchmove = (e: TouchEvent) => _touchmove(e, direction.value as BaseDirection, emit)
    const touchend = (e: TouchEvent) => _touchend(e, direction.value as BaseDirection, emit)
    const onClose = (e: MouseEvent) => {
      emit('on-cancel', e)
      emit('update:show', false)
    }

    // vars
    return {
      ...toRefs(props),
      bem,
      outer,
      onClose,
    }
  },
})
</script>

<style lang="scss">
@import "./popup.scss";
</style>
