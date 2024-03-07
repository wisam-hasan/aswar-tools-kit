<script setup>
import { storeToRefs } from 'pinia';
import { useAButtonStore } from '@core/stores/a-button';

const props = defineProps({
    classValue: {
      type: String,
      required: false,
    },

  })

  const buttonStore=useAButtonStore()
  const {buttonClick}=storeToRefs(buttonStore)
</script>
<template>
    <VBtn @click="buttonClick=buttonClick+1" >
      <div :class="cn('text-base font-bold   text-center rounded-md text-white',props.classValue) ">

        Button
      </div>
    </VBtn>
    <p>
      {{ buttonClick }}
    </p>
  </template>

  <style>

  </style>

