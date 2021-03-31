<script lang="tsx">
import { PropType } from 'vue'
import { createNamespace } from '../../utils/create'
import './icon-font/iconfont'
import './icon.scss'

const [createComponent, bem] = createNamespace('icon')

type IconSize = 'mini' | 'small' | 'medium' | 'large';

export default createComponent({
  name: 'icon',
  props: {
    name: String,
    color: {
      type: String,
      default: 'black',
    },
    size: {
      type: String as PropType<IconSize>,
      default: 'medium',
    },
    dot: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return () => {
      const { name, color, size } = props
      // const classes = [bem([size]), 'iconfont', `icon-${name}`]
      return (
        <svg class={bem()} aria-hidden="true">
          <use xlinkHref={`#icon-${name}`}></use>
        </svg>
      )
      //  <span class={classes} style={`color: ${color}`}></span>
    }
  },
})

</script>
