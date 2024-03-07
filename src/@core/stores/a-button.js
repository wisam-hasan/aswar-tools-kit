import { defineStore } from "pinia"
import { ref } from 'vue'
export const useAButtonStore = defineStore('AButton', () => {

  const buttonClick=ref(0)

  return {
    buttonClick
  }
})
