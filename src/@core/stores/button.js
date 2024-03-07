import { defineStore } from "pinia"
import { ref } from 'vue'
export const useButtonStore = defineStore('Button', () => {

  const buttonClick=ref(0)

  return {
    buttonClick
  }
})
