<template>
  <demo-block>
    <cr-button>default</cr-button>
    <cr-button type="primary">primary</cr-button>
    <cr-button type="danger">danger</cr-button>
    <cr-button type="warning">default</cr-button>
    <cr-button type="success">success</cr-button>
  </demo-block>
  <demo-block>
    <cr-button size="mini"> mini</cr-button>
    <cr-button size="small">small</cr-button>
    <cr-button size="medium">medium</cr-button>
    <cr-button size="large">large</cr-button>
  </demo-block>
  <demo-block>
    <cr-button type="primary" plain>plain</cr-button>
    <cr-button type="success" plain>plain</cr-button>
    <cr-button type="danger">danger</cr-button>
    <cr-button type="warning">default</cr-button>
  </demo-block>
  <demo-block>
    <cr-button iconPosition="left" nativeType="submit">
      <template v-slot:icon>
        <cr-icon name="removecircle" color="gray"></cr-icon>
      </template>
      icon-button
    </cr-button>
  </demo-block>
  <demo-block>
    <cr-button>
      <template v-slot:icon><i>icon</i></template>
      hello
    </cr-button>
  </demo-block>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CrButton from '../button.vue'
import CrIcon from '../../icon/index'

export default defineComponent({
  components: {
    'cr-button': CrButton,
    'cr-icon': CrIcon,
  },
})
</script>
