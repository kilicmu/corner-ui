<script lang="tsx">
import { createNamespace } from '@utils/create'
import { EmitsOptions, SetupContext } from 'vue'
import './overlay.scss'

const [createComponent, bem] = createNamespace('overlay')

export default createComponent({
  name: 'overlay',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  setup: (props: any, { emit }: SetupContext<EmitsOptions>) => {
    const clickCb = (e:MouseEvent) => {
      emit('click', e)
    }
    return () => {
      const { show } = props
      return <div
            class={bem([{ show }])}
            onClick={clickCb}
            ></div>
    }
  },
})
</script>
