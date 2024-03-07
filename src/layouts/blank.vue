<script setup>
// Importing necessary functions from Vue
import { watch, ref } from 'vue'

// SECTION: Loading Indicator
// Creating a reactive reference for the loading state
const isFallbackStateActive = ref(false)
// Creating a reference for the loading indicator component
const refLoadingIndicator = ref(null)

// Watching changes in the loading state and loading indicator reference
watch([
  isFallbackStateActive,
  refLoadingIndicator,
], () => {
  // If the fallback state is active and the loading indicator reference is available, trigger the fallback handle
  if (isFallbackStateActive.value && refLoadingIndicator.value)
    refLoadingIndicator.value.fallbackHandle()
  // If the fallback state is not active and the loading indicator reference is available, trigger the resolve handle
  if (!isFallbackStateActive.value && refLoadingIndicator.value)
    refLoadingIndicator.value.resolveHandle()
}, { immediate: true })
// !SECTION
</script>

<template>
  <!-- Render the AppLoadingIndicator component using the ref -->
  <AppLoadingIndicator ref="refLoadingIndicator" />

  <!-- Main layout wrapper with a blank layout -->
  <div class="layout-wrapper layout-blank">
    <!-- RouterView to render the component based on the route -->
    <RouterView #="{ Component }">
      <!-- Suspense component to handle loading states -->
      <Suspense
        :timeout="0"
        @fallback="isFallbackStateActive = true"
        @resolve="isFallbackStateActive = false"
      >
        <!-- Render the component dynamically based on the route -->
        <Component :is="Component" />
      </Suspense>
    </RouterView>
  </div>
</template>

<style>
/* CSS styles for the layout wrapper with blank layout */
.layout-wrapper.layout-blank {
  flex-direction: column; /* Set flex direction to column */
}
</style>
