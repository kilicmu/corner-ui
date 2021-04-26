<style lang="scss" scoped>
  .header-content {
    width: 100%;
    height: 30px;
    background-color: blue;
  }
  .default-content {
    width: 100%;
    height: 100px;
    background-color: red;
  }
  .popup-header {
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: flex;
    &--left, &--right {
      flex: 5;
    }
    &--center {
      flex: 14;
    }
  }
</style>
<template>
  <demo-block>
      <cr-button @click="show1=true" >popup bottom btn</cr-button>
      <cr-popup v-model:show="show1" @cancel="show1=false"></cr-popup>
  </demo-block>
  <demo-block>
      <cr-button @click="show2=true" >popup left btn</cr-button>
      <cr-popup direction="left" v-model:show="show2" @cancel="show2=false"></cr-popup>
  </demo-block>
  <demo-block>
      <cr-button @click="show3=true" >popup right btn</cr-button>
      <cr-popup
        direction="right"
        v-model:show="show3"
        @cancel="show3=false"
      ></cr-popup>
  </demo-block>
  <demo-block>
      <cr-button @click="show4=true" >popup top btn</cr-button>
      <cr-popup direction="top" v-model:show="show4" @cancel="show4=false"></cr-popup>
  </demo-block>
  <demo-block>
      <cr-button @click="show5=true" >popup content btn</cr-button>
      <cr-popup direction="bottom" @cancel="show5=false" v-model:show="show5">
        <template v-slot:header>
          <div class="popup-header">
            <div class="popup-header--left">
              left
            </div>
            <div class="popup-header--center">
              title
            </div>
            <div class="popup-header--right">
              right
            </div>
          </div>
        </template>
      </cr-popup>
  </demo-block>
</template>

<script>
import { ref } from 'vue'
import DemoBlock from '@/mobile/components/DemoBlock.vue'
import CrButton from '@/components/button'
import CrPopup from '@/components/popup'

export default {
  components: { DemoBlock, CrButton, CrPopup },
  setup() {
    const show1 = ref(false)
    const show2 = ref(false)
    const show3 = ref(false)
    const show4 = ref(false)
    const show5 = ref(false)
    const control = () => {
      show.value = !show.value
    }
    const cancelFn = (e) => {
      show.value = false
    }
    return {
      show1,
      show2,
      show3,
      show4,
      show5,
      control,
      cancelFn,
    }
  },
}
</script>
