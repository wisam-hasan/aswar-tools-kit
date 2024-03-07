<script setup>
// Using the `definePage` function to define the page metadata
definePage({
  // Metadata for the page
  meta: {
    // Specify the layout for the page (assuming it's a 404 error page with a blank layout)
    layout: 'blank',
    // Mark the page as public
    public: true,
  },
})
</script>

<template>
  <!-- Main content of the page -->
  <div class="flex flex-col w-full justify-center items-center h-screen">
    <!-- Heading for the 404 error -->
    <h2 class="text-2xl">404</h2>
    <!-- Message indicating the page is not found -->
    <p class="text-xl">
      Page Not Found ⚠️
    </p>
    <!-- Additional message -->
    <p class="text-base">
      We couldn't find the page you
    </p>
  </div>
</template>

<!-- Scoped styles for the component -->
<style scoped>
/* You can add scoped styles specific to this component */
</style>
