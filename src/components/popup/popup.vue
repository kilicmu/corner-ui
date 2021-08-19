<template>
    <div :class="bem()">
<<<<<<< HEAD
        <cr-overlay :show="show" @click="close"></cr-overlay>
        <div
            :class="bem('container', [direction, { show }])"
        >
            <header :class="bem('header')">
                <slot name="header"></slot>
=======
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
>>>>>>> dev
            </header>
            <article :class="bem('content')">
                <slot></slot>
            </article>
        </div>
    </div>
</template>

<script lang="ts">
<<<<<<< HEAD
import { isNumber } from 'lodash'
import {
  PropType, toRefs, watchEffect,
} from 'vue'
import { createNamespace } from '../../utils/create'
import overlay from '../overlay'
import icon from '../icon'
import './popup.scss'
=======
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

>>>>>>> dev

const [createComponent, bem] = createNamespace('popup')

type PopupDirection = 'left' | 'right' | 'bottom' | 'top'
<<<<<<< HEAD
type Height<T> = T extends 'bottom' | 'top' ? string : null
=======
// type Height<T> = T extends 'bottom' | 'top' ? string : null
>>>>>>> dev

export default createComponent({
  name: 'popup',
  props: {
    height: {
<<<<<<< HEAD
      type: Number,
      default: 100,
      validator: (value) => {
        if (isNumber(value) && value > 0) return true
        return false
      },
    },
    'close-icon': {
      type: Boolean,
      default: false,
    },
    show: {
      type: Boolean,
=======
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
>>>>>>> dev
      default: false,
    },
    direction: {
      type: String as PropType<PopupDirection>,
      default: 'bottom',
<<<<<<< HEAD
=======
      validator: isBaseDirection
>>>>>>> dev
    },
  },
  components: {
    'cr-icon': icon,
    'cr-overlay': overlay,
  },
<<<<<<< HEAD
  emits: ['cancel', 'update:show'],
  setup(props, { slots, emit }) {
    const onCancel = (e: MouseEvent) => emit('cancel', e)

    const close = (e: MouseEvent) => emit('update:show', false)

    return {
      ...toRefs(props),
      bem,
      close,
      onCancel,
=======
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
>>>>>>> dev
    }
  },
})
</script>

<<<<<<< HEAD
<style>

=======
<style lang="scss">
@import "./popup.scss";
>>>>>>> dev
</style>
