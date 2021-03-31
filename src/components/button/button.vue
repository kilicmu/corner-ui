<script lang="tsx">
import { PropType } from 'vue'
import { createNamespace } from '../../utils/create'
import { LoadingType } from '../loading/index'
import './button.scss'

const [createComponent, bem] = createNamespace('button')
type ButtonType = 'primary' | 'danger' | 'warning' | 'success';
type ButtonSize = 'mini' | 'small' | 'default' | 'large';
export default createComponent({
  name: 'button',
  props: {
    text: String,
    icon: String,
    color: String,
    block: Boolean,
    plain: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    disable: Boolean,
    iconPrefix: String,
    loadingText: String,
    loadingType: String as PropType<LoadingType>,
    tag: {
      type: String as PropType<keyof HTMLElementTagNameMap>,
      default: 'button',
    },
    type: {
      type: String as PropType<ButtonType>,
      default: 'default',
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: 'medium',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String as PropType<'left' | 'right'>,
      default: 'left',
    },
    nativeType: {
      type: String,
      default: 'button',
    },
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const renderText = () => {
      const text = slots.default ? slots.default() : props.text
      return <span class={bem('text')}>{text}</span>
    }

    const renderIcon = () => {
      return slots.icon?.()
    }

    const handleClick = (e: MouseEvent) => {
      emit('click', e)
    }

    return () => {
      const {
        tag,
        type,
        block,
        size,
        plain,
        round,
        square,
        loading,
        disabled,
        nativeType,
        iconPosition,
      } = props
      const classes = [
        bem([type, size, {
          block, plain, round, square, loading, disabled,
        }]),
      ]

      return (
        <tag
        type={nativeType}
        class={classes}
        onClick={(e:MouseEvent) => emit('click', e) }>
          {iconPosition === 'left' ? renderIcon() : null}
          {renderText()}
          {iconPosition === 'right' ? renderIcon() : null}
        </tag>
      )
    }
  },
})
</script>
