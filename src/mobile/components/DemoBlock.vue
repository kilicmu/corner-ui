<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  setup(props, { slots }) {
    return () => {
      const { title } = props
      return (
        <div class="demo-block">
          <h3 class="demo-block__title">{title}</h3>
          <div class="demo-block__demos">
              {slots.default && slots.default()}
          </div>
        </div>
      )
    }
  },
})
</script>
<style lang="scss" scoped>
.demo-block {
    display: block;
    &__title {
        font-weight: 400;
        font-size: 22px;
        padding: 0.4em 0;
    }
}
</style>
