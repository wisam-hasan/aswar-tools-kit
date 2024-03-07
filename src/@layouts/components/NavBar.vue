<script setup>
import { cn } from '@/@core/utils/helpers';
import { useTheme } from 'vuetify'

import ThemeSwitcher from './ThemeSwitcher.vue';

const {  global } = useTheme()
const themes = [
  {
    name: 'system',
    icon: 'tabler-device-laptop',
  },
  {
    name: 'light',
    icon: 'tabler-sun-high',
  },
  {
    name: 'dark',
    icon: 'tabler-moon',
  },
]

</script>
<template>
  <nav :class="[cn('flex justify-end items-center w-[97%] h-[50px] px-8  my-4 rounded-md shadow  border'),`bg-[${global.current.value.colors['surface']}]` ]"

  >
  <ThemeSwitcher :themes="themes"  />
  </nav>
</template>
<style >
</style>
