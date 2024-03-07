<script setup>
// Importing necessary functions from Vue
import { ref, watch } from "vue";

// Creating reactive references for buffer value, progress value, fallback state, and interval
const bufferValue = ref(20);
const progressValue = ref(10);
const isFallbackState = ref(false);
const interval = ref();
const showProgress = ref(false);

// Watching changes in progress value and fallback state
watch([
  progressValue,
  isFallbackState,
], () => {
  // If progress value is greater than 80 and fallback state is true, set progress value to 82
  if (progressValue.value > 80 && isFallbackState.value)
    progressValue.value = 82;
  // Start the buffer
  startBuffer();
});

// Function to start the buffer
function startBuffer() {
  clearInterval(interval.value);
  interval.value = setInterval(() => {
    // Update progress and buffer values randomly within a range
    progressValue.value += Math.random() * (15 - 5) + 5;
    bufferValue.value += Math.random() * (15 - 5) + 6;
  }, 800);
}

// Function to handle fallback state
const fallbackHandle = () => {
  showProgress.value = true;
  progressValue.value = 10;
  isFallbackState.value = true;
  startBuffer();
}

// Function to handle resolve state
const resolveHandle = () => {
  isFallbackState.value = false;
  progressValue.value = 100;
  // Reset values after a timeout
  setTimeout(() => {
    clearInterval(interval.value);
    progressValue.value = 0;
    bufferValue.value = 20;
    showProgress.value = false;
  }, 300);
}

// Exposing fallbackHandle and resolveHandle to the parent component
defineExpose({
  fallbackHandle,
  resolveHandle,
})
</script>

<template>
  <!-- Render loading state using v-if directive and showProgress reactive variable -->
  <div
    v-if="showProgress"
    class="position-fixed"
    style="z-index: 9999; inset-block-start: 0; inset-inline-end: 0 ; inset-inline-start: 0;"
  >
  <VProgressLinear
      v-model="progressValue"
      :buffer-value="bufferValue"
      color="primary"
      height="2"
      bg-color="background"
    />
  </div>
</template>
