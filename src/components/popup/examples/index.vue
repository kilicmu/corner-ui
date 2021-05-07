<template>
  <demo-block title="基本使用">
      <cr-button @click="show1=true" >popup bottom btn</cr-button>
      <cr-popup v-model:show="show1" @cancel="show1=false"></cr-popup>
      
      <cr-button @click="show2=true" >popup left btn</cr-button>
      <cr-popup direction="left" v-model:show="show2" @cancel="show2=false"></cr-popup>

      <cr-button @click="show3=true" >popup right btn</cr-button>
      <cr-popup
        direction="right"
        v-model:show="show3"
        @cancel="show3=false"
      ></cr-popup>

      <cr-button 
        @click="show4=true" >popup top btn</cr-button>
      <cr-popup 
        direction="top" v-model:show="show4" @cancel="show4=false"
      ></cr-popup>
  </demo-block>
  <demo-block title="支持插槽">
      <cr-button @click="show5=true" >popup content btn</cr-button>
      <cr-popup direction="bottom" @cancel="show5=false" v-model:show="show5" class="popup-with-title">
        <template #header-left>
              <div class="popup-with-title--left">left</div>
        </template>
        <template #header-center>
              <div class="popup-with-title--center">center</div>
        </template>
        <template #header-right>
              <div class="popup-with-title--right">right</div>
        </template>
      </cr-popup>
  </demo-block>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CrButton from '../../button/index'
import CrPopup from '../../popup'

const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const show4 = ref(false)
const show5 = ref(false)


</script>

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

  .popup-with-title {
    &--left {
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 50px;
    }
    &--right {
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 50px;
    }
    &--center {
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 50px;
    }
  }
</style>