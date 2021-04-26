<template>
    <div :class="bem()">
        <cr-overlay :show="show" @click="close"></cr-overlay>
        <div
            :class="bem('container', [direction, { show }])"
        >
            <header :class="bem('header')">
                <slot name="header"></slot>
            </header>
            <article :class="bem('content')">
                <slot></slot>
            </article>
        </div>
    </div>
</template>

<script lang="ts">
import { isNumber } from 'lodash'
import {
  PropType, toRefs, watchEffect,
} from 'vue'
import { createNamespace } from '../../utils/create'
import overlay from '../overlay'
import icon from '../icon'
import './popup.scss'

const [createComponent, bem] = createNamespace('popup')

type PopupDirection = 'left' | 'right' | 'bottom' | 'top'
type Height<T> = T extends 'bottom' | 'top' ? string : null

export default createComponent({
  name: 'popup',
  props: {
    height: {
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
      default: false,
    },
    direction: {
      type: String as PropType<PopupDirection>,
      default: 'bottom',
    },
  },
  components: {
    'cr-icon': icon,
    'cr-overlay': overlay,
  },
  emits: ['cancel', 'update:show'],
  setup(props, { slots, emit }) {
    const onCancel = (e: MouseEvent) => emit('cancel', e)

    const close = (e: MouseEvent) => emit('update:show', false)

    return {
      ...toRefs(props),
      bem,
      close,
      onCancel,
    }
  },
})
</script>

<style>

</style>
